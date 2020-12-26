import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { fileUpload } from "../helpers/fileUpload";
// react-journal

export const startNewNote = ()=>{
    return async(dispatch, getState) =>{
        const uid = getState().auth.uid;
        // const {uid} = getState().auth;
        const newNote={
            title:"",
            body:"",
            date: new Date().getTime(),            
        }
        
        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch(activeNote(doc.id,newNote ));
        dispatch(addNewNote(doc.id, newNote));

    }
}

export const activeNote =(id, note)=>(
    {
        type: types.notesActive,
        payload:{
            id,
            ...note
        }
    }
);

export const addNewNote=(id, note)=>({
    type:types.notesAddNew,
    payload:{
        id,
        ...note
    }
})

export const startLoadingNotes =(uid)=>{
    return async(dispatch)=>{
        const notes = await loadNotes(uid); 
        dispatch(setNotes(notes));  
    }
}

export const setNotes = (notes) =>({
    type:types.notesLoad,
    payload:notes,
});


export const StartSaveNote =(note)=>{
    return async(dispatch, getState) =>{
        const {uid} = getState().auth;
        if(!note.url){
            delete note.url;
        }
        const noteFireStore = {...note};
        delete noteFireStore.id;

        try {
            await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFireStore);
            dispatch(refreshNote(note.id, noteFireStore));
            Swal.fire('Save!','','success')            
        } catch (error) {
            Swal.fire('Error!',error.data,'error')            
        }
    }
}

export const refreshNote =(id,note)=>({
    type:types.notesUpdate,
    payload:{
        id,
        note:{
            id,
            ...note,
        }
    }
})


export const startUploading =  (file)=>{
    return async(dispatch, getState)=>{

        Swal.fire({
            title:"Uploading...",
            text:"please wait...",
            allowOutsideClick:false,
            onBeforeOpen:() => {
                Swal.showLoading();
            }
        });

        const {active:activeNote} = getState().notes;
        const fileUrl = await fileUpload(file);
        activeNote.url=fileUrl;

        dispatch(StartSaveNote(activeNote));
        Swal.close();


    }
}

export const startDeleting =(id)=>{
    return  async (dispatch, getState) =>{
        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));

    }   
}

export const deleteNote = (id) =>({
    type:types.notesDelete,
    payload: id,
});


export const noteLogout =() =>({
    type:types.notesLogoutCleaning
})
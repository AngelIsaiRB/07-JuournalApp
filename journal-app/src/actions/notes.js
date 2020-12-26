import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from 'sweetalert2'

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

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFireStore);
        Swal.fire('Save!',
        '',
        'success')
    }
}
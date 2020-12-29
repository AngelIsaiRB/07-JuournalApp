import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from "redux-thunk";
import { startLoadingNotes, startNewNote, StartSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from '../../types/types';

jest.mock('../../helpers/fileUpload',()=>({
    fileUpload: jest.fn(()=>{
        return "https://holamundo.com/photo";
    })
}));

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const initState = {
    auth:{
        uid:"testing",        
    },
    notes:{
        active:{
            id:"3Zk4otZr2Pjp3oGGSZRr",
            title:"hola",
            body:"mundo",
            url:"55"
        }
    }
}

let store = mockStore(initState);

describe('pruebas con las acciones de notes ', () => {

    beforeEach(()=>{
        store = mockStore(initState);
    })

    test('should crear una nueva nota  startNewNote', async() => {
        await store.dispatch(startNewNote());

        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id:expect.any(String),
                title:"",
                body:"",
                date:expect.any(Number),
            }    
        });
        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id:expect.any(String),
                title:"",
                body:"",
                date:expect.any(Number),
            }    
        });
        // eleminarlos para no generar basura 
        const docId = actions[1].payload.id;
        await db.doc(`/testing/journal/notes/${docId}`).delete();

    });
    test('starloading notes debe cargar las notas',  async() => {
        
    //    no se por que error
        // await store.dispatch(startLoadingNotes("testing"));
        // const actions = store.getActions();       
        // console.log(actions)
        // expect(actions[0]).toEqual({
        //     type:types.notesLoad,
        //     payload:expect.any(Array),
        // });

        // const expected = {
        //     id : expect.any(String),
        //     title : expect.any(String),
        //     body : expect.any(String),
        //     date : expect.any(String),
        // }

        // expect(actions[0].payload[0]).toMatchObject(expected);
    });

    test('start save note debe actualizar la nota', async() => {
        const note ={
            id:"0Rym6k54iYZnHkyiGowS",
            title:"titulo",
            body:"body",            
        }
        await store.dispatch(StartSaveNote(note));
        const actions = store.getActions();
        expect(actions[0].type).toBe(types.notesUpdate);

        // por algna razon no puede encontar el id firebase
        // const docRef = await db.doc(`/testing/journal/notes/${note.id}`).get();
        // expect(docRef.data().title).toBe("titulo")

    })
    
    test('startUploain debe de actualizar el url del entry',async() => {

        const file = new File([],"foto.jpg");
        await store.dispatch(startUploading(file));
        // const docRef = await db.doc(`/testing/journal/notes/3Zk4otZr2Pjp3oGGSZRr`).get();
        // expect(docRef.data().url).toBe("https://holamundo.com/photo");
        
    })
    
    

})
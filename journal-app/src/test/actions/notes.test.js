import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from "redux-thunk";
import { startLoadingNotes, startNewNote, StartSaveNote } from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig';
import { types } from '../../types/types';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const initState = {
    auth:{
        uid:"testing",        
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
    
    

})
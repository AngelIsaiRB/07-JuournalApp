import React from 'react';
import {  mount } from 'enzyme'

import configureStore from 'redux-mock-store'; 
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { NoteScreen } from '../../../components/notes/NoteScreen';

import { activeNote } from '../../../actions/notes';
jest.mock('../../../actions/notes',()=>({
    activeNote : jest.fn(),
    
}))


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth:{
        uid:"12345",
        name:"isai"
    },
    ui:{
        loading: false,
        msgError: null,
    },
    notes:{
        active: {
            id:"1234",
            title:"hola",
            body:"mundo",
            date:0
        },
        notes:[]
    }
    
}

let store = mockStore(initState);
store.dispatch= jest.fn();
const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <NoteScreen/>
        </MemoryRouter>
    </Provider>
    );

describe('pruebas en <NotesScreen/>', () => {

    test('should  de mostrarse correctamete', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should de llamar el activeNote', () => {
        wrapper.find("input[name='title']").simulate("change",{
            target:{
                name:"title",
                value:"hola de nuevo"
            }
        });
        expect(activeNote).toHaveBeenLastCalledWith("1234",
        {
            body:"mundo",
            title:"hola de nuevo",
            id:"1234",
            date:0
        });
    })
    

})
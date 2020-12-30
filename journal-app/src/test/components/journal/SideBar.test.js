import React from 'react';
import { shallow, mount } from 'enzyme'
import { Sidebar } from '../../../components/journal/Sidebar';
import configureStore from 'redux-mock-store'; 
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import {starLogout} from '../../../actions/auth'

import { startNewNote } from '../../../actions/notes';

jest.mock('../../../actions/auth',()=>({
    starLogout : jest.fn(),
    // startLoginEmailPassword : jest.fn(),
}))
jest.mock('../../../actions/notes',()=>({
    startNewNote : jest.fn(),
   
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
            id:"sadasdasd"
        },
        notes:[]
    }
    
}

let store = mockStore(initState);
store.dispatch= jest.fn();
const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <Sidebar/>
        </MemoryRouter>
    </Provider>
    );
describe('pruebas en <Sidebar/>', () => {

    
    test('should  debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should debe de llamr la accion de startLogout', () => {
        wrapper.find(".btn").prop("onClick")();
        expect(starLogout).toHaveBeenCalled();
    });
    
    test('should llamar el startNreNote', () => {
        wrapper.find(".journal__new-entry").prop("onClick")();
        expect(startNewNote).toHaveBeenCalled();
    })
    
    

})
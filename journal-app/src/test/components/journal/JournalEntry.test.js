import React from 'react';
import {  mount } from 'enzyme'

import configureStore from 'redux-mock-store'; 
import thunk from "redux-thunk";

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';



const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {}

let store = mockStore(initState);
store.dispatch = jest.fn();

const nota = {
    id:10,
    date:0,
    title:"Hola",
    body:"Mundo",
    url:"http://algunlugardelared.com/foto.jpg",
}

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <JournalEntry {...nota }/>
        </MemoryRouter>
    </Provider>
    );


describe('pruebas en JournalEntry/>', () => {

    test('should  de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should de activar la nota', () => {
        wrapper.find(".journal__entry").prop("onClick")();

        expect(store.dispatch).toHaveBeenCalledWith(
            activeNote(nota.id,{...nota})
        );
    })
    
})
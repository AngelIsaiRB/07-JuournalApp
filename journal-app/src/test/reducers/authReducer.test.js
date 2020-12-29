import React from 'react';
import { shallow, mount } from 'enzyme'
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('pruebas en auth reducer', () => {

    const initialState={};
    const autenticate = {
        uid:"12345",
        name:"isai"
    }
    test('should  de rotornal el estado por defecto', () => {
        const state = authReducer(initialState,{});
        expect(state).toEqual(initialState);
    });

    test('should de regresar el estado autentificado', () => {
        
        const state = authReducer(initialState,{
            type: types.login,
            payload:{
                uid:"12345",
                displayName:"isai"
            }
        });
        expect(state).toEqual(autenticate);
    });

    test('should de regresar el estado basio en el logout', () => {
        const state = authReducer(autenticate,{
            type: types.logout,
        });
        expect(state).toEqual({})        
    });
    
    

})
import configureStore from 'redux-mock-store'; 
import thunk from "redux-thunk";
import React from 'react';
import { shallow, mount } from 'enzyme'
import { RegisterScrenn } from '../../../components/auth/RegisterScrenn';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { types } from '../../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth:{},
    ui:{
        loading: false,
        msgError: null,
    }
}
let store = mockStore(initState);


const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScrenn/>
        </MemoryRouter>
    </Provider>
        )

describe('pruebas en <RegisterScreen/>', () => {


    test('should  de hacer snapshot ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should de hacer el dispatch de la accion respectiva', () => {
        const emailField = wrapper.find("input[name='email']");
        emailField.simulate("change",{
            target:{
                value: '',
                name: 'email'
            }
        });
        wrapper.find("form").simulate("submit",{
            preventDefault(){}
        });
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.uiSetError,
            payload: "email is not valid"
        })
        
    });

    test('should de mostrar la caja de alerta con el error', () => {
        const initState = {
            auth:{},
            ui:{
                loading: false,
                msgError: "email no es correcto",
            }
        }
        const store = mockStore(initState);
        
        
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScrenn/>
                </MemoryRouter>
            </Provider>
        );
        expect(wrapper.find(".auth__alert-error").exists()).toBe(true);        
        expect(wrapper.find(".auth__alert-error").text().trim()).toBe(initState.ui.msgError);

    })
    
    

})
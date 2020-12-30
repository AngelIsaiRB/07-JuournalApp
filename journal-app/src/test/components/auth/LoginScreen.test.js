import React from 'react';
import configureStore from 'redux-mock-store'; 
import thunk from "redux-thunk";
import { shallow, mount } from 'enzyme'
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth',()=>({
    startGoogleLogin : jest.fn(),
    startLoginEmailPassword : jest.fn(),
}))


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
store.dispatch= jest.fn();
const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen/>
        </MemoryRouter>
    </Provider>
    );

describe('pruebas en <LoginScreen/>', () => {
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    })
    

    test('should  de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();        

    });

    test('should de disparar la accion de startGoogleLogin', () => {
        wrapper.find(".google-btn").prop("onClick")();
        expect(startGoogleLogin).toHaveBeenCalled();
    });

    test('should de llamar a login con los valores correspondientes', () => {
        wrapper.find("form").prop("onSubmit")(
            {preventDefault(){}}
        ); 
        expect(startLoginEmailPassword).toHaveBeenCalledWith("email@emial.com","password");
    })
    
    
})
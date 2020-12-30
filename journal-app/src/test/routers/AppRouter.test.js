import React from 'react';
import configureStore from 'redux-mock-store'; 
import thunk from "redux-thunk";
import {  mount } from 'enzyme'
import {firebase} from '../../firebase/firebaseConfig';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from 'react-dom/test-utils';
import Swal from 'sweetalert2'

jest.mock('../../actions/auth',()=>({
    login : jest.fn(),
}))

jest.mock('sweetalert2',()=>({
    fire : jest.fn(),
}))



const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth:{},
    ui:{
        loading: false,
        msgError: null,
    },
    notes:{
        active:{
            id:"3Zk4otZr2Pjp3oGGSZRrss",
        },
        notes:[]
    }

}
let store = mockStore(initState);
store.dispatch= jest.fn();



describe('pruebas en <AppRouter/>', () => {

    test('should  llamar el login si esta autenticado', async() => {

        let user ;
        await act(async()=>{

            const userCred =await firebase.auth().signInWithEmailAndPassword("correo@correo.com","123456");
            user=userCred.user;
            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter/>
                    </MemoryRouter>
                </Provider>
                );
        });
        expect(login).toHaveBeenCalledWith("KsXyCNMMTperpYSG3piZGHgMuWq1",null);
    });

})
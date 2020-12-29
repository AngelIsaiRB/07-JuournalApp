import configureStore from 'redux-mock-store'; 
import thunk from "redux-thunk";
import { login, logout, starLogout, startLoginEmailPassword } from "../../actions/auth";
import { types } from "../../types/types";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {}
let store = mockStore(initState);

describe('pruebas en actions auth', () => {
    beforeEach(() => {
        store = mockStore(initState);
    })

    test('should  de realizar las acciones login and logout', () => {
        const state = login("12345", "isai");
        expect(state).toEqual({
            type: types.login,
            payload: {
                uid:"12345",
                displayName: "isai"
            }
        })

        const stateLogout = logout();
        expect(stateLogout).toEqual({
            type: types.logout
        });
    });

    test('should de realizar el Startlogout', async() => {
        await store.dispatch(starLogout());
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: types.logout });
        expect(actions[1]).toEqual({ type: types.notesLogoutCleaning });
    });
    
    test('should de realizar correctamente el startLoginEmailPassword', async() => {
        
        await store.dispatch(startLoginEmailPassword("correo@correo.com","123456"));
        const actions = store.getActions();
        expect(actions[1]).toEqual({
            type: types.login,
            payload: { 
                uid: 'KsXyCNMMTperpYSG3piZGHgMuWq1', 
                displayName: null
             }
          });
        
        
    })
    
    

})
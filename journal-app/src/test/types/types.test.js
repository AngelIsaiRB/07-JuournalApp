import { types } from "../../types/types";


describe('pruebas en archivo types', () => {
    
    test('should de regresar el objeto bien', () => {
        
        expect(types).toEqual({
            login: "[Auth] login",
            logout: "[Auth] logout",
        
            uiSetError: "[ui] set error",
            uiRemoveError: "[ui] remover error",
        
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
            
            notesAddNew: "[Notes] New note",
            notesActive: "[Notes] Set active note",
            notesLoad: "[Notes] Load note",
            notesUpdate: "[Notes] Update note",
            notesFileUrl: "[Notes] Update image url",
            notesDelete: "[Notes] Delete note",
            notesLogoutCleaning: "[Notes] Logout Cleaning",
        
        });
    })
    
});

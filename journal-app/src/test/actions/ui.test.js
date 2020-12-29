import React from 'react';
import { shallow, mount } from 'enzyme'
import { finishLoading, removeError, setError, startLoading } from '../../actions/ui';
import { types } from '../../types/types';

describe('pruebas en ui Actions', () => {

    test('all actions we all right   ', () => {
        const action = setError("error");
        expect(action).toEqual({
            type: types.uiSetError,
            payload: "error"
        });

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();
        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        });     
        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        }); 
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        }); 

    });



})
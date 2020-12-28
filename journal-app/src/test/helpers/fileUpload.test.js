import React from 'react';
import { shallow, mount } from 'enzyme'
import { fileUpload } from '../../helpers/fileUpload';

describe('pruebas en fileUpload', () => {

    test('should  de cargar un archivo y retornar un url', async() => {
        const resp = await  fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/IMG-20170205-WA000.png/240px-IMG-20170205-WA000.png');
        const blob = await resp.blob();
        const file = new File([blob], "fotoTest.png");   
        const  url = await fileUpload(file);
        expect( typeof url).toBe("string");
        expect( url.includes("res.cloudinary.com/angelisai/image") ).toBe(true);
    });
    test('should  de cargar un archivo y retornar un url', async() => {        
        const file = new File([], "fotoTest.png");   
        const  url = await fileUpload(file);
        expect(  url).toBe(null);
        
    });

})
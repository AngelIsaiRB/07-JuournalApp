import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({ 
    cloud_name: 'angelisai', 
    api_key: '972115881796678', 
    api_secret: 'a2Q4WN7oGxyKyWW8EvS5QasoIv4' 
  });


describe('pruebas en fileUpload', () => {

    test('should  de cargar un archivo y retornar un url', async() => {
        const resp = await  fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/IMG-20170205-WA000.png/240px-IMG-20170205-WA000.png');
        const blob = await resp.blob();
        const file = new File([blob], "fotoTest.png");   
        const  url = await fileUpload(file);
        expect( typeof url).toBe("string");
        expect( url.includes("res.cloudinary.com/angelisai/image") ).toBe(true);

        // borrar imagen por id
        const segments = url.split("/");
        const imgI = segments[segments.length -1].replace(".png","");
        const imgId = `React-journal/${imgI}`
         const resps = await cloudinary.v2.api.delete_resources(imgId);
        console.log(resps)


    });
    test('should  de cargar un archivo y retornar un url', async() => {        
        const file = new File([], "fotoTest.png");   
        const  url = await fileUpload(file);
        expect(  url).toBe(null);
        
    });

})
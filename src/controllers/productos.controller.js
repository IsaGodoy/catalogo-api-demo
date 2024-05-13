
// import fs from 'fs';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

export const getAllProducts = (req, res) => {

    try {

        const { usuario, contrasena } = req.body;

        const authResult = autenticacion(usuario, contrasena);

        if (!authResult.success) {
            return res.status(200).json({ 
                retorno_codigo : 1,
                retorno_mensaje: authResult.message,
                retorno_articulos: []
            });
        }

        // const filePath = './static/data.json';
        // const data = fs.readFileSync(filePath, 'utf-8');
        const data = require('../../static/data.json');
        //console.log(data);
        res.status(200).json(data);

    } catch (error) {
        return res.status(200).json({ 
            retorno_codigo : 1,
            retorno_mensaje: error,
            retorno_articulos: []
        });
    }
};

const autenticacion = (usuario, contrasena) => {

    if (!usuario || !contrasena) {
        return {
            success: false,
            message: "No se proporcionaron las crendeciales de autenticación"
        };
    }

    const userENV = process.env.USUARIO;
    const passENV = process.env.CONTRASENA;

    if (!userENV || !passENV) {
        return {
            success: false,
            message: "Falta definir las credenciales en las variables de entorno"
        };
    }

    if (usuario !== userENV || contrasena !== passENV) {
        return {
            success: false,
            message: "Las credenciales ingresadas no son válidas"
        };
    }

    return {
        success: true,
        message: "OK"
    };
};
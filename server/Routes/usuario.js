const express = require('express');
const router = express();

const Usuario = require('../models/usuario');


router.get('/', (req, res) => {

    res.json({
        ok: true,
        message: 'Funcionando'
    });


});

router.post('/', (req, res) => {

    var body = req.body;
    var usuario = new Usuario({
        nombre: body.nombre,
        numTelefono: body.numTelefono,
        interes: body.interes,
        compania: body.compania,
        email: body.email

    });

    usuario.save((err, usuarioGuardado) => {
        if (err) {
            return res.status(404).json({
                ok: false,
                message: 'Error al guardar al información',
                error: err
            });
        }

        res.status(201).json({
            ok: true,
            message: 'Información guardada correctamente',
            usuario: usuarioGuardado
        });
    });




});


module.exports = router;
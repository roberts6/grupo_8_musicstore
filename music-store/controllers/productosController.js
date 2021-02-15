const express = require ('express');

const controlador = {
home: (req,res) => {
    res.render('home');
},

detalle: (req,res) => {
    res.render('productDetail');
}
};

module.exports = controlador;
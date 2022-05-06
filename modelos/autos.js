
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Auto = require('../modelos/autos');

var AutoSchema = {
    marca:String,
    submmarca:String,
    color:String,
    caballos:Number,
    modelo:Number,
    segmento:String
    
};

module,expoort = mongoose.model('Autos',AutoSchema);
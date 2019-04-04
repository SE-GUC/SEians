const express = require('express');
const router = express.Router();
 var fs = require('fs');
 var PDFDocument = require('pdfkit');

 function generateContract(req,res){

    var doc = new PDFDocument;
    doc.pipe(fs.createWriteStream('contract.pdf'));
    doc.pipe(res);
    doc.end();

 };

 router.get('/', (req, res) => {
     generateContract(req,res);
 })


module.exports = router


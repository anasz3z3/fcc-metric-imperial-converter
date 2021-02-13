/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      //console.log("input", input);
      let initNum = convertHandler.getNum(input);
      //console.log("initNum:", initNum);
      let initUnit = convertHandler.getUnit(input);
      //console.log("initUnit:", initUnit);

      // if( !initNum && !initUnit ) return res.status(400).json('invalid number and unit');
      // if( !initNum ) return res.status(400).json('invalid number');
      // if( !initUnit ) return res.status(400).json('invalid unit');

      if (!initNum &&!initUnit) res.send("invalid number and unit");
      else if (!initNum) res.send("invalid number");
      else if (!initUnit) res.send("invalid unit"); 
               
      
      let returnNum = convertHandler.convert(initNum, initUnit);
      //console.log("returnNum:", returnNum);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      //console.log("returnUnit:", returnUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      //console.log("toString:", toString);

      
      //res.json
      res.json({initNum,initUnit,returnNum,returnUnit, string:toString});

    });
    
};

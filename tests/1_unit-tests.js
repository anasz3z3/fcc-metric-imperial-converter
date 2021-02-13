/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '3.2L';
      assert.equal(convertHandler.getNum(input),3.2);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = '3/2L';
      assert.equal(convertHandler.getNum(input),3/2);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = '3.2/2L';
      assert.equal(convertHandler.getNum(input),3.2/2);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = '3/2/6L';
      assert.equal(convertHandler.getNum(input),undefined);
      //assert.isUndefined(convertHandler.getNum(input));
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = 'L';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      //let input = ['gal','l','mi','km','lbs','kg','GAL','MI','KM','LBS','KG'];     
      let output = ['gal','L','mi','km','lbs','kg','gal','L','mi','km','lbs','kg']; 
      input.forEach(function(ele,index) {
        //assert
        assert.equal(convertHandler.getUnit(`3.1${ele}`),output[index]);
        //assert.equal(convertHandler.getUnit(`3.1${ele}`),ele.toLowerCase());
        //assert.equal(convertHandler.getUnit(`3.1${ele}`),ele);

      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.isUndefined(convertHandler.getUnit('7il'));
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expect = ['gallons','liters','miles','kilometers','pounds', 'kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();

    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      let input = [5, 'gal'];
      let expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      let input = [18.9271, 'L'];
      let expected = 5;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
       let input = [3, 'mi'];
      let expected = 4.82802;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      let input = [3, 'km'];
      let expected = 1.86412;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
       let input = [3, 'lbs'];
      let expected = 1.36078;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
       let input = [3, 'kg'];
      let expected = 6.61387;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});
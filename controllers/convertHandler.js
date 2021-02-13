/*
*
*
*       Complete the handler logic below
*       
*       
*/


/*
*
*
*       Complete the handler logic below
*       
*       
*/ 

//const validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG', 'Gal', 'Mi', 'Km', 'Lbs', 'Kg'];

function numberStringSplitter(input){
  //let number= input.match ("\\d+");
  //let str=    input.match ("[a-zA-Z]+");
 
  //var regex = new RegExp(/[.\d\/]+/g);

  let number= input.match (/[.\d\/]+/g) || ["1"];
  let str=    input.match (/[a-zA-Z]+/g)[0];
  //return [number,str];

  //console.log([number[0],str]);
  
  return [number[0],str];
}

function checkDiv(possibleFraction){
  let nums=possibleFraction.split("/");
  if(nums.length>2){
    return false
  }
  //console.log(nums);
  return nums;
}


function ConvertHandler() {
  
  this.getNum = function(input) {
    let result=numberStringSplitter(input)[0];
    //console.log("result", result);
    let nums=checkDiv(result);
    
    if (!nums){
      return undefined;
    }
    let nums1=nums[0];
    let nums2=nums[1]||"1";
    
    result=parseFloat(nums1)/parseFloat(nums2) ;
    
    if(isNaN(nums1)||isNaN(nums2)){
      return undefined;
    }
    //console.log("getnum", result);
    return result;
  };
  
  this.getUnit = function(input) {
    
    
    let result=numberStringSplitter(input)[1].toLowerCase();
    // let validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG', 'Gal', 'Mi', 'Km', 'Lbs', 'Kg'];

    // if(validUnits.includes(result)) {
    //   return result;
    // }
    // else {
    //   //return 'invalid unit';
    //   return undefined;
    // }
    switch(result){
      case 'gal':
        return 'gal';  
      case 'l':
        return 'L';  
      case 'lbs':
        return 'lbs';
      case 'kg':
        return 'kg';  
      case 'mi':
        return 'mi';   
      case 'km':
        return 'km';
      default:
        return undefined;
     
    } 
    
  };
  
  this.getReturnUnit = function(initUnit) {
    
    let unit=initUnit.toLowerCase();
    switch(unit){
      case 'gal':
        return 'L';  
      case 'l':
        return 'gal';  
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';  
      case 'mi':
        return 'km';   
      case 'km':
        return 'mi';
      default:
        return undefined;
     
    } 
  };

  this.spellOutUnit = function(unit) {
       
    let result=unit.toLowerCase();
    switch(result){
      case 'gal':
        return 'gallons';  
      case 'l':
        return 'liters';  
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';  
      case 'mi':
        return 'miles';   
      case 'km':
        return 'kilometers';
      default:
        return undefined;
     
    }      
    
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    let unit=initUnit.toLowerCase();
    switch(unit){
      case 'gal':
        result=initNum * galToL;
        break; 
      case 'l':
        result=initNum / galToL;
        break;
      case 'lbs':
        result=initNum * lbsToKg;
        break; 
      case 'kg':
        result=initNum / lbsToKg;
        break;  
      case 'mi':
        result=initNum * miToKm;
        break;   
      case 'km':
        result=initNum / miToKm;
        break;
      default:
        return undefined;
     
    }     
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    // let res2=`${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    // console.log(res2);
    // return res2;
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;


/*
function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
*/
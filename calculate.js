const calculate = (arrayMain, target)=>{

  var excludeNumber = [];
  var response = []
  
  for (let index = 0; index < arrayMain.length; index++) {
   const element = parseInt(arrayMain[index]);
   if(!excludeNumber.includes(element)){
     let otherNum = element < target ? target-element : 
               ( element > target ? element - target  : 0);
     if( arrayMain.includes(otherNum) ){
       response.push(`${element},${otherNum}`);
       excludeNumber.push(otherNum);
       excludeNumber.push(element);
     }
   }
  }
 
  return JSON.stringify(response);
 }

 exports.calculate = calculate;
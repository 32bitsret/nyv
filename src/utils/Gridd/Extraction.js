
 //extract local governments  
 export  const extractLGA = (arr, test) => {
    let result = [];
    arr.forEach(element => {
      if(element.lga === test){
        result.push(element)
      }
    });
    return result.length;
 }

 //extract gender from general data
 export  const extractGender = (arr, test) => {
   let result = [];
   arr.forEach(element => {
     if(element.gender === test){
       result.push(element)
     }
   });
   return result.length;
 }
//extract ducation from generl data
 
export  const extractEducation = (arr, test) => {
   let result = [];
   arr.forEach(element => {
       if(element.education === test){
         result.push(element)
       }
    });
   return result.length;
 }
 
 //extract disability from general data
 export  const extractDisability = (arr, test) => {
   let result = [];
   arr.forEach(element => {
       if(element.disability === test){
         result.push(element)
       }
     });
   return result.length;
 }

 //extract marital status from general data
 export const extractMaritalStatus = (arr, test) => {
   let result = [];
   arr.forEach(element => {
       if(element.maritalstatus === test){
         result.push(element)
       }
     });
   return result.length;
}
 


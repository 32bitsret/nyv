
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

   //extract Employment Status
 export  const extractEmployment = (arr, test) => {
  let result = [];
  arr.forEach(element => {
    if(element.employment === test){
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
       if(element.education.educational_qualification === test){
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
       if(element.marital_status === test){
         result.push(element)
       }
     });
   return result.length;
}
 



 //extract local governments  
 export  const extractLGAData = (arr, test) => {
  let result = [];
  arr.forEach(element => {
    if(element.lga === test){
      result.push(element)
    }
  });
  return result;
}

//extract gender from general data
export  const extractGenderData = (arr, test) => {
 let result = [];
 arr.forEach(element => {
   if(element.gender === test){
     result.push(element)
   }
 });
 return result;
}
//extract ducation from generl data

export  const extractEducationData = (arr, test) => {
 let result = [];
 arr.forEach(element => {
     if(element.education === test){
       result.push(element)
     }
  });
 return result;
}

//extract disability from general data
export  const extractDisabilityData = (arr, test) => {
 let result = [];
 arr.forEach(element => {
     if(element.disability === test){
       result.push(element)
     }
   });
 return result;
}

//extract marital status from general data
export const extractMaritalStatusData = (arr, test) => {
 let result = [];
 arr.forEach(element => {
     if(element.marital_status === test){
       result.push(element)
     }
   });
 return result;
}




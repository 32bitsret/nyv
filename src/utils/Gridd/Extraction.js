import isEmpty from "../isEmpty"
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
    if(element.employment_status === test){
      result.push(element)
    }
  });
  return result.length;
  }

  export  const extractEmploymentE = (arr) => {
    let result = [];
    arr.forEach(element => {
      if(element.employment_status !== "Not Employed" && !isEmpty(element.employment_status)){
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
   let number = [];
   arr.forEach(element => {
       if(element.education){
         result.push(element.education)
       }
    });
    result.map(res => {
      if(res.educational_qualification === test){
        number.push(res.educational_qualification)
      }
    })
    console.log("NUMBER", number)
   return number.length;
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



export  const extractLGAArr = (arr, test) => {
  let result = [];
  arr.forEach(element => {
    if(element.lga === test){
      result.push(element)
    }
  });
  return result;
}
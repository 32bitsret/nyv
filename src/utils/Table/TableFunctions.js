
  export  const extractLGA = (arr, test) => {
     let result = [];
     arr.forEach(element => {
       if(element.lga === test){
         result.push(element)
       }
     });
     return result.length;
   }
   export  const extractMale = (arr, test, lga) => {
    let result = [];
    arr.forEach(element => {
    if(element.lga === lga){
      if(element.gender === test){
        result.push(element)
      }}
    });
    return result.length;
  }

  export  const extractFemale = (arr, test, lga) => {
    let result = [];
    arr.forEach(element => {
      if(element.gender === test){
        result.push(element)
      }
    });
    return result.length;
  }
  
//   export  const extractLGA = (arr, test) => {
//     let result = [];
//     arr.forEach(element => {
//       if(element.lga === test){
//         result.push(element)
//       }
//     });
//     return result.length;
//   }
  
  
  export const extactEducation = (arr, test) => {
     let result = [];
     arr.forEach(element => {
       if(element.id !== test){
         result.push(element)
       }
     });
     return result;
   }
   

  export  const extractUser = (arr, test) => {
    let user = {};
    arr.forEach(i => {
      if(i.id === test){
       user = JSON.parse(JSON.stringify(i));
       }
    })
    if(user !== null){
      return user
    }
  }
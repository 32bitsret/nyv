
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

  //extract gender from local government
  export  const extractGender = (arr, test, lga) => {
    let result = [];
    arr.forEach(element => {
      if(element.lga === lga){
        if(element.gender === test){
          result.push(element)
        }}
      });
    return result.length;
  }
  

  export  const extractEducation = (arr, test, lga) => {
    let result = [];
    arr.forEach(element => {
      if(element.lga === lga){
        if(element.education === test){
          result.push(element)
        }}
      });
    return result.length;
  }
  
  export  const extractDisability = (arr, test, lga) => {
    let result = [];
    arr.forEach(element => {
      if(element.lga === lga){
        if(element.disability === test){
          result.push(element)
        }}
      });
    return result.length;
  }

  export const extractMaritalStatus = (arr, test, lga) => {
    let result = [];
    arr.forEach(element => {
      if(element.lga === lga){
        if(element.marital_status === test){
          result.push(element)
        }}
      });
    return result.length;
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
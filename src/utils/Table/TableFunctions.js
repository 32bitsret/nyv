
  export  const extract = (arr, test) => {
     let result = [];
     arr.forEach(element => {
       if(element.id !== test){
         result.push(element)
       }
     });
     return result;
   }
   
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
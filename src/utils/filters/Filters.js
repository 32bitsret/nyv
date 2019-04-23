import isEmpty from "../isEmpty"

export const genderFilter = (testArr, dataArr) => {
    let genderResult = []
    testArr.map(resg => {
        if(resg === "female"){
          dataArr.forEach(o => {
            if(o.gender === "female"){
                genderResult.push(o)
            }
          })   
        }
        if(resg === "male"){
            dataArr.forEach(o => {
                if(o.gender === "male"){
                    genderResult.push(o)
                }
            })  
        }
        else if(isEmpty(resg)){
            genderResult.push(...dataArr)
        }
    })
    return genderResult
}


export const profileFilter = (testArr, dataArr) => {
  let profileResult = []
    testArr.map(resp => {
        if(resp === "disabled"){
            dataArr.forEach(o => {
                if(o.disability === "yes"){
                    profileResult.push(o)
                }
            })
        }
        if(resp === "not-disabled"){
            dataArr.forEach(o => {
                if(o.disability === "no")
                    profileResult.push(o)
            })
        }
        else if(isEmpty(resp )){
            profileResult.push(...dataArr)
        }
    })
    return profileResult
}


export const lgaFilter = (testArr, dataArr) => {
    let lgaResult = []

     const list = [ 
        'barkin ladi',
        'bassa', 
        'bokkos', 
        'jos-east',
        'jos-north', 
        'jos-south', 
        'kanam', 
        'kanke', 
        'langtang-north', 
        'langtang-south', 
        'mangu', 
        'mikang', 
        'pankshin', 
        "qua'an pan", 
        'riyom', 
        'shendam',
        'wase',  
        'others' 
    ]

   testArr.map(resl => {
       if(resl === list[0]){
           dataArr.forEach(o => {
               if(o.lga === list[0])
                lgaResult.push(o)
           })
       }
       if(resl === list[1]){
        dataArr.forEach(o => {
            if(o.lga === list[1])
             lgaResult.push(o)
        })
       }
       if(resl === list[2]){
        dataArr.forEach(o => {
            if(o.lga === list[2])
             lgaResult.push(o)
        })
       }
       if(resl === list[3]){
        dataArr.forEach(o => {
            if(o.lga === list[3])
             lgaResult.push(o)
        })
       }       
       if(resl === list[4]){
        dataArr.forEach(o => {
            if(o.lga === list[4])
             lgaResult.push(o)
        })
       }       
       if(resl === list[5]){
        dataArr.forEach(o => {
            if(o.lga === list[5])
             lgaResult.push(o)
        })
       }       
       if(resl === list[6]){
        dataArr.forEach(o => {
            if(o.lga === list[6])
             lgaResult.push(o)
        })
       }       
       if(resl === list[7]){
        dataArr.forEach(o => {
            if(o.lga === list[7])
             lgaResult.push(o)
        })
       }       
       if(resl === list[8]){
        dataArr.forEach(o => {
            if(o.lga === list[8])
             lgaResult.push(o)
        })
       }       
       if(resl === list[9]){
        dataArr.forEach(o => {
            if(o.lga === list[9])
             lgaResult.push(o)
        })
       }       
       if(resl === list[10]){
        dataArr.forEach(o => {
            if(o.lga === list[10])
             lgaResult.push(o)
        })
       }       
       if(resl === list[11]){
        dataArr.forEach(o => {
            if(o.lga === list[11])
             lgaResult.push(o)
        })
       }       
       if(resl === list[12]){
        dataArr.forEach(o => {
            if(o.lga === list[12])
             lgaResult.push(o)
        })
       }       
       if(resl === list[13]){
        dataArr.forEach(o => {
            if(o.lga === list[13])
             lgaResult.push(o)
        })
       }       
       if(resl === list[14]){
        dataArr.forEach(o => {
            if(o.lga === list[14])
             lgaResult.push(o)
        })
       }       
       if(resl === list[15]){
        dataArr.forEach(o => {
            if(o.lga === list[15])
             lgaResult.push(o)
        })
       }       
       if(resl === list[16]){
        dataArr.forEach(o => {
            if(o.lga === list[16])
             lgaResult.push(o)
        })
       }
       else if(isEmpty(resl )){
           lgaResult.push(...dataArr)
       }
   })
    return lgaResult
}

export const educationFilter = (testArr, dataArr) => {
    let educationResult = []

}

export const maritalstatusFilter = (testArr, dataArr) => {
    let maritalResult = []
        testArr.map(res => {
            if(res === "single"){
                dataArr.map(o => {
                    if(o.maritalstatus === "single"){
                        maritalResult.push(o)
                    }
                })
            }
            if(res === "widowed"){
                dataArr.map(o => {
                    if(o.maritalstatus === "widowed"){
                        maritalResult.push(o)
                    }
                })
            }
            if(res === "divorced"){
                dataArr.map(o => {
                    if(o.maritalstatus === "divorced"){
                        maritalResult.push(o)
                    }
                })
            }
            if(res === "married"){
                dataArr.map(o => {
                    if(o.maritalstatus === "married"){
                        maritalResult.push(o)
                    }
                })
            }
        })
    return maritalResult
}
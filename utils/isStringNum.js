const isStringNum=(str)=>{
    if(typeof str !== "string" && typeof str !== "number"){
        return false
    }else{
        return true
    }
}

export default isStringNum;
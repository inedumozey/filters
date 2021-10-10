import isStringNum from "./utils/isStringNum.js";
import isArray from "./utils/isArray.js";
import isFunction from "./utils/isFunction.js";

//version: 1.0.0
//this package only support shallow filter for now

const filter=(data=[], values=[], input="", cb=((res=null, err=null)=>{}))=>{

    if(!isArray(data)){
        return cb( null, "Fisrt parameter must be an array" )
    }
    else if(!isArray(values)){
        return cb( null, "Second parameter must be an array" )
    }
    else if(!isStringNum(input)){
        return cb( null, "Third parameter must be string or number" )
    }
    else if(!isFunction(cb)){
        return cb (null, "Fourth paramter must be a callback" )
    }
    else{            
        //filter the array of object with all the values the user provides in array of the second parameter
        const filteredData = data.filter(data=>{

            //loop through all the values
            let allValues = ""
            for(let i=0; i<values.length; i++){
                
                //use the values in each loop as keys of the data to get the values of the data
                //then asign each to 'allValues defined above'
                //use an empty string to get the values together
                //the string values of allValues will appear as "value1value2value3...""
                if(data[`${values[i]}`]){
                    allValues += (data[`${values[i]}`]).toLowerCase() + ""
                }
            }
            return allValues.includes(input)
        })
        cb(filteredData, null)
   }
}

export default filter


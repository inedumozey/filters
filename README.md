### filter.js

filter.js filters array of object with few lines of codes. It is simple to use, scalable, light weight and very easy to use

## Description
filter.js is a light weight, plain javascript package that can be used to filter large array of object.

## Installation
`npm i @mo-filter --save`

## Usage
...
    
    import filter from "filter";
...

filter is an a function that receives 4 compulsory arguments.
1. An array of the object you want to filter
2. An array containing strings of values or keys in the object you want to filter the it with
3. a string a number you want to use and filter the object with
4. a callback that receives 2 arguments.
    * The first one returns the filtered data
    * Second returns error if not null

## Example codes
...
   
    import filter from "@mo-filter"

    const arrayObj = [
        {
            id: "1",
            name: "name1",
            product: "product1",
            email: "example1@gmail.com"
        },
        {
            id: "2",
            name: "name2",
            product: "product2",
            email: "example2@gmail.com"
        },
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example3@gmail.com"
        },
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example4@gmail.com"
        }
    ]


    const val = "name3"
    //can be anything that you want the use to find the data with
    //val is the value from search input

    filter(arrayObj, ["name", "email", "product"], val, (data, err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })

    //results. Two objects with the name "name3" were found and returned
    
    /*
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example3@gmail.com"
        },
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example4@gmail.com"
        }
    */

    //if input value is empty string, all the object will be returned

...

### Limitation
Cannot do deep object filtering for now. This feature comes soon.

_Thank you..._

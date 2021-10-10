import filter from "./filter.js"

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


const val = "name3"  //can be anything that you want the use to find the data with
//val is the value from search input

filter(arrayObj, ["name", "email", "product"], val, (data, err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

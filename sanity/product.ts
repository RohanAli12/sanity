import {defineType,defineField} from "sanity"
export const product = {
    name:"product",//show in api
    type :"document",
    title:"Product",//for sanity desktop
    fields:[
        {
            name:"title",
            title:"Product Title",
            type:"string"
        },
        {
            name:"description",
            title:"Product Description",
            type:"string"
        },
        {
            name:"price",
            title:"Product Price",
            type:"number",  
        },
        {
            name:"image",
            title:"Product Image",
            type:"image"

            // type:"  array",  for multiple image
            // of:[{ 
            //     name:"img"
            //     title:"img"
            //     type:"img"
            // }]
        
        },
        defineField({
            name:"category",
            title:"Product Category",
            type:"reference",
            to:[{
                type:"category"
            }]
        })
    ]
    
}
//multiple document ka same name nhi rkhsakhty 
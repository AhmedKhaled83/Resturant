import { createSlice } from "@reduxjs/toolkit";
import {images} from '../../constant/index'
// const data = {value : 0}
  const data ={

    Categories:[{
      id: "1",
      name: "FOOD",
      image:images.checken,
      itemes: [
        {
          itemes_name: "PIZZA",
          itemes_image:images.pizza,
          product: [
            {
              product_id: "1",
              product_name: 'Cheese pizza',
              product_detalies: "Cheese pizza ",
              product_image: images.pizza1,
              product_price: 0,
              product_total_price: 0,
              product_count: 1,
              product_choose_Addtion: "0",
              product_show: true,
              product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],

              product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
              product_choose_size: "0",



            },
            {
                product_id: "2",
                product_name: 'chicken pizza',
                product_detalies: "chicken pizza ",
                product_image: images.pizza2,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
  
                product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                product_choose_size: "0",
  
            },
            {
                product_id: "3",
                product_name: 'chicken pizza',
                product_detalies: "chicken pizza ",
                product_image: images.pizza3,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
  
                product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                product_choose_size: "0",
  
            },   
                {
                product_id: "4",
                product_name: 'chicken pizza',
                product_detalies: "chicken pizza ",
                product_image: images.pizza4,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
  
                product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                product_choose_size: "0",
  
            },
            
          ]

        },

        {
          itemes_name: "Chicken",
          itemes_image:images.checken,
          product: [
            {
        
              product_id: "1",
              product_name: 'Grilled chicken',
              product_detalies: "Grilled chicken ",
              product_image: images.checken1,
              product_price: 0,
              product_total_price: 0,
              product_count: 1,
              product_choose_Addtion: "0",
              product_show: true,
              product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],

              product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
              product_choose_size: "0",
            },
            {
                product_id: "2",
                product_name: 'Grilled chicken',
                product_detalies: "Grilled chicken ",
                product_image: images.checken,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
  
                product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                product_choose_size: "0",
            },
            {
        
                product_id: "3",
                product_name: 'Grilled chicken',
                product_detalies: "Grilled chicken ",
                product_image: images.checken2,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
  
                product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                product_choose_size: "0",
              },
              {
                  product_id: "4",
                  product_name: 'Grilled chicken',
                  product_detalies: "Grilled chicken ",
                  product_image: images.checken3,
                  product_price: 0,
                  product_total_price: 0,
                  product_count: 1,
                  product_choose_Addtion: "0",
                  product_show: true,
                  product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
    
                  product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                  product_choose_size: "0",
              }
          ]
        },
        {
            itemes_name: "Burger",
            itemes_image:images.burger1,
            product: [
              {
          
                product_id: "1",
                product_name: 'Burger',
                product_detalies: "Burger ",
                product_image: images.burger1,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
  
                product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                product_choose_size: "0",
              },
              {
                  product_id: "2",
                  product_name: 'Burger',
                  product_detalies: "Burger ",
                  product_image: images.burger2,
                  product_price: 0,
                  product_total_price: 0,
                  product_count: 1,
                  product_choose_Addtion: "0",
                  product_show: true,
                  product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
    
                  product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                  product_choose_size: "0",
              },
              {
          
                  product_id: "3",
                  product_name: 'Burger',
                  product_detalies: "Burger ",
                  product_image: images.burger3,
                  product_price: 0,
                  product_total_price: 0,
                  product_count: 1,
                  product_choose_Addtion: "0",
                  product_show: true,
                  product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
    
                  product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                  product_choose_size: "0",
                },
                {
                    product_id: "4",
                    product_name: 'Burger',
                    product_detalies: "Burger ",
                    product_image: images.burger4,
                    product_price: 0,
                    product_total_price: 0,
                    product_count: 1,
                    product_choose_Addtion: "0",
                    product_show: true,
                    product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
      
                    product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                    product_choose_size: "0",
                }
            ]
          }
          ,


          {
            itemes_name: "Pasta",
            itemes_image:images.pasta1,
            product: [
              {
          
                product_id: "1",
                product_name: 'Pasta',
                product_detalies: "Pasta ",
                product_image: images.pasta1,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
  
                product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                product_choose_size: "0",
              },
              {
                  product_id: "2",
                  product_name: 'Pasta',
                  product_detalies: "Pasta ",
                  product_image: images.pasta2,
                  product_price: 0,
                  product_total_price: 0,
                  product_count: 1,
                  product_choose_Addtion: "0",
                  product_show: true,
                  product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
    
                  product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                  product_choose_size: "0",
              },
              {
          
                  product_id: "3",
                  product_name: 'Pasta',
                  product_detalies: "Pasta ",
                  product_image: images.pasta3,
                  product_price: 0,
                  product_total_price: 0,
                  product_count: 1,
                  product_choose_Addtion: "0",
                  product_show: true,
                  product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
    
                  product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                  product_choose_size: "0",
                },
                {
                    product_id: "4",
                    product_name: 'Pasta',
                    product_detalies: "Pasta ",
                    product_image: images.pasta4,
                    product_price: 0,
                    product_total_price: 0,
                    product_count: 1,
                    product_choose_Addtion: "0",
                    product_show: true,
                    product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],
      
                    product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
                    product_choose_size: "0",
                }
            ]
          }



      ]
    },












// Drinks Items data


    {
      id: "2",
      name: "DRINKS",
      image: images.drink,
      itemes: [
        {
          itemes_name: "Cofee",
          itemes_image:images.cofe2,
          product: [
            {
              product_id: "1",
              product_name: 'french Coffe',
              product_detalies: " french Coffe ",
              product_image: images.cofe1,
              product_price: 0,
              product_total_price: 0,
              product_count: 1,
              product_choose_Addtion: "0",
              product_show: true,
              product_choose_size: "0",
              product_size: [{title:'cofee', Value: 25}],
              product_Addtion: []

            },
            {
              product_id: "2",
              product_name: 'Turki Coffe',
              product_detalies: "Turki Coffe ",
              product_image: images.cofe2,
              product_price: 0,
              product_total_price: 0,
              product_count: 1,
              product_choose_Addtion: "0",
              product_show: true,
              product_choose_size: "0",
              product_size: [{title:'cofee', Value: 30}],
              product_Addtion: []
            },
            {
                product_id: "3",
                product_name: 'Coffe',
                product_detalies: " Coffe ",
                product_image: images.cofe3,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'cofee', Value: 25}],
                product_Addtion: []
  
  
  
              },
              {
                product_id: "4",
                product_name: 'Coffe',
                product_detalies: "Turki Coffe ",
                product_image: images.cofe4,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'cofee', Value: 25}],
                product_Addtion: []
               
              },
              {
                product_id: "5",
                product_name: 'Coffe',
                product_detalies: " Coffe ",
                product_image: images.cofe5,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'cofee', Value: 25}],
                product_Addtion: []
  
  
  
              },
              {
                product_id: "6",
                product_name: 'Coffe',
                product_detalies: " Coffe ",
                product_image: images.cofe6,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'cofee', Value: 25}],
                product_Addtion: []
               
              }
          ]

        },

        {
          itemes_name: "Ice Cofe",
          itemes_image:images.icecofe1,
          product: [
            {
                product_id: "1",
                product_name: 'Ice Cofe',
                product_detalies: " Ice Cofe ",
                product_image: images.icecofe1,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Ice Cofe', Value: 55}],
                product_Addtion: []
            },
            {
              product_id: "2",
              product_name: 'Ice Cofe ',
              product_detalies: "Ice Cofe",
              product_image: images.icecofe2,
              product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Ice Cofe', Value: 60}],
                product_Addtion: []
            },
            {
                product_id: "3",
                product_name: 'Ice Cofe',
                product_detalies: " Ice Cofe ",
                product_image: images.icecofe3,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Ice Cofe', Value: 55}],
                product_Addtion: []
            },
            {
              product_id: "4",
              product_name: 'Ice Cofe ',
              product_detalies: "Ice Cofe",
              product_image: images.icecofe4,
              product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Ice Cofe', Value: 60}],
                product_Addtion: []
            }
          ]
        },
        {
            itemes_name: "Frish",
            itemes_image:images.frish1,
            product: [
              {
                  product_id: "1",
                  product_name: 'Frish',
                  product_detalies: " Frish ",
                  product_image: images.frish1,
                  product_price: 0,
                  product_total_price: 0,
                  product_count: 1,
                  product_choose_Addtion: "0",
                  product_show: true,
                  product_choose_size: "0",
                  product_size: [{title:'Frish', Value: 78}],
                  product_Addtion: []
              },
              {
                product_id: "2",
                product_name: 'Frish',
                product_detalies: " Frish ",
                product_image: images.frish2,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Frish', Value: 80}],
                product_Addtion: []
              },
              {
                  product_id: "3",
                  product_name: 'Frish',
                  product_detalies: " Frish ",
                  product_image: images.frish3,
                  product_price: 0,
                  product_total_price: 0,
                  product_count: 1,
                  product_choose_Addtion: "0",
                  product_show: true,
                  product_choose_size: "0",
                  product_size: [{title:'Frish', Value: 75}],
                  product_Addtion: []
              },
              {
                product_id: "4",
                product_name: 'Frish',
                product_detalies: " Frish ",
                product_image: images.frish4,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Frish', Value: 105}],
                product_Addtion: []
              }
            ]
          },

          {
            itemes_name: "Soda",
            itemes_image:images.soda1,
            product: [
              {
                  product_id: "1",
                  product_name: 'Soda',
                  product_detalies: " Soda ",
                  product_image: images.soda1,
                  product_price: 0,
                  product_total_price: 0,
                  product_count: 1,
                  product_choose_Addtion: "0",
                  product_show: true,
                  product_choose_size: "0",
                  product_size: [{title:'Frish', Value: 78}],
                  product_Addtion: []
              },
              {
                product_id: "2",
                product_name: 'Soda',
                product_detalies: " Soda ",
                product_image: images.soda2,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Frish', Value: 80}],
                product_Addtion: []
              },
              {
                  product_id: "3",
                  product_name: 'Soda',
                  product_detalies: " Soda ",
                  product_image: images.soda3,
                  product_price: 0,
                  product_total_price: 0,
                  product_count: 1,
                  product_choose_Addtion: "0",
                  product_show: true,
                  product_choose_size: "0",
                  product_size: [{title:'Frish', Value: 75}],
                  product_Addtion: []
              },
              {
                product_id: "4",
                product_name: 'Soda',
                product_detalies: " Soda ",
                product_image: images.soda4,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Frish', Value: 105}],
                product_Addtion: []
              }
            ]
          },



      ]

    },






// desserts Items data




    {
      id: "3",
      name: "DESSERTS",
      image: images.dessert,
      itemes: [
        {
          itemes_name: "Cake",
          itemes_image:images.cake1,
          product: [
            {
              product_id: "1",
              product_name: 'Cake',
              product_detalies: " Cake ",
              product_image: images.cake1,
              product_price: 0,
              product_total_price: 0,
              product_count: 1,
              product_choose_Addtion: "0",
              product_show: true,
              product_choose_size: "0",
              product_size: [{title:'Cake', Value: 100}],
              product_Addtion: []

            },
            {
              product_id: "2",
              product_name: 'Cake',
              product_detalies: " Cake ",
              product_image: images.cake2,
              product_price: 0,
              product_total_price: 0,
              product_count: 1,
              product_choose_Addtion: "0",
              product_show: true,
              product_choose_size: "0",
              product_size: [{title:'Cake', Value: 152}],
              product_Addtion: []
            },
            {
                product_id: "3",
                product_name: 'Cake',
              product_detalies: " Cake ",
              product_image: images.cake1,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Cake', Value: 200}],
                product_Addtion: []
  
  
  
              },
              {
                product_id: "4",
                product_name: 'Cake',
                product_detalies: " Cake ",
                product_image: images.cake2,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Cake', Value: 180}],
                product_Addtion: []
               
              },
            
          ]

        },

        {
          itemes_name: "Chocolate",
          itemes_image:images.chocolet1,
          product: [
            {
                product_id: "1",
                product_name: 'Chocolate',
                product_detalies: " Chocolate",
                product_image: images.chocolet1,
                product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Chocolate', Value: 80}],
                product_Addtion: []
            },
            {
              product_id: "2",
              product_name: 'Chocolate ',
              product_detalies: "Chocolate",
              product_image: images.chocolet2,
              product_price: 0,
                product_total_price: 0,
                product_count: 1,
                product_choose_Addtion: "0",
                product_show: true,
                product_choose_size: "0",
                product_size: [{title:'Chocolate', Value: 60}],
                product_Addtion: []
            },
         
          ]
        },
      
      ]
    }
    ]
  }


const dataSlice  = createSlice({
    name :'Data' , 
    initialState : data , 
    reducers:{

    }
})

export default dataSlice.reducer
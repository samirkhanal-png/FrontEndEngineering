function calculatePrice(products){
  let finalPrices=[]
  for(let product of products){
    let price=product.mrp-product.mrp*(product.discount.isPercentage?product.discount.rate/100:product.discount.rate)
    finalPrices.push(`The price of ${product.name} after discount is ${price}`)   
  }
  return finalPrices
 }
 
  const products = [
       {
         name:'Boat Rockerz 255 Headphone',
         mrp:1500,
         discount:{
 rate: 120,
          isPercentage:false
   }
       },
       {
         name:'Legion Y540 ',
         mrp:85000,
         discount:{
 rate: 12,
          isPercentage:true
   }
       },
       {
         name:'Redgear Mouse',
         mrp:750,
         discount:{
 rate: 5,
          isPercentage:true
   }
       },
       
     ]
     
     console.log(calculatePrice(products))
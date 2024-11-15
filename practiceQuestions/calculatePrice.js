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

function calculatePrice(products) {
 
  let finalPrices=[]

  for(let product of products){
    let discountValue=product.discount.isPercentage?(product.mrp*product.discount.rate/100):product.discount.rate
    let price=product.mrp-discountValue
    finalPrices.push(`The price of ${product.name} after discount is ${price}`)
  }

  return finalPrices;
}

console.log(calculatePrice(products))


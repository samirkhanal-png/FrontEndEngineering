let apiURL="https://dummyjson.com/products"

let request=new XMLHttpRequest()

request.open("GET",apiURL)
request.send()

let totalStocks=0

request.addEventListener("load",()=>{
  let objects=JSON.parse(request.response) //do not forget to parse and stringify please
  console.log(objects)
  objects.products.forEach((object)=>{
    console.log(object.stock)
    totalStocks+=object.stock
  })
})

setTimeout(()=>{
  document.write("TotalStocks "+totalStocks)
},2000)

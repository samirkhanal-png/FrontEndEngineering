let apiURL="https://dummyjson.com/products"

let request=new XMLHttpRequest()
request.open("GET",apiURL)
request.send()

//let totalStocks=0
request.addEventListener("load",()=>{
  let datas=JSON.parse(request.response) //do not forget to parse the response
  console.log(datas)
  datas.products.forEach((data)=>{
   totalStocks+=data.stock
  })
})


setTimeout(()=>{
  document.write("TotalStocks "+totalStocks)
},2000)

let request=new XMLHttpRequest()

request.open("get","https://feecq.github.io/api/movies.json")

request.send()

let response
let container=document.createElement("div")
container.setAttribute("id","container")
container.style.width=90+"%"
container.style.height=1000+"px"
container.style.display="flex"
container.style.gap=10+"px"
container.style.flexWrap="wrap"
container.style.alignContent="space-between"

request.addEventListener("load",()=>{
  response=JSON.parse(request.response)  //do not forget to parse
  console.log(response)
  response.forEach((object)=>{
    
    let cardInner=`
    <img src=${object.image} alt="" style="width:100%;height:300px;">
    <p style="text-align:center">${object.movie}</p>
     <p>IMDB URL:${object.imdb_url}</p>    
`

   let cardBox=document.createElement("div")
   cardBox.setAttribute("class","cardBox")
   cardBox.style.width="min-content"
   cardBox.style.height=420+"px"
   cardBox.style.border=1+"px solid black"

   cardBox.innerHTML=cardInner //container is a node created in js
   container.appendChild(cardBox)

  })
 
  console.log(request.response)

})

document.body.appendChild(container)
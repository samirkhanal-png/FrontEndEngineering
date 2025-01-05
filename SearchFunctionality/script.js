const inputField=document.querySelector("#search")

inputField.addEventListener("keyup",(e)=>{
  if(e.key==="Enter"){
  let userField=inputField.value.trim().toLowerCase()
  console.log(userField)
  
  let items=document.querySelectorAll(".item")
  items.forEach((item)=>{
    let text=item.innerText.toLowerCase()
    if(text.includes(userField)){  
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  })
  }
})

let arr=[]

const inputArea=document.querySelector("#inputArea")
const deleteArea=document.querySelector("#deleteArea")
const addBtn=document.querySelector("#addBtn")
const delBtn=document.querySelector("#delBtn")
const box=document.querySelector("#box")


addBtn.addEventListener("click",()=>{
  let inputEle=inputArea.value
  if(inputEle){
    arr.push(inputEle)
  }  
  box.innerText=`Elements that are currently here${arr}`
})



delBtn.addEventListener("click",()=>{
 let deleteEle=deleteArea.value
 arr=arr.filter((ele)=>deleteEle!=ele)
 box.innerText=`Elements that exist after deleting ${arr}`
})


const name=document.getElementById("name")
const dob=document.getElementById("dob")
const email=document.getElementById("email")
const contactNumber=document.getElementById("contactNumber")
const address=document.getElementById("address")
const empName=document.getElementById("empName")
const workExp=document.getElementById("workExp")
const techSkill=document.getElementById("techSkill")
const btnSubmit=document.getElementById("btnSubmit")

//Table body where table row is to be appended
const tBody=document.querySelector("tbody")

let formData={}
let empDetails=[]

//Load after the declaration of the array empDetails
function initializePrevRecords(){
 empDetails=getFromLocalStorage();
 if(empDetails){
  empDetails.forEach((each)=>{
    createUI(each)
  })
}
}

window.addEventListener("load",()=>{
  initializePrevRecords()
})

function createObj(){
  formData={
    name:name.value,
    dob:dob.value,
    email:email.value,
    contactNumber:contactNumber.value,
    address:address.value,
    empName:empName.value,
    workExp:workExp.value,
    techSkill:techSkill.value,
  }
  return formData;
}

function createUI(obj){
  let tRow=document.createElement("tr")
  let innerTD=`
   <td>${obj.name}</td>
   <td>${obj.dob}</td>
   <td>${obj.email}</td>
   <td>${obj.contactNumber}</td>
   <td>${obj.address}</td>
   <td>${obj.empName}</td>
   <td>${obj.workExp}</td>
   <td>${obj.techSkill}</td>
  `
  tRow.innerHTML=innerTD
  tBody.appendChild(tRow)
}

function getFromLocalStorage(){
  let savedEmpData=JSON.parse(localStorage.getItem("empArray"))
  return savedEmpData
}

function saveIntoLocalStorage(empArray){
 localStorage.setItem("empArray",JSON.stringify(empArray))
}

btnSubmit.addEventListener("click",()=>{
  let obj=createObj()
  createUI(obj)
  empDetails.push(obj)
  saveIntoLocalStorage(empDetails)
})
// write your JS code here

const btn = document.getElementById("btnSubmit");
const name = document.getElementById("fullName");
const email = document.getElementById("email");
const number = document.getElementById("contactNumber");
const arrv = document.getElementById("arrivalDate");
const depart = document.getElementById("deptDate");
const numAdu = document.getElementById("numAdult");
const numchil = document.getElementById("numChildren");

const tableBody = document.querySelector("#customerTable>tbody");

let customerDetails = [];
let formData={}
function saveRecord() {
  formData = {
    Name: name.value,
    Email: email.value,
    Number: number.value,
    ArrivalDate: arrv.value,
    DepartureDate: depart.value,
    NumberOfAdults: numAdu.value,
    NumberOfChildren: numchil.value,
  };
  
  customerDetails.push(formData);  // Now pushing a new object
  

  localStorage.setItem("DetailsCust", JSON.stringify(customerDetails));
}

function addRecordToTable(obj) {
  let tRow = document.createElement("tr");
  tRow.innerHTML = `
  <td>${obj.Name}</td>
  <td>${obj.Email}</td>
  <td>${obj.Number}</td>
  <td>${obj.ArrivalDate}</td>
  <td>${obj.DepartureDate}</td>
  <td>${obj.NumberOfChildren}</td>
  <td>${obj.NumberOfAdults}</td>
 `;
  tableBody.appendChild(tRow);
}

function clearField() {
  let inputFields = document.querySelectorAll("input");
  inputFields.forEach((inputField) => {
    inputField.value = "";
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  saveRecord();
  addRecordToTable(formData);
  clearField();
});

//When refreshing
function loadData() {
  let custDetails = JSON.parse(localStorage.getItem("DetailsCust"));

    if (custDetails) {  
      custDetails.forEach((obj) => { 
          addRecordToTable(obj);  
      });
  }
}

window.addEventListener("load", () => {
   customerDetails=JSON.parse(localStorage.getItem("DetailsCust")) //saving the previous things in the current array
  loadData();
})

//always make sure that parse while getting data from localStorage parse it
//always make sure that 
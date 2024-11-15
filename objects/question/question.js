const menu = [{ id : "item1",
  itemName : "Butter Roti",
  rate : 20,
  taxes : [
    {
      name : "Service Charge",
      rate : 10,
      isInPercent : false
    }, {
      name : "GST",
      rate : 5,
      isInPercent : true
    }
  ],
  category : {
    categoryId : "C2"
  }

}];

const categories = [{
  id : "C1",
  categoryName : "Platters",
  superCategory : {

    superCategoryName : "South Indian",
    id : "SC1"
  }
}];

const bill={
  "id":"B1",
  "billNumber":10,
  "openTime":"12/01/2021, 10:43:39",
  "customerName":"CodeQuotient",
  "billItems":[
    {
     "id":"item2",
     "quantity":3,
     "discount":{
       "rate":10,
       "isInPercent":false
     }
    },
    {
     "id":"item1",
     "quantity":15,
     "discount":{
       "rate":10,
       "isInPercent":true
     }
    },
    {
     "id":"item4",
     "quantity":2,
     "discount":{
       "rate":20,
       "isInPercent":false
     }
    },
    {
     "id":"item3",
     "quantity":5,
     "discount":{
       "rate":5,
       "isInPercent":true
     }
    }
  ]
 }

 function calculateBill(bill) {
  let totalBillAmount = 0;
  let billItems = [];
  
  
  
  
  return [totalBillAmount, billItems];
}
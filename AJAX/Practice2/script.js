const apiURL="https://feecq.github.io/api/users.json"

async function fetchData(apiURL){
 try{
  let response=await fetch(apiURL)
  let data=await response.json()
  console.log(data)
  return data
 }
 catch(err){
  console.error(err)
 }
}

console.log(fetchData(apiURL))
const userDetailsArea=document.querySelector("#userDetails")

const pullButton=document.querySelector("#fetchUserDetails")

function fetchData(apiURL){
  let fetchedData=fetch(apiURL)
  .then((response)=>{
    if (!response.ok) {
      return new Error(`Error has occured ${response.status}`);
    }
    return response.json();
  })
  .catch((err)=>{
    console.error(err)
  })
   return fetchedData //Proble occuring Wtf is this returning promise only does not wait for the promise to get resolved
}

//Difficult to get the object using then catch
//It returns promise before getting resolved into object so make the above function also using async await

pullButton.addEventListener("click",async ()=>{
  userDetailsArea.innerText=""
  let userName=document.querySelector("#apiField").value.trim()

  let userURL=`https://api.github.com/users/${userName} `

  let repoURL=`https://api.github.com/users/${userName}/repos`

  let userDetails=await fetchData(userURL)
  let repoDetails=await fetchData(repoURL)

  console.log(userDetails)
  console.log(repoDetails)

  let actualName=userDetails.name
  let idName=userDetails.login
  let imageURL=userDetails.avatar_url
  let followersNo=userDetails.followers
  let followingNo=userDetails.following

  let image=document.createElement("img");
  image.setAttribute("src",imageURL)

  image.style.width=100+"px"
  image.style.height=100+"px"
  image.style.borderRadius=20+"px"
  userDetailsArea.appendChild(image)
  
  let p1=document.createElement("p")
  p1.innerText="Name: "+actualName
  
  let p2=document.createElement("p")
  p2.innerText="ID: "+idName
  

  let p3=document.createElement("p")
  p3.innerText="Followers: "+followersNo

  let p4=document.createElement("p")
  p4.innerText="Following: "+followingNo

  userDetailsArea.append(p1,p2,p3,p4)

  repoDetails.forEach((each)=>{
  let repoBox=document.createElement("a") 
  repoBox.style.textDecoration="none"
  repoBox.target="_blank"
  console.log(each.html_url)   
  repoBox.setAttribute("href",each.html_url)
  repoBox.classList.add("repoBox")
  repoBox.innerText=each.name
  userDetailsArea.appendChild(repoBox)
  })

})



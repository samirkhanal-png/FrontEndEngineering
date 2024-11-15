let str="apan"

function isPalindrome(str){
  str=str.toLowerCase()
  return str===str.split("").reverse().join("")
}

if(isPalindrome(str)){
  console.log("The string is palindrome")
}
else console.log("Not palindrome")
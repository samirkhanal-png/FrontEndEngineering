//Javascript is a single threaded language and executes all the task in a single thread

//It can only execute a single task function in a single thread
// console.log("one")
// alert("hello") //blocking code
//it is not completely executed till the user press ok and block the call stack
// console.log("two")

//blocking codes are that code that takes a long time for computation and blocks the single thread 



//By default JS is synchronous but we can make it asynchronous by browser apis and setTimeout setInterval

// console.log("One") //normal tasks
// setTimeout(()=>{
//   console.log("three") //asynchronous tasks are sent to the browser api and hold it till the timer expires
// },2000) //even if 0s result will be same though the time is only 0s because callstack is not empty
// console.log("two") //normal tasks are executed in the callstack first

//after the timer expires it is sent to the event queue

console.log("one")
setTimeout(()=>{
  setTimeout(()=>{
    console.log("Four")
  },2000)
  console.log("Two")
},1000)

console.log("Three")
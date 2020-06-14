// get all main ids and classes 
const form = document.querySelector(".form")
const inputField = document.querySelector("#myInput")
const ul = document.querySelector("#myUl")

// create todoList array
const todoList = []

form.addEventListener("submit",(evt)=>{
 // preventing form submittion behaviour  
   evt.preventDefault()

// store todo value in array so i can iterate over array and show all todo item into li   
todoList.push(inputField.value)

// checking todo item is available in array or not
console.log(todoList)

// clear inputfield by empty value
inputField.value = ""

// create li tag so i can show todo item 
let li = document.createElement("li")
// create delete button to delete todo item
let delBtn = document.createElement("button")
// assign value delete so in every button it display delete  
delBtn.textContent = "Delete"
// iterate over todo list  using forEach fn 
// if u don't no what is forEach Function
// first clear the concept of callback function just watch some tutorials on youtube callback fn is very easy
// then understand how forEach fn works its work like for loop while iterate over all array items 
todoList.forEach((todo,index)=>{
    li.setAttribute("data-id",index) 
// set data-id attribute its custom attribute for assigning index to delete todo item
// if u are confused get data attribute in W3 School it will clear your concept
    li.textContent = todo
 // assign li to value eg: we did <li>some todo item</li>   
    li.append(delBtn)
 // append delBtn so every times li create delBtn also create and append to every single li   
    ul.append(li)
 // last step append all li to ul i already get id of ul on the top   
})
document.querySelectorAll("li").forEach((singleLi)=>{
   // iterate over all li so i can assign delete functionality 
singleLi.addEventListener("click",(evt)=>{
 // add Event listner target all li in ul list but first u have to iterate all li   
    if(evt.target.tagName === "BUTTON"){
 // i am checking if i only click on button then delete item will happen       
       evt.stopImmediatePropagation()
   // this is the most tricky concept i suggest u to see tutorial of evt.stopImmediatePropagation() and
   // evt.stopPropagation() so your concept will clear   
       const id = evt.target.parentElement.getAttribute("data-id")
    // i'm getting an attribute i create on line 32 and assign index it will return index
       console.log(id)
       // u can check in console please don't confuse i'm calling index to id and assign const id u can change
       // and assign const index       
       todoList.splice(id,1)
       // remove select todo item from array
       console.log(todoList)
       // u can check remove item is not in array
       evt.target.parentElement.remove()
       // final step remove todo item from dom using remove method it is available in DOM
       // if u are still confuse in some step feel free to ask!!!!!!
    }
})
})
})
// I have some grammer issues so please coporate with me thank you!!!!! 

const dec=document.querySelector("#dec")
const reset=document.querySelector("#reset")
const inc=document.querySelector("#inc")
const output=document.querySelector("#output")

let count=0

function display() {
        output.style.color=count>0 ? "green" : count<0 ? "red" : "gray"
}

dec.addEventListener ("click",function decr(){
    output.textContent=--count
    display()
})

inc.addEventListener ("click",()=>{
    output.textContent=++count
    display()
})

reset.addEventListener ("click",()=>{
    count=0
    output.textContent=count
    display()
})


let c=0

const dec=document.querySelector("#dec")
const reset=document.querySelector("#reset")
const inc=document.querySelector("#inc")
const out=document.querySelector("#output")
function display(){
        out.style.color=c>0? "green": c<0? "red":"gray"
}

dec.addEventListener("click",function decr(){
    out.textContent=--c
    display()
})
inc.addEventListener("click",()=>{
    out.textContent=++c
    display()
})
reset.addEventListener("click",()=>{
    c=0
    out.textContent=c
    display()
})

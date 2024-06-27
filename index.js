console.log("hello dear")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

function getRandomColor(){
    let v1=233
    let v2=124
    let v3=111
    return `rgb(${v1}, ${v2}, ${v3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()  
})
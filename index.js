console.log("hello dear")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

function getRandomColor(){
    let v1= Math.ceil(0+Math.random()*(255-0))
    let v2= Math.ceil(0+Math.random()*(255-0))
    let v3= Math.ceil(0+Math.random()*(255-0))
    return `rgb(${v1}, ${v2}, ${v3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()  
    e.style.color = getRandomColor()
})
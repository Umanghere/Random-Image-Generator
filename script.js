console.log("This console is providing the link of images of Random Dogs using API")

const dogImageDiv= document.getElementById("dogImage")
const dogButtonDiv= document.getElementById("dogButton")

// https://dog.ceo/api/breeds/image/random
let dogFunction=()=>{
    fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(json => {
    console.log(json.message)
    dogImageDiv.innerHTML= `<img src="${json.message}"/>`
})
}

dogButtonDiv.onclick=()=> dogFunction()

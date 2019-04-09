const nameInput = document.querySelector("[name='nombre']").focus()
const addWeb =  document.querySelector("#addWeb") 
const addTag =  document.querySelector("#addTag") 
const sendForm = document.querySelector("form button").onclick = () =>{
    const form = document.querySelector("form")
    form.clear()
}

addWeb.onclick = () =>{
    const hiddenInputs = document.querySelector("#hiddenInputs")
    const webInput = document.querySelector("#webInput")
    const newInput = document.createElement("input")
    newInput.type = "hidden"
    newInput.name = "webs"
    if(webInput.value != "") {
        newInput.value = webInput.value
        hiddenInputs.appendChild(newInput)
        webInput.value = ""
        webInput.focus()
    }
}
addTag.onclick = () =>{
    const hiddenInputs = document.querySelector("#hiddenInputs")
    const tagInput = document.querySelector("#tagInput")
    const newInput = document.createElement("input")
    newInput.type = "hidden"
    newInput.name = "tags"
    if(tagInput.value != ""){
        newInput.value = tagInput.value
        hiddenInputs.appendChild(newInput)
        tagInput.value = ""
        tagInput.focus()
    }
}
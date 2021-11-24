function AddValue(){
    document.querySelector("#increase").addEventListener("click" , ()=>{
        document.getElementById("NowValue").innerText = parseInt(document.getElementById("NowValue").innerText) + 1
    })   
}
function SubtractValue(){
    document.querySelector("#decrease").addEventListener("click" , ()=>{
        document.getElementById("NowValue").innerText = parseInt(document.getElementById("NowValue").innerText) - 1
    })   
}

SubtractValue();
AddValue();

// parseInt function is used to convert a string into a integer.
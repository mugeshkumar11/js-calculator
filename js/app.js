let outputEle = document.getElementById("outputscreen");

let display=function(num){
    outputEle.value += num;
}

function calculate(){
    try{
        outputEle.value = eval (outputscreen.value);
    }
    catch (err){
         alert("invalid")
    }
}

function cle(){
    outputEle.value = "";
}
function del(){
    outputEle.value = outputEle.value.slice(0,-1)
}
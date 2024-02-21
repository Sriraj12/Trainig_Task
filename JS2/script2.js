function myfunction(){
    errorclear()
    var input = document.getElementById("same").value.trim().replace(/\s+/g,"");
    if(input === ""){
        document.getElementById("error").innerHTML="Please Enter the Sentence";
    }else if(!(/^[a-z0-9 ]+$/i.test(input))){
        document.getElementById("error").innerHTML="Special Character(s) not allowed";
    }else if(!(/^[a-z ]+$/i.test(input))){
        document.getElementById("error").innerHTML= "Number(s) not allowed";
    }else if(input.length === 1){
        document.getElementById("error").innerHTML= "Please enter more than one character";
    }else if(input.charAt(0) === input.charAt(input.length-1)){
        document.getElementById("output").innerHTML= "Both the characters are same";
    }else{
        document.getElementById("result").innerHTML = "First and Last characters are different.";
    }   
}
function errorclear(){
    document.getElementById("error").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("output").innerHTML = "";
}

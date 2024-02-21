function validation(){
  error()
  var value = document.getElementById("number").value.trim().replace(/\s+/g,"").replace(/\,+/g,",");
  var input = value.split(",");
  var num = [];
  for( var a = 0; a < input.length; a++){
      if(input[a].length){
        num.unshift(Number(input[a]));
      }
  }
  if(value === ""){
    document.getElementById("validation").innerHTML = "Please enter the number";
  }
  else if(value.startsWith(",")){
    document.getElementById("validation").innerHTML = "Use commas in proper place";
  }
  else if(value.endsWith(",")){
    document.getElementById("validation").innerHTML = "Use commas in proper place";
  }
  else if(!(/^[-+a-z0-9., ]+$/i.test(value))){
    document.getElementById("validation").innerHTML = "Special Character(s) not allowed";
  }
  else if(!(/^[-+0-9., ]+$/.test(value))){
    document.getElementById("validation").innerHTML = "letter(s) not allowed";  
  }
  else if(input.length === 1){
    document.getElementById("validation").innerHTML = "Single number is not allowed";
  }else
    return num 
}
function error(){
    document.getElementById("validation").innerHTML = "";
    document.getElementById("output").value = "";
}
function addition(){
  var add = validation();
  var total = 0;
  for(var i = 0; i < add.length; i++)
    total += add[i];
    document.getElementById("output").value = total;
}
function multiply(){
  var multi = validation();
  var total = 1;
    for(var i = 0; i < multi.length; i++)
      // total *= multi[i];
      total = total * multi[i];
      document.getElementById("output").value = total;
}
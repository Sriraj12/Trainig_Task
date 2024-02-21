function myFunction() {
    validationclear()
    var data = document.getElementById("greater").value.trim().replace(/\s+/g, " ");
    var inputList = data.split(" ");
    var result;
    var maxword = inputList[0];
    var minword = inputList[0];
    if (data === "") {
        document.getElementById("validation").innerHTML = "Please enter the sentence";
    } else if (!(/^[a-z0-9 ]+$/i.test(data))) {
        document.getElementById("validation").innerHTML = "Special Character(s) not allowed";
    } else if (inputList.length === 1) {
        document.getElementById("validation").innerHTML = "Please enter a sentence which has more than one word";
    }
    else {
        for (var i = 0; i < inputList.length; i++) {
            if (maxword.length < inputList[i].length) {
                maxword = inputList[i];
            }
            if (minword.length > inputList[i].length) {
                minword = inputList[i];
            }
        }
        if (maxword.length === minword.length) {
            document.getElementById("validation").innerHTML = "All words are equal in length";
        }else{
        result = ("The largest word -" +maxword+"<br/> Length of largest word -" +maxword.length+"<br/>The smallest word -" +minword+"<br/>Length of smallest word -" +minword.length);
        document.getElementById("result").innerHTML = result;
        }
    }
}
function validationclear(){
    document.getElementById("validation").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}




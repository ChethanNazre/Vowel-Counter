function countVowel(){
    var text = document.getElementById("inputText").value;
    var vowelCount=0;
    
    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        if(isVowel(char)){
            vowelCount++;
        }
    }

    var result = document.getElementById("result");
    result.textContent = "Total Vowels:" +   vowelCount;
}

function isVowel(char){
    var vowel = ["a","e","i","o","u","A","E","I","O","U"];
    return vowel.includes(char);
}
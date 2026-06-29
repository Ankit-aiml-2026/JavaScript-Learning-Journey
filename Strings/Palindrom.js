let word = "Mam";

let SpWord="";

//removed spaces from word variable
for(let j=0; j<word.length; j++){
    if(word[j] !== " "){
        SpWord += word[j];
    }
}
SpWord = SpWord.toUpperCase();
//uppercase the mod amd storing
let rev = "";

//storing reverse of word without space in rev
for (let i = SpWord.length-1; i>= 0 ; i--){
    
    rev = rev + SpWord[i];
}
console.log("Entered String:", word);
if(SpWord === rev){
    console.log("Palindrome");
}
else{
    console.log("Not a palindrome sequence");
}
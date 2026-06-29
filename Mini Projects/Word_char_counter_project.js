let word = "This country is beautiful";

let count = 0;
let wordCount = 1;
for(let i = 0; i<word.length ;i++){
    if(word[i] == " "){
        wordCount++;
        continue;
    }
    else{
        count++;
    }
}
console.log("Input:",word);
console.log("Character count:",count);
console.log("Word count:", wordCount++);

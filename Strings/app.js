//1. Trimp Method
//timp() method only removes white spaces, it doesn't remove inbetween spaces.
let password = prompt("Enter you password: ");
let newpsw = password.trim();
console.log("Tripmed password: ", newpsw);
console.log("Entered password: ", password);

//2.toUpperCase and toLowerCase
let a = "Ankit Khandelwal";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a);

//3. indexOf
let b = "ILoveJavaScript";
console.log(b.indexOf("I"));
console.log(b.indexOf("Love"));
console.log(b.indexOf("English"));

//4. Method Chaining
let msg = "   hello   ";
console.log(msg);
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

// 5. Slice Method
let stm = "I am learning javaScirpt";
console.log(stm.slice(5,13));
let msg = "IloveCoding";
console.log(msg.slice(1,4));

let msg2 = "apnacollege";
console.log(msg2.slice(0, 4));//apna
console.log(msg2.slice(4,11));//college
console.log(msg2.slice(4, msg2.length))//college
console.log(msg2.slice(4));//college

//passing negative value
console.log(msg2.slice(-2)); //it means msg2.length - 2

//6.Replace Method
let msg3 = "I love Gaming";
console.log(msg3.replace("Gaming", "coding"));
console.log("Original Message: ", msg3);

//7. Repeat Method
let fruit = "Mango";
console.log(fruit.repeat(4));


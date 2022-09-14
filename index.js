let num = 13;
for(i=0;i<=num;i++){
if(num%i==0){
console.log(i);
}
}

let str ="madam";
let str1 = "";
for(i=0;i<=str.length-1;i++){
str1 = str1+str[i]
if(str1==str){
console.log("palindrome");
}else{
console.log("not palindrome");
}
}
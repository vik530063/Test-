// function to perform addition
function addition(a,b,c=3,d=0){
    return a+b+c+d;
}

//function to perform subtraction
function subtraction(a,b,c=0,d=0){
    return a-b-c-d;
}

//function to perform multiplication
function multiplication(a,b,c=3,d=1){
    return a*b*c*d;
}

//function to perform division
function division(a,b,c=1,d=1){
    return a/b/c/d;
}

//output 
console.log(addition(2,3));
console.log(subtraction(8,5,1));
console.log(multiplication(9,8));
console.log(division(8,2));

function fibonacci(num) {
// your code here
	let a = 0;
 let b = 1;

 let c = 0;
 
 for(let i = 2; i <= num; i++){
    c = a + b; 
    
    a = b; 

    b = c; 
 }
 
return  (num <= 1 ? num : b);
}

module.exports = fibonacci;
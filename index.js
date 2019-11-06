/* 
	This is the functions used to demonstrate the use of dynamic programming by sorting through the fibonacci sequence
 */
 
/* up down method using memoization */
var fibo = {1:1,2:1};

function up_down(a){
	if(fibo[a] != null){
		return fibo[a];
	}else{
		result = up_down(a-1) + up_down(a-2);
		fibo[a] = result;
		return result;
	}
}

/* bottom up method (Most efficient method) */
function bottom_up(n){
	var a = 1;
	var b = 1;
	var c = 1;
	for(i=2;i<n;i++){
		a = c;
		c = a+b;
		b = a;
	}
	return c;
}



function call(){
	var input = document.getElementById("fibinput").value;
	if(isNaN(input) || input <= 0){
		document.getElementById("fib").innerHTML ="Please input a positive number";	
	}else{
		console.log("Up down method");
		console.time("mytimer");
		document.getElementById("fib").innerHTML = up_down(input);
		console.timeEnd("mytimer");
		console.log(fibo);
		fibo = {1:1,2:1};
	}
}
function call_b(){
	var input = document.getElementById("fibinput").value;
	if(isNaN(input) || input <= 0){
		document.getElementById("fib").innerHTML ="Please input a positive number";	
	}else{
		console.log("Bottom up method");
		console.time("mytimer");
		document.getElementById("fib").innerHTML = bottom_up(input);
		console.timeEnd("mytimer");
	}
}



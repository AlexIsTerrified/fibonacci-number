/* This is the function used to demonstrate the use a memoization in dynamic programming by sorting through the fibonacci sequence
	I am aware that this isn't the most efficent way to sort through the fibonacci sequence but it's the one I'm demonstrating.
 */

var fibo = {1:1,2:1};

function fibonacci(a){
	if(fibo[a] != null){
		return fibo[a];
	}else{
		result = fibonacci(a-1) + fibonacci(a-2);
		fibo[a] = result;
		return result;
	}
}




function call(){
	var input = document.getElementById("fibinput").value;
	if(isNaN(input) || input <= 0){
		document.getElementById("fib").innerHTML ="Please input a positive number";	
	}else{
		console.time("mytimer");
		document.getElementById("fib").innerHTML = fibonacci(input);
		console.timeEnd("mytimer");
		console.log(fibo);
		fibo = {1:1,2:1};
	}
}


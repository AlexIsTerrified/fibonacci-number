var fibo = {1:1,2:1};

function up_down(a){
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
		document.getElementById("fib").innerHTML = up_down(input);
		console.timeEnd("mytimer");
		console.log(fibo);
		fibo = {1:1,2:1};
	}
}


$(document).ready(function(){

	// variable declarations
	var allowedOperations = [ '+', '-', '*', '/' ];
	var isOperationAllowed = false;


	// start of application
	alert("Welcome to My Basic Calculator!");

	var operation = prompt("What operation would you want? \n\n"
		+ "Please enter: \n"
		+ "+ for Addition \n"
		+ "- for Subtraction \n"
		+ "* for Multiplication \n"
		+ " / for Division");

	for(var x = 0; x < allowedOperations.length; x++){
		if(operation == allowedOperations[x]){
			isOperationAllowed = true;
		}
	}

	if(isOperationAllowed) {
		var num1 = 0;
		var num2 = 0;
		var total = 0;

		if(operation == '+') {
			num1 = parseInt(prompt("Enter first number:"));
			num2 = parseInt(prompt("Enter second number:"));

			total = num1 + num2;
		}

		alert("The computed value is " + total);
	} else {
		alert("Uh oh! The operation you've entered is not allowed.");
	}

	alert("Basic Calculator is exiting. Thankyou!")
	//end of application
});
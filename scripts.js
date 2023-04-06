let numbers= [4,17,3,50,2];
function displayNumbers() {
  let numberList = numbers.join(", "); 
  document.getElementById("main").innerHTML = numberList; 
}

function sum(){
	let sum = 0;
	for (let i=0;i<numbers.length;i++){
		sum +=numbers[i];
	}
	
	alert("The sum of the numbers is " + sum);
}

function mean(){
	let sum = 0;
	for (let i=0;i<numbers.length;i++){
		sum +=numbers[i];
	}
	let mean = sum/(numbers.length);
	
	alert("The mean of the numbers is " + mean);
}
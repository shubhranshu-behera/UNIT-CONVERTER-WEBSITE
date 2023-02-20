var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var opt_from,opt_to;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
opt_from = inputType.value;
opt_to   = resultType.value;


function myResult(){


// option_from and option_to

	opt_from = inputType.value;
	opt_to = resultType.value;


//  the input and resultType value and add formula
// ==================convert from centimeter

if(opt_from === "Centimeter" && opt_to==="kilometer"){
    //this is Centimeter to kilometer formula 
    result.value = Number(input.value) * 0.00001;
}else if(opt_from === "Centimeter" && opt_to==="meter"){
    //this is Centimeter to meter formula 
    result.value = Number(input.value) * 0.01;
}else if(opt_from === "Centimeter" && opt_to==="Centimeter"){
    //this is Centimeter to Centimeter formula 
    result.value = input.value
}
// ==================convertion from meter
	if(opt_from === "meter" && opt_to==="kilometer"){
		//this is meter to kilometer formula 
		result.value = Number(input.value) * 0.001;
	}else if(opt_from === "meter" && opt_to==="Centimeter"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 100;

	}else if(opt_from === "meter" && opt_to==="meter"){
		//this is meter to meter formula 
		result.value = input.value
	}

// =============convertion from kilometer

	if(opt_from === "kilometer" && opt_to==="meter"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) * 1000;
	}else if(opt_from === "kilometer" && opt_to==="Centimeter"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 100000;
	}else if(opt_from === "kilometer" && opt_to==="kilometer"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	}

	
	
}
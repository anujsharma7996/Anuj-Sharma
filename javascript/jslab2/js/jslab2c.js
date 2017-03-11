function func(){var date1 = new Date ( document
					.getElementById("d1")
					.value);
var date2 = new Date("01/14/2017");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
console.log(diffDays);
var xyz=document
		.querySelector("#final_value")
		.textContent;
	xyz=xyz+" "+diffDays;
	document
		.querySelector("#final_value")
		.textContent = xyz;
}



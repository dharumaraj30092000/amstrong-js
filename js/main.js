var input=1634;
var result=0;
var sub1=input;
var sub2=input;
var times=0;

while(sub2>0){
	var rem1=sub2%10;
	sub2=(sub2-rem1)/10;
	times++;
}

while(input>0){
	let rem2=input%10;
	input=(input-rem2)/10;
	result+=rem2**times;
}
if(result==sub1){
		console.log("this is amstrong");
}
else {
	console.log("this is not amstrong");
}
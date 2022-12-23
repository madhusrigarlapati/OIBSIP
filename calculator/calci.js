function dis(val){
	document.getElementById("result").value+=val
}
function solve(){
	let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
function clr(){
    document.getElementById("result").value = ""
}
function del(){
	a = document.getElementById("result").value;
	document.getElementById("result").value=a.substring(0,a.length-1);
}

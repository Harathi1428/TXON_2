
function ac(){
 document.getElementById("res").value="";
}
function sh(input)
{
document.getElementById("res").value+=input;
}
function cal()
{
var out=eval(document.getElementById("res").value);
document.getElementById("res").value=out;
}
function del()
{
document.getElementById("res").value=document.getElementById("res").value.slice(0,-1);
}
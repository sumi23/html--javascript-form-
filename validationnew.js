function pwdChange()
{
	var pass=document.getElementById("myPwd");
	if(pass.type==="password")
    {
		pass.type="text";
	}
	else
	{
		pass.type="password";
	}
}
function pwdValidate()
{
  var str = document.getElementById("myPwd").innerHTML;
  var patt ="(?=.*[0-9])";
  if( str.match(patt))
  {
	  console.log("correct");
	  alert("correct");}
  else {alert("wrong");}
  
}
function displayHide()
{
   var display=document.getElementById("display");
   display.style.display="none";
}
function dataDisplay()
{
	var data=document.getElementById("current");
	if(data.style.display=="none")
	{
		data.style.display="block";
	}
	else
    {
		data.style.display="block";
		var travgrp=document.getElementsByName("TRAVELAMENITIES");
		document.getElementById("NAME1").innerHTML=document.getElementById("NAME").value;
		document.getElementById("EMAIL1").innerHTML=document.getElementById("EMAIL").value;
		document.getElementById("MOBILENUMBER1").innerHTML=document.getElementById("MOBILENUMBER").value;
		var i,j;
		var txt="";
		var gengrp=document.getElementsByName("GENDER");
		var len1=gengrp.length;
		for(j=0;j<len1;j++)
		{
			if(gengrp[j].checked==true)
			{
				txt+=gengrp[j].value;
			}
		} 
		document.getElementById("GENDER1").innerHTML=txt;
		document.getElementById("AGE1").innerHTML=document.getElementById("AGE").value;
		document.getElementById("DATEOFJOURNEY1").innerHTML=document.getElementById("DATEOFJOURNEY").value;
		var len2=travgrp.length;
		var txt1="";
		for(j=0;j<len2;j++)
		{
			if(travgrp[j].checked==true)
			{
				txt1+=travgrp[j].value+" ";
			}
		}
		document.getElementById("TRAVELAMENITIES1").innerHTML=txt1;
		document.getElementById("TRAVELTIME1").innerHTML=document.getElementById("TRAVELTIME").value;
		document.getElementById("FAVORITECOLOUR1").innerHTML=document.getElementById("COLOUR").value;
		document.getElementById("PROOF1").innerHTML=document.getElementById("PROOF").value;
	}
}
function data()
{
	var data=document.getElementById("myForm");
	var txt="";
	var txt1;
	var i;
	for(i=0;i<data.length;i++)
    { 
		txt = txt + data.elements[i].name+": "+data.elements[i].value + "<br>";
	}
	for(i=0;i<data.length;i++)
    { 
		txt1 = txt1 + data.elements[i].type + "<br>";
	}
	document.getElementById("demo").innerHTML = txt;	
    document.getElementById("demo1").innerHTML= txt1;
}

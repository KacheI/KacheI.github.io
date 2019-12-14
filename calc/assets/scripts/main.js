function plus() {
	var chis1, chis2, result;
	chis1=document.getElementById('chislo1').value;
	chis1=parseInt(chis1);

	chis2=document.getElementById('chislo2').value;
	chis2=parseInt(chis2);
	result=chis1 + chis2;
	document.getElementById('Otvet').innerHTML = result
}
function minus() {
	chis1=document.getElementById('chislo1').value;
	chis1=parseInt(chis1);

	chis2=document.getElementById('chislo2').value;
	chis2=parseInt(chis2);
	result=chis1 - chis2;
	document.getElementById('Otvet').innerHTML = result
}
function multiply() {
	var chis1, chis2, result;
	chis1=document.getElementById('chislo1').value;
	chis1=parseInt(chis1);

	chis2=document.getElementById('chislo2').value;
	chis2=parseInt(chis2);
	result=chis1 * chis2;
	document.getElementById('Otvet').innerHTML = result
}
function division() {	
	var chis1, chis2, result;
	chis1=document.getElementById('chislo1').value;
	chis1=parseInt(chis1);

	chis2=document.getElementById('chislo2').value;
	chis2=parseInt(chis2);
	result=chis1 / chis2;
	document.getElementById('Otvet').innerHTML = result
}
function division1() {	
	var chis1, chis2, result;
	chis1=document.getElementById('chislo1').value;
	chis1=parseInt(chis1);

	chis2=document.getElementById('chislo2').value;
	chis2=parseInt(chis2);
	result=chis1 % chis2;
	document.getElementById('Otvet').innerHTML = result
}
function multiply1() {	
	var chis1, result;
	chis1=document.getElementById('chislo1').value;
	chis1=parseInt(chis1);
	result=chis1 * chis1;
	document.getElementById('Otvet').innerHTML = result
}
function multiply2() {	
	var chis1, result;
	chis1=document.getElementById('chislo1').value;
	chis1=parseInt(chis1);
	result=chis1 * chis1 * chis1;
	document.getElementById('Otvet').innerHTML = result
}
function division2() {	
	var chis1, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16, n17, n18, n19, n20, n21,result;
	chis1=document.getElementById('chislo1').value;
	chis1=parseInt(chis1);
	n1=(1+chis1/1)/2;
	n2=(n1+chis1/n1)/2;
	n3=(n2+chis1/n2)/2;
	n4=(n3+chis1/n3)/2;
	n5=(n4+chis1/n4)/2;
	n6=(n5+chis1/n5)/2;
	n7=(n6+chis1/n6)/2;
	n8=(n7+chis1/n7)/2;
	n9=(n8+chis1/n8)/2;
	n10=(n9+chis1/n9)/2;
	n11=(n10+chis1/n10)/2;
	n12=(n11+chis1/n11)/2;
	n13=(n12+chis1/n12)/2;
	n14=(n13+chis1/n13)/2;
	n15=(n14+chis1/n14)/2;
	n16=(n15+chis1/n15)/2;
	n17=(n16+chis1/n16)/2;
	n18=(n17+chis1/n17)/2;
	n19=(n18+chis1/n18)/2;
	n20=(n19+chis1/n19)/2;
	if (n20%1<0.01) {
	n21=n20-n20%1;}
	else {n21=n20/1;}
	document.getElementById('Otvet').innerHTML = n21
}
function division3() {	
	var chis1,result;
	chis1=document.getElementById('chislo1').value;
	chis1=parseInt(chis1);
	result=chis1/3
	document.getElementById('Otvet').innerHTML = result
}
function factorial() {
    var chis1,b,n;
    chis1 = document.getElementById("chislo1").value;
    chis1 = parseInt(chis1);
    b=1;
    n=chis1;
    for (var i=1;i<=chis1;i++){
        b=n*b;
        n--;

    }


    document.getElementById("Otvet").innerHTML = b;

}
/*

*/


function start(e) {
	var name =[
	{
		char:'古',
		big5:'A56A',
		cns:'1-462C',
		unicode:'53E4'
	},
	{
		char:'哲',
		big5:'ADF5',
		cns:'1-5458',
		unicode:'54F2'

	},
	{
		char:'銘',
		big5:'BBCA',
		cns:'1-6B53',
		unicode:'9298'
	}
	];
	var ele = document.getElementById("div1");

	for(var i=0;i<3;i++){
		ele.innerHTML +=name[i].char;
		ele.innerHTML +='big5=';
		ele.innerHTML +=name[i].big5;
		ele.innerHTML +='cns=';
		ele.innerHTML +=name[i].cns;
		ele.innerHTML +='unicode=';
		ele.innerHTML +=name[i].unicode;
		ele.innerHTML +='<br>';
	}

}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );

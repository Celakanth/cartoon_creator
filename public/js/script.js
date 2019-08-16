	var imgcnta = 1;
	var imgcntb = 2;
	var imgcntc = 3;
	var hgt = window.innerHeight;
	hgt = hgt - 74;
	var nxtele;
	var gto;
	var gtoa;
	var gtob;
	var stimgid;
	var stimgida;
	var stimgidb;
	var picele;
	var newim;
	var nextele;
	var attr = ["head","face","ears","eyes","noses","fhair","mouths","body"];
	var data = null
	$(document).ready(() =>{
		$.ajax({
			url: './js/data/images.json',
			dataType: 'json',
			success: (jsonData) =>{
				data = jsonData;
				head();
			}
		})
	})

	$("input:radio").change(function(e){
		setSelected(0, e.target.value)
	})

	const setSelected = (movement, attribute) =>{
		let currentSelected = attr.indexOf(nxtele);
		if(movement === 0){
			nxtele = attribute;
		}
		else
		{
			nxtele = attr[currentSelected + movement];
		}

		setVisable(nxtele);
		$("input[name=selclk][value=" + nxtele + "]").prop('checked', true);
	}

	const setVisable = (selectedAttr) =>{
		attr.forEach((item) => {
			if(item != selectedAttr){
				$('#' + item).hide();
			}
			else{
				$('#' + item).show();
			}
		});
	}

	$("#prvatb").on('click',() => {
		var y;
		var callfn;

		setSelected(-1)
	})

	$("#nxtatb").on('click', () => {
		var y;
		var callfn;
		setSelected(1)
	})

	document.getElementById("drawbx").style.height = hgt + "px";
	function gtid(idis){
	nextele = idis;
	if(nextele == "headbx") {
			picele = "headbx";
			nxtele = "head";
			head();
		}
	if(nextele == "facebx") {
			picele = "facebx";
			nxtele = "face";
			face();
		}
	if(nextele == "eyesbx") {
			picele = "eyesbx";
			nxtele="eyes";
			eyes();
		}
	if(nextele == "nosesbx") {
			picele = "nosesbx";
			nxtele="noses";
			noses();
		}

	if(nextele == "earsbx") {
			picele = "earsbx";
			nxtele = "ears";
			ears();
		}
		if(nextele == "earsabx") {
			picele = "earsabx";
			nxtele="ears";
			ears();
		}
			if(nextele == "fhairbx") {

			picele = "fhairbx";
			nxtele = "fhair";
			fhair();
		}
		if(nextele == "mouthsbx") {
			picele = "mouthsbx";
			nxtele="mouths";
			mouths();
		}
		if(nextele == "bodybx") {
			picele = "bodybx";
			nxtele="body";
			body();
		}

	}
	document.getElementById("clele").onclick = function() {

		if(nxtele == "ears"){
			clele = "earsbx";
			document.getElementById(clele).src="";
			clele = "earsabx";
			document.getElementById(clele).src="";
	}
		else {
			var clele = nxtele +"bx";
			document.getElementById(clele).src="";
		}
	}
	function head(){
		console.log(data.attributes.head)
		nxtele = data.attributes.head.name;
		gto = "imgnm";
		gtoa ="imgnma";
		gtob ="imgnmb";
		stimgid ="stimg";
		stimgida ="stimga";
		stimgidb ="stimgb";
		setImage('imgnm','head', 1);
		setImage('imgnma','head', 2);
		setImage('imgnmb','head', 3);
		setSelected(0, 'head')


	}

	const setImage = (element, selectedAttr, pos) => {
		const filePath = data.imagepath + selectedAttr + pos + '.png'
		$('#'+ element).attr('src', filePath);
	}

	function headclk(){
		//clear();
		var ptha = "img/rs/head";
		var pthb = ".png";
		newim = ptha + imgcnta + pthb;
		document.getElementById("headbx").src = newim;
		dragElement(document.getElementById("headbx"));
	}
	function headclka(){
		//clear();
		var ptha = "img/rs/head";
		var pthb = ".png";
		newim = ptha + imgcntb + pthb;
			document.getElementById("headbx").src = newim;
			dragElement(document.getElementById("headbx"));
	}
	function headclkb(){
		//clear();
		var ptha = "img/rs/head";
		var pthb = ".png";
		newim = ptha + imgcntc + pthb;
		document.getElementById("headbx").src = newim;
		dragElement(document.getElementById("headbx"));

	}

	function face(){
		nxtele = "face";
		gto = "fc";
		gtoa ="fca";
		gtob ="fcb";
		stimgid ="stfcimg";
		stimgida ="stfcimga";
		stimgidb ="stfcimgb";
		imgcnta = 1;
		imgcntb = 2;
		imgcntc = 3



	}

	function faceclk(){
		//clear();
		var ptha = "img/rs/face";
		var pthb = ".png";
		newim = ptha + imgcnta + pthb;
		document.getElementById("facebx").src = newim;
		dragElement(document.getElementById("facebx"));

	}
	function faceclka(){
		//clear();
		var ptha = "img/rs/face";
		var pthb = ".png";
		newim = ptha + imgcntb + pthb;

		document.getElementById("facebx").src = newim;
		dragElement(document.getElementById("facebx"));
	}
	function faceclkb(){
		//clear();
		var ptha = "img/rs/face";
		var pthb = ".png";
		newim = ptha + imgcntc + pthb;
		document.getElementById("facebx").src = newim;
		dragElement(document.getElementById("facebx"));

	}

	function ears(){
		nxtele ="ears";
		gto = "ear";
		gtoa ="eara";
		gtob ="earb";
		stimgid ="stearimg";
		stimgida ="stearimga";
		stimgidb ="stearimgb";
		imgcnta = 1;
		imgcntb = 2;
		imgcntc = 3



	}
	function earpclk(){

		var ptha = "img/rs/ears";
		var pthb = ".png";

		newim = ptha + imgcnta + 1 + pthb;

		document.getElementById("earsbx").src = newim;
		dragElement(document.getElementById("earsbx"));


		newim = ptha + imgcnta + 2 + pthb;
		document.getElementById("earsabx").src = newim;
		dragElement(document.getElementById("earsabx"));
	}

	function earpclka(){
		var ptha = "img/rs/ears";
		var pthb = ".png";

		newim = ptha + imgcntb + 1 + pthb;

		document.getElementById("earsbx").src = newim;
		dragElement(document.getElementById("earsbx"));


		newim = ptha + imgcntb + 2 + pthb;
		document.getElementById("earsabx").src = newim;
		dragElement(document.getElementById("earsabx"));


	}

	function earpclkb(){
		var ptha = "img/rs/ears";
		var pthb = ".png";


		newim = ptha + imgcntc + 1 + pthb;
		document.getElementById("earsbx").src = newim;
		dragElement(document.getElementById("earsbx"));



		newim = ptha + imgcntc + 2 + pthb;
		document.getElementById("earsabx").src = newim;
		dragElement(document.getElementById("earsabx"));


	}

	function eyes(){
		nxtele ="eyes";
		gto = "eye";
		gtoa ="eyea";
		gtob ="eyeb";
		stimgid ="steyeimg";
		stimgida ="steyeimga";
		stimgidb ="steyeimgb";
		imgcnta = 1;
		imgcntb = 2;
		imgcntc = 3
	}

	function eyesclk(){
		//clear();
		var ptha = "img/rs/eyes";
		var pthb = ".png";
		newim = ptha + imgcnta + pthb;
		document.getElementById("eyesbx").src = newim;
		dragElement(document.getElementById("eyesbx"));

	}

	function eyesclka(){
		//clear();
		var ptha = "img/rs/eyes";
		var pthb = ".png";
		newim = ptha + imgcntb + pthb;

		document.getElementById("eyesbx").src = newim;
		dragElement(document.getElementById("eyesbx"));
	}

	function eyesclkb(){
		//clear();
		var ptha = "img/rs/eyes";
		var pthb = ".png";
		newim = ptha + imgcntc + pthb;
		document.getElementById("eyesbx").src = newim;
		dragElement(document.getElementById("eyesbx"));

	}

	function noses(){
		nxtele ="noses";
		gto = "nse";
		gtoa ="nsea";
		gtob ="nseb";
		stimgid ="stnsimg";
		stimgida ="stnsimga";
		stimgidb ="stnsimgb";
		imgcnta = 1;
		imgcntb = 2;
		imgcntc = 3
	}

	function nosesclk(){
		//clear();
		var ptha = "img/rs/noses";
		var pthb = ".png";
		newim = ptha + imgcnta + pthb;
		document.getElementById("nosesbx").src = newim;
		dragElement(document.getElementById("nosesbx"));

	}

	function nosesclka(){
		//clear();
		var ptha = "img/rs/noses";
		var pthb = ".png";
		newim = ptha + imgcntb + pthb;

		document.getElementById("nosesbx").src = newim;
		dragElement(document.getElementById("nosesbx"));
	}

	function nosesclkb(){
		//clear();
		var ptha = "img/rs/noses";
		var pthb = ".png";
		newim = ptha + imgcntc + pthb;
		document.getElementById("nosesbx").src = newim;
		dragElement(document.getElementById("nosesbx"));

	}

	function fhair(){
		nxtele ="fhair";
		gto = "fr";
		gtoa ="fra";
		gtob ="frb";
		stimgid ="stfhairimg";
		stimgida ="stfhairimga";
		stimgidb ="stfhairimgb";
		imgcnta = 1;
		imgcntb = 2;
		imgcntc = 3
	}

	function fhairclk(){
		//clear();
		var ptha = "img/rs/fhair";
		var pthb = ".png";
		newim = ptha + imgcnta + pthb;
		document.getElementById("fhairbx").src = newim;
		dragElement(document.getElementById("fhairbx"));

	}

	function fhairclka(){
		//clear();
		var ptha = "img/rs/fhair";
		var pthb = ".png";
		newim = ptha + imgcntb + pthb;

		document.getElementById("fhairbx").src = newim;
		dragElement(document.getElementById("fhairbx"));
	}

	function fhairclkb(){
		//clear();
		var ptha = "img/rs/fhair";
		var pthb = ".png";
		newim = ptha + imgcntc + pthb;
		document.getElementById("fhairbx").src = newim;
		dragElement(document.getElementById("fhairbx"));
	}

	function mouths(){
		nxtele ="mouths";
		gto = "mth";
		gtoa ="mtha";
		gtob ="mthb";
		stimgid ="stmouthimg";
		stimgida ="stmouthimga";
		stimgidb ="stmouthimgb";
		imgcnta = 1;
		imgcntb = 2;
		imgcntc = 3
	}

	function mouthsclk(){
		//clear();
		var ptha = "img/rs/mouths";
		var pthb = ".png";
		newim = ptha + imgcnta + pthb;
		document.getElementById("mouthsbx").src = newim;
		dragElement(document.getElementById("mouthsbx"));
	}

	function mouthsclka(){
		//clear();
		var ptha = "img/rs/mouths";
		var pthb = ".png";
		newim = ptha + imgcntb + pthb;

		document.getElementById("mouthsbx").src = newim;
		dragElement(document.getElementById("mouthsbx"));
	}

	function mouthsclkb(){
		//clear();
		var ptha = "img/rs/mouths";
		var pthb = ".png";
		newim = ptha + imgcntc + pthb;
		document.getElementById("mouthsbx").src = newim;
		dragElement(document.getElementById("mouthsbx"));
	}

	function body(){
		nxtele ="body";
		gto = "bdy";
		gtoa ="bdya";
		gtob ="bdyb";
		stimgid ="stbodyimg";
		stimgida ="stbodyimga";
		stimgidb ="stbodyimgb";
		imgcnta = 1;
		imgcntb = 2;
		imgcntc = 3
	}

	function bodyclk(){
		//clear();
		var ptha = "img/rs/body";
		var pthb = ".png";
		newim = ptha + imgcnta + pthb;
		document.getElementById("bodybx").src = newim;
		dragElement(document.getElementById("bodybx"));
	}

	function bodyclka(){
		//clear();
		var ptha = "img/rs/body";
		var pthb = ".png";
		newim = ptha + imgcntb + pthb;
			document.getElementById("bodybx").src = newim;
			dragElement(document.getElementById("bodybx"));
	}

	function bodyclkb(){
		//clear();
		var ptha = "img/rs/body";
		var pthb = ".png";
		newim = ptha + imgcntc + pthb;
		document.getElementById("bodybx").src = newim;
		dragElement(document.getElementById("bodybx"));
	}

	function dragElement(elmnt) {

		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		if (document.getElementById(elmnt.id + "header")) {

			/* if present, the header is where you move the DIV from:*/
			document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

		} else {
			/* otherwise, move the DIV from anywhere inside the DIV:*/
			elmnt.onmousedown = dragMouseDown;
		}
	}

  	function dragMouseDown(e) {
		e = e || window.event;

		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;


		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}

		function closeDragElement() {
			/* stop moving when mouse button is released:*/
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}
	document.getElementById("wide").onclick = function() {

		var imgbx = document.getElementById(picele);
		var wider = imgbx.offsetWidth;
		var higher = imgbx.offsetHeight;
		wider += 10;
		document.getElementById(picele).style.width = wider;
		document.getElementById(picele).style.height = higher;

	}

	document.getElementById("narrow").onclick = function() {


		var imgbx = document.getElementById(picele);
		var wider = imgbx.offsetWidth;
		var higher = imgbx.offsetHeight;
		wider -= 10;
		document.getElementById(picele).style.width = wider;
		document.getElementById(picele).style.height = higher;

	}

	document.getElementById("long").onclick = function() {
		var imgbx = document.getElementById(picele);
		var wider = imgbx.offsetWidth;
		var higher = imgbx.offsetHeight;
		higher += 10;
		document.getElementById(picele).style.width = wider;
		document.getElementById(picele).style.height = higher;
	}

	document.getElementById("short").onclick = function() {
		var imgbx = document.getElementById(picele);
		var wider = imgbx.offsetWidth;
		var higher = imgbx.offsetHeight;
		higher -= 10;
		document.getElementById(picele).style.width = wider;
		document.getElementById(picele).style.height = higher;
	}

	document.getElementById("nxt").onclick =function() {
		var imgv ="<img class='imgtn' onclick='"
		var imgw = "clk() 'id='"
		var imgx = "'src='img/rs/";
		var imga = imgv + nxtele + imgw + gto +imgx + nxtele;
		var imgva ="<img class='imgtn' onclick='"
		var imgwa = "clka() 'id='"
		var imgxa = "'src='img/rs/";
		var imgb = imgva + nxtele + imgwa + gtoa +imgxa + nxtele;
		var imgvb ="<img class='imgtn' onclick='"
		var imgwb = "clkb() 'id='"
		var imgxb = "'src='img/rs/";
		var imgc = imgvb + nxtele + imgwb + gtob +imgxb + nxtele;
		imgcnta += 3;
		imgcntb += 3;
		imgcntc += 3;
		if(nxtele == "head") {
			if(imgcnta >39 || imgcntb >39 || imgcntc > 39) {
				imgcnta = 1;
				imgcntb = 2;
				imgcntc = 3;

			}
		}
		if(nxtele =="face") {

		if(imgcnta >9 || imgcntb >9 || imgcntc > 9) {


			imgcnta = 1;
			imgcntb = 2;
			imgcntc = 3;

		}
		}
		if(nxtele == "earp") {

		if(imgcnta >15 || imgcntb >15 || imgcntc > 15) {


			imgcnta = 1;
			imgcntb = 2;
			imgcntc = 3;

		}
		}

		if(nxtele == "eyes") {

		if(imgcnta >21 || imgcntb >21 || imgcntc > 21) {


			imgcnta = 1;
			imgcntb = 2;
			imgcntc = 3;

		}
		}
		if(nxtele == "noses") {

		if(imgcnta >33 || imgcntb >33 || imgcntc > 33) {


			imgcnta = 1;
			imgcntb = 2;
			imgcntc = 3;

		}

		}

		if(nxtele == "mouths") {

		if(imgcnta >33 || imgcntb >33 || imgcntc > 33) {


			imgcnta = 1;
			imgcntb = 2;
			imgcntc = 3;

		}

		}
		if(nxtele == "fhair") {

		if(imgcnta >18 || imgcntb >18 || imgcntc > 18) {


			imgcnta = 1;
			imgcntb = 2;
			imgcntc = 3;

		}

		}
		if(nxtele == "body") {

		if(imgcnta >36 || imgcntb >36 || imgcntc > 36) {


			imgcnta = 1;
			imgcntb = 2;
			imgcntc = 3;

		}

		}
		var imgd = ".png'>"

		var pth = imga + imgcnta + imgd;
		var ptha = imgb + imgcntb + imgd;		;
		var pthb = imgc + imgcntc + imgd;

		document.getElementById(stimgid).innerHTML = pth;
		document.getElementById(stimgida).innerHTML = ptha;
		document.getElementById(stimgidb).innerHTML = pthb;
	}

	document.getElementById("prv").onclick =function() {

		var imgv ="<img class='imgtn' onclick='"
		var imgw = "clk() 'id='"
		var imgx = "'src='img/rs/";

		var imga = imgv + nxtele + imgw + gto +imgx + nxtele;

		var imgva ="<img class='imgtn' onclick='"
		var imgwa = "clka() 'id='"
		var imgxa = "'src='img/rs/";

		var imgb = imgva + nxtele + imgwa + gtoa +imgxa + nxtele;

		var imgvb ="<img class='imgtn' onclick='"
		var imgwb = "clkb() 'id='"
		var imgxb = "'src='img/rs/";

		var imgc = imgvb + nxtele + imgwb + gtob +imgxb + nxtele;


		imgcnta -= 3;
		imgcntb -= 3;
		imgcntc -= 3;
		if(nxtele == "head") {

		if(imgcnta <1 || imgcntb <1 || imgcntc <1) {


			imgcnta = 37;
			imgcntb = 38;
			imgcntc = 39;

		}
		}
		if(nxtele =="face") {

		if(imgcnta <1|| imgcntb <1 || imgcntc <1) {


			imgcnta = 7;
			imgcntb = 8;
			imgcntc = 9;

		}
		}
		if(nxtele == "earp") {

		if(imgcnta <1 || imgcntb <1 || imgcntc <1) {


			imgcnta = 13;
			imgcntb = 14;
			imgcntc = 15;

		}
		}

		if(nxtele == "eyes") {

		if(imgcnta <1 || imgcntb <1 || imgcntc <1) {


			imgcnta = 19;
			imgcntb = 20;
			imgcntc = 21;

		}
		}
		if(nxtele == "noses") {

		if(imgcnta <1 || imgcntb <1 || imgcntc <1) {


			imgcnta = 31;
			imgcntb = 32;
			imgcntc = 33;

		}
		}

		if(nxtele == "mouths") {

		if(imgcnta <1 || imgcntb <1 || imgcntc <1) {


			imgcnta = 31;
			imgcntb = 32;
			imgcntc = 33;

		}
		}
		if(nxtele == "body") {

		if(imgcnta <1 || imgcntb <1 || imgcntc <1) {


			imgcnta = 34;
			imgcntb = 35;
			imgcntc = 36;

		}
		}

		if(nxtele == "fhair") {

		if(imgcnta <1 || imgcntb <1 || imgcntc <1) {


			imgcnta = 16;
			imgcntb = 17;
			imgcntc = 18;

		}
		}
		var imgd = ".png'>"

		var pth = imga + imgcnta + imgd;
		var ptha = imgb + imgcntb + imgd;		;
		var pthb = imgc + imgcntc + imgd;

		document.getElementById(stimgid).innerHTML = pth;
		document.getElementById(stimgida).innerHTML = ptha;
		document.getElementById(stimgidb).innerHTML = pthb;
	}

	document.getElementById("clear").onclick = function() {
		var del;
		var delconf = confirm("Are you sure you want to clear, all changes will be lost");
		if (delconf === true){
			location.reload();
		}
	}

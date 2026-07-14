async function ambilText1(file){
	let ambilText=await fetch(file);
	let ubahkeText=await ambilText.text();
	document.getElementById("isiKonten2").innerHTML=ubahkeText;
}
ambilText1("para1.txt");

function sanwaSibuk() {
  alert("saat ini situs web sanwadirect sedang sibuk, silahkan menggunakan alternative dari laman yahoo jp");
}

document.getElementById("lebarLayar").innerHTML = "lebar layar " + screen.width;
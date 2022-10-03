function halo(nama) {
	alert('hai '+ nama + ' salam kenal');
}
function tampilpesan(callback) {
	const nama = prompt ('silahkan masukkan nama anda:');
	callback(nama)
}
tampilpesan(halo);
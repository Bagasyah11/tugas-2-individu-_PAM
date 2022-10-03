function tugas(matakuliah,selesai) {
	console.log('start' );
	selesai();
}
function selesai(){
setTimeout(() => {
	console.log('finish');
	alert('selesai mengerjakan tugas');
}, 1000)

}
tugas ('Pengembangan Aplikasi Mobile',selesai);
function kurang() {
  let jumlahPegawai = document.getElementById("jmlPegawai").value;
  let hadir = document.getElementById("hadir").value;
  let hasil = jumlahPegawai - hadir;
  document.getElementById("tidakHadir").value = hasil;
  hasilnya();
}

function keterangan() {
  let dinasLuar = Number(document.getElementById("dl").value);
  let ijin = Number(document.getElementById("ijin").value);
  let sakit = Number(document.getElementById("sakit").value);
  let hasil = dinasLuar + ijin + sakit;
  document.getElementById("jmlDlIjinSakit").value = hasil;
  hasilnya();
}

function hasilnya() {
  let totalA = document.getElementById("tidakHadir").value;
  let totalB = document.getElementById("jmlDlIjinSakit").value;
  let hasilAkhir = totalA - totalB;
  document.getElementById("tanpaKet").value = hasilAkhir;
}

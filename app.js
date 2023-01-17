// Laporan Apel Pagi

// - Jumlah Pegawai
// - Hadir
// - Tidak Hadir
// - Dinas Luar
// - Ijin
// - Sakit
// - Tanpa Keterangan
$(document).ready(function () {
  $("input").change(function (e) {
    e.preventDefault();
    // hadir dan tidak hadir
    const jmlPegawai = document.getElementById("jmlPegawai").value;
    const hadir = document.getElementById("hadir").value;
    const hasil1 = jmlPegawai - hadir;
    document.getElementById("tidakHadir").value = hasil1;

    // keterangan
    const dinasLuar = Number(document.getElementById("dl").value);
    const sakit = Number(document.getElementById("sakit").value);
    const ijin = Number(document.getElementById("ijin").value);

    const hasilKet = dinasLuar + sakit + ijin;
    const jmlDlIjinSakit = (document.getElementById("jmlDlIjinSakit").value =
      hasilKet);

    document.getElementById("tanpaKet").value = hasil1 - hasilKet;
  });
});

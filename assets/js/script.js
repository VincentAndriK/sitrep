function getMonthName(monthIndex) {
  const arrayBulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  return arrayBulan[monthIndex];
}

function updateLinks(link) {
  const diseases = [
    "PMK", "LSD", "Rabies", "HPAI", "Anthraks",
    "SE", "Jembrana", "ASF", "CSF", "Brucellosis", "Surra"
  ];
  diseases.forEach(disease => {
    $("." + disease).attr("href", `./${disease}/${link}.html`);
  });
}

function loadFirst() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth()).padStart(2, "0");
  const namaBulan = getMonthName(today.getMonth() - 1);
  const link = `${year}${month}`;

  $(".bulanIni").text(`${namaBulan} ${year}`);
  $("#report-month").val(`${year}-${month}`).attr("max", `${year}-${month}`);
  updateLinks(link);
}

function onReport() {
  Swal.fire({
  title: "Data berhasil diperbaharui!",
  icon: "success"
});
  const reportMonth = $("#report-month").val();
  if (!reportMonth) {
    alert("Silakan pilih bulan terlebih dahulu. / Please select a month first.");
    return;
  }
  const [year, month] = reportMonth.split("-");
  const namaBulan = getMonthName(parseInt(month, 10) - 1);
  const link = `${year}${month}`;

  $(".bulanIni").text(`${namaBulan} ${year}`);
  updateLinks(link);
}

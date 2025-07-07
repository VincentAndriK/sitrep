function loadFirst() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth()).padStart(2, "0");
    const arrayBulan = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    var namaBulan = arrayBulan[today.getMonth() - 1];
    var link = `${year}${month}`;

    

    $(".bulanIni").each(function () {
      $(this).text(`${namaBulan} ${year}`);
    });
    $("#report-month").each(function () {
      $(this).attr("value", `${year}-${month}`);
    });
    $("#report-month").each(function () {
      $(this).attr("max", `${year}-${month}`);
    });
    $(".PMK").each(function () {
      $(this).attr("href", "./PMK/" + link + ".html");
    });
    $(".LSD").each(function () {
      $(this).attr("href", "./LSD/" + link + ".html");
    });
    $(".Rabies").each(function () {
      $(this).attr("href", "./Rabies/" + link + ".html");
    });
    $(".HPAI").each(function () {
      $(this).attr("href", "./HPAI/" + link + ".html");
    });
    $(".Anthraks").each(function () {
      $(this).attr("href", "./Anthraks/" + link + ".html");
    });
    $(".SE").each(function () {
      $(this).attr("href", "./SE/" + link + ".html");
    });
    $(".Jembrana").each(function () {
      $(this).attr("href", "./Jembrana/" + link + ".html");
    });
    $(".ASF").each(function () {
      $(this).attr("href", "./ASF/" + link + ".html");
    });
    $(".CSF").each(function () {
      $(this).attr("href", "./CSF/" + link + ".html");
    });
    $(".Brucellosis").each(function () {
      $(this).attr("href", "./Brucellosis/" + link + ".html");
    });
    $(".Surra").each(function () {
      $(this).attr("href", "./Surra/" + link + ".html");
    });
  }

  function onReport() {
    const reportMonth = document.getElementById("report-month").value;
    if (reportMonth) {
      const [year, month] = reportMonth.split("-");
      var link = `${year}${month}`;
      var bulan = month;
      var tahun = year;
    }
    else {
      alert("Silakan pilih bulan terlebih dahulu. / Please select a month first.");
    }
    const arrayBulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];
    var namaBulan = arrayBulan[parseInt(bulan) - 1];
     $(".bulanIni").each(function () {
      $(this).text(`${namaBulan} ${tahun}`);
    });
    $(".PMK").each(function () {
      $(this).attr("href", "./PMK/" + link + ".html");
    });
    $(".LSD").each(function () {
      $(this).attr("href", "./LSD/" + link + ".html");
    });
    $(".Rabies").each(function () {
      $(this).attr("href", "./Rabies/" + link + ".html");
    });
    $(".HPAI").each(function () {
      $(this).attr("href", "./HPAI/" + link + ".html");
    });
    $(".Anthraks").each(function () {
      $(this).attr("href", "./Anthraks/" + link + ".html");
    });
    $(".SE").each(function () {
      $(this).attr("href", "./SE/" + link + ".html");
    });
    $(".Jembrana").each(function () {
      $(this).attr("href", "./Jembrana/" + link + ".html");
    });
    $(".ASF").each(function () {
      $(this).attr("href", "./ASF/" + link + ".html");
    });
    $(".CSF").each(function () {
      $(this).attr("href", "./CSF/" + link + ".html");
    });
    $(".Brucellosis").each(function () {
      $(this).attr("href", "./Brucellosis/" + link + ".html");
    });
    $(".Surra").each(function () {
      $(this).attr("href", "./Surra/" + link + ".html");
    });
  }
var xhr = new XMLHttpRequest();


xhr.open("GET", "https://www.dreamlo.com/lb/LHPspFR7ik69KksFmtQS2QV-VWbM7Nlk-5F6XlOdoUsA/js/", true);
xhr.send();

document.write(xhr.responseText);
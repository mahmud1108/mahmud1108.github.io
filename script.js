const api = document.querySelector(".api");
function memunculkanApi() {
  api.classList.replace("apii", "api1");
}

let i = 0,
  text;
text = "Selamat Ulang Tahun Ayangkuuuuu!!!";
function mengetik() {
  if (i < text.length) {
    document.querySelector(".ucapan").innerHTML += text.charAt(i);
    i++;
    setTimeout(mengetik, 150);
  }
}

function memunculkanTulisan() {
  const container1 = document.querySelector("div.container1");
  const klikLink = document.querySelector(".klik-tulisan");
  klikLink.addEventListener("click", function (e) {
    container1.setAttribute("class", "container2");
    klikLink.style.display = "none";
    e.preventDefault();
    setTimeout(mengetik, 1000);
    setTimeout(memunculkanApi, 6500);
  });
}
memunculkanTulisan();

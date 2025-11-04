/********** vandknap *************/
document
  .querySelector("#HotspotVand")
  .addEventListener("mouseover", mouseOverHead);
document.querySelector("#HotspotVand").addEventListener("mouseout", normalize);
document.querySelector("#HotspotVand").addEventListener("click", clikHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  document.querySelector("#HotspotVand").style.fill = "#27AAE1";
}

function normalize() {
  console.log("normalize");
  document.querySelector("#HotspotVand").style.fill = "#D7DF23";
}

function clikHead() {
  console.log("clickHead");

  document.querySelector(".info-text > h2").textContent = "Kasse med en dråbe";
  document.querySelector(".info-text > article > p").textContent =
    "Kasse med en dråbe og en masse information";
  document.querySelector("#efficiency").innerHTML = `<h3>Pelle Prepper</h3>
    <p> bla bla bla </p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Camille</h3>
    <p> Desmareth </p>`;
}

/************** medicinknap ********/
document
  .querySelector("#HotspotMedicin")
  .addEventListener("mouseover", mouseOverMiddel);
document
  .querySelector("#HotspotMedicin")
  .addEventListener("mouseout", normalize2);
document.querySelector("#HotspotMedicin").addEventListener("click", clikMiddel);

function mouseOverMiddel() {
  console.log("mouseOverMiddel");
  document.querySelector("#HotspotMedicin").style.fill = "#ED1C24";
}

function normalize2() {
  console.log("normalize2");
  document.querySelector("#HotspotMedicin").style.fill = "#D7DF23";
}

function clikMiddel() {
  console.log("clickMiddel");

  document.querySelector(".info-text > h2").textContent = "Kasse med et kryds";
  document.querySelector(".info-text > article > p").textContent =
    "Kasse med et kryds og en masse information";
  document.querySelector("#efficiency").innerHTML = `<h3>Pelle Prepperen</h3>
    <p> bla bla bla bla </p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Desmareth</h3>
    <p> Camille </p>`;
}

/**************** Strømknap *************/
document
  .querySelector("#HotspotStrom")
  .addEventListener("mouseover", mouseOverFoot);
document
  .querySelector("#HotspotStrom")
  .addEventListener("mouseout", normalize3);
document.querySelector("#HotspotStrom").addEventListener("click", clikFoot);

function mouseOverFoot() {
  console.log("mouseOverFoot");
  document.querySelector("#HotspotStrom").style.fill = "#FBB040";
}

function normalize3() {
  console.log("normalize3");
  document.querySelector("#HotspotStrom").style.fill = "#D7DF23";
}

function clikFoot() {
  console.log("clickFoot");

  document.querySelector(".info-text > h2").textContent = "Kasse med et lyn";
  document.querySelector(".info-text > article > p").textContent =
    "Kasse med et lyn og en masse information";
  document.querySelector("#efficiency").innerHTML = `<h3>Pelle Prepper</h3>
    <p> bla </p>`;
  document.querySelector("#requirement").innerHTML = `<h3>wow</h3>
    <p> wauw </p>`;
}

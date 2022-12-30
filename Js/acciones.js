const menu = document.getElementById("nav-item-links");
const menu_container = document.getElementById("nav-container");
const menu_dest = document.getElementById("menu-dest");
const menu_act = document.getElementById("menu-act");
const reglas_normas = document.getElementById("reglas-normas-hover-continer");
const inscribete = document.getElementById("inscripciones-container");
const nav_bg = document.getElementById("nav-container");
const nav_links = document.getElementById("nav-item-links");
const step_1 = document.getElementById("inscripciones-form-step-1");
const step_2 = document.getElementById("inscripciones-form-step-2");
const step_3 = document.getElementById("inscripciones-form-step-3");
const step_4 = document.getElementById("inscripciones-form-step-4");
const step_5 = document.getElementById("inscripciones-form-step-5");
function abrir_reglas_normas() {
  reglas_normas.style.display = "block";
}
function cerrar_reglas_normas()
{
  reglas_normas.style.display = "none";
}
function abrir_normas() {
  document.getElementById("normas-hover-continer").style.display = "block";
}
function cerrar_normas()
{
  document.getElementById("normas-hover-continer").style.display = "none";
}

function abrir_inscribete(){
  inscribete.style.href="https://www.youtube.com/watch?v=vimZLEd702Y&ab_channel=CemEygiMedia";
}
function cerrar_inscribete(){
  inscribete.style.display = "none";
}
function abrir_menu()
{
  document.getElementById("menu-container-normal").style.display = "none";
  document.getElementById("menu-container-movil").style.display = "block";
}
function cerrar_menu()
{
  document.getElementById("menu-container-normal").style.display = "block";
  document.getElementById("menu-container-movil").style.display = "none";
}
function cerrar_step_1() {
  step_1.style.display = "none";
  step_2.style.display = "block";
}

function cerrar_step_2() {
  step_2.style.display = "none";
  step_3.style.display = "block";
}
function cerrar_step_2_desde_step_2() {
  step_2.style.display = "none";
  step_1.style.display = "block";
}
function cerrar_step_3() {
  step_3.style.display = "none";
  step_4.style.display = "block";
}
function cerrar_step_3_desde_step_3() {
  step_3.style.display = "none";
  step_2.style.display = "block";
}
function cerrar_step_4() {
  step_4.style.display = "none";
  step_5.style.display = "block";
}
function cerrar_step_4_desde_step_4() {
  step_4.style.display = "none";
  step_3.style.display = "block";
}
function cerrar_step_5() {
  step_5.style.display = "none";
  step_4.style.display = "block";
}
function cerrar_fehca_antes() {
  document.getElementById("antes-de-fecha-continer").style.display = "none";
}
function cerrar_fehca_despues() {
  step_2.style.display = "block";
}
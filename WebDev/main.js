
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
  modal.style.display = 'block';
}
function closeModal(){
  modal.style.display = 'none';
}
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
}
}
var modal2 = document.getElementById('signupModal');
var signupBtn = document.getElementById('signupBtn');
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
signupBtn.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
window.addEventListener('click', outsideClick2);
function openModal2(){
  modal2.style.display = 'block';
}
function closeModal2(){
  modal2.style.display = 'none';
}
function outsideClick2(f){
  if(f.target == modal2){
    modal2.style.display = 'none';
}
}  

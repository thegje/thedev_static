function toggleDarkMode(){document.getElementsByTagName("html")[0].classList.toggle("dark");localStorage.setItem('darkMode',document.getElementsByTagName("html")[0].classList.contains('dark')?'enabled':'disabled')}
function setInitialState(){if(localStorage.getItem('darkMode')==='enabled'){document.getElementsByTagName("html")[0].classList.add("dark")}}
document.addEventListener('DOMContentLoaded',setInitialState);
document.getElementById('toggle-dark').addEventListener('click',toggleDarkMode);
document.addEventListener('DOMContentLoaded',function(){function smoothScroll(e){e.preventDefault();document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({behavior:'smooth'})}
document.querySelectorAll('a[href^="#"]').forEach(function(l){l.addEventListener('click',smoothScroll)});
const h=document.querySelector('.hamburger'),H=document.querySelector('header'),m=document.querySelectorAll('.menu-item'),l=document.querySelector(".logo"),M=document.querySelector("main");
l.addEventListener('click',function(){h.click()});
M.addEventListener('click',function(){if(H.classList.contains("active")){h.click()}});
function toggleMenu(){const m=document.querySelectorAll('.menu-item');if(!H.classList.contains("active")){m.forEach((i,x)=>{setTimeout(()=>{i.classList.add('dropped')},x*60)})}else{[...m].reverse().forEach((i,x)=>{setTimeout(()=>{i.classList.remove('dropped')},x*60)})}}
h.addEventListener('click',function(e){e.stopPropagation();toggleMenu();if(H.classList.contains("active")){setTimeout(function(){H.classList.remove("active")},180)}else{H.classList.add("active")}
this.classList.toggle('change');m.forEach(i=>{i.classList.toggle('show')})});
document.querySelectorAll('.accordion-header').forEach(b=>{b.addEventListener('click',()=>{const c=b.nextElementSibling;b.classList.toggle('active');if(b.classList.contains('active')){c.style.maxHeight=c.scrollHeight+'px'}else{c.style.maxHeight=0}})});
document.getElementById('circleButton').addEventListener('click',function(){this.classList.toggle('active')})}); 
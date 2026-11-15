document.addEventListener('DOMContentLoaded',()=>{
 const root=document.documentElement;
 const toggle=document.getElementById('themeToggle');
 const saved=localStorage.getItem('fabricsafar-theme');
 const initial=saved==='dark'||saved==='light'?saved:(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
 const applyTheme=(theme)=>{
  root.setAttribute('data-theme',theme);
  if(toggle){
   const dark=theme==='dark';
   toggle.innerHTML=`<span class="theme-icon" aria-hidden="true">${dark?'☀':'☾'}</span><span class="theme-label">${dark?'Light':'Dark'}</span>`;
   toggle.setAttribute('aria-label',`Switch to ${dark?'light':'dark'} theme`);
   toggle.setAttribute('title',`Switch to ${dark?'light':'dark'} theme`);
  }
 };
 applyTheme(initial);
 if(toggle)toggle.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='dark'?'light':'dark';localStorage.setItem('fabricsafar-theme',next);applyTheme(next)});
 const sidebar=document.getElementById('sidebar'),menu=document.getElementById('menuBtn');
 if(menu&&sidebar)menu.addEventListener('click',()=>sidebar.classList.toggle('open'));
 document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>sidebar&&sidebar.classList.remove('open')));
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
 const search=document.getElementById('search');
 if(search)search.addEventListener('input',()=>{
  let count=0;document.querySelectorAll('[data-search]').forEach(el=>{const ok=(el.dataset.search+' '+el.innerText).toLowerCase().includes(search.value.toLowerCase());el.style.display=ok?'':'none';if(ok)count++});
  const empty=document.getElementById('empty');if(empty)empty.style.display=search.value&&count===0?'block':'none';
 });
});

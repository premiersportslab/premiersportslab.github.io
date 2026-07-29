(function(){
 const c=window.NBL_CONFIG||{};
 document.querySelectorAll('[data-config]').forEach(el=>{const path=el.dataset.config.split('.');let v=c;for(const p of path)v=v&&v[p];if(v!==undefined&&v!==null)el.textContent=v;});
 document.querySelectorAll('[data-href]').forEach(el=>{const path=el.dataset.href.split('.');let v=c;for(const p of path)v=v&&v[p];if(v && !String(v).startsWith('REPLACE_'))el.href=v;else el.classList.add('is-placeholder');});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const burger=document.getElementById('burger'), menu=document.getElementById('menu');
 if(burger&&menu){burger.addEventListener('click',()=>{const open=menu.classList.toggle('open');burger.setAttribute('aria-expanded',String(open));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded','false');}));}
 const toggle=document.getElementById('themeToggle');
 const body=document.body;
 const saved=localStorage.getItem('nbl-theme');
 if(saved==='light'||saved==='dark') body.className='theme-'+saved;
 function syncTheme(){const dark=body.classList.contains('theme-dark');const icon=document.getElementById('themeIcon'),label=document.getElementById('themeLabel');if(icon)icon.textContent=dark?'☀':'☾';if(label)label.textContent=dark?'Light':'Dark';}
 syncTheme();
 if(toggle)toggle.addEventListener('click',()=>{const dark=body.classList.contains('theme-dark');body.className=dark?'theme-light':'theme-dark';localStorage.setItem('nbl-theme',dark?'light':'dark');syncTheme();});
 const form=document.querySelector('form.reg');
 if(form)form.addEventListener('submit',e=>{const url=c.registrationUrl;if(!url||String(url).startsWith('REPLACE_')){e.preventDefault();alert('Registration is not connected yet. Update assets/js/config.js with your live registration link.');}else{e.preventDefault();window.location.href=url;}});
})();

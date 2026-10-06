const page=location.pathname.split('/').pop()||'index.html';
const L=[['index.html','Home'],['despre-noi.html','Despre noi'],['servicii.html','Servicii'],['contact.html','Contact']];
const S={ph:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><circle cx="12" cy="18" r=".5"/></svg>',
ig:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>',
fb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M13 20v-8h3M10 12h6M13 12V9c0-1 1-2 3-2"/></svg>'};
document.getElementById('hdr').innerHTML=`<header><a href="index.html" class="logo"><img src="assets/img/logo.png" alt="Mr. Fresh" onerror="this.outerHTML='<div class=ph>LOGO · assets/img/logo.png</div>'"></a>
<button class="burger" aria-label="Meniu" onclick="document.querySelector('nav').classList.toggle('open')">☰</button>
<nav>${L.map(([h,t])=>`<a href="${h}" class="${page===h?'on':''}">${t}</a>`).join('')}<a class="tel" href="tel:+40779268657">${S.ph}0779268657</a></nav></header>`;
document.getElementById('ftr').innerHTML=`<footer><div><div class="w">MR. FRESH</div><p>Baia Mare, Maramureș</p></div>
<div class="m"><p>Curățenia continuă și dincolo de ușa blocului. Urmărește Mr. Fresh pe rețelele sociale pentru noutăți, sfaturi utile și informații despre serviciile noastre.</p>
<div class="ic"><a href="https://www.facebook.com/profile.php?id=61595283772870" aria-label="Facebook">${S.fb}</a><a href="https://www.instagram.com/mr_fresh_baia_mare/" aria-label="Instagram">${S.ig}</a></div></div>
<div><div class="tp">+40 779 268 657</div><a href="mailto:parfumulcurateniei@gmail.com">parfumulcurateniei@gmail.com</a></div></footer>`;
const showPlaceholder=(container,label)=>{
 const placeholder=document.createElement('div');placeholder.className='ph';placeholder.textContent=label;
 container.replaceChildren(placeholder);container.classList.remove('has-media');
};
const loadImage=(container,src,alt)=>{
 const image=document.createElement('img');image.className='media-image';image.alt=alt;image.loading='eager';image.decoding='async';
 image.addEventListener('load',()=>{container.replaceChildren(image);container.classList.add('has-media')},{once:true});
 image.addEventListener('error',()=>showPlaceholder(container,container.dataset.placeholder),{once:true});
 image.src=src;
};
document.querySelectorAll('[data-image]').forEach(container=>{
 showPlaceholder(container,container.dataset.placeholder);
 loadImage(container,container.dataset.image,container.dataset.alt);
});
document.querySelectorAll('[data-video]').forEach(container=>{
 showPlaceholder(container,container.dataset.placeholder);
 const poster=document.createElement('img');poster.className='media-image';poster.alt=container.dataset.alt;poster.decoding='async';
 const video=document.createElement('video');video.className='media-video';video.autoplay=true;video.muted=true;video.loop=true;video.playsInline=true;video.preload='metadata';
 let videoFailed=false;
 video.poster=container.dataset.poster;
 video.addEventListener('loadeddata',()=>{container.replaceChildren(video);container.classList.add('has-media')},{once:true});
 video.addEventListener('error',()=>{videoFailed=true;video.remove()},{once:true});
 poster.addEventListener('load',()=>{if(video.readyState<2){container.replaceChildren(poster);if(!videoFailed)container.append(video);container.classList.add('has-media')}},{once:true});
 const source=document.createElement('source');source.src=container.dataset.video;source.type='video/mp4';video.append(source);container.append(poster,video);poster.src=container.dataset.poster;video.load();
});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.reveal,.morph,.hero').forEach(e=>io.observe(e));

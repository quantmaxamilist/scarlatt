(function(){
  // mobile menu
  var open=document.querySelector('[data-mm-open]');
  var closers=document.querySelectorAll('[data-mm-close]');
  function set(on){document.body.classList.toggle('mm-on',on);}
  if(open)open.addEventListener('click',function(){set(true);});
  closers.forEach(function(c){c.addEventListener('click',function(){set(false);});});
  document.querySelectorAll('.mobile-menu a').forEach(function(a){a.addEventListener('click',function(){set(false);});});

  // scroll reveal
  var els=[].slice.call(document.querySelectorAll('[data-reveal]'));
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('in');}); return; }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  },{threshold:0.12, rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e){ io.observe(e); });

  // header shadow on scroll
  var hd=document.querySelector('header.site');
  function onScroll(){ if(hd) hd.classList.toggle('scrolled', window.scrollY>10); }
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
})();

/* hero image scroller — project pages */
(function(){
  var hero=document.querySelector('.prop-hero[data-hero]'); if(!hero) return;
  var slides=[].slice.call(hero.querySelectorAll('img.bg')); if(slides.length<2) return;
  var prev=hero.querySelector('.ph-prev'), next=hero.querySelector('.ph-next');
  var count=hero.querySelector('.ph-count b');
  var i=0, timer=null;
  function show(n){ i=(n+slides.length)%slides.length; slides.forEach(function(s,k){s.classList.toggle('on',k===i);}); if(count)count.textContent=(i+1); }
  function go(d){ show(i+d); }
  function start(){ clearInterval(timer); timer=setInterval(function(){go(1);},5500); }
  if(prev)prev.addEventListener('click',function(){go(-1);start();});
  if(next)next.addEventListener('click',function(){go(1);start();});
  hero.addEventListener('mouseenter',function(){clearInterval(timer);});
  hero.addEventListener('mouseleave',start);
  show(0); start();
})();
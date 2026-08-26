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
// Minimal interactivity: reveal one panel at a time
(function(){
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  const triggers = document.querySelectorAll('[data-target]');
  const panels = {
    gyms: document.getElementById('panel-gyms'),
    trainers: document.getElementById('panel-trainers'),
    users: document.getElementById('panel-users'),
  };

  function show(target){
    Object.values(panels).forEach(p => p && (p.hidden = true));
    const el = panels[target];
    if(el){ el.hidden = false; }
    // update aria-expanded for buttons
    document.querySelectorAll('.pill').forEach(btn => {
      const is = btn.getAttribute('data-target') === target;
      btn.setAttribute('aria-expanded', String(is));
    });
  }

  triggers.forEach(t => {
    t.addEventListener('click', (e) => {
      e.preventDefault();
      const target = t.getAttribute('data-target');
      if(target && panels[target]){ show(target); }
    });
  });

  // Optional: deep-link via hash (#gyms/#trainers/#users)
  const hash = (location.hash || '').replace('#','');
  if(['gyms','trainers','users'].includes(hash)){
    show(hash);
  }
})();

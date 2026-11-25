// Exam-style mock. Page supplies <script type="application/json" id="quiz-data">[{q,options,answer,why,d,src}]</script>,
// <div id="quiz"></div> and optional data-minutes on #quiz. No feedback until Submit. Timer is advisory.
(() => {
  const data = JSON.parse(document.getElementById('quiz-data').textContent);
  const root = document.getElementById('quiz');
  const minutes = +(root.dataset.minutes || 120);
  const picked = new Array(data.length).fill(-1);
  const bar = document.createElement('div'); bar.className = 'mockbar'; bar.setAttribute('role', 'timer');
  const state = { left: minutes * 60, done: false };
  const fmt = s => `${Math.floor(s / 3600)}:${String(Math.floor(s % 3600 / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  const answered = () => picked.filter(x => x >= 0).length;
  const paint = () => { bar.textContent = `Time left ${fmt(state.left)} · answered ${answered()} of ${data.length}`; };
  data.forEach((d, qi) => {
    const f = document.createElement('fieldset'); f.className = 'q';
    f.innerHTML = `<legend>${qi + 1}. ${d.q}</legend>`;
    d.options.forEach((o, oi) => {
      const l = document.createElement('label'); l.className = 'opt';
      const r = document.createElement('input'); r.type = 'radio'; r.name = 'q' + qi;
      r.onchange = () => { picked[qi] = oi; paint(); };
      l.append(r, ' ', o); f.append(l);
    });
    root.append(f);
  });
  const btn = document.createElement('button'); btn.type = 'button'; btn.textContent = 'Submit';
  const out = document.createElement('div'); out.className = 'score'; out.setAttribute('aria-live', 'polite');
  const submit = () => {
    if (state.done) return; state.done = true; clearInterval(tick);
    root.querySelectorAll('input').forEach(i => i.disabled = true); btn.disabled = true;
    const missed = [], by = {};
    data.forEach((d, i) => {
      const g = by[d.d] = by[d.d] || { r: 0, n: 0 }; g.n++;
      if (picked[i] === d.answer) g.r++; else missed.push(i);
    });
    const right = data.length - missed.length;
    out.innerHTML = '';
    const line = document.createElement('p');
    line.textContent = `${right}/${data.length}. Missed: ${missed.length ? missed.map(i => i + 1).join(', ') : 'none'}`;
    const dom = document.createElement('p');
    dom.textContent = 'By domain: ' + Object.keys(by).sort().map(k => `${k} ${by[k].r}/${by[k].n}`).join(' · ') + ` · time used ${fmt(minutes * 60 - state.left)}`;
    out.append(line, dom);
    if (missed.length) {
      const ul = document.createElement('ul');
      missed.forEach(i => { const d = data[i]; const li = document.createElement('li');
        li.textContent = `${i + 1}. ${d.q} Answer: ${d.options[d.answer]}. ${d.why} (${d.d}, ${d.src})`; ul.append(li); });
      out.append(ul);
    }
    out.scrollIntoView();
  };
  btn.onclick = submit;
  const tick = setInterval(() => { state.left--; if (state.left <= 0) { state.left = 0; submit(); } paint(); }, 1000);
  document.body.prepend(bar); root.append(btn, out); paint();
})();

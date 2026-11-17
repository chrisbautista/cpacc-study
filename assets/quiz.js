// Reusable quiz. Page supplies <script type="application/json" id="quiz-data">[{q,options:[..],answer:idx,why}]</script>
// and <div id="quiz"></div>. Immediate feedback; each question locks after one answer.
(() => {
  const data = JSON.parse(document.getElementById('quiz-data').textContent);
  const root = document.getElementById('quiz');
  let done = 0, right = 0;
  const missed = [];
  const score = document.createElement('p');
  score.className = 'score'; score.setAttribute('aria-live', 'polite');
  const summary = document.createElement('div'); summary.className = 'score'; summary.setAttribute('aria-live', 'polite');
  data.forEach((d, qi) => {
    const f = document.createElement('fieldset'); f.className = 'q';
    f.innerHTML = `<legend>${qi + 1}. ${d.q}</legend>`;
    const fb = document.createElement('p'); fb.className = 'fb'; fb.setAttribute('aria-live', 'polite');
    d.options.forEach((o, oi) => {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = o;
      b.onclick = () => {
        const ok = oi === d.answer;
        f.querySelectorAll('button').forEach((x, i) => { x.disabled = true; if (i === d.answer) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        fb.className = 'fb ' + (ok ? 'ok' : 'no');
        fb.textContent = (ok ? 'Correct. ' : 'Not quite. ') + d.why;
        done++; right += ok; if (!ok) missed.push(qi + 1);
        score.textContent = `${right} of ${done} correct` + (done === data.length ? ' — finished.' : '');
        if (done === data.length) {
          missed.sort((a, b) => a - b);
          summary.innerHTML = '';
          const line = document.createElement('p');
          line.textContent = `${right}/${data.length}. Missed: ${missed.length ? missed.join(', ') : 'none'}`;
          summary.append(line);
          if (missed.length) {
            const ul = document.createElement('ul');
            missed.forEach(n => { const li = document.createElement('li'); li.textContent = `${n}. ${data[n - 1].q} Answer: ${data[n - 1].options[data[n - 1].answer]}`; ul.append(li); });
            summary.append(ul);
          }
        }
      };
      f.append(b);
    });
    f.append(fb); root.append(f);
  });
  root.append(score, summary);
})();

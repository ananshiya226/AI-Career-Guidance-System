let current = 1;
const answers = {};

function select(btn) {
  const block = btn.closest('.q-block');
  block.querySelectorAll('.opt').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const nextBtn = block.querySelector('.btn-next');
  if (nextBtn) nextBtn.classList.add('ready');
  answers[current] = btn.textContent;
}

function goTo(n) {
  if (!answers[current] && n > current) return;
  document.getElementById('q' + current).classList.remove('active');
  current = n;
  document.getElementById('q' + current).classList.add('active');
  document.getElementById('progressLabel').textContent = `Question ${n} of 10`;
  document.getElementById('progressFill').style.width = ((n - 1) / 10 * 100) + '%';
}

function submitQuiz() {
  document.getElementById('q10').style.display = 'none';
  document.getElementById('loadingScreen').style.display = 'block';
  document.getElementById('progressFill').style.width = '100%';
  document.getElementById('progressLabel').textContent = 'Processing...';
  // Simulate AI processing delay then go to results
  setTimeout(() => { window.location.href = 'result.html'; }, 2800);
}

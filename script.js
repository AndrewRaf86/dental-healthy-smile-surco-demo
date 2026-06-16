// FAQ accordion — keyboard accessibility
document.querySelectorAll('.faq-question').forEach(function(q) {
  q.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      q.closest('details').toggleAttribute('open');
    }
  });
});

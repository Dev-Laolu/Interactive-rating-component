(function(){
    const buttons = Array.from(document.querySelectorAll('.rate-btn'));
    const submitBtn = document.getElementById('submitBtn');
    const responseSection = document.getElementById('responseSection');
    const ratingSection = document.getElementById('ratingSection');
    const ratingValueSpan = document.getElementById('ratingValue');

    let selectedValue = null;

    // handle rating button clicks (acts like radio)
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // clear previous selection
        buttons.forEach(b => {
          b.classList.remove('selected');
          b.setAttribute('aria-checked', 'false');
        });
        // set new
        btn.classList.add('selected');
        btn.setAttribute('aria-checked', 'true');
        selectedValue = btn.getAttribute('data-value');
        submitBtn.disabled = false;
      });

      // keyboard support (Enter/Space)
      btn.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });

    // Submit: hide rating, show response, add rating to p tag
    submitBtn.addEventListener('click', () => {
      if(!selectedValue) return;
      ratingValueSpan.textContent = selectedValue;
      // hide rating section (remove from accessibility flow)
      ratingSection.style.display = 'none';
      ratingSection.setAttribute('aria-hidden','true');

      // show response
      responseSection.classList.add('show');
      responseSection.setAttribute('aria-hidden','false');

      // move focus to the response for accessibility
      document.getElementById('restartBtn')?.focus();
    });



    // Optional: allow closing response by clicking the rating-chip
    document.querySelector('.rating-chip')?.addEventListener('click', () => {
      // go back to rating view
      responseSection.classList.remove('show');
      responseSection.setAttribute('aria-hidden','true');
      ratingSection.style.display = '';
      ratingSection.setAttribute('aria-hidden','false');
      // keep the chosen value selected so user can re-submit if desired
    });

    // Back button to restart
    document.getElementById('restartBtn')?.addEventListener('click', () => {
      responseSection.classList.remove('show');
      responseSection.setAttribute('aria-hidden','true');
      ratingSection.style.display = '';
      ratingSection.setAttribute('aria-hidden','false');
      // ensure submit button state reflects selection
      submitBtn.disabled = !selectedValue;
      // return focus to the selected button or first button
      const active = buttons.find(b => b.classList.contains('selected')) || buttons[0];
      active?.focus();
    });

  })();
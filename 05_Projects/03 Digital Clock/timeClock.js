const timeEl = document.getElementById('time');
    const dateEl = document.getElementById('date');
    const dayEl = document.getElementById('day');

    function updateClock() {
      let date = new Date();

      // Time
      timeEl.innerHTML = date.toLocaleTimeString();

      // Date
      dateEl.innerHTML = date.toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });

      // Day name
      dayEl.innerHTML = date.toLocaleDateString(undefined, { weekday: 'long' });
    }

    setInterval(updateClock, 1000);
    updateClock(); // run once instantly
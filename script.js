function padZero(num) {
    return num < 10 ? '0' + num : num;
  }

  function updateDateTime() {
    const now = new Date();

    const day = padZero(now.getDate());
    const month = padZero(now.getMonth() + 1); // Months are 0-based
    const year = now.getFullYear();

    const hours = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());

    const formatted = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    document.getElementById('timer').textContent = formatted;
  }

  // Update immediately and then every second
  updateDateTime();
  setInterval(updateDateTime, 1000);
document.addEventListener('DOMContentLoaded', () => {
    const dateSpan = document.querySelector('.right span:first-child');
    
    // Update date function
    function updateDate() {
        const now = new Date();
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const month = months[now.getMonth()];
        const day = now.getDate().toString().padStart(2, '0');
        const year = now.getFullYear();
        dateSpan.textContent = `${month} ${day}. ${year}`;
    }

    // Update date immediately and then every second
    updateDate();
    setInterval(updateDate, 1000);
}); 
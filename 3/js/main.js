const SECONDS   = 1000;
const MINUTES   = SECONDS * 60;
const HOURS     = MINUTES * 60;
const DAYS      = HOURS * 24;


document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const future_date = new Date("June 12, 2021 00:00:00").getTime();
        const now = new Date().getTime();
    
        const time_diff     = future_date - now;
    
        const days_text      = Math.floor(time_diff / DAYS).toString();
        const hours_text     = Math.floor((time_diff % DAYS) / HOURS).toString();
        const minutes_text   = Math.floor((time_diff % HOURS) / MINUTES).toString();
        const seconds_text   = Math.floor((time_diff % MINUTES) / SECONDS).toString();
    
        document.querySelector("#counter__days").textContent = days_text;
        document.querySelector("#counter__hours").textContent = hours_text;
        document.querySelector("#counter__minutes").textContent = minutes_text;
        document.querySelector("#counter__seconds").textContent = seconds_text;
    }, 1000);
});

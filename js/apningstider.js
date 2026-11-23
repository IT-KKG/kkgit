// Viser "Åpent nå" / "Stengt nå" ut fra klokka. Endre tidene her hvis åpningstidene endres.
// ponytail: tar ikke hensyn til ferier og helligdager.
const APNER = 8;   // 08:00
const STENGER = 15; // 15:00

function oppdaterStatus() {
    const el = document.getElementById("hours-status");
    if (!el) return;
    const na = new Date();
    const dag = na.getDay(); // 0 = søndag, 6 = lørdag
    const time = na.getHours() + na.getMinutes() / 60;
    const apent = dag >= 1 && dag <= 5 && time >= APNER && time < STENGER;
    el.textContent = apent ? "Åpent nå" : "Stengt nå";
    el.classList.toggle("is-open", apent);
}

oppdaterStatus();
setInterval(oppdaterStatus, 60000);

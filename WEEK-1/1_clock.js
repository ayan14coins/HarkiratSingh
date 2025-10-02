let hh = 0;
let mm = 0;
let ss = 0;

function clock() {
    ss++;

    if (ss === 60) {
        ss = 0;
        mm++;
    }

    if (mm === 60) {
        mm = 0;
        hh++;
    }

    if (hh === 24) {
        hh = 0;
    }

    // Pad with leading zeros (e.g. 01:05:09)
    let h = String(hh).padStart(2, "0");
    let m = String(mm).padStart(2, "0");
    let s = String(ss).padStart(2, "0");

    console.clear();
    console.log(`${h}:${m}:${s}`);
}

setInterval(clock, 1000);

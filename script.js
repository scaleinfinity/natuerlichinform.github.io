function berechneKalorien() {
    let gewicht = document.getElementById("gewicht").value;
    let größe = document.getElementById("größe").value;
    let alter = document.getElementById("alter").value;
    let aktivität = document.getElementById("aktivität").value;

    if (!gewicht || !größe || !alter) {
        alert("Bitte alle Felder ausfüllen!");
        return;
    }

    // Grundumsatz (Mifflin-St Jeor Formel)
    let grundumsatz = (10 * gewicht) + (6.25 * größe) - (5 * alter) + 5;

    // Gesamtumsatz
    let gesamtumsatz = grundumsatz * aktivität;

    document.getElementById("ergebnis").innerText = `Dein täglicher Kalorienbedarf: ${gesamtumsatz.toFixed(2)} kcal`;
}

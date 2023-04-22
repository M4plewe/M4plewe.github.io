function traducir() {
    const palabra = document.getElementById("palabra").value;
    const sonidosBebes = {
        "a": ["agü", "agu", "aw", "a", "aga"],
        "b": ["bwe", "ba", "bu", "bw"],
        "c": ["cu", "cui", "cua", "cwe"],
        "d": ["da", "daw", "dwa", "du"],
        "e": ["e", "ewe", "egü"],
        "f": ["fa", "fi", "fwa"],
        "g": ["gu", "gü", "gwa"],
        "h": ["h", "ha"],
        "i": ["i", "iw", "igu"],
        "j": ["ja", "ji", "jw", "ju"],
        "k": ["ku", "kwa", "qui", "kwi"],
        "l": ["lu", "li", "lwa"],
        "m": ["ma", "mu", "mwa"],
        "n": ["na", "nu", "nwa"],
        "ñ": ["ñu", "ñi", "ñwa"],
        "o": ["o", "ow", "ogü"],
        "p": ["pa", "pu", "pwa"],
        "q": ["qu", "qui", "qwa"],
        "r": ["ra", "ri", "rwa"],
        "s": ["sa", "su", "swa"],
        "t": ["ta", "tu", "twa"],
        "u": ["u", "uw", "ugu"],
        "v": ["va", "vi", "vwa"],
        "w": ["wa", "wu", "wui"],
        "x": ["xi", "xu", "xw"],
        "y": ["ya", "yu", "ywa"],
        "z": ["za", "zu", "zwa"]
    };
  
    let traduccion = "";
  
    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra.charAt(i).toLowerCase();
        if (letra.match(/[a-z]/i)) {
            const sonidos = sonidosBebes[letra];
            const index = Math.floor(Math.random() * sonidos.length);
            traduccion += sonidos[index] + " ";
        } else {
            // Copiar la puntuación y los espacios
            traduccion += letra;
        }
    }
  
    document.getElementById("traduccion").textContent = traduccion;
}

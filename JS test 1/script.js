function jmenoSouboru(p) {
    let splitPath = p.split('\\');
    return splitPath[splitPath.length - 1];
}

function hyperlink(href, text) {
    return `<a href="${href}">${text}</a>`;
}

console.log(jmenoSouboru("D:\\abc\\defghi.xxx"));
console.log(jmenoSouboru("\\abc\\defghi.xxx"));
console.log(jmenoSouboru("C:\\temp\\readme"));
console.log(jmenoSouboru("\\var\www\\.htaccess"));
console.log(jmenoSouboru("text.txt"));
console.log(jmenoSouboru("dklsjdlksa"));

console.log(hyperlink("https://google.com", "Hledat na Google"));
console.log(hyperlink("https://seznam.cz", "Seznam"));


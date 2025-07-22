const approvedSites = [
    'https://en.wikipedia.org/wiki/Particle_physics',
    'https://en.wikipedia.org/wiki/Quantum_mechanics',
    'https://en.wikipedia.org/wiki/Quantum_field_theory',
    'https://en.wikipedia.org/wiki/Quantum_chromodynamics',
    'https://en.wikipedia.org/wiki/Quantum_electrodynamics',
    'https://en.wikipedia.org/wiki/Standard_Model',
    'https://en.wikipedia.org/wiki/Quantum_gravity',
    'https://en.wikipedia.org/wiki/String_theory',
    'https://en.wikipedia.org/wiki/Loop_quantum_gravity',
    'https://en.wikipedia.org/wiki/Quantum_computing',
    'https://mail.google.com/mail/u/0/#inbox',
    'https://github.com/',
    'https://dev.to/',
    'https://open.spotify.com/',
    'https://vscode.dev/',
    'https://stackoverflow.com/search?q=opening+new+tabs+with+js',
    'https://lab.flipp.dev'
]

let site1 = approvedSites[Math.floor(Math.random() * approvedSites.length)]; //second tab
let site2 = approvedSites[Math.floor(Math.random() * approvedSites.length)]; //third tab
let site3 = approvedSites[Math.floor(Math.random() * approvedSites.length)]; //site that replaces first tab

while ((site1 === site2 || site1 === site3 || site2 === site3)) {
    site2 = approvedSites[Math.floor(Math.random() * approvedSites.length)];
    site3 = approvedSites[Math.floor(Math.random() * approvedSites.length)];
}

window.open(site1, '_blank', 'noopener,noreferrer');
window.open(site2, '_blank', 'noopener,noreferrer');
//window.location.href = site3;

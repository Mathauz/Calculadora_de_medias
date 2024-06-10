const form = document.getElementById("fa");
const ia = '<img src="./images/aprovado.png" alt="emoji feliz" />';
const ir = '<img src="./images/reprovado.png" alt="emoji triste" />';
const at = [];
const nt = [];
const sa = '<span class="resultado aprovado">Aprovado</span>';
const sr = '<span class="resultado reprovado">Reprovado</span>';
const ntm = parseFloat(prompt("Digite a nota mínima:"));

let lins = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();
    adl();
    att();
    atmd();
});

function adl() {
    const inoa = document.getElementById("noa").value;
    const inta = parseFloat(document.getElementById("nta").value);

    if (at.includes(inoa)) {
        alert(`A atividade ${inoa} já foi inserida`);
    } else {
        at.push(inoa);
        nt.push(inta);
    
        let lin = '<tr>';
        lin += `<td>${inoa}</td>`;
        lin += `<td>${inta}</td>`;
        lin += `<td>${inta >= ntm ? ia : ir}</td>`;
        lin += '</tr>';
    
        lins += lin;   
    }

    document.getElementById("noa").value = '';
    document.getElementById("nta").value = '';
}

function att() {
    const ct = document.querySelector("tbody");
    ct.innerHTML = lins;
}

function atmd() {
    const medf = cmedf();
    document.getElementById("mdfv").innerHTML = medf.toFixed(1);
    document.getElementById("mdfr").innerHTML = medf >= ntm ? sa : sr;
}

function cmedf() {
    let sdn = 0;
    for (let i = 0; i < nt.length; i++) {
        sdn += nt[i];
    }
    return sdn / nt.length;    
}

const form = document.getElementById(`fa`);
const ia = `<img src=" ./images/aprovado.png" alt= "emoji feliz" />`;
const ir = `<img src=" ./images/reprovado.png" alt= "emoji triste" />`;
const at = [];
const nt = [];
const sa = `<span class="resultado aprovado">Aprovado</span>`
const sr = `<span class="resultado reprovado">Reprovado</span>`
const ntm = parseFloat(prompt("Digite a nota mínima:"));

let lins = ``;

form.addEventListener(`submit`, function(e) {
e.preventDefault();

adl();
att();
atmd();

});

function adl() {
    
    const inoa = document.getElementById(`noa`);
    const inta = document.getElementById(`nta`);

    if(at.includes(inta.value)){
        alert(`A atividade ${inta.value} já foi inserida`);
    } else{
        at.push(inoa.value);
        nt.push(parseFloat(inta.value));
    
        let lin = `<tr>`;
        lin += `<td>${inoa.value}</td>`;
        lin += `<td>${inta.value}</td>`;
        lin += `<td>${inta.value >= ntm ? ia : ir}</td>`;
        lin += `</tr>`;
    
        lins += lin;   

    }

    inoa.value = ``;
    inta.value = ``;
}

function att() {
    const ct = document.querySelector(`tbody`);
    ct.innerHTML = lins;
}

function atmd() {
    const medf = cmedf();
    document.getElementById(`mdfv`).innerHTML = medf.toFixed
    (2)
    document.getElementById(`mdfr`).innerHTML = medf >= ntm ? sa : sr;
}

function cmedf(){

    let sdn = 0;

    for (let i = 0; i < nt.length; i++) {
        sdn += nt[i];
    }

    return sdn / nt.length;    

}
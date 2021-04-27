const POP_UP = document.getElementById('popUp');
let darbi = []

document.getElementById('jaunsDarbs').addEventListener('click', () => {
    POP_UP.style.display = 'block'
})

document.getElementById('pievienotDarbu').addEventListener('click', () => {
    POP_UP.style.display = 'none'

    let darbs = {darbs: daramais.value, termins: termins.value};

    daramais.value = "";
    termins.value = "";

    darbi.push(darbs)

    render();
})

function render() {
    let saraksts = document.getElementById('saraksts')
    
    for(let i = 0; i < darbi.length; i++) {
        console.log(darbi[i])
        let darbs = 
        `<div class="darbs">
            <h3>Darbs: ${darbi[i].daramais}</h3>
            <h4>Termiņš: ${darbi[i].termins}</h4>
        </div>`;
        saraksts.innerHTML = darbs;
    }
}
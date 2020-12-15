const w = {
    min,
    max,
    start,
    part,
    difficulty
}

let mean='';
let syn ='';
let pos = '';

const api = new WordAPI();
const create = new Create();

document.getElementById('practice').addEventListener('click',getform);
function getform(e){
    document.querySelector('.lead').remove();
    document.querySelector('#buttons').remove();
    document.querySelector('#main').classList ="col d-flex justify-content-center";
}

document.getElementById('form').addEventListener('submit',getdata);
function getdata(e){
    const mini = document.getElementById('min').value;
    const maxi = document.getElementById('max').value;
    const first = document.getElementById('start').value;
    const parts = document.getElementById('part').value;

    w.min=mini;
    w.max=maxi;
    w.start=first;
    w.part=parts;
    console.log(w);
    e.preventDefault();
}

document.getElementById('sub').addEventListener('click',getdiff);

function getdiff(e){
    let diff;
    let i = document.getElementsByName('Radios');
    i.forEach(function(btn){
        if(btn.checked){
            diff=btn.id;
        }
    });
    
    w.difficulty=diff;
    console.log(w);
    document.querySelector('#main').classList ="col d-flex justify-content-center d-none";
    const contain = document.querySelector('#cont');
    const spin = document.createElement("div");
      
    spin.innerHTML = `
    <div class="col d-flex justify-content-center">
        <i class="fas fa-spinner fa-spin fa-3x"></i>
    </div>
    `;
    contain.appendChild(spin);

    api.getword(w)
      .then(function(res){
          const cr = new Create();
          console.log(res);

          contain.removeChild(spin);
          document.querySelector('#second').classList ="col d-flex justify-content-center";
          document.getElementById('page').classList="container";
          gword(res);
          spellWord(res);
          
      })

    e.preventDefault();
}

document.getElementById('bck').addEventListener('click',function(){
    window.location.reload();
});

function spellWord(word){
    create.spell(word)
      .then(spe =>{
        const reader = spe.getReader();
        reader.read()
          .then(result => {
              console.log(result);
              var blob = new Blob([result.value], { type: 'audio/mp3' });
              var url = window.URL.createObjectURL(blob)
              window.audio = new Audio();
              window.audio.src = url;
              window.audio.play();
          });
      });
}

function gword(word){
    create.gtword(word)
      .then(wo =>{
          console.log(wo);
      })
}








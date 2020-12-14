const w = {
    min,
    max,
    start,
    part,
    difficulty
}

const api = new WordAPI();

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
    console.log(w);
    w.difficulty=diff;
    api.getword(w)
      .then(function(word){
          console.log(word);
      })

    e.preventDefault();
}

document.getElementById('bck').addEventListener('click',function(){
    window.location.reload();
});








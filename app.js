document.getElementById('practice').addEventListener('click',getform);
function getform(e){
    document.querySelector('.lead').remove();
    document.querySelector('#buttons').remove();
    document.querySelector('#main').classList ="col d-flex justify-content-center";
}

document.getElementById('form').addEventListener('submit',getdata);
function getdata(e){
    console.log(e.target);
    e.preventDefault();
}



function criptografar(){

    var texto = document.getElementById('entrada').value;
    var regex = /[A-ZÁÉÍÓÚÃÕÀÂÊÔÜÇáéíóúãõàâêôüç]/;
    var saidaDiv = document.getElementById('saida');

    let subCrip = {
        'e':'enter',
        'i':'imes',
        'a':'ai',
        'o':'ober',
        'u':'ufat'
    }

     if(texto.trim()===""){
        saidaDiv.innerHTML = `
        <img src="imgs/image.png" alt="Pessoa procurando o texto">
        <h4 class="principal__saida__mensagem1">Nenhuma mensagem encontrada</h4>
        <p class="principal__saida__mensagem2">Digite um texto que deseja criptografar ou descriptografar</p>
    `;
    }
    else if(regex.test(texto)){
        alert("O texto contém letras maiúsculas ou caracteres especiais. Por favor digite apenas com letras minúsculas e sem acento.")
    }
    else {
        texto = texto.replace(/[eiaou]/g, function(match){
            return subCrip[match];
        }); 
        saidaDiv.innerHTML = ''; 
        saidaDiv.textContent = texto;
    }
   
}

function descriptografar(){
    var texto = document.getElementById('entrada').value;
    var regex = /[A-ZÁÉÍÓÚÃÕÀÂÊÔÜÇáéíóúãõàâêôüç]/;
    var saidaDiv = document.getElementById('saida');

    let subCrip = {
        'enter':'e',
        'imes':'i',
        'ai':'a',
        'ober':'o',
        'ufat':'u'
    }

    if(texto.trim()===""){
        saidaDiv.innerHTML = `
        <img src="imgs/image.png" alt="Pessoa procurando o texto">
        <h4 class="principal__saida__mensagem1">Nenhuma mensagem encontrada</h4>
        <p class="principal__saida__mensagem2">Digite um texto que deseja criptografar ou descriptografar</p>
    `;
    }
    else if(regex.test(texto)){
        alert("O texto contém letras maiúsculas ou caracteres especiais. Por favor digite apenas com letras minúsculas e sem acento.")
    }
    else {
        texto = texto.replace(/enter|imes|ai|ober|ufat/g, function(match){
            return subCrip[match];
        });
        var saidaDiv = document.getElementById('saida');
        saidaDiv.innerHTML = ''; 
        saidaDiv.textContent = texto; 
    }
}

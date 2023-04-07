const namelist = []


const adicionar = document.getElementById("btAdicionar"); 
const remover = document.getElementById("btRemover");
const filtrar = document.getElementById("btFiltrar");
const saida = document.getElementById("saida");
const listE1 = document.getElementById("list");
const searchField = document.getElementById("searchField");
searchField.addEventListener("click", inputHandler);


this.fillList();

function fillList(list = namelist) {
    listE1.innerHTML = "";
    for(let i=0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listE1.appendChild(listItems);
    
    }
    
}

function inputHandler() {
    nome = searchField.value.toLowerCase();
    const filteredList = namelist.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord)
    }); 

    fillList(filteredList);
  
}


//-----------------------------------------------------------------------------------------------------------------------

function functionAdicionar(){
    nome = searchField.value.toLowerCase();
    if(nome != ''){
        if (namelist.indexOf(nome) == -1){
            namelist.push(nome); 
            saida.innerHTML = "Novo nome adicionado!";
        }else{
            saida.innerHTML = "Nome já adicionado anteriormente"
        }

    } else {
        saida.innerHTML = "Nome inválido";
    }
    
}

 
function functionRemover(){
    nome = searchField.value.toLowerCase(); 
    var verifica = namelist.indexOf(nome);
    if(verifica > -1){
        namelist.splice(verifica, 1); 
        saida.innerHTML = "O nome foi removido com sucesso!"
    } else{
        saida.innerHTML = "Esse nome já foi removido antes."
    }


}
filtrar.addEventListener("click", inputHandler);
adicionar.addEventListener("click", functionAdicionar);
remover.addEventListener("click", functionRemover);

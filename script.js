function openURL(){
    let URL_VALUE = document.getElementById("inputURL").value;
    let TITLE_VALUE = document.getElementById("inputTitle").value;

    if(URL_VALUE == "" || TITLE_VALUE == ""){
        console.log("Por favor, digite todos os campos para a busca!")
        return;
    }else{
        window.location.assign(`${URL_VALUE}`);
        let verify = verifyIfSearchExists();
        if(verify == true){
            console.log("Encontramos o Backup");
        }
    }
}

function verifyIfSearchExists(){
    let title = document.getElementsByTagName("span").length;
    
    for(let i=0;i>title;i++){
        let valueOfTitle = document.getElementsByClassName("scc-list-first-column css-179")[i].innerText;
        if(valueOfTitle == URL_VALUE){
            console.log("Encontrado o Backup!");
            return true;
        }
    }
}
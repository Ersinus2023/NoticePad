let addToDoButton = document.getElementById('addToDo');

addToDoButton.addEventListener('click', function(){

    let Anzeigefenster = document.createElement('p');
    Anzeigefenster.classList.add('Anzeigefenster-styling');

    let AnzeigeContainer = document.getElementById('Anzeige');
    AnzeigeContainer.appendChild(Anzeigefenster);
    
    let inputText = document.getElementById('EingabeText');
    Anzeigefenster.innerHTML = EingabeText.value;
    EingabeText.value = "";

    Anzeigefenster.addEventListener('click', function(){
        Anzeigefenster.style.textDecoration = 'line-through';
    });

    Anzeigefenster.addEventListener('dblclick', function(){
        AnzeigeContainer.removeChild(Anzeigefenster);
    });
    let clearToDo = document.getElementById('clearToDo');
    clearToDo.addEventListener('click', function(){
        Anzeigefenster.remove();
    });

})

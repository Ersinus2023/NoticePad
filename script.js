let addToDoButton = document.getElementById('addToDo');
let AnzeigeContainer = document.getElementById('Anzeige');
let inputText = document.getElementById('EingabeText');
let clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    AnzeigeContainer.appendChild(paragraph);
    paragraph.innerHTML = EingabeText.value;
    EingabeText.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        AnzeigeContainer.removeChild(paragraph);
    });

    clearToDo.addEventListener('click', function(){
        paragraph.remove();
    })

})

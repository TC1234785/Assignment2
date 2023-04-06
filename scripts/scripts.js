/* Check all selectors*/
const aside = document.querySelector('aside');
const html = document.querySelector('html');
const note = document.querySelector('.note');
const buttonDarkTheme = document.querySelector("#Dark_Theme");
const buttonCancel = document.querySelector("#Cancel");
const bottomButtons = document.querySelector('.bottom_buttons');
const newNoteButton = document.querySelector("#New_Note")

/* Dark Theme Button functionality */
function changeDarkTheme()
{
    document.body.classList.toggle('darkThemeMain');
    aside.classList.toggle('darkThemeAside');
    html.classList.toggle('darkThemeText');
    note.classList.toggle('darkThemeAside');
    if (buttonDarkTheme.textContent=== "Dark Theme"){
        buttonDarkTheme.textContent= 'Light Theme';
    }
    else {
        buttonDarkTheme.textContent= "Dark Theme";
    } 
}
buttonDarkTheme.addEventListener("click", changeDarkTheme);

/* Cancel button functionality */


function cancelButton()
{
    bottomButtons.classList.add("hidden")
    note.classList.add("hidden")
}
buttonCancel.addEventListener('click', cancelButton)

/* New Note functionality */

function newNote()
{
    if(bottomButtons.classList.contains("hidden")){
       bottomButtons.classList.remove("hidden");
        note.classList.remove("hidden");
    }
    else{
        note.value = "";
    }
}
newNoteButton.addEventListener('click', newNote)

/*Declare notesArray*/
const notesArray = [{title:"note one", body:"this is my first note"}, {title:"note two", body:"this is my second note"}]





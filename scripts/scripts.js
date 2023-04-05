/* Dark Theme Button functionality */

const buttonDarkTheme = document.querySelector("#Dark_Theme");

function changeDarkTheme()
{
    document.body.classList.toggle('darkThemeMain');
    document.querySelector('aside').classList.toggle('darkThemeAside');
    document.querySelector('html').classList.toggle('darkThemeText');
    document.querySelector('.note').classList.toggle('darkThemeAside');
    if (buttonDarkTheme.textContent=== "Dark Theme"){
        buttonDarkTheme.textContent= 'Light Theme';
    }
    else {
        buttonDarkTheme.textContent= "Dark Theme";
    } 
}
buttonDarkTheme.addEventListener("click", changeDarkTheme);

/* Cancel button functionality */
const buttonCancel = document.querySelector("#Cancel")

function cancelButton()
{
    document.querySelector('.bottom_buttons').classList.add("hidden")
    document.querySelector('.note').classList.add("hidden")
}
buttonCancel.addEventListener('click', cancelButton)

/* New Note functionality */
const newNoteButton = document.querySelector("#New_Note")
const textAreaPlaceholder = document.querySelector(".note")
function newNote()
{

    
    if(document.querySelector('.bottom_buttons').classList.contains("hidden")){
        document.querySelector('.bottom_buttons').classList.remove("hidden");
        textAreaPlaceholder.classList.remove("hidden");
    }
    else{
        textAreaPlaceholder.value = "";
    }
}
newNoteButton.addEventListener('click', newNote)

/*Declare notesArray*/
const notesArray = [{title:"note one", body:"this is my first note"}, {title:"note two", body:"this is my second note"}]




/* Check all selectors*/
const aside = document.querySelector('aside');
const html = document.querySelector('html');
const note = document.querySelector('.note');
const buttonDarkTheme = document.querySelector("#Dark_Theme");
const buttonCancel = document.querySelector("#Cancel");
const bottomButtons = document.querySelector('.bottom_buttons');
const newNoteButton = document.querySelector("#New_Note")
const saveButton = document.querySelector("#Save");
const newLi = document.createElement('li')
const userText = document.querySelector('textarea')
const listNotes = document.querySelector('ul')

/*Declare notesArray*/
const notesArray = [{title:"note one", body:"this is my first note"}, {title:"note two", body:"this is my second note"}]

/* Dark Theme Button functionality */
function changeDarkTheme()
{
    /*toggle dark theme when button is pressed*/
    document.body.classList.toggle('darkThemeMain');
    aside.classList.toggle('darkThemeAside');
    html.classList.toggle('darkThemeText');
    note.classList.toggle('darkThemeAside');

    /*Change the button to have 'Dark Theme' or 'Light Theme' when clicked*/
    if (buttonDarkTheme.textContent=== "Dark Theme"){
        buttonDarkTheme.textContent= 'Light Theme';
    }
    else {
        buttonDarkTheme.textContent= "Dark Theme";
    } 
}
buttonDarkTheme.addEventListener("click", changeDarkTheme);

/* Cancel button functionality */
function cancelButton(){
    /*Hide the save, cancel, and text area*/
    bottomButtons.classList.add("hidden")
    note.classList.add("hidden")
}
buttonCancel.addEventListener('click', cancelButton)

/* New Note button functionality */
function newNote()
{
    /*check to see if the save, cancel, and text area are hidden. If so, make them visible again*/
    if(bottomButtons.classList.contains("hidden")){
       bottomButtons.classList.remove("hidden");
        note.classList.remove("hidden");
    }
    /*if everything is already visible, clear the text inside the text area*/
    else{
        note.value = "";
    }
}
newNoteButton.addEventListener('click', newNote)

/*Save button functionality*/
function saveNote(){
    /*Prompt the user for a title. If it's empty, let the user know. Terminate so user can click the button again*/
    let noteTitle = prompt("What is the title for the note?");
    if(noteTitle === ""){
        alert("You did not input anything. A title cannot be empty")
    }

    /*if the user presses cancel, terminate the function*/
    else if(noteTitle === null){
        return;
    }
    
    else{
        /*If there is already a note with the same title, ask the user to input a different title*/
        while (notesArray.find(note=> note.title === noteTitle)){
            noteTitle = prompt('That title already exists. Try a different title')
        };
        /*Save the user input to an object to put into the locally stored array*/
        newLi.textContent = noteTitle;
        let noteObject = {title: noteTitle, body: note.value};
        notesArray.push(noteObject);

        /*Put the new note title into the list for access later*/
        listNotes.appendChild(newLi);
        
    }
}
saveButton.addEventListener('click', saveNote)

/*Opening notes in sidebar*/

function openNote(event){
    /*Loop through the notesArray*/
    for (let listedNote of notesArray)
        /*Check and see if the item the user clicked on is the same as the item in the array*/
        if (event.target.textContent.trim() === listedNote.title){
            /*Put the note's content into the text box for the user to view*/
            note.value = listedNote.body
        }
    }

listNotes.addEventListener('click', openNote)
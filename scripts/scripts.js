/* Dark Theme Button functionality */

const buttonDarkTheme = document.querySelector("#Dark_Theme");

function changeDarkTheme()
{
    document.body.classList.toggle('darkThemeMain');
    document.querySelector('aside').classList.toggle('darkThemeAside');
    document.querySelector('html').classList.toggle('darkThemeText');
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
    document.querySelector('#note').classList.add("hidden")
}
buttonCancel.addEventListener('click', cancelButton)






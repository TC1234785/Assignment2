/* Dark Theme Button functionality */

const button = document.querySelector("#Dark_Theme");

function changeDarkTheme()
{
    document.body.classList.toggle('darkThemeMain');
    document.querySelector('aside').classList.toggle('darkThemeAside')
    document.querySelector('html').classList.toggle('darkThemeText')
    document.querySelector('.navbar a').classList.toggle('darkThemeText')
    if (button.textContent=== "Dark Theme"){
        button.textContent= 'Light Theme'
    }
    else {
        button.textContent= "Dark Theme"
    } 
}
button.addEventListener("click", changeDarkTheme);


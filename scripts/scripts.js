const button = document.querySelector("#Dark_Theme");

function changeDarkTheme()
{
    document.body.classList.toggle('darkThemeMain');
    document.querySelector('aside').classList.toggle('darkThemeAside')
}
button.addEventListener("click", changeDarkTheme);
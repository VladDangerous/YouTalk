const button = document.getElementById("screenInfoBtn");

button.addEventListener("click", function(){
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const availWidth = screen.availWidth;
    const availHeight = screen.availHeight;
    const windowWidth = window.innerWidth;
    const windowHeigt = window.innerHeight;

    const message = `
    Размеры экрана:
    Ширина: ${screenWidth}px;
    Высота: ${screenHeight}px;

    Доступная область:
    Ширина: ${availWidth}px;
    Высота: ${availHeight}px;

    Размеры окна:
    Ширина: ${windowWidth}px;
    Высота: ${windowHeigt}px;
    `

    alert(message);
});
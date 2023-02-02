// eslint-disable-next-line space-before-function-paren
window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var size = 200;
    //these are the colors used in the triangle
    let colorsArr = ['#F000AA', '#AAF000', '#00AAF0'];

    canvas.width = window.innerWidth - 50;
    canvas.height = window.innerHeight - 50;

    //the canvas will follow your mouse
    // eslint-disable-next-line space-before-function-paren
    canvas.addEventListener('mousemove', function (event) {
        var x = event.clientX - size / 2;
        var y = event.clientY - (size * Math.sqrt(3)) / 100;
        ctx.clearRect(canvas.width, canvas.height, canvas.width, canvas.height);
        //the hex value is the color of the inner triangle
        drawTriangle(x, y, size, '#000000');
    });

    //mouse wheel up will increase size and randomize the colors in colorsArr, mouse-wheel down will reduce the size
    // eslint-disable-next-line space-before-function-paren
    canvas.addEventListener('wheel', function (event) {
        if (event.deltaY < 0) {
            size *= 1.2;
        } else {
            size /= 1.2;
        }
    });

    // eslint-disable-next-line space-before-function-paren
    canvas.addEventListener('click', function (event) {
        randomizeColors();
    });

    //loops thru colorsArr then calls on getRandomColor to generate a random hex before setting it to the current index in colorsArr
    function randomizeColors() {
        for (var i = 0; i < colorsArr.length; i++) {
            colorsArr[i] = getRandomColor();
        }
    }

    // Generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    //this draws the triangle
    // Draw the Sierpinski triangle
    function drawTriangle(x, y, size, color) {
        var height = (size * Math.sqrt(3)) / 2;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y - height);
        ctx.lineTo(x, y);
        ctx.fill();

        if (size > 20) {
            drawTriangle(x, y, size / 2, colorsArr[0]);
            drawTriangle(x + size / 2, y, size / 2, colorsArr[1]);
            drawTriangle(x + size / 4, y - height / 2, size / 2, colorsArr[2]);
        }
    }
};

window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var size = 200;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.addEventListener('mousemove', function (event) {
        var x = event.clientX - size / 2;
        var y = event.clientY - (size * Math.sqrt(3)) / 100;
        ctx.clearRect(canvas.width, canvas.height, canvas.width, canvas.height);
        drawTriangle(x, y, size, '#000000');
    });

    canvas.addEventListener('click', function (event) {
        if (event.ctrlKey) {
            size /= 2;
        } else {
            size *= 2;
        }

        // var x = event.clientX;
        // var y = event.clientY;
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

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
            drawTriangle(x, y, size / 2, '#F000AA');
            drawTriangle(x + size / 2, y, size / 2, '#AAF000');
            drawTriangle(x + size / 4, y - height / 2, size / 2, '#00AAF0');
        }
    }
};

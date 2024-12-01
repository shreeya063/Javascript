document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('target');
    const mouse = document.getElementById('trigger');

    const originalSource = image.src;

    mouse.addEventListener('mouseover', function () {
        image.src = 'img/picB.jpg';
    });

    mouse.addEventListener('mouseout', function () {
        image.src = originalSource;
    });
});
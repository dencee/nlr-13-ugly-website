let myp5;
let canvasDiv;

window.addEventListener('DOMContentLoaded', function () {
    canvasDiv = document.getElementById("canvas-id")
    myp5 = new p5(sketch, window.document.getElementById('canvas-id'));
});

/*
 *  P5 JS code
 */
let sketch = function (p) {

    let p5Canvas;
    const WIDTH = canvasDiv.offsetWidth;
    const HEIGHT = canvasDiv.offsetHeight;
    const oranges = [];
    const bears = [];

    p.preload = function () { }

    p.setup = function () {
        p5Canvas = p.createCanvas(WIDTH, HEIGHT);

        for (let i = 0; i < 1000; i++) {
            p.fill(255);
            p.circle(100, 100, 10);
        }
    }

    p.draw = function draw() {
        p.background(0);
        p.fill(255);
        p.stroke(255);
        p.textSize(36);
        p.text("ORANGE 🍊🐻", 100, 100);

        addOranges();
        addBears();
        drawBearsAndOranges();
        purge();

        console.log(bears.length);
    }

    function purge(){
        for(let i = 0; i < bears.length; i++){
            if(bears[i].y > HEIGHT){
                bears.splice(i, 1);
            }
        }

        for(let i = 0; i < oranges.length; i++){
            if(oranges[i].y > HEIGHT){
                oranges.splice(i, 1);
            }
        }
    }

    function drawBearsAndOranges(){
        for(const eachBear of bears){
            eachBear.y += p.random(2,20);
            p.text('🐻', eachBear.x, eachBear.y);
        }

        for(const eachOrange of oranges){
            eachOrange.y += p.random(2,20);
            p.text('🍊', eachOrange.x, eachOrange.y);
        }
    }

    function addOranges() {
        if (oranges.length < 500) {
            oranges.push({
                x: p.random(0, WIDTH),
                y: 0
            });
        }
    }

    function addBears() {
        if (bears.length < 500) {
            bears.push({
                x: p.random(0, WIDTH),
                y: 0
            });
        }
    }
};
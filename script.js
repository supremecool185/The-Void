var target = document.getElementById("1");

var count = 45;
var size = 500;

function generate(){
    for(i=1; i<count; i++){
        var frameDiv = document.createElement("div");
        frameDiv.classList.add("frame");
        target.appendChild(frameDiv);

        var rotorDiv = document.createElement("div");
        rotorDiv.classList.add("rotor");
        frameDiv.appendChild(rotorDiv);
        
        var squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.width = (size - 10*i) +"px";
        squareDiv.style.height = (size - 10*i) +"px";
        squareDiv.style.borderRadius = ((size - 10*i)/(count*2))*i +"px";
        squareDiv.style.animationDelay = i/10 + "s";
        rotorDiv.appendChild(squareDiv);

        target = squareDiv;
    }
}
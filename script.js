var socket = io()
var side = 30

function setup() {
        createCanvas(20 * side, 20 * side)
}
socket.on("Winter", function (data) {
    weath = data;
})
socket.on("Summer", function (data) {
    weath = data;
})
socket.on("Spring", function (data) {
    weath = data;
})
socket.on("Autumn", function (data) {
    weath = data;
})
 var weath = "spring";



function nkarel(matrix) {

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
    
                var tobot = side - side * 0.1
                textSize(tobot)
    
    
                if (matrix[y][x] == 1) {
                    if (weath == "spring") {
                        fill("darkgreen");
                    }
                    else if (weath == "summer") {
                        fill("#79a83b");
                    }
                    else if (weath == "autumn") {
                        fill("#ff8453");
                    }
                    if (weath == "winter") {
                        fill("#ffffff");
                    }
                    fill("orange")
                    rect(x * side, y * side, side, side)
                    text("🥕", x * side, y * side + tobot)
                } else if (matrix[y][x] == 2) {
                    fill("white")
                    rect(x * side, y * side, side, side)
                    text("🐰", x * side, y * side + tobot)
                } else if (matrix[y][x] == 0) {
                    fill("gray")
                    rect(x * side, y * side, side, side)
    
                }else if (matrix[y][x] == 3) {
    
                        fill("orange")
                        rect(x * side, y * side, side, side)
                        text("🦊", x * side, y * side + tobot)
               } else if (matrix[y][x] == 4) {
    
                    fill("black")
                    rect(x * side, y * side, side, side)
                    text("🐺", x * side, y * side + tobot)
                }
                else if (matrix[y][x] == 5) {
                    fill("brown")
                    rect(x * side, y * side, side, side)
                    text("🐻", x * side, y * side + tobot)
                }
                else if (matrix[y][x] == 6) {
                    fill("yellow")
                    rect(x * side, y * side, side, side)
                    text("🦁", x * side, y * side + tobot)
                } 

        }

    }  
    
}

socket.on('send matrix',nkarel)      


function Winter() {
    socket.emit("winter");
}
function Summer() {
    socket.emit("summer");
}
function Spring() {
    socket.emit("spring");
}
function Autumn() {
    socket.emit("autumn");
}
function AddCarrot(){
    socket.emit("addCarrot");
}
function AddRabbit(){
    socket.emit("addRabbit");
}
function KillAll(){
    socket.emit("killAll");
}
function AddFox(){
    socket.emit("addFox");
}
function AddWolf(){
    socket.emit("addWolf");
}
function AddBear(){
    socket.emit("addBear");
}
function AddLion(){
    socket.emit("addLion");

}
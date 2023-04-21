var socket = io()

var side = 30

function setup() {
        createCanvas(20 * side, 20 * side)
}


function nkarel(matrix) {

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
    
                var tobot = side - side * 0.1
                textSize(tobot)
    
    
                if (matrix[y][x] == 1) {
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
    
                   


                for (let i in carrotArr) {
                        carrotArr[i].mul()
                }


                for(let i in rabbitArr){
                        rabbitArr[i].eat()
                }

                
                for(let i in foxArr){
                        foxArr[i].eat()
                }
                
                for(let i in wolfArr){
                        wolfArr[i].eat()
                }

               
                for(let i in bearArr){
                        bearArr[i].eat()
                }

                for(let i in lionArr){
                        lionArr[i].eat()
                }


}

function matrixGenerator(matrixSize, carrot,rabbit,fox,wolf,bear,lion) {
        var matrix = []
        ////  matrix սարքելու հատված
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0)
                }
        }

        // 1 carrot
        for (let i = 0; i < carrot; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }
         //rabbit 2

         for (let i = 0; i < rabbit; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 2
        }
        //3 fox


        for (let i = 0; i < fox; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }
        //4 wolf
        for (let i = 0; i < wolf; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }
        //5 bear 

        for(let i = 0;i < bear;i ++){
                let x = Math.floor(Math.random()* matrixSize)
                let y = Math.floor(Math.random()* matrixSize)
                matrix[y][x] = 4
        }
        //6 lion 
        for(let i = 0;i < lion;i ++){
                let x = Math.floor(Math.random()* matrixSize)
                let y = Math.floor(Math.random()* matrixSize)
                matrix[y][x] = 5
        }

       
       
        return matrix
}

let matrix = matrixGenerator(20, 10,16,4,8,6,9)
let side = 30
///օբյեկտներ պահելու զանգվածներ
var carrotArr = []
var rabbitArr = []
var foxArr = []
var wolfArr = []
var bearArr = []
var lionArr = []

function setup() {
        frameRate(15)
        createCanvas(matrix[0].length * side, matrix.length * side)
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                let carrot = new Carrot(x, y)

                                carrotArr.push(carrot)


                        } else if(matrix[y][x] == 2){
                             let rabbit = new  Rabbit(x,y)
                            rabbitArr.push(rabbit)
                        }else if(matrix[y][x] ==  3){
                             let fox = new Fox(x,y)
                             foxArr.push(fox)
                        }else if(matrix[y][x]== 4){
                             let wf = new Wolf(x,y)
                               wolfArr.push(wf)
                       } else if(matrix[y][x]== 5){
                             let br = new Bear(x,y)
                             bearArr.push(br)
                        }else if(matrix[y][x] == 6){
                                let li = new Lion(x,y)
                                lionArr.push(li)
                        }


                }
        }

}


function draw() {

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

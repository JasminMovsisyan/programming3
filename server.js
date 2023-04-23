var express =  require ('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs")

app.use(express.static("."));

app.get('/',function(req,res){
    res.redirect('index.html')
});

server.listen(3000,function(){
   console.log("server is run");
})


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

matrix = matrixGenerator(20, 10,16,4,8,6,9)


io.sockets.emit('send matrix',matrix)

 carrotArr = []
 rabbitArr = []
 foxArr = []
 wolfArr = []
 bearArr = []
 lionArr = []

Carrot = require("./carrot")
Rabbit = require("./rabbit")
Fox = require("./fox")
Wolf = require("./wolf")
Bear = require("./bear")
Lion = require("./lion")


function createObject(){
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

    io.sockets.emit('send matrix',matrix)
}

function game (){
        for (let i in carrotArr) {
                carrotArr[i].mul()
                console.log(carrotArr.length);
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

        io.sockets.emit('send matrix',matrix)

}


setInterval(game,300)




io.on('connection',function(){
        createObject()
})
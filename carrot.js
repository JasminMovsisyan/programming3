let LivingCreauture = require("./LivingCreauture")

module.exports = class Carrot extends LivingCreauture{
    constructor(x,y){
       super(x,y)
        this.multiply = 0
     
    }
    
    mul(){
         this.multiply++
          let emptyCell = this.chooseCell(0)
          let newCell = emptyCell[Math.floor(Math.random() * emptyCell.lenght)]
      
          if(newCell && this.multiply >= 5){
                     let newX  =   newCell[0]
                     let newY  =   newCell[1]

                     matrix[newY][newX] = 1

                     let carrot = new Carrot(newX,newY)
                     carrotArr.push(carrot)


                     this.multiply = 0


          }
          
    }


}


class Wolf {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 15
        this.directions = []
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char) {
        this.getNewCoordinates()
        let found = []


        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }

            
        }


        return found

    }


    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let wolf = new Wolf(newX, newY)

           wolfArr.push(wolf)


        }
    }


    eat() {
        let emptyCell = this.chooseCell( 3)
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 7
            let newX = newCell[0]
            let newY = newCell[1]

            

            for (let i in foxArr) {
                if (newX == foxArr[i].x && newY == foxArr[i].y) {
                    foxArr.splice(i, 1)
                }
            }


            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            if (this.energy > 30) {
                this.mul()
            }

        } else {
            this.move()
        }
    }


    move(){
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

            if(newCell){
                let newX = newCell[0]
                let newY = newCell[1]

                matrix[newY][newX] = 4
                matrix[this.y][this.x] = 0
                
                this.x = newX
                this.y = newY

                this.energy--

                if(this.energy < 0){
                    this.die ()
                }
            }
     }



     die(){
        matrix[this.y][this.x] = 0

          for(let i in wolfArr){
                   if(this.x == wolfArr[i].x && this.y == wolfArr[i].y) {
                             wolfArr.splice(i,1)
                   }
          }
    }


}

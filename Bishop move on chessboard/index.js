let  chessSqureSize = 8
var chessboard = document.getElementById("chessboard");
for (let i = 0; i < chessSqureSize; i++) {
    let row = document.createElement("div")
    row.classList.add("each-row");
    for (let j = 0; j < chessSqureSize; j++) {
        let newSquare = document.createElement("div");
        if((i+j)%2==0){
            newSquare.style.backgroundColor="black"
        }else{
            newSquare.style.backgroundColor="white"
        }
        newSquare.classList.add("square");
        newSquare.addEventListener('mouseover', (result)=>{
            console.log(result.target)
            result.target.style.backgroundColor='skyblue'
            heighlightSquare(i+1, j+1)
        })
        newSquare.addEventListener('mouseout', (result)=>{
            if((i+j)%2==0){
                result.target.style.backgroundColor="black"
            }else{
                result.target.style.backgroundColor="white"
            }
            removeHighlight()
        })
        // newSquare.textContent = "Square_" +(i+1)+"_"+(j+1);
        newSquare.id = "square_"+(i+1)+"_"+(j+1);
        row.appendChild(newSquare);
    }
    chessboard.appendChild(row)
}
function heighlightSquare(row, column){
    let allLighhightSquare = calculateDiagonalElement(row, column)
    for(let i=0;i<allLighhightSquare.length;i++){
        let topLeftSquare = allLighhightSquare[i].topLeft
        for(let i=0;i<topLeftSquare.length;i++){
            if(document.getElementById(`square_${topLeftSquare[i].row}_${topLeftSquare[i].column}`)){
                document.getElementById(`square_${topLeftSquare[i].row}_${topLeftSquare[i].column}`).style.backgroundColor='blue'
            }
        }
        let topRightSquare = allLighhightSquare[i].topRight
        for(let j=0;j<topRightSquare.length;j++){
            if(document.getElementById(`square_${topRightSquare[j].row}_${topRightSquare[j].column}`)){
                document.getElementById(`square_${topRightSquare[j].row}_${topRightSquare[j].column}`).style.backgroundColor='blue'
            }
        }
        let bottomLeftSquare = allLighhightSquare[i].bottomLeft
        for(let k=0;k<bottomLeftSquare.length;k++){
            if(document.getElementById(`square_${bottomLeftSquare[k].row}_${bottomLeftSquare[k].column}`)){
                document.getElementById(`square_${bottomLeftSquare[k].row}_${bottomLeftSquare[k].column}`).style.backgroundColor='blue'
            }
        }
        let bottomRightSquare = allLighhightSquare[i].bottomRight
        for(let l=0;l<bottomRightSquare.length;l++){
            if(document.getElementById(`square_${bottomRightSquare[l].row}_${bottomRightSquare[l].column}`)){
                document.getElementById(`square_${bottomRightSquare[l].row}_${bottomRightSquare[l].column}`).style.backgroundColor='blue'
            }
        }
        
    }
}
function calculateDiagonalElement(row, column){       
    let nextLevel = {}                                       
    nextLevel.topLeft = calculateTopLeft(row, column)       
    nextLevel.topRight = calculateTopRight(row, column)     
    nextLevel.bottomLeft = calculateBottomLeft(row, column)             
    nextLevel.bottomRight = calculateBottomRight(row, column)          
    arr.push(nextLevel)
    return arr
}
function calculateTopLeft(row, column){
    let squarePosition = {}
    squarePosition.row=row-1;
    squarePosition.column=column-1
    topLeftSquare.push(squarePosition)
    row=row-1
    column=column-1
    if(!(row ==0 || column ==0)){
        calculateTopLeft(row, column)
    }
    return topLeftSquare
}
function calculateTopRight(row, column){
    let squarePosition = {}
    squarePosition.row=row-1;
    squarePosition.column=column+1
    topRightSquare.push(squarePosition)
    row=row-1
    column=column+1
    if(!(row ==0 || column ==9)){
        calculateTopRight(row, column)
    }
    return topRightSquare
}
function calculateBottomLeft(row, column){
    let squarePosition = {}
    squarePosition.row=row+1
    squarePosition.column=column-1
    bottomLeftSquare.push(squarePosition)
    row=row+1
    column=column-1
    if(!(row==9 || column==0)){
        calculateBottomLeft(row, column)
    }
    return bottomLeftSquare
}
function calculateBottomRight(row, column){
    let squarePosition = {}
    squarePosition.row=row+1
    squarePosition.column=column+1
    bottomRightSquare.push(squarePosition)
    row=row+1
    column=column+1
    if(!(row==9 || column==9)){
        calculateBottomRight(row, column)
    }
    return bottomRightSquare
}
function removeHighlight(){
    for(let i=0;i<arr.length;i++){
        console.log(`square_${arr[i].topLeft}`);
        let topLeftSquare = arr[i].topLeft
        for(let i=0;i<topLeftSquare.length;i++){
            if(document.getElementById(`square_${topLeftSquare[i].row}_${topLeftSquare[i].column}`)){
                if((topLeftSquare[i].row+topLeftSquare[i].column)%2==0){
                    document.getElementById(`square_${topLeftSquare[i].row}_${topLeftSquare[i].column}`).style.backgroundColor='black'

                }else{
                    document.getElementById(`square_${topLeftSquare[i].row}_${topLeftSquare[i].column}`).style.backgroundColor='white'
                }
            }
        }
        let topRightSquare = arr[i].topRight
        for(let j=0;j<topRightSquare.length;j++){
            if(document.getElementById(`square_${topRightSquare[j].row}_${topRightSquare[j].column}`)){
                if((topRightSquare[j].row+topRightSquare[j].column)%2==0){
                    document.getElementById(`square_${topRightSquare[j].row}_${topRightSquare[j].column}`).style.backgroundColor='black'

                }else{
                    document.getElementById(`square_${topRightSquare[j].row}_${topRightSquare[j].column}`).style.backgroundColor='white'
                }
            }
        }
        let bottomLeftSquare = arr[i].bottomLeft
        for(let k=0;k<bottomLeftSquare.length;k++){
            if(document.getElementById(`square_${bottomLeftSquare[k].row}_${bottomLeftSquare[k].column}`)){
                if((bottomLeftSquare[k].row+bottomLeftSquare[k].column)%2==0){
                    document.getElementById(`square_${bottomLeftSquare[k].row}_${bottomLeftSquare[k].column}`).style.backgroundColor='black'

                }else{
                    document.getElementById(`square_${bottomLeftSquare[k].row}_${bottomLeftSquare[k].column}`).style.backgroundColor='white'
                }
            }
        }
        let bottomRightSquare = arr[i].bottomRight
        for(let l=0;l<bottomRightSquare.length;l++){
            if(document.getElementById(`square_${bottomRightSquare[l].row}_${bottomRightSquare[l].column}`)){
                if((bottomRightSquare[l].row+bottomRightSquare[l].column)%2==0){
                    document.getElementById(`square_${bottomRightSquare[l].row}_${bottomRightSquare[l].column}`).style.backgroundColor='black'

                }else{
                    document.getElementById(`square_${bottomRightSquare[l].row}_${bottomRightSquare[l].column}`).style.backgroundColor='white'
                }
            }
        }
    }
    arr=[]
    topLeftSquare = []
    topRightSquare = []
    bottomLeftSquare = []
    bottomRightSquare = []
}
let arr = []
let topLeftSquare = []
let topRightSquare = []
let bottomLeftSquare = []
let bottomRightSquare = []
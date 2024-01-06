let stars = document.getElementById('star-rating')
for(let i=0;i<5;i++){
    let eachStar = document.createElement('div')
    eachStar.addEventListener('mouseover', handleMouseOverEvent)
    eachStar.addEventListener('mouseout', handleMouseOutEvent)
    eachStar.addEventListener('click', handleClickEvent)
    eachStar.classList.add('star')
    eachStar.id=`star_${i+1}`
    stars.appendChild(eachStar)
}
function changeStarColor(id, color){
    let id_number = id.split('_')[1]
    if(mouseClicked){
        resetStarColor()
    }
    for(let i=1;i<=id_number;i++){
        let star = document.getElementById(`star_${i}`)
        if(star){
            star.style.backgroundColor=color
        }
    }
}
function resetStarColor(){
    for(let i=1;i<=5;i++){
        let star = document.getElementById(`star_${i}`)
        if(star){
            star.style.backgroundColor='#c4c4c4'
        }
    }
}
function handleMouseOverEvent(result){
    if(!mouseClicked){
        changeStarColor(result.target.id, '#ffe98e')
    }
}
function handleMouseOutEvent(result){
    if(!mouseClicked){
        changeStarColor(result.target.id, '#c4c4c4')
    }     
}
function handleClickEvent(result){
    changeStarColor(result.target.id, '#ffd41d')
    mouseClicked=true
}
let mouseClicked=false
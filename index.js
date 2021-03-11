// javascript
const lapBtn = document.querySelector('.btn-lap')
const lapConteiner = document.querySelector('.lap-cont')
const btnStart = document.querySelector('.btn-start')
const lapsValue = document.querySelector('.laps')
const timeValue = document.querySelector('#time')
const lapMsg = document.querySelector('.nolap')
const lapMsgValue = document.querySelector('#msgvalue')
const btnReset = document.querySelector('.btn-reset')


var lapNumber = 0
var sec = 0
var min = 0
var hour = 0
var timeInterval


const lapHandler = ()=>{
    lapMsg.className = 'lapremove'
    const numberOfLaps = document.querySelectorAll('.laps').length
    if(numberOfLaps >= 4){
        alert('You can only save 4 laps')
        timeValue.innerHTML = `00:00:00`
    }else if(timeValue.innerHTML === '00:00:00'){
        lapMsg.classList.remove('lapremove')
        lapMsgValue.innerHTML = 'Start counting first!'
    }else{
        const element = document.createElement('div')
        element.className = 'laps'
        var lap = document.createElement('p')
        lapNumber++
        lap.innerHTML = lapNumber
        var lapTime = document.createElement('h3')
        lapTime.innerHTML = `${tc(hour)}:${tc(min)}:${tc(sec)}`
        element.appendChild(lap)
        element.appendChild(lapTime)
        lapConteiner.appendChild(element)    
    }
}

const timeHandler = ()=>{
    clearInterval(setTimeHandler)
    if(btnStart.innerHTML == "START" || btnStart.innerHTML == "RESTART"){
        btnStart.innerHTML = 'PAUSE'
        setTimeHandler()
    }else if(btnStart.innerHTML == "PAUSE"){
        btnStart.innerHTML = 'RESTART'
        stopTimer()
    }
}


function setTimeHandler(){
    timeInterval = setInterval(clockSet, 1000)
}

const stopTimer = () => {
    clearInterval(timeInterval)
}

const clockSet = () => {
    sec++
    if(sec == 60){
        sec = 0
        min++
    }
    if(min == 60){
        min = 0
        hour++
    }
    timeValue.innerHTML = `${tc(hour)}:${tc(min)}:${tc(sec)}`  
}

function tc(value){
    if(value <= 9){
        return(`0${value}`)
    }else{
        return(value)
    }
}

const resetHandler = () => {
    location.reload()
}

lapBtn.addEventListener('click', lapHandler)
btnStart.addEventListener('click', timeHandler)
btnReset.addEventListener('click', resetHandler)


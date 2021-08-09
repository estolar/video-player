const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $foward = document.querySelector('#foward')

$play.addEventListener('click', handlePlay)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}

$pause.addEventListener('click', handlePause)

function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true            
}        

$backward.addEventListener('click', handleBackward)

function handleBackward() {
    $video.currentTime -= 10
}

$foward.addEventListener('click', handleFoward)

function handleFoward() {
    $video.currentTime += 10
}   

const $progress = document.querySelector('#progress')

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)


function handleLoaded() {
    $progress.max = $video.durationx
    console.log('ha cargado el video', $video.durationx)
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
}
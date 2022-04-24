function startVideoFromCamera(){
    const especifica = {video:{}}

    navigator.mediaDevices.getUserMedia(especifica).then(stream=>{
        const videoElement = document.querySelector("#video")
        videoElement.srcObject = stream}).catch(error=>{console.log(error)})
}
window.addEventListener("DOMContentLoaded", startVideoFromCamera)
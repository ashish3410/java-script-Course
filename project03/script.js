const clock=document.getElementById("clock")
const ytLink=document.querySelector(".youTubeLink")
ytLink.addEventListener('click',GoToYT)
function GoToYT(){
    location.href="https://www.youtube.com/watch?v=EGqHVjU-fas&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=35"
}
setInterval(function(){
    let date=new Date()
    clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`
},1000)
let gameSeq = []
let userSeq = []

let color = ["red","green","blue","yellow"]

let started = false
let level = 0

let p = document.querySelector("p")
let boxes = document.querySelectorAll(".box")
let button = document.querySelector("button")

function btnFlash(btnColor){
    boxes.forEach((el)=>{
        let btn = el.getAttribute("id")    
        if(btn == btnColor){
            el.classList.add("flash")
            setTimeout(() => {
                el.classList.remove("flash")
            }, 250);
        }
    })
}

function levelup(){
    userSeq = []
    level++
    console.log(`Level : ${level}`)
    p.innerText = `Level : ${level}`

    let btnIdx = Math.floor(Math.random() * color.length)
    let btnColor = color[btnIdx]
    
    console.log(btnColor)
    gameSeq.push(btnColor)
    console.log(gameSeq)
    btnFlash(btnColor)
}

button.addEventListener("click",()=>{
    if(started == false){
        console.log(`Game Started !`)
        started = true

        levelup()
    }
})

function checkAns(idx){
    if(gameSeq[idx] == userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            console.log("Level++")
            setTimeout(() => {
                levelup()
            }, 1000);
        }
    }else{
        p.innerText  = "Wrong Press, please Restart !"
        button.innerText = "Restart"
        level = 0
        started = false
        gameSeq=[]
        userSeq=[]
    }
}

function btnPress(){
    let btnColor = this.getAttribute("id")
    console.log(btnColor)
    userSeq.push(btnColor)
    btnFlash(btnColor)
    console.log(userSeq)
    checkAns(userSeq.length-1)
}

boxes.forEach((box)=>{
    box.addEventListener("click",btnPress)
})
const circle = document.getElementById("circle")
const bottles = document.querySelectorAll(".small-bottles img")
const mainBottle = document.getElementById("mainBottle")
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const tiltArea = document.getElementById("tiltArea")
const explosionContainer = document.getElementById("explosionContainer")

const fruitImages = [
  "./images/kiwi-slice.png",
  "./images/orange-slice.png",
  "./images/strawberry-slice.png",
  "./images/berry-slice.png"
]

const data = [
  {name:"Kiwi Juice", text:"A refreshing kiwi burst with energizing and revitalizing powers to start your day full of vitality.", color:"#00ff88", gradient:"linear-gradient(-45deg,#0f2027,#203a43,#2c5364,#1c1c1c)"},
  {name:"Orange Juice", text:"Sun-kissed citrus explosion with zesty energy and a vibrant glow that lifts your spirits instantly.", color:"#ff9a00", gradient:"linear-gradient(-45deg,#ffaf6b,#ffc88d,#ffd39f,#ffe4b5)"},
  {name:"Strawberry Juice", text:"Sweet and futuristic berry blend, packed with antioxidants and a bold, flavorful punch.", color:"#ff4d6d", gradient:"linear-gradient(-45deg,#ff5f6d,#ffc371,#ff9a9e,#1c1c1c)"},
  {name:"Berry Fusion", text:"A next-level flavor explosion with exotic berries creating a deliciously intense fruity symphony.", color:"#8a5cff", gradient:"linear-gradient(-45deg,#f3e8ff,#e0b3ff,#d18cff,#a36aff)"}
]

// Hamburger menu
const hamburger = document.querySelector("nav .hamburger")
const navLinks = document.querySelector("nav .nav-links")
hamburger.addEventListener("click", ()=>navLinks.classList.toggle("show"))

// Click bottles
bottles.forEach((btn,index)=>{
  btn.addEventListener("click",()=>{
    mainBottle.src = btn.src
    title.innerText = data[index].name
    desc.innerText = data[index].text
    document.documentElement.style.setProperty("--glow-color", data[index].color)
    document.body.style.background = data[index].gradient
    bottles.forEach(b=>b.classList.remove("active"))
    btn.classList.add("active")
    crazyFruitExplosion(index)
  })
})

// Tilt effect
tiltArea.addEventListener("mousemove",(e)=>{
  let x=(window.innerWidth/2-e.pageX)/25
  let y=(window.innerHeight/2-e.pageY)/25
  circle.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`
})
tiltArea.addEventListener("mouseleave",()=>circle.style.transform="rotate(0deg)")

// CRAZY FRUIT EXPLOSION (responsive)
function crazyFruitExplosion(index){
  const rect = tiltArea.getBoundingClientRect()
  const isMobile = window.innerWidth <= 600
  const totalFruits = isMobile ? 30 : 50
  const maxDistance = isMobile ? 120 : 200

  for(let i=0;i<totalFruits;i++){
    const fruit = document.createElement("img")
    fruit.src = fruitImages[index]
    fruit.classList.add("fruit-slice")
    const size = 20+Math.random()*(isMobile?20:40)
    fruit.style.width = size+"px"
    fruit.style.position = "absolute"
    fruit.style.left = rect.width/2 + "px"
    fruit.style.top = rect.height/2 + "px"
    fruit.style.transform = `rotate(${Math.random()*360}deg) scale(${0.5+Math.random()})`
    explosionContainer.appendChild(fruit)

    setTimeout(()=>{
      const angle=Math.random()*2*Math.PI
      const distance=50+Math.random()*maxDistance
      const translateX=Math.cos(angle)*distance
      const translateY=Math.sin(angle)*distance
      const rotate=Math.random()*1080
      const scale=0.5+Math.random()*1.5
      fruit.style.transition="transform 1.5s ease-out, opacity 1.5s"
      fruit.style.transform=`translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`
      fruit.style.opacity=0
    },50)
    setTimeout(()=>{if(fruit.parentNode) explosionContainer.removeChild(fruit)},1700)
  }
}
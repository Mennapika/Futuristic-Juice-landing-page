const bottle = document.getElementById("bottle")
const title = document.getElementById("title")
const description = document.getElementById("description")

const menuBtn = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".nav-links")

menuBtn.onclick=()=>{

navLinks.classList.toggle("active")

}


function changeFlavor(flavor){

const mobile = window.innerWidth < 768

const size = mobile ? "-small" : "-big"


if(flavor==="kiwi"){

bottle.src="images/kiwi"+size+".png"

title.innerText="Kiwi Juice"

description.innerText="A vibrant fusion of freshly crushed kiwi bursting with tropical freshness and energizing antioxidants."

document.body.style.background="linear-gradient(135deg,#79c96b,#45a049)"

explode("images/kiwi-slice.png")
spawnFloatingFruits("images/kiwi-slice.png")

}


if(flavor==="strawberry"){

bottle.src="images/strawberry"+size+".png"

title.innerText="Strawberry Juice"

description.innerText="Sweet strawberries blended into a luscious refreshing drink delivering the perfect balance of sweetness and vitality."

document.body.style.background="linear-gradient(135deg,#ff4e7a,#ff6a88)"

explode("images/strawberry-slice.png")
spawnFloatingFruits("images/strawberry-slice.png")

}


if(flavor==="orange"){

bottle.src="images/orange"+size+".png"

title.innerText="Orange Juice"

description.innerText="Freshly squeezed oranges bursting with citrus energy and natural vitamin C."

document.body.style.background="linear-gradient(135deg,#ffa63d,#ff7b00)"

explode("images/orange-slice.png")
spawnFloatingFruits("images/orange-slice.png")

}


if(flavor==="berry"){

bottle.src="images/berry"+size+".png"

title.innerText="Berry Juice"

description.innerText="A powerful blend of blueberries raspberries and blackberries delivering deep flavor and antioxidant richness."

document.body.style.background="linear-gradient(135deg,#7c4dff,#b388ff)"

explode("images/berry-slice.png")
spawnFloatingFruits("images/berry-slice.png")

}

}



function explode(img){

for(let i=0;i<30;i++){

const fruit=document.createElement("img")

fruit.src=img

fruit.className="fruit"

fruit.style.left=Math.random()*100+"vw"

fruit.style.animationDuration=2+Math.random()*2+"s"

document.body.appendChild(fruit)

setTimeout(()=>{

fruit.remove()

},4000)

}

}
function spawnFloatingFruits(img){

const container=document.querySelector(".circle")

for(let i=0;i<6;i++){

const fruit=document.createElement("img")

fruit.src=img
fruit.className="fruit-particle"

fruit.style.left=Math.random()*80+"px"
fruit.style.top=Math.random()*80+"px"

fruit.style.animationDuration=(4+Math.random()*3)+"s"

//container.appendChild(fruit)

setTimeout(()=>{
fruit.remove()
},8000)

}

}
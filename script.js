let icon1 = document.getElementById("icon1")
let icon2 = document.getElementById("icon2")
let icon3 = document.getElementById("icon3")
let icon4 = document.getElementById("icon4")
let icon5 = document.getElementById("icon5")
let icon6 = document.getElementById("icon6")
let icon7 = document.getElementById("icon7")
let icon8 = document.getElementById("icon8")
let icon9 = document.getElementById("icon9")
let icon10 = document.getElementById("ico10")
let icon11= document.getElementById("icon11")
let icon12= document.getElementById("icon12")
let ans = document.querySelector(".ans1")
let ans2 = document.querySelector(".ans2")
let ans3 = document.querySelector(".ans3")
let ans4 = document.querySelector(".ans4")
let ans5 = document.querySelector(".ans5")
let ans6 = document.querySelector(".ans6")



icon1.addEventListener("click", ()=>{
    icon2.style.display = "inline"
    icon1.style.display = "none"
     ans.style.display = "block"
})

icon2.addEventListener("click", ()=>{
   
    icon2.style.display = "none"
     icon1.style.display = "block"
      ans.style.display = "none"
     
})


icon3.addEventListener("click", ()=>{
    icon4.style.display = "inline"
    icon3.style.display = "none"
     ans2.style.display = "block"
})

icon4.addEventListener("click", ()=>{
   
    icon4.style.display = "none"
     icon3.style.display = "block"
      ans2.style.display = "none"
     
})


icon5.addEventListener("click", ()=>{
    icon6.style.display = "inline"
    icon5.style.display = "none"
     ans3.style.display = "block"
})

icon6.addEventListener("click", ()=>{
   
    icon6.style.display = "none"
     icon5.style.display = "block"
      ans3.style.display = "none"
     
})



icon7.addEventListener("click", ()=>{
    icon8.style.display = "inline"
    icon7.style.display = "none"
     ans4.style.display = "block"
})

icon8.addEventListener("click", ()=>{
   
    icon8.style.display = "none"
     icon7.style.display = "block"
      ans4.style.display = "none"
     
})

icon9.addEventListener("click", ()=>{
    icon10.style.display = "inline"
    icon9.style.display = "none"
     ans5.style.display = "block"
})

icon10.addEventListener("click", ()=>{
   
    icon10.style.display = "none"
     icon9.style.display = "block"
      ans5.style.display = "none"
     
})


icon11.addEventListener("click", ()=>{
    icon12.style.display = "inline"
    icon11.style.display = "none"
     ans6.style.display = "block"
})

icon12.addEventListener("click", ()=>{
   
    icon12.style.display = "none"
     icon11.style.display = "block"
      ans6.style.display = "none"
     
})

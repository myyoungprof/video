const vid = document.querySelector(".video")
const btn = document.querySelector(".btn")
const btns = document.querySelector(".btns")
const swit = document.querySelector(".swit")



btn.addEventListener ("click", function(){
    if(!swit.classList.contains("turn")){
        swit.classList.add("turn")
        vid.pause(); 
    }

    else{
        swit.classList.remove("turn")
        vid.play(); 
    }
})

const pre = document.querySelector(".gif")
window.addEventListener("load", function(){
    if(pre.classList.contains("vis")){
        pre.classList.add("vis")
    }

    else{
        pre.classList.remove("gif")

    }

})

// btn.addEventListener("click", function(){
// vid.pause(); 
// swit.add()

// })

// btns.addEventListener ("click", function(){
//     vid.play(); 
// })



// btn.forEach(function(btns){
    // btn.addEventListener("click", function(){
    //     vid.pause();

        // if(btns.classList.contain(sec)){
        //     // btn.classList.add(turn)
        //     video.play()
        // }
        
        // else{
        //     // btn.classList.remove(turn)
        //     video.pause()
        // }
        // })
// })
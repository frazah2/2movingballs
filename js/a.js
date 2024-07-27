
var top_side2 = 0
var left_side2 = 0
var top_side = 0
var left_side = 0
var demo = document.getElementById('blue')
var demo2 = document.getElementById('red')
var zdex = 1
var zdex2 = 1


onkeydown = (e) => {
        
    if (e.key == "ArrowDown") {
        demo.style.top = top_side2+"px"
        top_side2 += 20
        demo.style.zIndex = zdex2
        zdex2 = 2
        demo2.style.zIndex = zdex
        zdex = 1

    }


    if (e.key == "ArrowUp") {
        demo.style.top = top_side2+"px"
        top_side2 -= 20
        
    demo.style.zIndex = zdex2
    zdex2 = 2
    demo2.style.zIndex = zdex
    zdex = 1
    }
    
    if (e.key == "ArrowLeft") {
        demo.style.left = left_side2+"px"
        left_side2 -= 20
        
    demo.style.zIndex = zdex2
    zdex2 = 2
    demo2.style.zIndex = zdex
    zdex = 1
    }

    if (e.key == "ArrowRight") {
        demo.style.left = left_side2+"px"
        left_side2 += 20
        demo2.style.zIndex = zdex
        zdex = 1
        
    demo.style.zIndex = zdex2
    zdex2 = 2
    }
    if (e.key == "s") {
        demo2.style.top = top_side+"px"
        top_side += 20
        
    demo2.style.zIndex = zdex
    zdex = 2
    demo.style.zIndex = zdex2
    zdex2 = 1
    }


    if (e.key == "w") {
        demo2.style.top = top_side+"px"
        top_side -= 20
         demo2.style.zIndex = zdex
         zdex = 2
         demo.style.zIndex = zdex2
         zdex2 = 1
    }
    
    if (e.key == "a") {
        demo2.style.left = left_side+"px"
        left_side -= 20
        
    demo2.style.zIndex = zdex
    zdex = 2
    demo.style.zIndex = zdex2
    zdex2 = 1
    }

    if (e.key == "d") {
        demo2.style.left = left_side+"px"
        left_side += 20
        
    demo2.style.zIndex = zdex
    zdex = 2
    demo.style.zIndex = zdex2
    zdex2 = 1
}
}

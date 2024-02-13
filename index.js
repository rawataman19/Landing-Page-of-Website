var crsr =document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
   
    crsr.style.top  = dets.y+"px"
})
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top  = dets.y+"px"
    blur.style.left = dets.x-200+"px"
    blur.style.top  = dets.y-200+"px"
})
gsap.to("#nav",{
    backgroundColor :"#000",
    height:"110px",
    duration :0.5,
    scrollTrigger:{
        trigger:"#nav",
        scorller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scorller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2

    }
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

// gsap.from("#about-us img, #about-us-in",{
//     y:50,
//     opacity:0,
//     duration:1,
//     stagger:0.4,
//     scrollTrigger:{
//         trigger:"#about-us",
//         scoller:"body",
//         markers:true,
//         start:"top-70%",
//         end:"top58%",
//     }
// })
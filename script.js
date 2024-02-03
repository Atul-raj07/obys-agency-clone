gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

function loadingpage() {
  var timer = 0;
  var load = document.querySelector("#load")
  var tl = gsap.timeline()
  setInterval(() => {
    if (timer < 100) {
      timer++
      console.log(timer)
      load.innerHTML = timer
    } else {
      tl.to(".txtload", {
        stagger: {
          amount: -0.5
        },
        opacity: 0,
        duration: .5,

      })
      tl.to("#loader", {
        y: "-100%",
        duration: 2,
        ease: "power4.out",
      })

    }

    clearInterval()
  }, 40);
  function page1anim() {
    gsap.from("#page1 h1", {
      y: "100%",
      stagger: {
        amount: 0.5
      },
      delay: 6
    })
    Shery.makeMagnet("nav a", {
    })

  }

  page1anim()

}
loadingpage()



function videoan() {
  var video = document.querySelector("video")
  var videoimg = document.querySelector("#video img")
  var videodiv = document.querySelector("#video")
  var playicon = document.querySelector("#play")
  // var mousefollower = document.querySelectorAll(".mousefollower")
  flag = 0
  videodiv.addEventListener("click", function () {
    if (flag == 0) {
      videoimg.style.zIndex = "0"
      video.style.zIndex = "99";

      playicon.innerHTML = `<i class="ri-pause-mini-line"></i>`
      video.play()
      gsap.to("#play", {
        scale: .7
      })
      flag = 1

    } else {
      videoimg.style.zIndex = "99"
      video.style.zIndex = "0";
      playicon.innerHTML = `<i class="ri-play-fill"></i>`
      video.pause()
      gsap.to("#play", {
        scale: 1
      })
      flag = 0
    }
  })
  videodiv.addEventListener("mouseenter", function () {
    gsap.to(".mousefollower", {
      opacity: "0",
    })
  })
  videodiv.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: "1",
    })
    gsap.to("#play", {
      x: "70%",
      y: "0%"
    })
  })
  videodiv.addEventListener("mousemove", function (dets) {
    gsap.to(playicon, {
      x: dets.x - 1250,
      y: dets.y - 80
    })
  })
}
videoan()
function page3() {
  var demo = document.querySelectorAll(".demo")
  demo.forEach(demo => {
    demo.addEventListener("mouseenter", function () {
      gsap.to(".demoname #olga", {
        y: "-100%",
      })
    })
    demo.addEventListener("mouseleave", function () {
      gsap.to(".demoname #olga", {
        y: "0%",
      })
    })
   
    demo.addEventListener("mouseenter", function () {
      gsap.to(".demoname #ochi", {
        y: "-100%",
      })
    })
    demo.addEventListener("mouseleave", function () {
      gsap.to(".demoname #ochi", {
        y: "0%",
      })
    })
   
  });
  Shery.imageEffect(".demoimg", {
    style: 4, //Select Style
    // debug: true, // Debug Panel
    gooey: true,
    config:  {"a":{"value":1.83,"range":[0,30]},"b":{"value":0.44,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.8571470132972409},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":1,"y":0.5}},"shapeEdgeSoftness":{"value":0.15,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":9.12,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.34,"range":[0,2],"_gsap":{"id":18}},"discard_threshold":{"value":0.42,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":4.58,"range":[0,100]}}
    });
}
page3()


function sheryanimatiom() {
  Shery.mouseFollower({
    //Parameters are optional.
    // skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.mouseFollower();
}
sheryanimatiom()
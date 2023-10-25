let tl = gsap.timeline()

tl.from("nav h3",{
    y: -100,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1
})

tl.from(".page1 h1, .left-info h3",{
    x: -100,
    opacity:0,
    duration: 0.3,
    stagger: 0.2
})

tl.from(".right img",{
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
})

gsap.from(".container .box",{
    duration: 0.5,
    scale: 0,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        scroller: "body",
        trigger: ".container .box",
        start: "top 75%",
    }
})
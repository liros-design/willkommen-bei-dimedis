gsap.from(".text", {
  y: 40,
  opacity: 0,
  duration: 5,
  delay: 0.2,
  ease: "power2.out",
  repeat: -1,
  repeatDelay: 2
});

gsap.to(".marquee-text", {
  xPercent: -100,  
  repeat: -1,      
  duration: 60,    
  ease: "linear"   
});

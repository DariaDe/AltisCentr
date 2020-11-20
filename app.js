const html = document.documentElement;
const canvas = document.getElementById("image");
const trigger = document.getElementById("trigger");
const context = canvas.getContext("2d");

let frameCount = 86;
let currentFrame;
let index = 0;

if(window.innerWidth<450){
  frameCount = 37;
}
const intro = document.querySelector(".intro");
const text = intro.querySelector("h1");



console.log(window.innerWidth)
if(window.innerWidth<450){

  currentFrame = index =>(
      `./Belt-project3_000/Belt-project3_0${index.toString()}.jpg`
  )
}
else{
  currentFrame = index =>(
      `./Belt-project_000/Belt-project_0${index.toString()}.jpg`
  )

}

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};



const img = new Image()
canvas.width = this.innerWidth;
canvas.height=this.innerHeight;
console.log(index);
img.src = currentFrame(index);

img.onload = function(){

  var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  // get the top left position of the image
  var x = (canvas.width / 2) - (img.width / 2) * scale;
  var y = (canvas.height / 2) - (img.height / 2) * scale;
  context.drawImage(img, x, y, img.width * scale, img.height * scale);

}

function Update(){

  scene.on("progress", function (event) {
    const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(event.progress*frameCount)
    );
    requestAnimationFrame(()=> updateImage(frameIndex + 1))

  });

  const updateImage = index =>{
    console.log(index);
    img.src = currentFrame(index);

    var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    // get the top left position of the image
    var x = (canvas.width / 2) - (img.width / 2) * scale;
    var y = (canvas.height / 2) - (img.height / 2) * scale;
    context.drawImage(img, x, y, img.width * scale, img.height * scale);

  }
}


var a;
function Animation(){
  if(a==1){
    document.getElementById("b").style.transform = "none";
    document.getElementById("a").style.transform = "none";
    document.getElementById("list").style.right="-120px";
    document.getElementById("list").style.opacity="0";
    return a=0;
  }

  else{
    document.getElementById("b").style.transform = "rotate(45deg) translate(-4px,-6px)";
    document.getElementById("a").style.transform = "rotate(-45deg) translate(-1px,2px)";
    document.getElementById("list").style.right="0";
    document.getElementById("list").style.opacity="1";
    return a=1;
  }
}

$("body").fitVids();

//ScrollMagic
let dur1=8600;

if(window.innerWidth<450) {
   dur1 = 4600;
}
else{
   dur1 = 8600;
}

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration:dur1, //видео 9 секунд => более оптимальная продолжительность анимации
  triggerElement: intro,
  triggerHook: 0
})
    .setTween(Update)
    .setPin(intro)
    .addTo(controller);

//Text Animation
let dur2=3000;
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
if(window.innerWidth<450) {
  let dur2 = 2000;
}
else{
  let dur2 = 3000;
}
let scene2 = new ScrollMagic.Scene({
  duration: dur2,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

preloadImages();

//Feature section


//Test

var controller2 = new ScrollMagic.Controller();


var wipeAnimation = new TimelineMax()
    .from(".sticky", 1, {opacity:0, y:100})
// .from(".feature-h3", 1, {opacity:0, y:100})
.from("#f1-p", 0.5, {opacity:0, x:200}, "=.1")
// .from("l1", 1, { width: 0}, "=-.5")
// .from("#f2",1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1")
// .from("#f1", 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7")

.fromTo("section.sticky2", 1, {opacity:0, x:"-100%"}, {opacity:1, x: "0%", ease: Linear.easeNone}, "=1" )
 .from("#f2-p", 0.5, {opacity:0, x:-200}, "=.1")
// .from("l2", 1, { width: 0}, "=-.5")
// .from(".f3",1, {x:200, opacity: 0,ease: Power4.easeInOut}, "=-1")
// .from(".f4", 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-.7")


.fromTo("section.sticky3", 1 , { opacity:0, x:  "100%"}, {opacity:1, x: "0%", ease: Linear.easeNone}, "=1")
 .from("#f3-p", 0.5, {opacity:0, x:200}, "=.1")
// .from("l3", 1, { width: 0}, "=-.5")
// .from(".f5",1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1")
// .from(".f6", 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7")


.fromTo("section.sticky4", 1,{opacity:0, y: "-100%"}, {opacity:1,y: "0%", ease: Linear.easeNone}, "=1")
.from("#f4-p", 0.5, {opacity:0, x:-200}, "=.1")
// .from("l4", 1, { width: 0}, "=-.5")
// .from(".f7",1, {x:200, opacity: 0,ease: Power4.easeInOut}, "=-1")
// .from(".f8", 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-.7")



const scene4 = new ScrollMagic.Scene({
  triggerElement: "#third-page",
  triggerHook:0,
  duration:"400%",

})

.setPin("#third-page")
			 .setTween(wipeAnimation)
			.addTo(controller2);


if(window.innerWidth > 1310){
  var appearAnimation = new TimelineMax()
      .from(".team-h3", 0.5, {opacity:0, y:100}, "=-.5")
      .from("#tm1 img,#tm1.team-member", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
      .from(" #tm1 .team-fio, #tm1 .team-position", 1 ,{opacity:0, x:-50, ease: Power4.easeInOut},"=-1")
      .from("#tm1 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut }, "=-.5")

      .from("#tm2 img,#tm2.team-member", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
      .from(" #tm2 .team-fio, #tm2 .team-position", 1 ,{opacity:0, x:50, ease: Power4.easeInOut},"=-1")
      .from("#tm2 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut },"=-.5")

      .from("#tm3 img,#tm3.team-member", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
      .from(" #tm3 .team-fio, #tm3 .team-position", 1 ,{opacity:0, x:-50, ease: Power4.easeInOut},"=-1")
      .from("#tm3 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut },"=-.5")


}

if(window.innerWidth <=760){
  var appearAnimation = new TimelineMax()
      .from(".team-h3", 0.3, {opacity:0, y:100}, "=-.5")
      .from("#tm1 img,#tm1.team-member", 0.7, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
      .from(" #tm1 .team-fio, #tm1 .team-position", 0.7 ,{opacity:0, x:-50, ease: Power4.easeInOut},"=-.7")
      .from("#tm1 .team-p", 0.3, {opacity:0, y:-30, ease: Power4.easeInOut }, "=-.3")

      .from("#tm2 img,#tm2.team-member", 0.7, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.7")
      .from(" #tm2 .team-fio, #tm2 .team-position", 0.7 ,{opacity:0, x:50, ease: Power4.easeInOut},"=-.7")
      .from("#tm2 .team-p", 0.3, {opacity:0, y:-30, ease: Power4.easeInOut },"=-.3")
}
else if(window.innerWidth <= 1310){

  var appearAnimation = new TimelineMax()
  .from(".team-h3", 0.5, {opacity:0, y:100}, "=-.5")
  .from("#tm1 img,#tm1.team-member", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
  .from(" #tm1 .team-fio, #tm1 .team-position", 1 ,{opacity:0, x:-50, ease: Power4.easeInOut},"=-1")
   .from("#tm1 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut }, "=-.5")

  .from("#tm2 img,#tm2.team-member", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
  .from(" #tm2 .team-fio, #tm2 .team-position", 1 ,{opacity:0, x:50, ease: Power4.easeInOut},"=-1")
  .from("#tm2 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut },"=-.5")

  .from("#tm3 img,#tm3.team-member", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
  .from(" #tm3 .team-fio, #tm3 .team-position", 1 ,{opacity:0, x:-50, ease: Power4.easeInOut},"=-1")
  .from("#tm3 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut },"=-.5")

  .from("#tm5 img,#tm5.team-member", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
  .from(" #tm5 .team-fio, #tm5 .team-position", 1 ,{opacity:0, x:-50, ease: Power4.easeInOut},"=-1")
  .from("#tm5 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut },"=-.5")

}

  // .from("#tm6 img", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
  // .from(" #tm6 .team-fio, #tm6 .team-position", 1 ,{opacity:0, x:50, ease: Power4.easeInOut})
  // .from("#tm6 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut })




  const scene5 = new ScrollMagic.Scene({
    triggerElement: "#fourth-page",
    triggerHook:"onLeave",
    duration:"100%"
  })

  .setPin("#fourth-page")
  			.setTween(appearAnimation)
  			.addTo(controller2);

if(window.innerWidth > 760){
  var appearAnimation3 = new TimelineMax()
  .from(".athlete-h3", 1 ,{opacity:0, y:50, ease:Power4.easeInOut})
  .from(".cards-grid", 1, {opacity:0, y:60,ease:Power4.easeInOut}, "=-.7")

  const scene7 = new ScrollMagic.Scene({
    triggerElement:"#sixth-page",
    triggerHook:"onLeave",
    duration:"100%",

  })

  .setPin("#sixth-page")
        .setTween(appearAnimation3)
        .addTo(controller2);
}



      var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-4',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-4',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  });



window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-DY377Z805P");

// 2nd part
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
	62,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
var mouseX;
var mouseY;
document.addEventListener("mousemove", onMouseMove, false);
var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("home").appendChild(renderer.domElement); // Appending here

window.addEventListener("resize", function () {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

var distance = Math.min(200, window.innerWidth / 4);
var geometry = new THREE.Geometry();

for (var i = 0; i < 1600; i++) {
	var vertex = new THREE.Vector3();

	// var theta = THREE.Math.randFloatSpread(360);
	var theta = Math.acos(THREE.Math.randFloatSpread(2));
	var phi = THREE.Math.randFloatSpread(360);

	vertex.x = distance * Math.sin(theta) * Math.cos(phi);
	vertex.y = distance * Math.sin(theta) * Math.sin(phi);
	vertex.z = distance * Math.cos(theta);

	geometry.vertices.push(vertex);
}
var particles = new THREE.Points(
	geometry,
	new THREE.PointsMaterial({ color: 0xa020f0, size: 2 })
);
particles.boundingSphere = 50;

var renderingParent = new THREE.Group();
renderingParent.add(particles);

var resizeContainer = new THREE.Group();
resizeContainer.add(renderingParent);
scene.add(resizeContainer);

camera.position.z = 400;

var animate = function () {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
};
var myTween;
function onMouseMove(event) {
	if (myTween) myTween.kill();

	mouseX = (event.clientX / window.innerWidth) * 2 - 1;
	mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
	myTween = gsap.to(particles.rotation, {
		duration: 0.1,
		x: mouseY * -1,
		y: mouseX,
	});
	//particles.rotation.x = mouseY*-1;
	//particles.rotation.y = mouseX;
}
animate();
var animProps = { scale: 1, xRot: 0, yRot: 0 };
if (window.innerWidth <= 750) {
	gsap.to(animProps, {
		duration: 10,
		scale: 2.5,
		repeat: -1,
		yoyo: true,
		ease: "sine",
		onUpdate: function () {
			renderingParent.scale.set(
				animProps.scale,
				animProps.scale,
				animProps.scale
			);
		},
	});
} else {
	gsap.to(animProps, {
		duration: 7,
		scale: 1.5,
		repeat: -1,
		yoyo: true,
		ease: "sine",
		onUpdate: function () {
			renderingParent.scale.set(
				animProps.scale,
				animProps.scale,
				animProps.scale
			);
		},
	});
}

gsap.to(animProps, {
	duration: 110,
	xRot: Math.PI * 2,
	yRot: Math.PI * 5,
	repeat: -1,
	yoyo: true,
	ease: "none",
	onUpdate: function () {
		renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
	},
});

// 3rd part
window.onscroll = function () {
	navfunction();
};

function navfunction() {
	var winScroll =
		document.body.scrollTop || document.documentElement.scrollTop;
	let height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let trackHeight = document.getElementById("tracks").scrollHeight - 60;
	let teamHeight =
		document.getElementById("team").offsetTop -
		document.getElementById("team").scrollTop +
		document.getElementById("team").clientTop -
		60;
	let faqHeight =
		document.getElementById("FAQ").offsetTop -
		document.getElementById("FAQ").scrollTop +
		document.getElementById("FAQ").clientTop -
		560;
	let footer =
		document.getElementById("footer").offsetTop -
		document.getElementById("footer").scrollTop +
		document.getElementById("footer").clientTop -
		460;
	// console.log(trackHeight,winScroll);
	if (winScroll >= trackHeight) {
		document.getElementsByClassName("item2")[0].classList.add("active");
		document.getElementsByClassName("item2")[0].innerHTML = "Tracks";
		document.getElementsByClassName("item1")[0].innerHTML = "";
		document.getElementsByClassName("item3")[0].innerHTML = "";
		document.getElementsByClassName("item4")[0].innerHTML = "";
		document.getElementsByClassName("item1")[0].classList.remove("active");
		document.getElementsByClassName("item3")[0].classList.remove("active");
		document.getElementsByClassName("item4")[0].classList.remove("active");
	}
	if (winScroll < trackHeight) {
		document.getElementsByClassName("item1")[0].classList.add("active");
		document.getElementsByClassName("item2")[0].classList.remove("active");
		document.getElementsByClassName("item3")[0].classList.remove("active");
		document.getElementsByClassName("item4")[0].classList.remove("active");
		document.getElementsByClassName("item2")[0].innerHTML = "";
		document.getElementsByClassName("item3")[0].innerHTML = "";
		document.getElementsByClassName("item4")[0].innerHTML = "";
		document.getElementsByClassName("item1")[0].innerHTML = "Home";
	}
	if (winScroll >= teamHeight) {
		document.getElementsByClassName("item3")[0].classList.add("active");
		document.getElementsByClassName("item3")[0].innerHTML = "Sponsors";
		document.getElementsByClassName("item1")[0].innerHTML = "";
		document.getElementsByClassName("item2")[0].innerHTML = "";
		document.getElementsByClassName("item4")[0].innerHTML = "";
		document.getElementsByClassName("item1")[0].classList.remove("active");
	}
	if (winScroll >= faqHeight) {
		document.getElementsByClassName("item4")[0].classList.add("active");
		document.getElementsByClassName("item4")[0].innerHTML = "FAQ";
		document.getElementsByClassName("item1")[0].innerHTML = "";
		document.getElementsByClassName("item2")[0].innerHTML = "";
		document.getElementsByClassName("item3")[0].innerHTML = "";
		document.getElementsByClassName("item1")[0].classList.remove("active");
	}
	if (winScroll >= footer) {
		// document.getElementsByClassName('item4')[0].classList.add('active');
		document.getElementsByClassName("item4")[0].innerHTML = "";
		document.getElementsByClassName("item1")[0].innerHTML = "";
		document.getElementsByClassName("item2")[0].innerHTML = "";
		document.getElementsByClassName("item3")[0].innerHTML = "";
		document.getElementsByClassName("item1")[0].classList.remove("active");
	}
}

// 4th part
const accordionItemHeaders = document.querySelectorAll(".accordion");

accordionItemHeaders.forEach((accordionItemHeader) => {
	accordionItemHeader.addEventListener("click", (event) => {
		accordionItemHeader.classList.toggle("active");
		const accordionItemBody = accordionItemHeader.nextElementSibling;
		if (accordionItemHeader.classList.contains("active")) {
			accordionItemBody.style.maxHeight =
				accordionItemBody.scrollHeight + "px";
		} else {
			accordionItemBody.style.maxHeight = 0;
		}
	});
});

// Go top btn
function goTopBtn(btn){
	const scrollBtn = document.querySelector(btn);

	window.addEventListener("scroll", e =>{
		let scrollTop = window.pageYOffset||document.scrollTop;
		if(scrollTop > 800){
			scrollBtn.classList.remove("btn-hidden");
		} else{
			scrollBtn.classList.add("btn-hidden");
		}
	})
	document.addEventListener("click", e =>{
		if (e.target.matches(btn)) {
			window.scrollTo({
				behavior:"smooth",
				top:0,
			})
		}
	})
}

document.addEventListener("DOMContentLoaded", (e)=>{
	goTopBtn(".btn-go-top");
})

let alreadyOnCard = false;
let isPlaying = false;
let lastCardFront = true;
let lastCard;

function flip(){
    if(isPlaying) return;
    let elements = document.querySelectorAll(":hover");
    for(let element of elements) if (element.classList.contains("card-flip")){
        if(isPlaying || alreadyOnCard) return;
        isPlaying = true;
        alreadyOnCard = true;
        anime({
            targets: element,
            rotateY: {value: '+=180', delay: 200},
            easing: 'easeInOutSine',
            duration: 400,
            complete: function(anim){
            isPlaying = false;
            lastCardFront=false;
            lastCard=element;
            }
        });
        return;
    }
    alreadyOnCard = false;
    if(!lastCardFront && !isPlaying){
        isPlaying=true;
        anime({
            targets: lastCard,
            rotateY: {value: '+=180', delay: 200},
            easing: 'easeInOutSine',
            duration: 400,
            complete: function(anim){
            isPlaying = false;
            lastCardFront = true;
            }
        });
    }
}

document.addEventListener('mousemove', flip);
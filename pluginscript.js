//Scroll reveal plugins for animation
			
window.sr = ScrollReveal();
//navbar animations
sr.reveal('.navbar',  {
	duration: 3000,
	origin: 'bottom'
});
sr.reveal('.logot',  {
	duration: 2000,
	// origin: 'left',
	// distance: '200px',
	scale: 3
});
//about animations
sr.reveal('.about-pic',  {
	duration: 2000,
	rotate: {
		z: 120
	},
	scale: 2
});
sr.reveal('.landing-text',  {
	duration: 4500,
	origin: 'bottom',
	distance: '100px'
});
sr.reveal('.about',  {
	duration: 2000,
	easing: 'ease-in'
});
sr.reveal('.about-text',  {
	duration: 3500,
	origin: 'right',
	distance: '100px'
});
//projects animations
sr.reveal('.projects',  {
	duration: 2000,
	easing: 'ease-in'
});
sr.reveal('.proj-imgs',  {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2
});
sr.reveal('.proj-desc',  {
	duration: 2000,
	origin: 'right',
	distance: '300px',
	viewFactor: 0.2
});
//skills icon animations
sr.reveal('.skills',  {
	duration: 2000,
	easing: 'ease-in'
});
sr.reveal('.ico-1',  {
	delay: 100,
	duration: 1000,
	viewFactor: 0.2,
	easing: 'ease-in'
});
sr.reveal('.ico-2',  {
	delay: 200,
	duration: 1100,
	viewFactor: 0.2,
	easing: 'ease-in'
});
sr.reveal('.ico-3',  {
	delay: 300,
	duration: 1200,
	viewFactor: 0.2,
	easing: 'ease-in'
});
sr.reveal('.ico-4',  {
	delay: 400,
	duration: 1300,
	viewFactor: 0.2,
	easing: 'ease-in'
});
sr.reveal('.ico-5',  {
	delay: 500,
	duration: 1400,
	viewFactor: 0.2,
	easing: 'ease-in'
});
sr.reveal('.ico-6',  {
	delay: 600,
	duration: 1500,
	viewFactor: 0.2,
	easing: 'ease-in'
});
sr.reveal('.ico-7',  {
	delay: 700,
	duration: 1600,
	viewFactor: 0.2,
	easing: 'ease-in'
});
//footer animations
sr.reveal('#contact',  {
	duration: 2000,
	viewFactor: 0.2,
	easing: 'ease-in'
});
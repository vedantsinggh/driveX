const canvas = document.getElementById("map");
const ctx    = canvas.getContext("2d");
const padding = 20;
canvas.width  = window.innerWidth - padding;
canvas.height = window.innerHeight - padding;


let start;
const env = new Enviroment(canvas);
const bot = new Bot(20);

function draw(timeStamp){

	// Clearing the background
	ctx.fillStyle = "#181818";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	//Setting up DeltaTime system IDK what else to call that
	if(start === undefined){
		start = timeStamp;
	}
	const dt = 0.001 * (timeStamp - start);
	start = timeStamp;

	env.draw(ctx);
	bot.move(2, 0.01);
	bot.draw(ctx, "orange");

	// FPS calculations
	const FPS = Math.round((1/dt));
	ctx.font = "20px Arial";
	ctx.fillStyle = "white";
	ctx.fillText(`FPS: ${FPS}`, canvas.width/2 - padding, 20);

	window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth - padding;
	canvas.height = window.innerHeight - padding;
	env.generateTrack();
});

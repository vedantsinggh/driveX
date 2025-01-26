const canvas = document.getElementById("map");
const ctx    = canvas.getContext("2d");
const padding = 20;
canvas.width  = window.innerWidth - padding;
canvas.height = window.innerHeight - padding;

const triangle = (ctx, color, position, rotationAngle = 0) => {
	ctx.save(); 
	ctx.translate(position.x, position.y);
	ctx.rotate(rotationAngle * 180/3.1415); 

	ctx.fillStyle = color; 
	ctx.beginPath(); 
	ctx.moveTo(0, -30); 
	ctx.lineTo(30, 30); 
	ctx.lineTo(-30, 30);
	ctx.closePath();
	ctx.fill();

	ctx.fillStyle = "white"; 
	ctx.beginPath(); 
	ctx.moveTo(0, -30); 
	ctx.lineTo(7.5, -15); 
	ctx.lineTo(-7.5, -15);
	ctx.closePath();

	ctx.fill();

	ctx.restore();
}



let start;

function step(timeStamp){

	// Clearing the background
	ctx.fillStyle = "#181818";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	if(start === undefined){
		start = timeStamp;
	}

	const dt = 0.001 * (timeStamp - start);
	start = timeStamp;

	triangle(ctx, "orange", {x: 100, y: 100}, 0);

	// FPS calculations
	const FPS = Math.round((1/dt));
	ctx.font = "20px Arial";
	ctx.fillStyle = "white";
	ctx.fillText(`FPS: ${FPS}`, canvas.width/2 - padding, 20);

	window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

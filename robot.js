class Bot {
	constructor(size){
		this.size = size;
	}

	
 	draw(ctx, color, position, rotationAngle = 0){
		ctx.save(); 
		ctx.translate(position.x, position.y);
		ctx.rotate(rotationAngle * 180/3.1415); 

		ctx.fillStyle = color; 
		ctx.beginPath(); 
		ctx.moveTo(0, -this.size);
		ctx.lineTo(this.size, this.size); 
		ctx.lineTo(-this.size, this.size);
		ctx.closePath();
		ctx.fill();

		ctx.fillStyle = "white"; 
		ctx.beginPath(); 
		ctx.moveTo(0, -this.size); 
		ctx.lineTo(this.size/4, -this.size/2); 
		ctx.lineTo(-this.size/4, -this.size/2);
		ctx.closePath();

		ctx.fill();

		ctx.restore();
	}
}

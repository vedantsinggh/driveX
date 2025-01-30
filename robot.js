class Bot {
	constructor(size, position = new Vec2(100, 100), wheelBase = 50, wheelRadius = 10) {
		this.size = size;
		this.position = position; 
		this.angle = 0;
		this.wheelBase = wheelBase;
		this.wheelRadius = wheelRadius;
		this.speed = 0;
		this.turnSpeed = 0;
	}

	move(speed, turnSpeed) {
		this.speed = speed;
		this.turnSpeed = turnSpeed;

		this.angle += this.turnSpeed;

		const leftWheelSpeed = this.speed - (this.turnSpeed * this.wheelBase / 2);
		const rightWheelSpeed = this.speed + (this.turnSpeed * this.wheelBase / 2);

		this.position.x += (leftWheelSpeed + rightWheelSpeed) / 2 * Math.cos(this.angle);
		this.position.y += (leftWheelSpeed + rightWheelSpeed) / 2 * Math.sin(this.angle);
	}

	draw(ctx, color) {
		ctx.save();
		ctx.translate(this.position.x, this.position.y);
		ctx.rotate(this.angle);

		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.moveTo(0, -this.size);
		ctx.lineTo(this.size, this.size);
		ctx.lineTo(-this.size, this.size);
		ctx.closePath();
		ctx.fill();

		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(0, this.size, this.wheelRadius, 0, Math.PI * 2);
		ctx.fill();

		ctx.beginPath();
		ctx.arc(this.wheelBase / 2, this.size / 2, this.wheelRadius, 0, Math.PI * 2);
		ctx.arc(-this.wheelBase / 2, this.size / 2, this.wheelRadius, 0, Math.PI * 2);
		ctx.fill();

		ctx.restore();
	}
}


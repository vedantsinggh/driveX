class Enviroment {
  constructor(canvas, radius = 50) {
    this.canvas = canvas;
    this.radius = radius; 
    this.lanes = [];
    this.generateTrack();
  }

  generateTrack() {
    const { width, height } = this.canvas;
    const margin = 50; 

    const leftX = margin;
    const rightX = width - margin;
    const topY = margin;
    const bottomY = height - margin;

    this.lanes = [
      { x1: leftX, y1: topY, x2: rightX, y2: topY }, // Top outer
      { x1: leftX + 2 * this.radius, y1: topY + this.radius * 2, x2: rightX - 2 * this.radius, y2: topY + this.radius * 2 }, 
      { x1: rightX, y1: topY, x2: rightX, y2: bottomY }, // Right outer
      { x1: rightX - this.radius * 2, y1: topY + 2 * this.radius, x2: rightX - this.radius * 2, y2: bottomY - 2 * this.radius},
      { x1: leftX, y1: bottomY, x2: rightX, y2: bottomY }, // Bottom outer
      { x1: leftX + this.radius * 2, y1: bottomY - this.radius * 2, x2: rightX - this.radius * 2, y2: bottomY - this.radius * 2 },
      { x1: leftX, y1: topY, x2: leftX, y2: bottomY }, // Left outer
      { x1: leftX + this.radius * 2, y1: topY + this.radius * 2, x2: leftX + this.radius * 2, y2: bottomY - this.radius * 2},
    ];
  }

  draw(ctx) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    this.lanes.forEach(lane => {
      ctx.beginPath();
      ctx.moveTo(lane.x1, lane.y1);
      ctx.lineTo(lane.x2, lane.y2);
      ctx.stroke();
    });
  }
}


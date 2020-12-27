class tree
{
    constructor(x,y,w,h)
	{
		var options={
			isStxatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
    {
        var treePos=this.body.position;		

			push()
			translate(treePos.x, treePos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("black")
            rect(0,0,this.w, this.h);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop()
    }
}
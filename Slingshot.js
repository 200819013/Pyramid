class SlingShot{
    constructor(bodyA, pointB){
        //for additional properties
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //this is a key word used to denote object of this class
        //we are taking bodyA and pointB from the programmer to creating the object
        this.pointB = pointB
        //object with constraint property
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        //adds this.sling to our world
        World.add(world, this.sling);
    }

    fly(){
        //null means nothing and the constaint is released using this function
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body
        
    }

    display(){
        image(this.sling1, 200, 20)
        image(this.sling2, 170,20)

        if(this.sling.bodyA){
            //calling the position of bodyA and pointB as the starting and ending point of the line
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //anything between function push and pop only apply for the constraint
            push()
            if(pointA.x<220){
                strokeWeight(4);
                stroke(122, 83, 83)
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3)
                image(this.sling3, pointA.x-30, pointA.y-10, 15, 30)
            }
            else{
                strokeWeight(4);
                stroke(122, 83, 83)
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3)
                image(this.sling3, pointA.x+25, pointA.y-10, 15, 30)
            }
            
            pop()
        }
    }
     
}
class Rope {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stifness:1.2,
            length: 250,
        };
        this.pointB = pointB;
        this.rope = Constarint.create(options);
        World.add(world,this.rope);
             }
             attach(body){
                 this.rope.bodyA = body;
             }
             fly(){
 this.rope.bodyA = null;          
}
diaplay(){
    if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        Push();

stroke(48,22,8);
strokeWeight(3);

line (pointB.x,pointB.y,pointA.x,pointA,y)
Pop();
    }
}
}
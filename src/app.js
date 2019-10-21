window.flag = 1;
export var checkBox = []
export default class drawX{
    constructor(x1,y1,cont){
        this.x1 = x1;
        this.y1= y1;
        this.container = cont;
        this.myline = new createjs.Graphics().ss(8).beginStroke("#000000");
        if(flag === 1 ){
            flag = 0;
            this.draw();
        }
    else{
        flag = 1;
        this.zeroDraw();
    }
    }
    draw()
    {
        this.myline.mt(this.x1+50,this.y1+40).lt(this.x1+140,this.y1+100);
        this.myline.mt(this.x1+50,this.y1+100).lt(this.x1+140,this.y1+40);
        this.xline = new createjs.Shape(this.myline); 
        this.container.addChild(this.xline);
        this.container.name = "x"   
     
    }
    zeroDraw(){
        this.bitmap = new createjs.Bitmap("./Images/Zero.png");
        this.bitmap.x = this.x1+70;
        this.bitmap.y = this.y1+40;
        this.container.addChild(this.bitmap);
        this.container.name = "0"  
       // console.log(this.container);
        
    }

}
import drawX from "./app";
const _ = require("lodash")
// import _ from "lodash"

const Vline = [
    {
         x1:200,
         y1:0,
         x2:200,
         y2:500,
    },
    {
        x1:400,
        y1:0,
        x2:400,
        y2:500,
   }
]

const Hline =[
    {
        x1:0,
        y1:150,
        x2:600,
        y2:150,
   },
   {
       x1:0,
       y1:300,
       x2:600,
       y2:300,
  }
]
class TicTac{
   constructor(){
    this.stage = new createjs.Stage("mycanvas");
    window.boxContainer = new createjs.Container("boxContainer")

    window.stage = this
    }
    getter()
    {
        return this.stage;
    }   
    init(){
        // _.forEach(Vline,(v)=>{
        //     console.log("Vline----",v);
            
        // })
       
        Vline.forEach(element => {
            new Line(this.stage,element.x1,element.y1,element.x2,element.y2)
        });        
        Hline.forEach(element => {
            new Line(this.stage,element.x1,element.y1,element.x2,element.y2)
        });

        let i =0;
        var rect = [];
        for(let y =0;y<450;y+=150)
        {
            for(let x =0;x<600;x+=200)           
            {
                rect[i] = new Box(this.stage.children,x,y);
                window.boxContainer.addChild(rect[i]);                  
                i++;     
            }
        }  
        this.stage.addChild(window.boxContainer)  
         let play = prompt('You Want to play X or 0 ', 'x');
        (play === 'x')?(flag = 1):(flag=0);  
            
    }   
}
class Line{
    
    constructor(_a,x,y,a,b){
        this.stage = _a
        this.myline = new createjs.Graphics().ss(1).beginStroke("#000000");
        this.line
        this.x =x;
        this.y =y;
        this.a =a;
        this.b=b;
        window.display = this;
        this.drawLine();
    }
    drawLine(){
        this.myline.mt(this.x,this.y).lt(this.a,this.b);
        this.line = new createjs.Shape(this.myline); 
        this.stage.addChild(this.line);
        this.stage.update();
    }
}

class ClearGame{
    constructor(t=1500){
        this.time = t; 
        setTimeout(this.resetAll,this.time);
    }
    resetAll()
    {   let clickMethod = new Box()  
        for(let i =0 ;i<9;i++)
        {
        window.boxContainer.children[i].removeChildAt(1);
        window.boxContainer.children[i].mouseEnabled = true;
        window.boxContainer.children[i].name = null;        
        }
    }
    }

class Box extends createjs.Container {
    constructor(a,x1,y1,x2=200,y2=150,){
        super();
        this.x1 = x1;
        this.y1= y1;
        this.x2 = x2;
        this.box
        this.y2 = y2;
        this.mybox = new createjs.Graphics().beginFill("#7f7f7f");
        window.Box = this;
        this.drawBox();
        this.checkBox = a;
    }
    drawBox()
    {
        this.mybox.drawRect(this.x1,this.y1,this.x2,this.y2);
        this.box = new createjs.Shape(this.mybox);
        this.box.alpha = 0.1; 
        window.Box1 = this;      
        this.bindedFun = this.dosomething.bind(this);
        this.addEventListener("click",this.bindedFun);
        this.addChild(this.box);
    }
    dosomething(e)
    {
        let cont = e.currentTarget;
        new drawX(cont.x1,cont.y1,cont);     
        cont.mouseEnabled = false;
        let box = window.boxContainer.children
        for(let i=0;i<box.length;i++){
        switch(i){
        case 0:{
        if((box[i].name==box[i+4].name && box[i+8].name==box[i+4].name &&  box[i].name !== null&& box[i+4].name !== null&& box[i+8].name !== null)  
        || (box[i].name==box[i+1].name && box[i+1].name==box[i+2].name && box[i].name !== null&& box[i+1].name !== null&& box[i+2].name !== null)
        || ( box[i].name==box[i+3].name && box[i+3].name==box[i+6].name && box[i].name !== null&& box[i+3].name !== null&& box[i+6].name !== null )){
               console.log("Winner!!!");
                new ClearGame();               
        }
}
break;
        case 1:{
    if(box[i].name==box[i+3].name && box[i+3].name==box[i+6].name && box[i+6].name !== null && box[i+3].name !== null && box[i].name!== null ){
        console.log("Winner!!!");
        new ClearGame();
    }
}
break;
        case 2:
    {
        if((box[i].name==box[i+3].name && box[i+3].name==box[i+6].name && box[i].name !== null&& box[i+3].name !== null&& box[i+6].name !== null )
            || (box[i].name==box[i+2].name && box[i+2].name==box[i+4].name && box[i].name !== null&& box[i+2].name !== null&& box[i+4].name !== null ))
            {
                console.log("Winner!!!");
            new ClearGame();
            }
    }
break;
        case 3:
    {        
        if(box[i].name==box[i+1].name && box[i+1].name==box[i+2].name && box[i].name !== null&& box[i+1].name !== null&& box[i+2].name !== null ){
            console.log("Winner!!!");
            new ClearGame();
        }
    }
break;
        case 6:
    {        
        if(box[i].name==box[i+1].name && box[i+1].name==box[i+2].name && box[i].name !== null&& box[i+1].name !== null&& box[i+2].name !== null ){
            console.log("Winner!!!");
            new ClearGame();
        }
    }
break;
    }
}

    }
}

var a = new TicTac();
var abc = a.getter();
createjs.Ticker.addEventListener("tick", () => {
    abc.update();
});
a.init();
let newGame = document.querySelector('#newGame');
newGame.onclick = function(){
    new ClearGame(0);
    a.stage.clear();

}
(function(w){
    var flag = false;
    function getColorForRandom(){
        var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];  //下标0-15
        var str = "#";
        //循环产生 6个 0-15的数.
        for(var i = 0 ; i < 6; i++){
          var num = Math.floor(Math.random()*16);
          //根据这个随机数,在arr数组中去取值.
          str += arr[num];
        }
        return str;   //"#985700"
      }

    var list = [];
    //1.分析蛇是一个对象,蛇有宽高,原始的坐标,背景色,移动的方向
    function Snake(width,height,x,y,direction){
        this.width = width || 20;
        this.height = height || 20;
        this.direction = direction || "right";
        //蛇是很多节的.body储存是身
        this.body = [
            //每个对象储存一节身体
            {bgColor:"red",x:3,y:1},
            {bgColor:'yellow',x:2,y:1},
            {bgColor:'skyblue',x:1,y:1},
            {bgColor:"red",x:3,y:1},
            {bgColor:'yellow',x:2,y:1},
            {bgColor:'skyblue',x:1,y:1},
            {bgColor:"red",x:3,y:1},
            {bgColor:'yellow',x:2,y:1},
            {bgColor:'skyblue',x:1,y:1},
            {bgColor:"red",x:3,y:1},
            {bgColor:'yellow',x:2,y:1},
            {bgColor:'skyblue',x:1,y:1},
            {bgColor:"red",x:3,y:1},
            {bgColor:'yellow',x:2,y:1},
            {bgColor:'skyblue',x:1,y:1},
            {bgColor:"red",x:3,y:1},
            {bgColor:'yellow',x:2,y:1},
            {bgColor:'skyblue',x:1,y:1},
            {bgColor:"red",x:3,y:1},
            {bgColor:'yellow',x:2,y:1},
            {bgColor:'skyblue',x:1,y:1},
            {bgColor:"red",x:3,y:1},
            {bgColor:'yellow',x:2,y:1},
            {bgColor:'skyblue',x:1,y:1},
            {bgColor:"red",x:3,y:1},
            {bgColor:'yellow',x:2,y:1},
            {bgColor:'skyblue',x:1,y:1},
        ];
    }
    Snake.prototype.render = function(map){
        remove(map);
        //遍历每一节身体
        for(var i = 0;i<this.body.length;i++){
            if(flag ==true &&i == this.body.length-1){
                flag = false;
                break;
            }
            //把每一节身体的属性加到div上
            
            var div1 = document.createElement("div");
            div1.style.position = "absolute";
            div1.style.left = this.body[i].x * this.width + 'px';
            div1.style.top = this.body[i].y * this.height + "px";
            div1.style.width = this.width + "px";
            div1.style.height = this.height + "px";
            div1.style.backgroundColor = this.body[i].bgColor;
            //创建div元素,显示一节身体
            map.appendChild(div1);
            list.push(div1);
        }
        
    }

    
    function remove(map){
        for(var i = 0;i<list.length;i++){
            map.removeChild(list[i]);
        }
        list.length = 0;
    }




      //3.写一个方法.让蛇移动.  这个方法写在原型中.
  Snake.prototype.move = function (food) {
    //3.1 除了蛇头之外的蛇身体.
    for(var i = this.body.length-1 ; i > 0 ; i--){
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }

    //3.2 蛇头根据方向移动.
    switch(this.direction){
      case "top":
        this.body[0].y--;
        break;
      case "bottom":
        this.body[0].y++;
        break;
      case "right":
        this.body[0].x++;
        break;
      case "left":
        this.body[0].x--;
        break;
    }
    var snakeHeadX = this.body[0].x * this.width; //蛇头的x坐标
    var snakeHeadY = this.body[0].y * this.height; //蛇头的y坐标.
    var foodX = food.x; //食物的x坐标.
    var foodY = food.y; //食物的y坐标
  
    var snakeLastUnit = this.body[this.body.length-1];
  
        //判断
        if(snakeHeadX == foodX && snakeHeadY == foodY){
          //吃到了食物,长身体.
          this.body.push({
            bgColor:food.color,
            x:snakeLastUnit.x,
            y:snakeLastUnit.y
          });
          food.render(map);
          flag = true;
        }
  }
  


    //把构造函数暴露出来
    w.Snake = Snake;
}(window));
(function(window){
    //1.游戏对象里面有地图,食物,蛇
    var that = null;
    function Game(map){
        this.map = map;
        this.food = new Food();
        this.snake = new Snake();
        that = this;
    }
    //2.把开始写到原型里,开始方法里面创建食物,蛇
    Game.prototype.start = function(){
        this.food.render(this.map);
        snakeAutoMove(this.food);
        this.snake.render(this.map);
        // this.snake.move();
        // this.snake.render(this.map);
        
        bindkey();
    }

    //声明一个函数,里面有计时器,可以让蛇不停地动
    function snakeAutoMove(food){
        var timeID = setInterval(function(){


            var snakeHeadX = this.snake.body[0].x *this.snake.width;
            var snakeHeadY = this.snake.body[0].y *this.snake.height;
            //遍历所有蛇身,如果蛇身的xy等于蛇头的,则停止
            for(var i = 1;i<this.snake.body.length;i++){
                switch(this.snake.direction){
                    case "right":
                    if(this.snake.body[0].x +1 == this.snake.body[i].x  && this.snake.body[0].y == this.snake.body[i].y){
                        alert("Hello World");
                        clearInterval(timeID);
                    }
                    break;
                    case "bottom":
                    if(this.snake.body[0].x == this.snake.body[i].x  && this.snake.body[0].y +1 == this.snake.body[i].y){
                        alert("Hello World");
                        clearInterval(timeID);
                    }
                    break;
                    case "left":
                    if(this.snake.body[0].x -1 == this.snake.body[i].x  && this.snake.body[0].y == this.snake.body[i].y){
                        alert("Hello World");
                        clearInterval(timeID);
                    }
                    break;
                    case "top":
                    if(this.snake.body[0].x == this.snake.body[i].x  && this.snake.body[0].y -1 == this.snake.body[i].y){
                        alert("Hello World");
                        clearInterval(timeID);
                    }
                    break;
                }

            }

            if((snakeHeadX ==0 && this.snake.direction == "left") || (snakeHeadY ==0 && this.snake.direction == "top") || (snakeHeadX == (this.map.offsetWidth-this.snake.width) && this.snake.direction == "right") || (snakeHeadY == (this.map.offsetHeight-this.snake.height) && this.snake.direction == "bottom")){
                alert("Hello World");
                clearInterval(timeID);
            }else{
                this.snake.move(food);
                this.snake.render(this.map);
            }
        }.bind(that),300);
    }

    //声明一个函数,让蛇根据键盘改变方向
    function bindkey(){
        window.onkeydown = function(e){
        e = e || window.evnet;
        switch (e.keyCode){
            case 37:
            if(this.snake.direction != "right"){
              this.snake.direction = "left";
            }
            break;
          case 38:
            if(this.snake.direction != "bottom"){
              this.snake.direction = "top";
            }
            break;
          case 39:
            if(this.snake.direction != "left"){
              this.snake.direction = "right";
            }
            break;
          case 40:
            if(this.snake.direction != "top"){
              this.snake.direction = "bottom";
            }
            break;
        }
    }.bind(that); 
    }


    //3.把Game构造函数暴露出去
    window.Game = Game;
}(window));
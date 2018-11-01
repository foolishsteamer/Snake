/**
 * copy by 单宇烽 on 2018/8/26.
 */
(function(w){

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

    //声明一个数组,用来保存食物的div
    var list = [];

    //1.创建食物的构造函数
    function Food(x,y,width,height,color){
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 20;
        this.height = height ||20;
        this.color = color || "green";
    }

    //2.因为每一个食物都要显示在地图上,所以这个显示食物的方法,就写成原型方法.
    Food.prototype.render = function(map){
        //显示新食物之前,删除老食物
        remove(map);

        var myColor = this.color;
        this.x = Math.floor(Math.random() * map.offsetWidth / this.width) * this.width;
        this.y = Math.floor(Math.random() * map.offsetHeight / this.height) * this.height;
        //想要让食物显示在地图上,就可以创建一个div,让这个div拥有这个食物所有的属性样式
        var div1 = document.createElement("div");
        div1.style.position = "absolute";
        div1.style.left = this.x + "px";
        div1.style.top = this.y + "px";
        div1.style.width = this.width + "px";
        div1.style.height = this.height + "px";
        div1.style.backgroundColor = getColorForRandom();
        this.color = div1.style.backgroundColor;
        //把div装进map中
        map.appendChild(div1);
        list.push(div1);
    }

    //封装一个删除食物函数
    function remove(map){
        for(var i=0;i<list.length;i++){
            map.removeChild(list[i]);
        }
        list.length=0;
    }
    w.Food = Food;
}(window));

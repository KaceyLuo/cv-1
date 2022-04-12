let html = document.querySelector('#html')//通过css找到一个选择器
let style = document.querySelector('#style')
let string = `
/*你好，我是一名前端新人
展示一下前端的一些技能
首先我要准备一个div*/
#div1{
    border:1px solid black;
    width:200px;
    height:200px;
}
/*接下来把div变成一个八卦图
第一步，把div画成一个圆*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦图是阴阳的，应该是一黑一白*/
#div1{
    //使用css gradient 让颜色渐变
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(188,188,188,1) 50%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个小球 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: rgb(188,188,188);
    background: radial-gradient(circle, rgba(188,188,188,1) 0%, rgba(255,255,255,1) 22%, rgba(255,255,255,1) 22%, rgba(255,255,255,1) 22%, rgba(0,0,0,1) 24%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: rgb(188,188,188);
    background: radial-gradient(circle, rgba(188,188,188,1) 0%, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%)
}
`;
let string2 = ''
//string=string.replace(/\n/g,"br")    //正则表达式将string里面的回车变成换行
let n = 0;

//demo.innerHTML = string.substring(0, n);//修改demo里面的内容

// setInterval(() => {     //每几秒钟响一次
//     n = n + 1;
//     demo.innerHTML = n;
// }, 1000);

let step = () => {       //100毫秒之后按顺序打印数字 模拟setInterval 好处是可以随时停止
    setTimeout(() => {


        if (string[n] === "\n")//如果是回车就不照搬
        {
            string2 += "<br>";
        }
        else if (string[n] === " ") { //缩进
            string2 += "&nbsp";
        } else {
            string2 += string[n];//如果不是回车就照搬
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        // demo.innerHTML = string.substring(0, n);  因为每次使用innerHTML页面就会显示<br>
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);

        if (n < string.length - 1) {
            //不是最后一个
            n += 1;
            step();
        }
    }, 0);
};
step();
//step();step(); 不能连续两次使用step 例如第一次要1=>2 第二次要2=>3 执行后1会直接变成3





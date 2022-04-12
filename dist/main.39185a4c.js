// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#html'); //通过css找到一个选择器
var style = document.querySelector('#style');
var string = '\n/*\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n\u5C55\u793A\u4E00\u4E0B\u524D\u7AEF\u7684\u4E00\u4E9B\u6280\u80FD\n\u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv*/\n#div1{\n    border:1px solid black;\n    width:200px;\n    height:200px;\n}\n/*\u63A5\u4E0B\u6765\u628Adiv\u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n\u7B2C\u4E00\u6B65\uFF0C\u628Adiv\u753B\u6210\u4E00\u4E2A\u5706*/\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/*\u516B\u5366\u56FE\u662F\u9634\u9633\u7684\uFF0C\u5E94\u8BE5\u662F\u4E00\u9ED1\u4E00\u767D*/\n#div1{\n    //\u4F7F\u7528css gradient \u8BA9\u989C\u8272\u6E10\u53D8\n    background: rgb(255,255,255);\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(188,188,188,1) 50%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* \u52A0\u4E24\u4E2A\u5C0F\u7403 */\n#div1::before{\n    width:100px;\n    height:100px;\n    top:0;\n    left:50%;\n    transform:translateX(-50%);\n    background:#fff;\n    border-radius:50%;\n    background: rgb(188,188,188);\n    background: radial-gradient(circle, rgba(188,188,188,1) 0%, rgba(255,255,255,1) 22%, rgba(255,255,255,1) 22%, rgba(255,255,255,1) 22%, rgba(0,0,0,1) 24%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    width:100px;\n    height:100px;\n    bottom:0;\n    left:50%;\n    transform:translateX(-50%);\n    background:#000;\n    border-radius:50%;\n    background: rgb(188,188,188);\n    background: radial-gradient(circle, rgba(188,188,188,1) 0%, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%)\n}\n';
var string2 = '';
//string=string.replace(/\n/g,"br")    //正则表达式将string里面的回车变成换行
var n = 0;

//demo.innerHTML = string.substring(0, n);//修改demo里面的内容

// setInterval(() => {     //每几秒钟响一次
//     n = n + 1;
//     demo.innerHTML = n;
// }, 1000);

var step = function step() {
    //100毫秒之后按顺序打印数字 模拟setInterval 好处是可以随时停止
    setTimeout(function () {

        if (string[n] === "\n") //如果是回车就不照搬
            {
                string2 += "<br>";
            } else if (string[n] === " ") {
            //缩进
            string2 += "&nbsp";
        } else {
            string2 += string[n]; //如果不是回车就照搬
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
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.39185a4c.map
var div = document.createElement("div");
div.style.cssText = "all:initial;transparent;box-shadow: 0 0 18px rgba(70, 70, 40, 0.255);background-color: rgba(255, 255, 255, 0.8);border-radius: 50px;position:fixed;bottom:30px;left:40px;width:600px;height:30px;z-index:9998;";
div.setAttribute("class", "fromShortcuts");
var input = document.createElement("input");
input.style.cssText = "all:initial;background-color: transparent;width: 580px;height:30px;margin-top:0;margin-left:10px;border:none;font-size:18px;";
input.setAttribute("class", "fromShortcuts");
input.setAttribute("spellcheck", "false");
var list = document.createElement("div");
list.style.cssText = "all:initial;transparent;box-shadow: 0 0 18px rgba(70, 70, 40, 0.255);background-color: rgba(255, 255, 255, 0.8);border-radius: 20px;position:fixed;bottom:70px;left:40px;width:600px;height:90px;z-index:9998;display:none";
list.setAttribute("class", "fromShortcuts");
document.body.appendChild(div);
div.appendChild(input);
document.body.appendChild(list);
input.addEventListener('keyup', function() {
    try {
        let x = eval(input.value.replace("log", "Math.log10").replace("lg", "Math.log10").replace("ln", "Math.log").replace("sqrt", "Math.sqrt").replace("^", "**").replace("*", "*").replace("x", "*").replace("e*p", "Math.exp").replace("NA", "6.022e23").replace("R", "8.314").replace("F", "96485").replace("C", "2.998e8").replace("H", "6.626e-34").replace("K", "273.15"));
        let a = x.toExponential().split("e");
        let b = Math.round(a[0] * 1000) / 1000;
        b = b.toString() + "e" + a[1].replace("+", "");
        a = x.toFixed(3).replace(".000", "").replace("e+", "e");
        navigator.clipboard.writeText(a);
        list.innerHTML = "<span style='margin-top:0;margin-left:10px;display:block;clear:both;width:580px;line-height:30px;font-size:18px;'>" + x + "</span>" + "<span style='margin-top:0;margin-left:10px;display:block;clear:both;width:580px;line-height:30px;font-size:18px;'>" + a + '</span>' + "<span style='margin-top:0;margin-left:10px;display:block;clear:both;width:580px;line-height:30px;font-size:18px;'>" + b + '</span>';
        list.style.display = 'block';
    } catch (error) {
        list.style.display = 'none';
    }
}, false);
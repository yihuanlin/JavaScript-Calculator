# JavaScript Calculator
 Add a calculator to webpage using macOS Shortcuts or Tampermonkey UserScript

An input bar will appear and your input expression will be evaluated

Usage example: exp(sqrt(3e1)/24*R/lg(2^4)/ln(7)) will return "2.247412716187969", "2.247" and "2.247e0". "2.247e0" will be copied to your clipboard

- Option 1: Click this link to add this UserScript for moodle.ucl.ac.uk to Tampermonkey: https://raw.githubusercontent.com/yihuanlin/JavaScript-Calculator/main/Moodle.user.js

- Option 2: Shortcuts for iOS 12 or above/macOS Monterey or above: https://www.icloud.com/shortcuts/7015ef48f0fa4da087f0a21f6105312e

- Option 3: run the following code in your browser console:
```
var div=document.createElement("div");div.style.cssText="all:initial;transparent;box-shadow: 0 0 18px rgba(70, 70, 40, 0.255);background-color: rgba(255, 255, 255, 0.8);border-radius: 50px;position:fixed;bottom:30px;left:40px;width:600px;height:30px;z-index:9998;",div.setAttribute("class","fromShortcuts");var input=document.createElement("input");input.style.cssText="all:initial;background-color: transparent;width: 580px;height:30px;margin-top:0;margin-left:10px;border:none;font-size:18px;",input.setAttribute("class","fromShortcuts"),input.setAttribute("spellcheck","false");var list=document.createElement("div");list.style.cssText="all:initial;transparent;box-shadow: 0 0 18px rgba(70, 70, 40, 0.255);background-color: rgba(255, 255, 255, 0.8);border-radius: 20px;position:fixed;bottom:70px;left:40px;width:600px;height:90px;z-index:9998;display:none",list.setAttribute("class","fromShortcuts"),document.body.appendChild(div),div.appendChild(input),document.body.appendChild(list),input.addEventListener("keyup",function(){try{let x=eval(input.value.replace("log","Math.log10").replace("lg","Math.log10").replace("ln","Math.log").replace("sqrt","Math.sqrt").replace("^","**").replace("*","*").replace("x","*").replace("e*p","Math.exp").replace("NA","6.022e23").replace("R","8.314").replace("F","96485").replace("C","2.998e8").replace("H","6.626e-34").replace("K","273.15")),a=x.toExponential().split("e"),b=Math.round(1e3*a[0])/1e3;b=b.toString()+"e"+a[1].replace("+",""),a=x.toFixed(3).replace(".000","").replace("e+","e"),list.innerHTML="<span style='margin-top:0;margin-left:10px;display:block;clear:both;width:580px;line-height:30px;font-size:18px;'>"+x+"</span><span style='margin-top:0;margin-left:10px;display:block;clear:both;width:580px;line-height:30px;font-size:18px;'>"+a+"</span><span style='margin-top:0;margin-left:10px;display:block;clear:both;width:580px;line-height:30px;font-size:18px;'>"+b+"</span>",list.style.display="block";for(let e=0;e<list.children.length;e++){const t=list.children[e];t.onclick=function(){navigator.clipboard.writeText(this.innerHTML)}}}catch(e){list.style.display="none"}},!1);
```

- Shortcuts to remove Calculator: https://www.icloud.com/shortcuts/ff3d04382680409cbc15036875e9d582

- Alternatively, you can run the following code in browser console to remove Calculator:
```
document.querySelectorAll(".fromShortcuts").forEach(el => el.remove());
```

Not-JavaScript-based Calculator Shortcuts for iOS 12 or abovef/macOS Monterey or above: https://www.icloud.com/shortcuts/ec1c0d8818594f0580e79bf0bdc5bab4

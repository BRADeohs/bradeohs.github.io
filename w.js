(function(e,t){"use strict";function f(e){o[o.length]=e}function l(e){var t=new RegExp("\\b"+e+"\\b");s.className=s.className.replace(t,"")}function c(e,t){for(var n=0,r=e.length;n<r;n++)t.call(e,e[n],n)}function E(){var t=e.innerWidth||s.clientWidth,n=e.outerWidth||e.screen.width;h.screen.innerWidth=t,h.screen.outerWidth=n;var r=e.outerWidth||s.clientWidth;s.className=s.className.replace(/ (w|lt|portrait|no-portrait|landscape|no-landscape)-\d+/g,""),f("w-"+Math.round(r/100)*100),c(u.screens,function(e){r<=e&&f("lt-"+e)});var i=e.innerHeight||s.clientHeight,o=e.outerHeight||e.screen.height;h.screen.innerHeight=i,h.screen.outerHeight=o,h.feature("portrait",i>t),h.feature("landscape",i<t)}function x(){e.clearTimeout(S),S=e.setTimeout(E,100)}var n=e.document,r=e.navigator,i=e.location,s=n.documentElement,o=[],u={screens:[320,480,640,768,1024,1280,1440,1680,1920],section:"-section",page:"-page",head:"head"};if(e.head_conf)for(var a in e.head_conf)e.head_conf[a]!==t&&(u[a]=e.head_conf[a]);var h=e[u.head]=function(){h.ready.apply(null,arguments)};h.feature=function(e,t,n){return e?(Object.prototype.toString.call(t)==="[object Function]"&&(t=t.call()),f((t?"":"no-")+e),h[e]=!!t,n||(l("no-"+e),l(e),h.feature()),h):(s.className+=" "+o.join(" "),o=[],h)},h.feature("js",!0);var p=r.userAgent.toLowerCase(),d=/mobile|midp/.test(p);h.feature("mobile",d,!0),h.feature("desktop",!d,!0),h.feature("touch","ontouchstart"in e,!0),p=/(chrome|firefox)[ \/]([\w.]+)/.exec(p)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(msie) ([\w.]+)/.exec(p)||[];var v=p[1],m=parseFloat(p[2]),g=0,y=0;switch(v){case"msie":v="ie",m=n.documentMode||m,g=6,y=10;break;case"chrome":g=8,y=22;break;case"firefox":v="ff",g=3,y=17;break;case"ipod":case"ipad":case"iphone":v="ios",g=3,y=6;break;case"android":g=2,y=4;break;case"webkit":v="safari",g=9,y=12;break;case"opera":g=9,y=12}h.browser={name:v,version:m},h.browser[v]=!0;var b=["ie"];c(b,function(e){e===v?f(e):f("no-"+e)});for(var w=g;w<=y;w++)m<w&&f("lt-"+v+w);v==="ie"&&m<9&&c("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(e){n.createElement(e)}),c(i.pathname.split("/"),function(e,n){if(this.length>2&&this[n+1]!==t)n&&f(this.slice(1,n+1).join("-").toLowerCase()+u.section);else{var r=e||"index",i=r.indexOf(".");i>0&&(r=r.substring(0,i)),s.id=r.toLowerCase()+u.page,n||f("root"+u.section)}}),h.screen={height:e.screen.height,width:e.screen.width},E();var S=0;e.addEventListener?e.addEventListener("resize",x,!1):e.attachEvent("onresize",x)})(window),function(e,t){"use strict";function l(e){for(var n in e)if(s[e[n]]!==t)return!0}function c(e){var t=e.charAt(0).toUpperCase()+e.substr(1),n=(e+" "+u.join(t+" ")+t).split(" ");return!!l(n)}var n=e.document,r=e.navigator,i=n.createElement("i"),s=i.style,o=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),u="Webkit Moz O ms Khtml".split(" "),a=e.head_conf&&e.head_conf.head||"head",f=e[a],h={gradient:function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(#fff));",n="linear-gradient(left top,#eee,#fff);";return s.cssText=(e+o.join(t+e)+o.join(n+e)).slice(0,-e.length),!!s.backgroundImage},rgba:function(){return s.cssText="background-color:rgba(0,0,0,0.5)",!!s.backgroundColor},opacity:function(){return i.style.opacity===""},textshadow:function(){return s.textShadow===""},multiplebgs:function(){return s.cssText="background:url(//:),url(//:),red url(//:)",(new RegExp("(url\\s*\\(.*?){3}")).test(s.background)},boxshadow:function(){return c("boxShadow")},borderimage:function(){return c("borderImage")},borderradius:function(){return c("borderRadius")},cssreflections:function(){return c("boxReflect")},csstransforms:function(){return c("transform")},csstransitions:function(){return c("transition")},fontface:function(){var e=navigator.userAgent,t;return(t=e.match(/Chrome\/(\d+\.\d+\.\d+\.\d+)/))?t[1]>="4.0.249.4"||1*t[1].split(".")[0]>5:(t=e.match(/Safari\/(\d+\.\d+)/))&&!/iPhone/.test(e)?t[1]>="525.13":/Opera/.test({}.toString.call(window.opera))?opera.version()>="10.00":(t=e.match(/rv:(\d+\.\d+\.\d+)[^b].*Gecko\//))?t[1]>="1.9.1":!1}};for(var p in h)h[p]&&f.feature(p,h[p].call(),!0);f.feature()}(window),function(e,t){"use strict";function y(e){if(e._done)return;e(),e._done=1}function b(e){var t=e.split("/"),n=t[t.length-1],r=n.indexOf("?");return r!=-1?n.substring(0,r):n}function w(e){var t;if(typeof e=="object")for(var n in e)e[n]&&(t={name:n,url:e[n]});else t={name:b(e),url:e};var r=l[t.name];return r&&r.url===t.url?r:(l[t.name]=t,t)}function E(e,t){if(!e)return;typeof e=="object"&&(e=[].slice.call(e));for(var n=0;n<e.length;n++)t.call(e,e[n],n)}function S(e){return Object.prototype.toString.call(e)=="[object Function]"}function x(e){e=e||l;var t;for(var n in e){if(e.hasOwnProperty(n)&&e[n].state!=g)return!1;t=!0}return t}function T(e){e.state=d,E(e.onpreload,function(e){e.call()})}function N(e,n){e.state===t&&(e.state=v,e.onpreload=[],k({src:e.url,type:"cache"},function(){T(e)}))}function C(e,t){if(e.state==g)return t&&t();if(e.state==m)return p.ready(e.name,t);if(e.state==v)return e.onpreload.push(function(){C(e,t)});e.state=m,k(e.url,function(){e.state=g,t&&t(),E(f[e.name],function(e){y(e)}),x()&&o&&E(f.ALL,function(e){y(e)})})}function k(e,t){var r=n.createElement("script");r.type="text/"+(e.type||"javascript"),r.src=e.src||e,r.async=!1,r.onreadystatechange=r.onload=function(){var e=r.readyState;!t.done&&(!e||/loaded|complete/.test(e))&&(t.done=!0,t())},(n.body||i).appendChild(r)}function L(){o||(o=!0,E(u,function(e){y(e)}))}var n=e.document,r=e.navigator,i=n.documentElement,s,o,u=[],a=[],f={},l={},c=n.createElement("script").async===!0||"MozAppearance"in n.documentElement.style||e.opera,h=e.head_conf&&e.head_conf.head||"head",p=e[h]=e[h]||function(){p.ready.apply(null,arguments)},d=1,v=2,m=3,g=4;c?p.js=function(){var e=arguments,t=e[e.length-1],n={};return S(t)||(t=null),E(e,function(r,i){r!=t&&(r=w(r),n[r.name]=r,C(r,t&&i==e.length-2?function(){x(n)&&y(t)}:null))}),p}:p.js=function(){var e=arguments,t=[].slice.call(e,1),n=t[0];return s?(n?(E(t,function(e){S(e)||N(w(e))}),C(w(e[0]),S(n)?n:function(){p.js.apply(null,t)})):C(w(e[0])),p):(a.push(function(){p.js.apply(null,e)}),p)},p.ready=function(e,t){if(e==n)return o?y(t):u.push(t),p;S(e)&&(t=e,e="ALL");if(typeof e!="string"||!S(t))return p;var r=l[e];if(r&&r.state==g||e=="ALL"&&x()&&o)return y(t),p;var i=f[e];return i?i.push(t):i=f[e]=[t],p},p.ready(n,function(){x()&&E(f.ALL,function(e){y(e)}),p.feature&&p.feature("domloaded",!0)});if(e.addEventListener)n.addEventListener("DOMContentLoaded",L,!1),e.addEventListener("load",L,!1);else if(e.attachEvent){n.attachEvent("onreadystatechange",function(){n.readyState==="complete"&&L()});var A=1;try{A=e.frameElement}catch(O){}!A&&i.doScroll&&function(){try{i.doScroll("left"),L()}catch(e){setTimeout(arguments.callee,1);return}}(),e.attachEvent("onload",L)}!n.readyState&&n.addEventListener&&(n.readyState="loading",n.addEventListener("DOMContentLoaded",handler=function(){n.removeEventListener("DOMContentLoaded",handler,!1),n.readyState="complete"},!1)),setTimeout(function(){s=!0,E(a,function(e){e()})},300)}(window)

head.js("https://code.jquery.com/jquery.min.js", function() {
    class MyDate extends Date {
        addWeeks(weeks) {
            let date = new MyDate(this.valueOf());
            date.setDate(date.getDate() + weeks * 7);
            return date;
        }
    }

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    // Prompt for the week offset
    let weekOffset = parseInt(prompt("Enter week offset (positive or negative integer e.g. 53 = 1 year):"));

    // Check if the input is a valid number
    if (isNaN(weekOffset)) {
        alert("Invalid input. Please enter a valid integer.");
        return;
    }

    // Update existing functionality
    for (let i = 2; i < 9; i++) {
        let s = "body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(3) > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > strong";
        let ti = document.querySelector(s);
        if (ti != null) {
            dM(ti);
        } else {
            bakup();
            break;
        }
    }

    var qi = document.querySelector("body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > strong");
    if (qi != null) {
        eM(qi);
    }

    // Update week numbers with the provided offset
    updateWeekNumber("body > div > div > table:nth-child(1) > tbody > tr > td > font:nth-child(1) > b", weekOffset);
    updateWeekNumber("body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div.gmail_attr", weekOffset);
    updateWeekNumber("body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > strong", weekOffset);
  
    // Update the document title
    let originalTitle = document.title;
    if (originalTitle.startsWith('z')) {
    let weekNumberMatch = originalTitle.match(/z(\d+)H/);
    if (weekNumberMatch) {
        let currentWeek = parseInt(weekNumberMatch[1], 10);
        let newWeek = currentWeek + weekOffset;
        // Adjust week number to overflow to 1 after reaching 53
        newWeek = (newWeek > 53) ? newWeek - 53 : (newWeek < 1) ? newWeek + 53 : newWeek;
        // Ensure the week number has leading zeros
        let newWeekStr = String(newWeek).padStart(2, '0');
        let newTitle = originalTitle.replace(/z\d+H/, `z${newWeekStr}H`);
        document.title = newTitle;
    }
    } else {
    let t = "Educational Options Foundation Mail - Fwd: Home Timesheets - ";
    let ogTitle = document.title;

    if (ogTitle.includes(t)) {
        ogTitle = ogTitle.replace(t, "");
        let weekNum = ogTitle.match(/\d+$/)?.[0]; // Extract the trailing number
        if (weekNum) {
            weekNum = String(Number(weekNum) + weekOffset).padStart(2, '0'); // Ensure 2 digits
        } else {
            weekNum = "01"; // Fallback if no number is found
        }

        ogTitle = ogTitle.replace(/ - \d+$/, ""); // Remove trailing week number and hyphen
        ogTitle = ogTitle.replace(" - ", "");
        ogTitle = ogTitle.replace(" -", "");
        ogTitle = ogTitle.replace(",", "");
        let newTitle = 'z' + weekNum + 'H ' + ogTitle;
        document.title = newTitle;
    }
}

window.print(); // Print the document

    function updateWeekNumber(selector, weekOffset) {
        let element = document.querySelector(selector);
        if (element) {
            let text = element.innerHTML;
            if (selector.includes("gmail_attr")) {
                let regex = /Subject:\s*.*?(\d+)(?=<br>)/;
                let match = text.match(regex);
                if (match) {
                    let weekNum = parseInt(match[1]) + weekOffset;
                    // Adjust week number to overflow to 1 after reaching 53
                    // Adjust week number to overflow to 1 after reaching 53 and vice versa for negative offsets
                    weekNum = (weekNum > 53) ? weekNum - 53 : (weekNum < 1) ? weekNum + 53 : weekNum;

                    let newText = text.replace(match[1], weekNum);
                    element.innerHTML = newText;
                }
            } else {
                let weekNum = parseInt(text.match(/\d+/)[0]) + weekOffset;
            // Adjust week number to overflow to 1 after reaching 53 and vice versa for negative offsets
            weekNum = (weekNum > 53) ? weekNum - 53 : (weekNum < 1) ? weekNum + 53 : weekNum;

                let newText = text.replace(/\d+/, weekNum);
                element.innerHTML = newText;
            }
        }
    }

       function bakup() {
    for (let i = 15; i < 22; i++) {
        let x = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[" + i + "]");
        iD(x);
    }

    let mi = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[12]");
    pQ(mi);

    // Handle additional cases with different formatting
    let subjectElement = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[6]");
    if (subjectElement) {
        let weekNum = parseInt(subjectElement.textContent.match(/\d+/)[0]) + weekOffset;
        // Apply overflow protection
        weekNum = (weekNum > 53) ? weekNum - 53 : (weekNum < 1) ? weekNum + 53 : weekNum;
        subjectElement.textContent = subjectElement.textContent.replace(/\d+/, weekNum);
    }

    let dateElement = mi;
    if (dateElement) {
        let match = dateElement.textContent.match(/Week:\s*(\d+)/);
        if (match) {
            let weekNum = parseInt(match[1]) + weekOffset;
            // Apply overflow protection
            weekNum = (weekNum > 53) ? weekNum - 53 : (weekNum < 1) ? weekNum + 53 : weekNum;
            dateElement.textContent = dateElement.textContent.replace(/\d+/, weekNum);
        }
    }
}


    function iD(select) {
        let tii = select.textContent;
        tii = tii.split(' ');
        let tdi = new MyDate(tii[1]);
        let nextWeek = tdi.addWeeks(weekOffset);
        let yyyy = nextWeek.getFullYear();
        let mm = nextWeek.getMonth() + 1;
        let dd = nextWeek.getDate();
        tii[1] = mm + '/' + dd + '/' + yyyy;
        let fin = tii.join(' ');
        select.textContent = fin;
    }

    function pQ(select) {
        let tii = select.textContent;
        tii = tii.split(' ');
        let tdi = new MyDate(tii[5] + tii[6] + tii[7]);
        let nextWeek = tdi.addWeeks(weekOffset);
        let fDate = nextWeek.toLocaleString('en-US', { dateStyle: 'long' });
        tii[5] = fDate;
        tii[6] = '';
        tii[7] = '';
        let fin = tii.join(' ');
        select.textContent = fin;
    }

    function dM(select) {
        let tii = select.innerHTML.split(' ');
        let tdi = new MyDate(tii[1]);
        let nextWeek = tdi.addWeeks(weekOffset);
        let yyyy = nextWeek.getFullYear();
        let mm = nextWeek.getMonth() + 1;
        let dd = nextWeek.getDate();
        let fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy;
        select.innerHTML = fin;
    }

    function eM(select) {
        let tii = select.innerHTML.split(' - ');
        let tdi = new MyDate(tii[1]);
        let nextWeek = tdi.addWeeks(weekOffset);
        let fDate = nextWeek.toLocaleString('en-US', { dateStyle: 'long' });
        let fin = tii[0] + ' - ' + fDate;
        select.innerHTML = fin;
    }
});

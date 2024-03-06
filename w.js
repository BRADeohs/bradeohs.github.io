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
        window.print();
    }

    function bakup() {
        for (let i = 15; i < 22; i++) {
            let x = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[" + i + "]");
            iD(x);
        }
        let mi = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[12]");
        pQ(mi);
        window.print();
    }

    function iD(select) {
        let tii = select.textContent;
        tii = tii.split(' ');
        let weekNum = parseInt(tii.pop());
        weekNum++;
        tii.push(weekNum.toString());
        let fin = tii.join(' ');
        select.textContent = fin;
    }

    function pQ(select) {
        let tii = select.textContent;
        tii = tii.split(' ');
        let weekNum = parseInt(tii.pop());
        weekNum++;
        tii.push(weekNum.toString());
        let fin = tii.join(' ');
        select.textContent = fin;
    }

    function dM(select) {
        let tii = select.innerHTML.split(' ');
        let weekNum = parseInt(tii.pop().split(':')[1]);
        weekNum++;
        tii.push('Week: ' + weekNum);
        let fin = tii.join(' ');
        select.innerHTML = fin;
    }

    function eM(select) {
        let tii = select.innerHTML.split(' - ');
        let weekNum = parseInt(tii[0].split(':')[1]);
        weekNum++;
        tii[0] = 'Week: ' + weekNum;
        let fin = tii.join(' - ');
        select.innerHTML = fin;
    }
});

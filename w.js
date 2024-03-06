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
        let tdi = new MyDate(tii[1]);
        let nextWeek = tdi.addWeeks(1);
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
        let nextWeek = tdi.addWeeks(1);
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
        let nextWeek = tdi.addWeeks(1);
        let yyyy = nextWeek.getFullYear();
        let mm = nextWeek.getMonth() + 1;
        let dd = nextWeek.getDate();
        let fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy;
        select.innerHTML = fin;
    }

    function eM(select) {
        let tii = select.innerHTML.split(' - ');
        let tdi = new MyDate(tii[1]);
        let nextWeek = tdi.addWeeks(1);
        let fDate = nextWeek.toLocaleString('en-US', { dateStyle: 'long' });
        let fin = tii[0] + ' - ' + fDate;
        select.innerHTML = fin;
    }
});

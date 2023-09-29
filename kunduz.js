setInterval(funk, 2000)
setInterval(() => {
    if (j == 0) {
        teklif.style.display = 'inline-block'
        if (k < 5) {
            netice.innerText = 'Uduzduz :('
            netice.style.webkitTextStroke = 'red 1px'
        }
        else {
            netice.innerText = ' Udduz :)'
            netice.style.webkitTextStroke = 'green 1px'
        }
    }else{
        j--;
        zaman.innerText = j;
    }
    if (j <= 5) { 
        zaman.style.color = 'red'
    }

},2000)






var k = 0;
var j = 10;
function funk() {
    var a = Math.floor(Math.random() * 6);
    if(j!=0) {
        
        for (let i = 0; i < 6; i++) {
            document.querySelectorAll("#kunduz img")[i].style.display = "none"
        }
        document.querySelectorAll("#kunduz img")[a].style.display = "inline-block"
        document.getElementsByTagName("img")[a].onclick = function nan() {
            k++
            say.innerText = k;
            funk()
            // document.querySelectorAll("#kunduz img")[a].style.display = "none"
        }

        davam.addEventListener('click', function () {
            teklif.style.display = 'none'
            j = 10;
            k = 0;
            say.innerText = k;
        })
    }

}


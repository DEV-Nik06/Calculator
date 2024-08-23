let btn = document.querySelectorAll('button');
let input = document.querySelector('#input');
console.log(btn);
let string = "";
btn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            input.value = string
        } else if (e.target.innerHTML == 'C') {
            string = "";
            input.value = string
        } else if (e.target.innerHTML == 'DLE') {
           string=string.substring(0,string.length-1);
           input.value=string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }






    })
})

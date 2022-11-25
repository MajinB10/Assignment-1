const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', clickon()
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classlist.remove('active');
    })
}

function clickon(){
    nav.classlist.add('active');
}
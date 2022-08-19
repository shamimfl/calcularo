function calculate(e) {
    const display = document.getElementById('display');
        const result = display.value;
        display.value = result + e;

    if(display.value === ''){
        document.getElementById('equal').setAttribute('disabled', true)
    }
    else{

        document.getElementById('equal').removeAttribute('disabled')
        
    }
}

document.getElementById('equal').addEventListener('click', function () {
    const display = document.getElementById('display');
    const math = eval(display.value);
    display.value = math;
})

document.getElementById('clear').addEventListener('click', function () {
    const display = document.getElementById('display');
    display.value = '';
})



document.getElementById('delete').addEventListener('click', function () {
    const display = document.getElementById('display');
    const input = display.value;
    display.value = (input.substring(0, input.length - 1))
})
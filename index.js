const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function deleteChar(){
    display.value=display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}


function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteDigit() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let display = document.getElementById('display').value;
    display = display.replace('^', '**'); // Replace power operator with JS power operator
    display = display.replace('pi', 'Math.PI'); // Replace pi with Math.PI

    try {
        // Evaluate using math functions
        document.getElementById('display').value = eval(display
            .replace('sin', 'Math.sin')
            .replace('cos', 'Math.cos')
            .replace('tan', 'Math.tan')
            .replace('log', 'Math.log')
            .replace('exp', 'Math.exp')
            .replace('sqrt', 'Math.sqrt')
        );
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
  /*for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonstext=e.target.inneText;

    function sin()
{
  display.value = Math.sin(display.value);
  display.value+=buttonstext;  
}
    });
}
function sin()
{
  Screen.value = Math.sin(Screen.value);  
}
function cos()
{
    display.value = Math.cos(display.value);  
}
function tan()
{
    display.value = Math.tan(display.value);  
}
function pow()
{
    display.value = Math.pow(display.value,2);   
}
function sqrt()
{
    display.value = Math.sqrt(display.value,2);   

}
function log()
{
    display.value = Math.log(display.value);   
}   
function pi()
{
    display.value = 3.14159265359;   
}   
function e()
{
    display.value = 2.71828182846;
}
function fact()
{
    var i, num, f;
    f=1
    num=display.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }
    i=i-1;
    display.value=f;
}*/


function arrange(char){
    document.getElementById('calc').value+=char;
}
function clr(){
    document.getElementById('calc').value='';
}
function dlt(){
    const calc=document.getElementById('calc');
    calc.value=calc.value.slice(0,-1);
}
function calculate(){
    try{
        let result=new Function('return '+document.getElementById('calc').value)();
        document.getElementById('calc').value=result;
    }
    catch{
        document.getElementById('calc').value='Error';
    }
}
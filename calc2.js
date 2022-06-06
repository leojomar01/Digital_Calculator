function getData(btnValue){
    var i = parseFloat(document.getElementById('numInput').value);
    if(i=='0'||(isNaN(i))){
        document.getElementById('numInput').value='';
        document.getElementById('conNum').innerHTML='';
    }
    document.getElementById('numInput').value+=btnValue.value;   
    document.getElementById('conNum').innerHTML+=btnValue.value;
    calculate();
    document.getElementById('conSign').innerHTML='';
    document.getElementById('PW').innerHTML+=btnValue.value;
    getPW()
    disableBtn()
}
function getOperator(operator){
    var x = document.getElementById('conSign').innerHTML;
    if(x!=''){
        deleteData()
    }
    var y = operator.value;
    document.getElementById('numInput').value+=y
    switch (y){
        case 'x':y='*';break;
        case '÷':y='/';break;
    }
    document.getElementById('conSign').innerHTML=y;
    document.getElementById('conNum').innerHTML+=y;
    
}

function deleteData(){
   var delDataInput= document.getElementById('numInput').value;
   var delDataContainer = document.getElementById('conNum').innerHTML;
   var splitDataInput = delDataInput.split('');
   var splitDataContainer = delDataContainer.split('');
   splitDataInput.pop();
   splitDataContainer.pop();
   delDataInput = splitDataInput.join('');
   delDataContainer = splitDataContainer.join('');
   document.getElementById('numInput').value=delDataInput;
   document.getElementById('conNum').innerHTML=delDataContainer;
   if(delDataInput==''){
    document.getElementById('numInput').value=0;
   }
}

function allClear(){
    document.getElementById('numInput').value=0;
    document.getElementById('numOutput').value='';
    document.getElementById('conSign').innerHTML='';
    document.getElementById('conNum').innerHTML=0;
    document.getElementById('conAns').innerHTML='';
    document.getElementById('PW').innerHTML='';
    enableBtn()
}

function calculate(){
    var x = document.getElementById('conNum').innerHTML;
    var y = eval(x);
    document.getElementById('conAns').innerHTML=y;
    var ans = document.getElementById('conAns').innerHTML;
    document.getElementById('numOutput').value= ans;
}
function getAns(){
    var answer = document.getElementById('conAns').innerHTML;
    document.getElementById('numInput').value=answer;
    document.getElementById('conNum').innerHTML=answer; 
    console.log(500%3111)
}


function styles(styleNum){
    var x = styleNum.value
    switch (x){
        case 'style1': document.getElementById('div').className='calculator1';break;
        case 'style2': document.getElementById('div').className='calculator2';break;
        case 'style3': document.getElementById('div').className='calculator3';break;
    }
}
function disableBtn(){
    document.getElementById('style1').disabled = true;
    document.getElementById('style2').disabled = true;
    document.getElementById('style3').disabled = true;
}
function enableBtn(){
    document.getElementById('style1').disabled = false;
    document.getElementById('style2').disabled = false;
    document.getElementById('style3').disabled = false;
}

function getPW(){
    var pw = document.getElementById('PW').innerHTML;
    console.log(pw)
    if(pw=='1234567890'){
        document.getElementById('styles').style.visibility='visible';
        document.getElementById('message').style.visibility='hidden';
    }
}
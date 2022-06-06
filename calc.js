
function getData(btnValue){
    var i = document.getElementById('numInput').value;
    if(i=='0'||i=="+"||i=="-"||i=="%"||i=="÷"||i=="x"){
        document.getElementById('numInput').value='';
    }
    document.getElementById('numInput').value+=btnValue.value;  
    document.getElementById('PW').innerHTML+=btnValue.value;
    disableBtn()
    getPW()
}

function deleteData(){
   var delnum= document.getElementById('numInput').value;
   var splitNum = delnum.split('');
   splitNum.pop();
   delnum= splitNum.join('');
    //console.log(delnum);
   document.getElementById('numInput').value=delnum;
   if(delnum==''){
    document.getElementById('numInput').value=0;
   }
}

function allClear(){
    document.getElementById('numInput').value=0;
    document.getElementById('numOutput').value='';
    document.getElementById('conSign').innerHTML='';
    document.getElementById('conNum').innerHTML=0;
    document.getElementById('PW').innerHTML='';
    enableBtn()
}

//selecting operator------
function getOperator(operator){
    var x = document.getElementById('conSign').innerHTML;
    var y = operator.value;
    if(x!=""){

        calculate(x);
        console.log('calculated')
    }
    getcontainerNum();

    document.getElementById('conSign').innerHTML=y;
    document.getElementById('numInput').value=y
}

//calculate----------
function getAns(){
    var operator = document.getElementById('conSign').innerHTML;
    console.log(operator);
    if(operator!=''){
        calculate();
        document.getElementById('conSign').innerHTML='';
    }
}

function calculate(operator){  
    var conSign = document.getElementById('conSign').innerHTML;
    var num1 = parseFloat(document.getElementById('conNum').innerHTML);
    var num2 = parseFloat(document.getElementById('numInput').value);
    var ansr;
    if (isNaN(num2)){num2=0}
    //switch case--------
    switch(conSign){
        case '+':ansr=num1+num2;break;
        case '-':ansr=num1-num2;break;
        case 'x':ansr=num1*num2;break;
        case '÷':ansr=num1/num2;break;
        case '%':ansr=num1%num2;break;
    }
    if(isNaN(ansr)){ansr=0;}
    console.log(num1,conSign,num2,'=',ansr);
    //if else loop--------
    if(ansr!=0){
        document.getElementById('numOutput').value=(num1+conSign+num2+'='+ansr)
    }else{
        document.getElementById('numOutput').value='0';
    }
    document.getElementById('numInput').value=ansr;
    document.getElementById('conNum').innerHTML=ansr;
}

function getcontainerNum(){
    var num = document.getElementById('numInput').value;
    console.log(num)
    document.getElementById('conNum').innerHTML=num;
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
    }
}







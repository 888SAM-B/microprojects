function fun(){
    var name=document.getElementById('name').value;
    var age=document.getElementById('age').value;
    var military=document.getElementById('military').checked;
    var militaryno=document.getElementById('no').checked;
    var height=document.getElementById('height').value;
    var weight=document.getElementById('weight').value;
    var highjump=document.getElementById('hj').value;
    var longjump=document.getElementById('lj').value;
    var running=document.getElementById('run').value;
    var climbing=document.getElementById('climb').value;
    var reason=[7];
    var i=0;
    
    // // BMI calculation starts
    bmical=()=>{
    var BMI = Number(weight)/((Number(height)/100)**2);
    if(Number(height)<=169){
        reason[i]="Your height is low";
        document.getElementById('bmitick').style.backgroundImage="url(./images/wrong.jpg)";
        i+=1;
        return false;
    }
    else{
    if(BMI>=18.5 && BMI<=25)
        return true;
    else if(BMI<18.5){
        reason[i]="Under Weight";
        document.getElementById('bmitick').style.backgroundImage="url(./images/wrong.jpg)";
        i+=1;
        return false;
        //under weight
    }
    else{
        reason[i]="Over Weight";
        document.getElementById('bmitick').style.backgroundImage="url(./images/wrong.jpg)";
        i+=1;
        return false;
        //over weight
    }
}
    }
    // // BMI calculation Ends

    // Age claculation starts 
    function agecal(){    
    if((age>=18 && age<=29) || ((military==true)&&(age>=18 && age<=45)))
        return true;
    else if(age<18){
        reason[i]="Your age is below 18";
        document.getElementById('agetick').style.backgroundImage="url(./images/wrong.jpg)";
        i+=1;
        return false;
    }
    else if(((military==true) && (age>45))||(military==false)&&age>29){
        reason[i]="Your age is High";
        document.getElementById('agetick').style.backgroundImage="url(./images/wrong.jpg)";
        i+=1;
        return false;
    }
}
    // // Age claculation ends
        
    // // Points Calculation Starts
    function points(){
        if(highjump>=3 && longjump>=3 && running>=3 && climbing>=3)
            return true;
        else{
            if(highjump<3){
                document.getElementById('hjtick').style.backgroundImage="url(./images/wrong.jpg)";
                reason[i]="Your High jump score is less than 3";
                i+=1;
            }
            if(longjump<3){
                document.getElementById('ljtick').style.backgroundImage="url(./images/wrong.jpg)";
                reason[i]="Your Long jump score is less than 3";
                i+=1;
            }
            if(running<3){
                document.getElementById('runtick').style.backgroundImage="url(./images/wrong.jpg)";
                reason[i]="Your Running score is less than 3";
                i+=1;
            }
            if(climbing<3){
                reason[i]="Your Climbing  score is less than 3";
                document.getElementById('climbtick').style.backgroundImage="url(./images/wrong.jpg)";
                i+=1;
            }
            return false;
        }
    }
    // // Points Calculation ends

    // // MAIN FUNCTION STARTS
    if(name=='' || age=='' || height=='' || weight=='' || highjump=='' || longjump=='' || running=='' || climbing=='' || (military==false &&militaryno==false)){
        alert("Please fill all the required ( * ) fields");
    }
    else if(highjump>5 || highjump<0 || longjump>5 ||longjump<0 || running>5 || running<0 || climbing>5 ||climbing<0 ){
        alert("The score should be between 0 and 5 ");
    }
    else{
    document.getElementById('forms').style.display="none";
    document.getElementById('all').style.display="flex";
    document.getElementById('every').style.display="block";
    document.getElementById('agetick').style.animationName="load"
    document.getElementById('bmitick').style.animationName="load"
    document.getElementById('hjtick').style.animationName="load"
    document.getElementById('ljtick').style.animationName="load"
    document.getElementById('runtick').style.animationName="load"
    document.getElementById('climbtick').style.animationName="load"

    const ul=document.getElementById('rsn');
    if(bmical() && agecal() && points()){
        document.getElementById('res').innerHTML="CONGRADULATION "+name+" YOU ARE FIT FOR POLICE SELECTION"
    }
    else{
        document.getElementById('res').innerHTML="SORRY "+name+" YOU ARE UNFIT FOR POLICE SELECTION BETTER LUCK NEXT TIME";
            i=0; 
            agecal();
            bmical();
            points();
            for(i=0;i<reason.length;i++){
                c2 = document.createElement("li");
                c2.innerHTML=reason[i];
                ul.appendChild(c2);
            }
    }
}
    // //MAIN FUNCTION ENDS        
}

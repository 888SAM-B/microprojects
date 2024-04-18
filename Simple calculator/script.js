
        function add(value){
            document.getElementById("display").value+=value;
        }
        function clr(){
            document.getElementById("display").value=""
        }
        function cal(){
            var exp=document.getElementById("display").value;
            var res;
            try {
                res=eval(exp);
                document.getElementById("display").value=res;
            } catch (error) {
                document.getElementById("display").value="Error";
            }
        }
        function cls(){
            var a1=document.getElementById("display").value;
            a1=a1.slice(0,-1);
            document.getElementById("display").value=a1
        }
        function sign(){
            var a1=document.getElementById("display").value;
            a1='-'+a1;
            document.getElementById("display").value=a1
        }
        document.addEventListener("keydown",(event)=>{
           cod=event.code;
           cod=cod.slice(0,6);
            if(event.shiftKey==true)
                add(event.key)
            else if(event.key=="Enter")
                cal();
            else if(event.key=="Backspace")
                cls();
            else if(event.key=="Delete")
                clr();
            else if((event.which>=48 && event.which<=57))
                add(event.which);
            else if (cod=='Numpad')
                add(event.key);
        })
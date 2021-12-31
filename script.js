var fname= document.getElementById("fname");
var lname= document.getElementById("lname");
var mail=document.getElementById("mail");
var subj=document.getElementById("subj");
var mssg=document.getElementById("mssg");
var btn=document.querySelector("#btn");
var pop=document.querySelector("#popup");
var isfnamevalid = -1;
var islnamevalid =-1;
var issubjvalid =-1;
var isemailvalid=-1;
 var ismssgvalid=-1;
        fname.addEventListener("blur",function()
        {
            var exp=/^[a-zA-Z0-9._-]+@[a-z0-9]+\.[a-z]{2,4}$/;
                if(fname.value ==="")
                {
                    fname.style.border = "2px solid red";
                    
                }
                else if(fname.value !="")
                {
                    fname.style.border = "2px solid green";
                    isfnamevalid=1;
                   
                }
            });
            lname.addEventListener("blur",function()
            {
            
               if(lname.value ==="")
                {
                        lname.style.border = "2px solid red";
                }
               else if(lname.value !="")
                {
                       lname.style.border = "2px solid green";
                       islnamevalid=1;
                }
            });
            mail.addEventListener("blur",function(){
                let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
                if(!regex.test(mail.value))
                {
                   mail.style.border="2px solid red";
                }
                else{
                    mail.style.border = "2px solid green";
                    isemailvalid=1;
                }
            });
            subj.addEventListener("blur",function(){
                if(subj.value==="")
                {
                    subj.style.border="2px solid red"; 
                }
                else{
                    subj.style.border="2px solid green"; 
                    issubjvalid=1;
                }
            });
            mssg.addEventListener("blur",function(){
                if(mssg.value==="")
                {
                    mssg.style.border="2px solid red"; 
                }
                else{
                    mssg.style.border="2px solid green"; 
                    ismssgvalid=1;
                }
            });
            btn.addEventListener("click",function()
            {
                if(ismssgvalid == 1 && islnamevalid==1 && isfnamevalid==1 && issubjvalid==1 && isemailvalid==1)
                {
                    pop.style.display="block";
                    document.querySelector("#mssgbox").innerHTML= fname.value + " " + lname.value + " : " + subj.value + " <br>" + "Email : " +mail.value +"<br>" + mssg.value + ".";
                }
                else {
                    pop.style.display="block";
                    document.querySelector("#mssgbox").innerHTML= "Something Went Wrong <br> Try Again.";
                }
               
            })
            document.querySelector("#popdown").addEventListener("click",function(){
                pop.style.display="none";
            });


            var clo=document.getElementById("close");
      var menu=document.getElementById("menu");
            clo.addEventListener("click",function(){
                menu.style.display="block";
                document.querySelector(".list").style.display="none";
            });
            var menu=document.getElementById("menu");
            menu.addEventListener("click",function(){
                menu.style.display="none";
                document.querySelector(".list").style.display="flex";
            });
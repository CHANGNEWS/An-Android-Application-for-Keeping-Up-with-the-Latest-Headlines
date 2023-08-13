
function create(){
    let n=Number(document.getElementById("mark").value);
    if((n=="")||(n>=12))
    {
        document.getElementById("mark").style.borderColor="red";
        document.getElementById("mark").value=" ";
        document.getElementById("error").innerHTML="pls enter value below 12 ";
        document.getElementById("error").style.color="red";
        document.getElementById("mark").hidden=false;
       document.getElementById("bt").hidden=false;
    }
    else
    {
        document.getElementById("error").innerHTML=" ";
        

    let b=["a","b","c","d","e","f","g","h","i","j","k","l"];
    let d=["m","n","o","p","q","r","s","t","u","v","w","x"];
    let a=[];
    for(var i=0;i<n;i++)
    {
    
     a.push(i);
    }
    let c=[];
    for( i=0;i<n;i++)
    {
        let m=prompt("Enter subject " +a[i]+" Name");
        c.push(m);
        console.log(c.length)
        
    }
    for( i=0;i<n;i++)
    {
       var x= document.createElement("INPUT");
       var y= document.createElement("BR");
       x.setAttribute("type","number");
       x.setAttribute("placeholder","Enter your Grade Point in " +c[i]+" ");
       x.setAttribute("class","credit");
       x.setAttribute("id",""+d[i]+"");
         
       var x1= document.createElement("INPUT");
       var y1= document.createElement("BR");
       x1.setAttribute("type","number");
       x1.setAttribute("placeholder","Enter credits for subjct " +c[i]+" ");
       x1.setAttribute("class","credit");
       x1.setAttribute("id",""+b[i]+"");
       
       document.getElementById("marks").appendChild(x);
       document.getElementById("marks").appendChild(y);
       document.getElementById("marks").appendChild(x1);
       document.getElementById("marks").appendChild(y1);
       document.getElementById("mark").hidden=true;
       document.getElementById("bt").hidden=true;
    }
}
   }

function calculate(){
    let p=prompt("How many subjects are you had?")
    let b=["a","b","c","d","e","f","g","h","i","j","k","l"];
    let d=["m","n","o","p","q","r","s","t","u","v","w","x"];
    let cp=[]
    let cs=[]
    let sum=0;
    let i=0;
    let j=0;
    let cred=0
    
    console.log(b[i])
    for(let i=0;i<p;i++)
    {
        if(Number(document.getElementById(""+b[i]+"").value)>5)
    {
        alert("pls Enter correct creit value");
        document.getElementById(""+b[i]+"").value="";
        document.getElementById("arun").innerHTML="Reenter the value for credit point";
    }
    if(Number(document.getElementById(""+d[i]+"").value)>10)
       {
           alert("please enter valid point");
           document.getElementById(""+d[i]+"").value="";
       }

       let c=Number(document.getElementById(""+d[i]+"").value)
       let p=Number(document.getElementById(""+b[i]+"").value)
        cp.push(c)
        cs.push(p)
        console.log(c)
    console.log(p)
    }

    for(j=0;j<p;j++)
    {
        sum+=cp[j]*cs[j];
        cred+=cs[j];
    }
    sum/=cred;
    console.log(sum);
    console.log(cred)
    var x=document.createElement("p")
    x.setAttribute("id","arun")
    document.getElementById("markss").appendChild(x);
    document.getElementById("arun").innerHTML="The value of your CGPA is "+sum.toFixed(2);
    document.getElementById("kumar").innerHTML="  ";
  
    }
    function calc(){
        let p=prompt("How many subjects are you had?")
    let b=["a","b","c","d","e","f","g","h","i","j","k","l"];
    let d=["m","n","o","p","q","r","s","t","u","v","w","x"];
    let cp=[]
    let cs=[]
    let sum=0;
    let i=0;
    let j=0;
    let cred=0
    
    console.log(b[i])
    for(let i=0;i<p;i++)
    {
        if(Number(document.getElementById(""+b[i]+"").value)>5)
    {
        alert("pls Enter correct creit value");
        document.getElementById(""+b[i]+"").value="";
        document.getElementById("kumar").innerHTML="Reenter the value for credit point";
    }
       let c=Number(document.getElementById(""+d[i]+"").value)
       let p=Number(document.getElementById(""+b[i]+"").value)
        cp.push(c)
        cs.push(p)
        console.log(c)
    console.log(p)
    }

    for(j=0;j<p;j++)
    {
        sum+=cp[j]*cs[j];
        cred+=cs[j];
    }
    sum/=cred;
    let percent=sum*10;
    console.log(sum);
    console.log(cred)
    var x=document.createElement("p")
    x.setAttribute("id","kumar")
    document.getElementById("markss").appendChild(x);
    document.getElementById("arun").innerHTML="  ";
    document.getElementById("kumar").innerHTML="You got "+percent.toFixed(1)+" percentage";
       
    }
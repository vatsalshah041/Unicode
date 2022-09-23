var b=0;
function change()

{
    //console.log(b);
    
    var a=document.getElementById('boast');
    if(a.checked==true && b==0)
    {
        //console.log('hi');
        document.getElementById("b1").style.visibility='visible';
        b=b+1;
    }
    else if(a.checked==true && b!=0)
    {
        //console.log('HI');
        document.getElementById('b1').innerHTML='';
        document.getElementById('b2').style.visibility='visible';
        // document.getElementById('b2').innerHTML='hey';
    }
    else
    {
        document.getElementById('b1').style.visibility='hidden';
        document.getElementById('b2').style.visibility='hidden';
    }
}
function contact()
{
    console.log('hey');
    document.getElementById('con').style.visibility='visible';
}
function check() 
{
    var email1 = document.getElementById('email_addr');
    var email2 = document.getElementById('email_repeat');
            if ( email1.value != email2.value) {
                    alert("The two emails must match!!");
                    return false;
                }
                
}
function check1()
{
    var a=/^[A-Za-z]+$/;
    if(a=='a')
    {
        console.log("true");
    }
}
function check2()
{
    document.getElementById('ty').innerHTML='hii';
    console.log('heyeye');
}

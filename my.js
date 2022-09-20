function change1()
{
    if(document.getElementById('about').checked)
    {
        // console.log('hii');
        document.getElementById('c1').innerHTML='My name is Vatsal Shah studying in DJ Sanghvi college of engineering.I am doing my Computer science engineering and am currently in second year of my studies.Excited to see what’s coming up in engineering.';
        document.getElementById('c1').style.fontSize='20px';
        document.getElementById('c1').style.width='100%';
    }
    else{
        document.getElementById('c1').innerHTML="";
    }
}
function change2()
{
    if(document.getElementById('study').checked)
    {
        // console.log('hii');
        document.getElementById('c2').innerHTML='My name is Vatsal Shah studying in DJ Sanghvi college of engineering.I am doing my Computer science engineering and am currently in second year of my studies.Excited to see what’s coming up in engineering.';
        document.getElementById('c2').style.fontSize='20px';
        document.getElementById('c2').style.width='100%';
    }
    else{
        document.getElementById('c2').innerHTML='';
    }
}
function change3()
{
    if(document.getElementById('hobby').checked)
    {
        // console.log('hii');
        document.getElementById('c3').innerHTML='My name is Vatsal Shah studying in DJ Sanghvi college of engineering.I am doing my Computer science engineering and am currently in second year of my studies.Excited to see what’s coming up in engineering.';
        document.getElementById('c3').style.fontSize='20px';
        document.getElementById('c3').style.width='100%';
    }
    else{
        document.getElementById('c3').innerHTML='';
    }
}
function get()
{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f92fd38c8amsh58b15924f9ce4b3p18bc3djsn4f0e79c8c077',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    console.log('hello');
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api',options)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        var b=document.getElementById('ab');
        for(var a=0;a<228;a++){
            // console.log(data.countries_stat[a].country_name);
            // console.log(data.countries_stat[a].cases);
            var c=document.createElement('div');
            c.innerHTML=data.countries_stat[a].country_name;
            ab.appendChild(c);
        }
        
        
        
        //{country_name: 'USA', cases: '82,649,779', deaths: '1,018,316', region: '', total_recovered: '80,434,925', …}
        //world_total: {total_cases: '509,268,964', new_cases: '204,268', total_deaths: '6,242,509', new_deaths: '630', total_recovered: '461,827,849', …}
    })
    .catch(function(err){
        console.log(err);
    });
}
get();
// fetch('ppl.json')
//   .then(function (res) {

//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     var b=document.getElementById('ab');
//     var a=0;
//     console.log(data.length);
//     for(a=0;a<data.length;a++)
//     {var c=document.createElement('div');
//     //    console.log(data[a].id);
//     //    console.log(data[a].firstName); 
//     c.innerHTML=data[a].firstName;
//     ab.appendChild(c);
//     }
    
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
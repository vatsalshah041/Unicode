var x=prompt('Enter the Number of countries you want to be showed in Table');
function get() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f92fd38c8amsh58b15924f9ce4b3p18bc3djsn4f0e79c8c077',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    //console.log('hello');
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            var b = document.getElementById('ab');
            var c = document.getElementById('c');

            for (var a = 0; a < x; a++) {
                var c = document.getElementById('t');
                var d = `
            <tr >
            <th class="fs-5">${a + 1}</th>
            <td id='tab1'>${data.countries_stat[a].country_name}</td>
            <td id='tab2'>${data.countries_stat[a].cases}</td>
            <td id='tab3'>${data.countries_stat[a].deaths}</td>
            <td id='tab4'>${data.countries_stat[a].total_recovered}</td>
            </tr>
            `
                c.innerHTML += d;

            }




            //{country_name: 'USA', cases: '82,649,779', deaths: '1,018,316', region: '', total_recovered: '80,434,925', …}
            //world_total: {total_cases: '509,268,964', new_cases: '204,268', total_deaths: '6,242,509', new_deaths: '630', total_recovered: '461,827,849', …}
        })
        .catch(function (err) {
            console.log(err);
        });
}
get();
var i = 0;
var ar = new Array();
console.log()
function returnText() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f92fd38c8amsh58b15924f9ce4b3p18bc3djsn4f0e79c8c077',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    //console.log('hello');
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            //console.log(d);
            let input = document.getElementById("userinput").value;
            console.log('hi');
            console.log(input);
            if (input < 1 || input > 228) {
                alert('enter proper number');
            }
            //alert(input)
            else {
                ar[i] = input;
                console.log(input);
                i++;
                console.log(i);
            }
            for (var a = 0; a < i; a++) {
                console.log(ar[a]);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function generate1() {
    var xValues = new Array(ar.length);
    var yValues = new Array(ar.length);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f92fd38c8amsh58b15924f9ce4b3p18bc3djsn4f0e79c8c077',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            for (var a = 0; a < ar.length; a++) {
                console.log(ar[a]);
                xValues[a] = data.countries_stat[ar[a] - 1].country_name;
                var x = ((data.countries_stat[ar[a] - 1].deaths).replace(/,/g, ''));
                yValues[a] = parseInt(x);
            }
            for (var a = 0; a < ar.length; a++) {
                //console.log(ar[a]);
                console.log(xValues[a]);
                console.log(yValues[a]);
            }
            //var barColors = ["red", "green"];
            var barColors = [ "green", "blue", "orange", "brown", "aqua", "yellow", "brown", "grey"];

            new Chart("myChart", {
                type: "bar",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: "Covid"
                    },
                    scales: {
                        beginAtZero: true
                    }
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
function generate() {
    var xValues = new Array(ar.length);
    var yValues = new Array(ar.length);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f92fd38c8amsh58b15924f9ce4b3p18bc3djsn4f0e79c8c077',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            for (var a = 0; a < ar.length; a++) {
                console.log(ar[a]);
                xValues[a] = data.countries_stat[ar[a] - 1].country_name;
                var x = ((data.countries_stat[ar[a] - 1].deaths).replace(/,/g, ''));
                yValues[a] = parseInt(x);
            }
            for (var a = 0; a < ar.length; a++) {
                //console.log(ar[a]);
                console.log(xValues[a]);
                console.log(yValues[a]);
            }
            //var barColors = ["red", "green"];
            var barColors = ["red", "green", "blue", "orange", "brown", "aqua", "yellow", "brown", "grey", "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145"];

            new Chart("myChart1", {
                type: "pie",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "Covid Deaths"
                    }
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });

}
function sort()
{
    console.log('heee');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f92fd38c8amsh58b15924f9ce4b3p18bc3djsn4f0e79c8c077',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            for(var a=0;a<228;a++)
            {
                for(var b=a+1;b<227;b++)
                {
                    if(data.countries_stat[a].country_name>data.countries_stat[b].country_name)
                    {
                        var temp1=data.countries_stat[a].country_name;
                        data.countries_stat[a].country_name=data.countries_stat[b].country_name;
                        data.countries_stat[b].country_name=temp1;
                        var temp2=data.countries_stat[a].cases;
                        data.countries_stat[a].cases=data.countries_stat[b].cases;
                        data.countries_stat[b].cases=temp2;
                        var temp3=data.countries_stat[a].deaths;
                        data.countries_stat[a].deaths=data.countries_stat[b].deaths;
                        data.countries_stat[b].deaths=temp3;
                        var temp4=data.countries_stat[a].total_recovered;
                        data.countries_stat[a].total_recovered=data.countries_stat[b].total_recovered;
                        data.countries_stat[b].total_recovered=temp4;
                    }
                }
            }
            var b = document.getElementById('ab');
            //var c = document.getElementById('c');
            document.getElementById('t').innerHTML='';
                    // document.getElementById('tab1').innerHTML='';
                    // document.getElementById('tab2').innerHTML='';
                    // document.getElementById('tab3').innerHTML='';
                    // document.getElementById('tab4').innerHTML='';
                //     var tb=`
                //     <tr>
                //     <th id='dr' scope="col">#</th>
                //     <th id='dr' scope="col">Country Name <img src="https://w7.pngwing.com/pngs/7/134/png-transparent-drop-down-list-computer-icons-arrow-menu-arrow-cdr-angle-text.png" id="i" onclick="sort();" ></th>
                //     <th id='dr' scope="col">Cases</th>
                //     <th id='dr' scope="col">Deaths</th>
                //     <th id='dr' scope="col">Total Recovery</th>
                // </tr>
                //     `
                //     t.innerHTML=tb;
            for (var a = 0; a < x; a++) {
                var c = document.getElementById('t');
                var d = `
            <tr>
            <th class="fs-5">${a + 1}</th>
            <td>${data.countries_stat[a].country_name}</td>
            <td>${data.countries_stat[a].cases}</td>
            <td>${data.countries_stat[a].deaths}</td>
            <td>${data.countries_stat[a].total_recovered}</td>
            </tr>
            `
                c.innerHTML += d;

            }


        })
        .catch(function (err) {
            console.log(err);
        });
}
function sort2()
{
    console.log('heee');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f92fd38c8amsh58b15924f9ce4b3p18bc3djsn4f0e79c8c077',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            for(var a=0;a<228;a++)
            {
                for(var b=a+1;b<228;b++)
                {
                    var cs1,cs2;
                    var e1=((data.countries_stat[a].deaths).replace(/,/g, ''));
                    var e2=((data.countries_stat[b].deaths).replace(/,/g, ''));
                    cs1= parseInt(e1);
                    cs2=parseInt(e2);
                    if(cs1>cs2)
                    {
                        var temp1=data.countries_stat[a].country_name;
                        data.countries_stat[a].country_name=data.countries_stat[b].country_name;
                        data.countries_stat[b].country_name=temp1;
                        var temp2=data.countries_stat[a].cases;
                        data.countries_stat[a].cases=data.countries_stat[b].cases;
                        data.countries_stat[b].cases=temp2;
                        var temp3=data.countries_stat[a].deaths;
                        data.countries_stat[a].deaths=data.countries_stat[b].deaths;
                        data.countries_stat[b].deaths=temp3;
                        var temp4=data.countries_stat[a].total_recovered;
                        data.countries_stat[a].total_recovered=data.countries_stat[b].total_recovered;
                        data.countries_stat[b].total_recovered=temp4;
                    }
                }
            }
            var b = document.getElementById('ab');
            //var c = document.getElementById('c');
            document.getElementById('t').innerHTML='';
                    // document.getElementById('tab1').innerHTML='';
                    // document.getElementById('tab2').innerHTML='';
                    // document.getElementById('tab3').innerHTML='';
                    // document.getElementById('tab4').innerHTML='';
                //     var tb=`
                //     <tr>
                //     <th id='dr' scope="col">#</th>
                //     <th id='dr' scope="col">Country Name <img src="https://w7.pngwing.com/pngs/7/134/png-transparent-drop-down-list-computer-icons-arrow-menu-arrow-cdr-angle-text.png" id="i" onclick="sort();" ></th>
                //     <th id='dr' scope="col">Cases</th>
                //     <th id='dr' scope="col">Deaths</th>
                //     <th id='dr' scope="col">Total Recovery</th>
                // </tr>
                //     `
                //     t.innerHTML=tb;
                var a1=227;
            for (var a = 0; a < x; a++) {
                var c = document.getElementById('t');
                var d = `
            <tr>
            <th class="fs-5">${a + 1}</th>
            <td>${data.countries_stat[a1].country_name}</td>
            <td>${data.countries_stat[a1].cases}</td>
            <td>${data.countries_stat[a1].deaths}</td>
            <td>${data.countries_stat[a1].total_recovered}</td>
            </tr>
            `
                c.innerHTML += d;
                a1--;

            }


        })
        .catch(function (err) {
            console.log(err);
        });
}


//Page loader functionality================================================================
document.onreadystatechange = function() {
    var state = document.readyState();

    if (state == 'interactive') {
        document.getElementById('contain').style.visibility = "hidden";

    } else if (state == 'complete') {
        setTimeout(function() {
            document.getElementById('interactive');
            document.getElementById('loader').style.visibility = "hidden";
            document.getElementById('contain').style.visibility = "visible";
        }, 2000);
    }
}


//Get data from API======================================================================
const numFormat = new Intl.NumberFormat('en-EN', { maximumFractionDigits: 0 });

var host = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};

let request = new Request("https://hpb.health.gov.lk/api/get-current-statistical", host);

fetch(request)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        //local_new_cases
        var localNewCases = data.data.local_new_cases;
        document.getElementById('1').innerHTML = numFormat.format(localNewCases);

        //local_active_cases
        var localActiveCases = data.data.local_active_cases;
        document.getElementById('2').innerHTML = numFormat.format(localActiveCases);

        //local_total_cases
        var localTotalCases = data.data.local_total_cases;
        document.getElementById('3').innerHTML = numFormat.format(localTotalCases);

        //local_deaths
        var localDeaths = data.data.local_deaths;
        document.getElementById('4').innerHTML = numFormat.format(localDeaths);

        //local_recovered
        var localRecovered = data.data.local_recovered;
        document.getElementById('5').innerHTML = numFormat.format(localRecovered);

        //global_new_cases
        var globalNewCases = data.data.global_new_cases;
        document.getElementById('6').innerHTML = numFormat.format(globalNewCases);

        //global_total_cases .replace(/,/g, '')
        var globalTotalCases = data.data.global_total_cases;
        document.getElementById('7').innerHTML = numFormat.format(globalTotalCases);

        //global_deaths
        var globalDeaths = data.data.global_deaths;
        document.getElementById('8').innerHTML = numFormat.format(globalDeaths);

        //global_recovered
        var globalRecovered = data.data.global_recovered;
        document.getElementById('9').innerHTML = numFormat.format(globalRecovered);

        //update_date_time
        var updateDateTime = data.data.update_date_time;
        document.getElementById('date&time').innerHTML = updateDateTime;

    });
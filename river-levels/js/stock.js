async function GetData() {
    var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660,07055680,07055780&period=P7D&parameterCd=00065&siteStatus=active";
    var msgObject = await fetch(myURL);
    var msgJSONText = await msgObject.text();
    var msg = JSON.parse(msgJSONText);  
            /* Site 1 */
            var dates = [];
            var values = [];
            /* fLen contains the length of the array (number of values) */
            fLen = msg.value.timeSeries[0].values[0].value.length
            for (i = 0; i < fLen; i++) {
                values[i] = msg.value.timeSeries[0].values[0].value[i].value
                dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime
            }
            var sitename = msg.value.timeSeries[0].sourceInfo.siteName
            var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value
            var siteDescription = msg.value.timeSeries[0].variable.variableDescription
          
        


var ctx0 = document.getElementById("chartjs-0");
var myChart = new Chart(ctx0, {
"type":"line",
"data": {
    "labels": dates, 
    "datasets":[{"dates":"values",
    "data": values,
    "fill":false,
    "borderColor":"rgb(75, 192, 192)",
    "lineTension":0.1}]},
    "options":{ 
        responsive: false,
        maintainAspectRatio: true,
    }
});
}
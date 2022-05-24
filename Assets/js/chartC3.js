       //menu js teste
$(document).ready(function(){
    
    var chart = c3.generate({
        data: {
            columns: [
                ['score', 0]
            ],
            type: 'gauge',
            // onclick: function (d, i) { console.log("onclick", d, i); },
            // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            // onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        gauge: {
                label: {
                    format: function(value, ratio) {
                        return value;
                    },
                    show: true // to turn off the min/max labels.
                },
                min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                max: 1000, // 100 is default
                units: 'de 1000',
                width: 25 // for adjusting arc thickness
        },
        color: {
            pattern: ['#FB0404', '#F9C408', '#00dd05', '#1AA0E1'], // the three color levels for the percentage values.
            threshold: {
               unit: 'value', // percentage is default
               max: 1000, // 100 is default
                values: [200, 700, 800, 1000]
            }
        },
        size: {
            height: 150
        }
    });
    setTimeout(function () {
        chart.load({
            columns: [['score', 200]]
        });
    }, 300);

    setTimeout(function () {
        chart.load({
            columns: [['score', 700]]
        });
    }, 500);
    setTimeout(function () {
        chart.load({
            columns: [['score', 800]]
        });
    }, 700);
    
    setTimeout(function () {
        chart.load({
            columns: [['score', 1000]]
        });
    }, 900);

    setTimeout(function () {
        chart.load({
            columns: [['score', scoreResume]]
        });
    }, 1200);

    var scoreResume = 835
    
    
   
})
       
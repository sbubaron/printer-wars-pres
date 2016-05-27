var jobTypeChart = c3.generate({
    bindto: '#chart--job-types',
    size:{
      height: 700
    },
    padding: {
        top: 40,
        right: 100,
        bottom: 40,
        left: 100,
    },

    data: {
        columns: [

            ["PDF", 473321],
            ["Web", 308095],
            ["Word", 277686],
            ["PPT", 80306],

            ["Other", 73974]
            //["Google Doc", 26467],
            //["Images", 21490],
            //["Excel", 9480],
            //["Text", 2374],
            //["Office", 5442],
            //["Code", 333],
            //["Other", 8388]
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    legend: {
        show: false,
        position: 'right'
    },
    donut: {
       label: {
           format: function (value, ratio, id) {
               return id + " " + d3.format(',')(value);
           },
        },

   }
});

/*
setTimeout(function () {
    chart.load({
        columns: [
            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        ]
    });
}, 1500);*/

function loadFall() {

        jobTypeChart.unload(true);

        jobTypeChart.load({
            columns: [

              ["PDF", 473321],
              ["Web", 308095],
              ["Word", 277686],
              ["PPT", 80306],

              ["Other", 73974]
              //["Google Doc", 26467],
              //["Images", 21490],
              //["Excel", 9480],
              //["Text", 2374],
              //["Office", 5442],
              //["Code", 333],
              //["Other", 8388]
            ]
        });

};

function loadSpring() {

        jobTypeChart.unload(true);

        jobTypeChart.load({
            columns: [

                ["PDF", 346255],
                ["Web", 358695],
                ["Word", 276244],
                ["PPT", 93791],
                ["Other", 75354]
                //["Google Doc", 26686],
                //["Images", 21337],
                //["Excel", 8730],
                //["Text", 2631],
                //["Office", 5817],
                //["Code", 1007],
                //["Other", 9146]
            ]
        });

};

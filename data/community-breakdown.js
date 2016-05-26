
var chart = c3.generate({

    bindto: '#chart--community-breakdown',
    size:{
      height: 300
    },
    padding: {
        top: 40,
        right: 80,
        bottom: 40,
        left: 100,
    },

    tooltip: {
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {


        var sum = 0;
        d.forEach(function (e) {
            sum += e.value
        })
        defaultTitleFormat = function () {
            return "Total: " + sum;
        };
        return c3.chart.internal.fn.getTooltipContent.apply(this, arguments);
    }

  },

    data: {
         x: 'x',

        columns: [
            ['x', 'Fall 2015', 'Spring 2016'],
            //['Commuter Students', 16915, 13860],
            ['Commuter Non-Users', 5846, 7266],
            ['Commuter Users', 11069, 6594],

            ['Residential Non-Users', 238, 283],
            ['Residential Users', 9526, 9701],

        //    ['Faculty Non-Users', 2319, 2167],
        //    ['Faculty Users', 403, 307]

        ],
        type: 'bar',
        groups: [
            //['Commuter Students', 'Residential Students', 'Faculty'],
            //['Commuter Users', 'Residential Users', 'Faculty Users']
            ['Commuter Non-Users', 'Commuter Users'],
            ['Residential Non-Users', 'Residential Users'],
        //    ['Faculty Non-Users', 'Faculty Users'],
        ]
    },
    color: {
        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
    },
    axis: {
        x: {
            type: 'category'
        }
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});

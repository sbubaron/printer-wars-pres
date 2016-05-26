
var chart = c3.generate({

    bindto: '#chart--number-printers',
    size: {
        width: 1500,
        height: 700
    },
    padding: {
        top: 40,
        right: 100,
        bottom: 60,
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
            ['x', '2011', '2012', '2013', '2014', '2015', '2016'],
            ['Printers',40, 43, 61, 76, 76, 79]
        ],
        axes: {

        },
        types: {

        },

        type: 'line',

    },

    grid: {
       x: {
           show: true
       },
       y: {
          show: true
       }
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

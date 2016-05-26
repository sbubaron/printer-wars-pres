
var singleDoublePrintingChart = c3.generate({

    bindto: '#chart--single-double',
    size:{
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
            ['x', 'Fall 2011', 'Spring 2012', 'Fall 2012', 'Spring 2013', 'Fall 2013', 'Spring 2014', 'Fall 2014', 'Spring 2015', 'Fall 2015', 'Spring 2016'],
            ['Single', 667341, 607473, 744964, 747618, 785438, 665866, 676165, 552642, 584637, 543697],
            ['Double', 430896, 492271, 488190, 618501, 671168, 683215, 643919, 613623, 594190, 578963]



        ],
        axes: {

        },
        types: {

        },

        type: 'bar',
        groups: [
            ['Large', 'XL', 'XXL']
        ]
    },

    subchart: {
        show: true,
        padding: {
            top: 40,
            right: 100,
            bottom: 40,
            left: 100,
        },
    },

    color: {
        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
    },
    axis: {
        x: {
            type: 'category'
        },
        y: {
          tick: {
                format: d3.format(",")
//              format: function (d) { return (d / 1000000) + ""; }
          }
        }

    }
});

var usage2015 = c3.generate({

    bindto: '#chart--2015-usage-breakdown',
    size:{
      height: 600
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
            ['x', 'Used None', '$94.50 - $105.00', '$84.00 - $94.50', '$73.50 - $84.00', '$63.00 - $73.50', '$52.50 - $63.00', '$42.00 - $52.50', '$31.50 - $42.00', '$21.00 - $31.50', '$10.50 - $21.00', '$0.01 - $10.50', 'Used All'],



            ['Students', 5923, 5343, 5551, 3202, 1914, 1229, 816, 503, 312, 208, 220, 73]

        ],
        type: 'bar'
    },
    color: {
        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
    },
    axis: {
        x: {
            type: 'category'
        }
    }
});

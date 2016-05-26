
var chart = c3.generate({

    bindto: '#chart--enrollment-transactions',
    size: {
        width: 1500,
        height: 700
    },
    padding: {
        top: 40,
        right: 100,
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
            ['x', 'Fall 2011', 'Spring 2012', 'Fall 2012', 'Spring 2013', 'Fall 2013', 'Spring 2014', 'Fall 2014', 'Spring 2015', 'Fall 2015', 'Spring 2016'],
            ['Students', 24197, 22530, 24933, 22862, 25440, 22930, 26431, 23535, 26679, 23845],
            ['Transactions', 1098237, 1099744, 1233154, 1366119, 1456606, 1349081, 1320084, 1166265, 1178827, 1122660],
            ['Pages', 7980174, 8186817, 9941178, 12101467, 12888408, 12152598, 10172953, 9254708, 9578678, 9600917],
            ['Sheets', 5713545, 5614875, 7052105, 8185233, 8733129, 7976734, 6834950, 6069800, 6375199, 6324543]

        ],
        axes: {
            Students: 'y',
            Transactions: 'y2',
            Pages: 'y2',
            Sheets: 'y2'
        },
        types: {
            Transactions: 'line',
            Pages: 'line',
            Sheets: 'line'
        },
        type: 'bar',
        groups: [

        ]
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
        },
        y2: {
            show: true
        }
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});

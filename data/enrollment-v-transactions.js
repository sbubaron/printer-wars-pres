
var enrollment = c3.generate({

    bindto: d3.select('#chart--enrollment-transactions'),
    //bindto: '#chart--enrollment-transactions',
    size:{
      height: 400
    },
    padding: {
        top: 40,
        right: 100,
        bottom: 40,
        left: 60,
    },

    data: {
         x: 'x',

        columns: [
            ['x', 'F 11', 'S 12', 'Fall 2012', 'Spring 2013', 'Fall 2013', 'Spring 2014', 'Fall 2014', 'Spring 2015', 'Fall 2015', 'Spring 2016'],
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
            show: false
        },
        y: {
            show: false
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
            show: true,
            //label: 'Transactions in Millions',
            tick: {
//                format: d3.format("$,")
                format: function (d) { return (d / 1000000) + "M"; }
            }
        }
    }
});

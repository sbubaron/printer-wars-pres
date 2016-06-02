
loadHighLevel();


function loadGraduate() {

    var standingBreakdownChart = c3.generate({

        bindto: '#chart--standing-breakdown',
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
                ['x', 'G0', 'G1', 'G2', 'G3', 'G4', 'G5'],


                ['Non-Users',308, 1174, 680, 54, 306, 547],
                ['Users',375, 1323, 925, 244, 914, 537],
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
}

function loadUndergraduate() {

    var standingBreakdownChart = c3.generate({

        bindto: '#chart--standing-breakdown',
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
                ['x', 'U0', 'U1', 'U2', 'U3', 'U4'],

                ['Users',1956, 2388, 3399, 3739, 5815],
                ['Non-Users',177, 217, 277, 516, 590]
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
}

function loadHighLevel() {

    var standingBreakdownChart = c3.generate({

        bindto: '#chart--standing-breakdown',
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
                ['x', 'Graduate', 'Undergraduate'],
                //['Commuter Students', 16915, 13860],


    //            ['C1 Users',15],
    //            ['C2 Users',4],
    //            ['C3 Users',29],
    //            ['C4 Users',11],
    //            ['C5 Users',1],
    //            ['C7 Users',1],

                ['Users', 4318, 17297],
                ['Non-Users', 3069, 1777]

                //['Graduate Users', 4318],
                //['Graduate Non-Users', 3069],

                //['Undergraduate Users', 17297],
                //['Undergraduate Non-Users', 1777]



    //            ['NCL Users',20],
    //            ['P1 Users',171],
    //            ['P2 Users',139],
    //            ['P3 Users',91],
    //            ['P4 Users',70],


    //            ['C1 Non-Users',45],
    //            ['C2 Non-Users',13],
    //            ['C3 Non-Users',262],
    //            ['C4 Non-Users',150],
    //            ['C5 Non-Users',7],
    //            ['C7 Non-Users',5],






    //            ['NCL Non-Users',6],
    //            ['P1 Non-Users',7],
    //            ['P2 Non-Users',30],
    //            ['P3 Non-Users',76],
    //            ['P4 Non-Users',98],


            //    ['Faculty Non-Users', 2319, 2167],
            //    ['Faculty Users', 403, 307]

            ],
            type: 'bar',
            groups: [
                //['Commuter Students', 'Residential Students', 'Faculty'],
                //['Commuter Users', 'Residential Users', 'Faculty Users']
    /*
                ['C1 Users', 'C1 Non-Users'],
                ['C2 Users', 'C2 Non-Users'],
                ['C3 Users', 'C3 Non-Users'],
                ['C4 Users', 'C4 Non-Users'],
                ['C5 Users', 'C5 Non-Users'],
                ['C7 Users', 'C7 Non-Users'],
                ['G0 Users', 'G0 Non-Users'],
                ['G1 Users', 'G1 Non-Users'],
                ['G2 Users', 'G2 Non-Users'],
                ['G3 Users', 'G3 Non-Users'],
                ['G4 Users', 'G4 Non-Users'],
                ['G5 Users', 'G5 Non-Users'],
                ['NCL Users', 'NCL Non-Users'],
                ['P1 Users', 'P1 Non-Users'],
                ['P2 Users', 'P2 Non-Users'],
                ['P3 Users', 'P3 Non-Users'],
                ['P4 Users', 'P4 Non-Users'],
                ['U0 Users', 'U0 Non-Users'],
                ['U1 Users', 'U1 Non-Users'],
                ['U2 Users', 'U2 Non-Users'],
                ['U3 Users', 'U3 Non-Users'],
                ['U4 Users', 'U4 Non-Users']
    */

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
};

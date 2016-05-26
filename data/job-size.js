
var jobSizeChart = c3.generate({

    bindto: '#chart--job-size',
    size:{
      height: 500
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
            ['Normal', 735008, 719201, 794429, 835753, 894661, 809589, 851293, 727055, 749971, 699098],

            ['XXS', 226632, 236549, 265678, 311669, 328618, 319942, 291948, 275088, 269444, 259039],

            ['XS', 99236, 105464, 120295, 149669, 158179, 151164, 125846, 118821, 113598, 115887],

            ['Small', 29777, 31102, 40309, 51730, 57911, 51030, 40532, 36204, 35149, 36605],

            ['Medium', 6295, 6195, 9658, 13532, 13401, 13672, 8997, 7713, 7899, 8897],

            ['Large', 1229, 1175, 2339, 3053, 3148, 2986, 1389, 1334, 1943, 2225],

            ['XL', 59, 57, 441, 667, 651, 662, 68, 36, 625, 712],

            ['XXL', 1, 1, 5, 46, 37, 36, 11, 14, 198, 197]



        ],
        axes: {

        },
        types: {

        },

        labels: {
            format: {
               //Normal: d3.format(',')
               Normal: function (v, id, i, j) {

                //   d3.format(",");
               }
           }
         },

        type: 'bar',
        groups: [
            ['Normal', 'XXS', 'XS', 'Small', 'Medium', 'Large', 'XL', 'XXL']
        ]
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

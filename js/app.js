var app = angular.module('AppApexStat', []);


//Morris charts snippet - js

$.getScript('http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js',function(){
$.getScript('http://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.0/morris.min.js',function(){

  Morris.Line({
        element: 'line-example',
        data: [
          {x: '2015-01-01', visits: 203, lids: 21, sales: 11},
          {x: '2015-01-02', visits: 210, lids: 21, sales: 7},
          {x: '2015-01-03', visits: 215, lids: 20, sales: 1},
          {x: '2015-01-04', visits: 223, lids: 22, sales: 2},
          {x: '2015-01-05', visits: 206, lids: 26, sales: 12},
			{x: '2015-01-06', visits: 115, lids: 13, sales: 6},
			{x: '2015-01-07', visits: 92, lids: 8, sales: 2}
        ],
        xkey: 'x',
        ykeys: ['visits','lids','sales'],
        labels: ['Визиты','Заявки','Продажи']
      });


});
});

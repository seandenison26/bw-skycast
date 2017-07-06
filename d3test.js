var d3 = require('d3');

//set dimensions
var margin = {top: 20, right: 20, bottom: 20, left: 20},
        		w= 960,
            		h = 760;
		var data = [ 
				{time: new Date(), count:75.71},	
				{time: new Date(), count:67.71},	
				{time: new Date(), count:89.71},	
				{time: new Date(), count:21.71}	
		
				]
			
		var transform='translate(' + margin.left + ',' + margin.top + ')';
		
		//set range
		var x = d3.scaleTime().domain(d3.extent(data, (d) => d.time)).rangeRound([0, w]);

            	
		var y = d3.scaleLinear().domain(d3.extent(data, (d) => d.count)).rangeRound([h, 0]);	

   	
	
				
		var line = d3.line().x(function(d) { return x(d.time);}).y(function(d) { return y(d.count); });


        	           		
		var xAxis = d3.axisBottom(x).tickFormat(function(d){ return d.x;});
		var yAxis = d3.axisLeft(y);
 
		var yGrid = d3.axisLeft(y)
   			.scale(y)
   			.ticks(5)
   			.tickSize(-w, 0, 0)
   			.tickFormat("");
		

console.log(h);
console.log(y(75.71));
console.log(y(75));


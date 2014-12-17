$(function () {
    var groceryDist, cafeDist,worshipDist,restaurantsDist,eduDist,artsDist,recDist,medDist,
        $filter_listsA = $(".listA"),
        $filter_listsB = $(".listB"),
        $filter_listsC = $(".listC"),
        $filter_checkboxes = $("#community :checkbox"),
        $filter_select = $("#community :input"),
        $itemsA = $("#groceryicons").children();
        $itemsB = $("#cafeicons").children();
        $itemsC = $("#worshipicons").children();
        $itemsD = $("#restaurantsicons").children();
        $itemsE = $("#eduicons").children();
        $itemsF = $("#artsicons").children();
        $itemsG = $("#recicons").children();
        $itemsH = $("#medicons").children();

	
	
	
    $filter_checkboxes.click(filterSystemCommunity); //Call filter function on checkbox change
    $filter_select.change(filterSystemCommunity); //Call filter function on checkbox change


//********GROCERY STORES**********
    $('#grocery-slider-range-min').slider({
        range: false,
        min: 0,
        max: 3,
        step: .5,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#grocery-amount").val("$" + ui.value);
            groceryDist = parseFloat(ui.value);
              $("#grocery-amount").text("$" + ui.value);
             //Call filter function on slider change
        }
        
    });


    //Slider filter
    function filterSliderGrocery(elem) {
        var minDist1 = parseFloat($(elem).data("mindist"), 10);
        var maxDist1 = parseFloat($(elem).data("maxdist"), 10);
		$.each(elem, function (i, elem) {
			totModes = 0;
			if (groceryDist >= minDist1 && groceryDist <= maxDist1) {
			return totModes +=1;}
			
			
		});
        return groceryDist >= minDist1 && groceryDist <= maxDist1;
        console.log(totModes);
        }


//********CAFE'S**********    
    $('#cafe-slider-range-min').slider({
        range: false,
        min: 0,
        max: 3,
        step: .5,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#cafe-amount").val("$" + ui.value);
            cafeDist = parseFloat(ui.value);
              $("#cafe-amount").text("$" + ui.value);
             //Call filter function on slider change
        }
        
    });

    function filterSliderCafe(elem) {
        var minDist1 = parseFloat($(elem).data("mindist"), 10);
        var maxDist1 = parseFloat($(elem).data("maxdist"), 10);
		$.each(elem, function (i, elem) {
			totModes = 0;
			if (cafeDist >= minDist1 && cafeDist <= maxDist1) {
			return totModes +=1;}
			
			
		});
        return cafeDist >= minDist1 && cafeDist <= maxDist1;
        }        

//********WORSHIP********** 		
    $('#worship-slider-range-min').slider({
        range: false,
        min: 0,
        max: 3,
        step: .5,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#worship-amount").val("$" + ui.value);
            worshipDist = parseFloat(ui.value);
              $("#worship-amount").text("$" + ui.value);
             //Call filter function on slider change
        }
        
    });


    //Slider filter
    function filterSliderWorship(elem) {
        var minDist1 = parseFloat($(elem).data("mindist"), 10);
        var maxDist1 = parseFloat($(elem).data("maxdist"), 10);
		$.each(elem, function (i, elem) {
			totModes = 0;
			if (worshipDist >= minDist1 && worshipDist <= maxDist1) {
			return totModes +=1;}
			
			
		});
        return worshipDist >= minDist1 && worshipDist <= maxDist1;
        console.log(totModes);
        }

//********RESTAURANTS********** 		
    $('#restaurants-slider-range-min').slider({
        range: false,
        min: 0,
        max: 3,
        step: .5,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#restaurants-amount").val("$" + ui.value);
            restaurantsDist = parseFloat(ui.value);
              $("#restaurants-amount").text("$" + ui.value);
             //Call filter function on slider change
        }
        
    });


    //Slider filter
    function filterSliderRestaurants(elem) {
        var minDist1 = parseFloat($(elem).data("mindist"), 10);
        var maxDist1 = parseFloat($(elem).data("maxdist"), 10);
		$.each(elem, function (i, elem) {
			totModes = 0;
			if (restaurantsDist >= minDist1 && restaurantsDist <= maxDist1) {
			return totModes +=1;}
			
			
		});
        return restaurantsDist >= minDist1 && restaurantsDist <= maxDist1;
        console.log(totModes);
        }

//********EDUCATION********** 		
    $('#edu-slider-range-min').slider({
        range: false,
        min: 0,
        max: 3,
        step: .5,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#edu-amount").val("$" + ui.value);
            eduDist = parseFloat(ui.value);
              $("#edu-amount").text("$" + ui.value);
             //Call filter function on slider change
        }
        
    });


    //Slider filter
    function filterSliderEdu(elem) {
        var minDist1 = parseFloat($(elem).data("mindist"), 10);
        var maxDist1 = parseFloat($(elem).data("maxdist"), 10);
		$.each(elem, function (i, elem) {
			totModes = 0;
			if (eduDist >= minDist1 && eduDist <= maxDist1) {
			return totModes +=1;}
			
			
		});
        return eduDist >= minDist1 && eduDist <= maxDist1;
        console.log(totModes);
        }
        
//********ARTS & ENTERTAINMENT********** 		
    $('#arts-slider-range-min').slider({
        range: false,
        min: 0,
        max: 3,
        step: .5,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#arts-amount").val("$" + ui.value);
            artsDist = parseFloat(ui.value);
              $("#arts-amount").text("$" + ui.value);
             //Call filter function on slider change
        }
        
    });


    //Slider filter
    function filterSliderArts(elem) {
        var minDist1 = parseFloat($(elem).data("mindist"), 10);
        var maxDist1 = parseFloat($(elem).data("maxdist"), 10);
		$.each(elem, function (i, elem) {
			totModes = 0;
			if (artsDist >= minDist1 && artsDist <= maxDist1) {
			return totModes +=1;}
			
			
		});
        return artsDist >= minDist1 && artsDist <= maxDist1;
        console.log(totModes);
        }
        
//********PARKS & OUTDOOR RECREATION********** 		
    $('#rec-slider-range-min').slider({
        range: false,
        min: 0,
        max: 3,
        step: .5,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#rec-amount").val("$" + ui.value);
            recDist = parseFloat(ui.value);
              $("#rec-amount").text("$" + ui.value);
             //Call filter function on slider change
        }
        
    });


    //Slider filter
    function filterSliderRec(elem) {
        var minDist1 = parseFloat($(elem).data("mindist"), 10);
        var maxDist1 = parseFloat($(elem).data("maxdist"), 10);
		$.each(elem, function (i, elem) {
			totModes = 0;
			if (recDist >= minDist1 && recDist <= maxDist1) {
			return totModes +=1;}
			
			
		});
        return recDist >= minDist1 && recDist <= maxDist1;
        console.log(totModes);
        }    
        
        
//********MEDICAL CARE********** 		
    $('#med-slider-range-min').slider({
        range: false,
        min: 0,
        max: 3,
        step: .5,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#med-amount").val("$" + ui.value);
            medDist = parseFloat(ui.value);
              $("#med-amount").text("$" + ui.value);
             //Call filter function on slider change
        }
        
    });


    //Slider filter
    function filterSliderMed(elem) {
        var minDist1 = parseFloat($(elem).data("mindist"), 10);
        var maxDist1 = parseFloat($(elem).data("maxdist"), 10);
		$.each(elem, function (i, elem) {
			totModes = 0;
			if (medDist >= minDist1 && medDist <= maxDist1) {
			return totModes +=1;}
			
			
		});
        return medDist >= minDist1 && medDist <= maxDist1;
        console.log(totModes);
        }    
                    
    //Checkbox filter 
      function filterCheckboxesC(elem) {
          var $elem = $(elem),
              passAllFilters = true;
          $filter_listsC.each(function () {
              var classes = $(this).find(':checkbox:checked').map(function () {
                  return $(this).val();
              }).get();
              console.log(classes);
               if(classes==null || classes==undefined || classes=='') {
                  var passThisFilter = true;}
              else {
                  var passThisFilter = true;}
             $.each(classes, function (index, item) {
                  if ($elem.hasClass(item)) {
                      passThisFilter = false;
                      return false; //stop inner loop
                  }
              });
              if (!passThisFilter ) {
                  passAllFilters = false;
                  return false; //stop outer loop
              }
          });
          
          return passAllFilters;
      }   
      function filterSystemCommunity() {
         $itemsA.fadeTo(100,.1).removeClass("countMeA").filter(function () {
              return filterSliderGrocery(this)  && filterCheckboxesC(this);
          }).fadeTo(100,.5).addClass("countMeA");
    
	     $itemsB.fadeTo(100,.1).removeClass("countMeB").filter(function () {
              return filterSliderCafe(this)  && filterCheckboxesC(this);
          }).fadeTo(100,.5).addClass("countMeB");

	     $itemsC.fadeTo(100,.1).removeClass("countMeC").filter(function () {
              return filterSliderWorship(this)  && filterCheckboxesC(this);
          }).fadeTo(100,.5).addClass("countMeC");

	     $itemsD.fadeTo(100,.1).removeClass("countMeD").filter(function () {
              return filterSliderRestaurants(this)  && filterCheckboxesC(this);
          }).fadeTo(100,.5).addClass("countMeD");
          
	     $itemsE.fadeTo(100,.1).removeClass("countMeE").filter(function () {
              return filterSliderEdu(this)  && filterCheckboxesC(this);
          }).fadeTo(100,.5).addClass("countMeE");

	     $itemsF.fadeTo(100,.1).removeClass("countMeF").filter(function () {
              return filterSliderArts(this)  && filterCheckboxesC(this);
          }).fadeTo(100,.5).addClass("countMeF");

	     $itemsG.fadeTo(100,.1).removeClass("countMeG").filter(function () {
              return filterSliderRec(this)  && filterCheckboxesC(this);
          }).fadeTo(100,.5).addClass("countMeG");

	     $itemsH.fadeTo(100,.1).removeClass("countMeH").filter(function () {
              return filterSliderMed(this)  && filterCheckboxesC(this);
          }).fadeTo(100,.5).addClass("countMeH");
          
      	  var numItemsWalk = (
      	  	($('div[class*="countMeA"][class~="walk"]').length * $("#groceryfreq").val()) + 
      	    ($('div[class*="countMeB"][class~="walk"]').length * $("#cafefreq").val()) +
      	    ($('div[class*="countMeC"][class~="walk"]').length * $("#worshipfreq").val()) +
      	    ($('div[class*="countMeD"][class~="walk"]').length * $("#restaurantsfreq").val()) +
      	    ($('div[class*="countMeE"][class~="walk"]').length * $("#edufreq").val()) +
      	    ($('div[class*="countMeF"][class~="walk"]').length * $("#artsfreq").val()) +
      	    ($('div[class*="countMeG"][class~="walk"]').length * $("#recfreq").val()) +
      	    ($('div[class*="countMeH"][class~="walk"]').length * $("#medfreq").val())
      	  
      	  );
      	  var numItemsBike = (
      	  	($('div[class*="countMeA"][class~="bike"]').length * $("#groceryfreq").val()) + 
      	    ($('div[class*="countMeB"][class~="bike"]').length * $("#cafefreq").val()) +
      	    ($('div[class*="countMeC"][class~="bike"]').length * $("#worshipfreq").val()) +
      	    ($('div[class*="countMeD"][class~="bike"]').length * $("#restaurantsfreq").val())+
      	    ($('div[class*="countMeE"][class~="bike"]').length * $("#edufreq").val()) +
      	    ($('div[class*="countMeF"][class~="bike"]').length * $("#artsfreq").val()) +
      	    ($('div[class*="countMeG"][class~="bike"]').length * $("#recfreq").val()) +
      	    ($('div[class*="countMeH"][class~="bike"]').length * $("#medfreq").val())
      	  
      	  );
      	  var numItemsTran = (
      	  	($('div[class*="countMeA"][class~="transit"]').length * $("#groceryfreq").val()) + 
      	    ($('div[class*="countMeB"][class~="transit"]').length * $("#cafefreq").val()) +
      	    ($('div[class*="countMeC"][class~="transit"]').length * $("#worshipfreq").val()) +
      	    ($('div[class*="countMeD"][class~="transit"]').length * $("#restaurantsfreq").val())+
      	    ($('div[class*="countMeE"][class~="transit"]').length * $("#edufreq").val()) +
      	    ($('div[class*="countMeF"][class~="transit"]').length * $("#artsfreq").val()) +
      	    ($('div[class*="countMeG"][class~="transit"]').length * $("#recfreq").val()) +
      	    ($('div[class*="countMeH"][class~="transit"]').length * $("#medfreq").val())
      	  
      	  );
		  var numItemsDrive = (
      	  	($('div[class*="countMeA"][class~="drive"]').length * $("#groceryfreq").val()) + 
      	    ($('div[class*="countMeB"][class~="drive"]').length * $("#cafefreq").val()) +
      	    ($('div[class*="countMeC"][class~="drive"]').length * $("#worshipfreq").val()) +
      	    ($('div[class*="countMeD"][class~="drive"]').length * $("#restaurantsfreq").val())+
      	    ($('div[class*="countMeE"][class~="drive"]').length * $("#edufreq").val()) +
      	    ($('div[class*="countMeF"][class~="drive"]').length * $("#artsfreq").val()) +
      	    ($('div[class*="countMeG"][class~="drive"]').length * $("#recfreq").val()) +
      	    ($('div[class*="countMeH"][class~="drive"]').length * $("#medfreq").val())
      	  
      	  );
		  var totalNum = [
		  numItemsWalk,numItemsBike,numItemsDrive,numItemsTran];
		  var totalVal = 0;
			$.each(totalNum,function() {
			    totalVal += this;
			});
      	  console.log(totalNum);
      	  
 
 
 
 
 
 //////////////////////////
 
 
 
 
 
 
      	  
      	  //D3 Begins	
			var data = [{mode: "Walk", books: numItemsWalk},
			{mode: "Bike", books: numItemsBike},
			{mode: "Drive", books: numItemsDrive},
			{mode: "Transit", books: numItemsTran}];
			
			var names = ["Walk", "Bike", "Drive", "Transit"];
	
			var margin = {top: 30, right: 5, bottom: 15, left:25};
			var barWidth = 40;
			var width = 300  - margin.left - margin.right;
			var height = 250 - margin.top - margin.bottom;
			var padding = 20;
			
			var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
			var y = d3.scale.linear().domain([0, d3.max(data, function(datum) { return datum.books; })]).
			  rangeRound([0, height]);
			
			
			x.domain(data.map(function(datum) { return datum.mode; }));
			

  			
			// add the canvas to the DOM
		  
			barDemo.selectAll("rect").
			  data(data).transition().duration(1000).
			  attr("x", function(datum) { return x(datum.mode); }).
			  attr("y", function(datum) { return (height) - y(datum.books); }).
			  attr("height", function(datum) { return y(datum.books); }).
			 attr("width", x.rangeBand()).
			  attr("fill", "#2d578b");	  
      
      		// barDemo.selectAll("text.name")
  			  // .data(names)
			  // .enter().append("text")
			  // .attr("x", function(d){ return x(d) + x.rangeBand()/2; } )
			  // .attr("y", function(datum) { return (height + 10); })
			  // .attr("dy", ".36em")
			  // .attr("text-anchor", "middle")
			  // .attr('class', 'name')
			  // .text(String);
      }
      
      
      
			var data = [{year: 2006, books: 0},
			{year: 2007, books: 0},
			{year: 2008, books: 0},
			{year: 2009, books: 0}];
			var names = ["Walk", "Bike", "Drive", "Transit"];
			var margin = {top: 30, right: 5, bottom: 15, left:25};
			var barWidth = 40;
			var width = 300 - margin.left - margin.right;
			var height = 250 - margin.top - margin.bottom;
			var padding = 20;
			
			var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
			var y = d3.scale.linear().range([height, 0]);
			
			x.domain(names.map(function(datum) { return datum; }));
			
			var xAxis = d3.svg.axis()
                  .scale(x)
                  .orient("bottom");
           
            var yAxis = d3.svg.axis()
                  .scale(y)
                  .orient("left");
			
			// add the canvas to the DOM
			var barDemo = d3.select("#bar-demo").
			  append("svg:svg").
			  attr("width", width + margin.left + margin.right).
			  attr("height", height + margin.top + margin.bottom)
			  .append("g").attr("transform", "translate(" + margin.left + "," + margin.right + ")");
			
			barDemo.append("g").attr("transform", "translate(0," + height + ")").attr("class", "axis")
    		.call(xAxis);
    		
    		barDemo.append("g").attr("class", "axis")
    		.call(yAxis);
    		
			barDemo.selectAll("rect").
			  data(data).
			  enter().
			  append("svg:rect").transition().duration(1000).
			  attr("x", function(datum, index) { return x(index); }).
			  attr("y", function(datum) { return (height + 5) - y(datum.books); }).
			  attr("height", function(datum) { return height - y(datum.books); }).
			  attr("width", x.rangeBand).
			  attr("fill", "#2d578b");	  
      
           	// barDemo.selectAll("text.name")
  			  // .data(names)
			  // .enter().append("text")
			  // .attr("x", function(d){ return x(d) + x.rangeBand()/2; } )
			  // .attr("y", function(datum) { return (height + 10); })
			  // .attr("dy", ".36em")
			  // .attr("text-anchor", "middle")
			  // .attr('class', 'name')
			  // .text(String);

      
  });
  
			
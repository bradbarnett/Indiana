$(function () {

$(window).on('beforeunload', function() {
    $(window).scrollLeft(0);
});

$('#status-introid').css("color", "rgb(233, 218, 80)");

$('.titletext').click(function() {
	 $(window).scrollLeft(0);
	 $("[id^='status']").css("color","whitesmoke");
	 $('#status-introid').css("color", "rgb(233, 218, 80)");

})

$('.nav').click(function() {
	currentPage = this.id;
	console.log(currentPage)
	$("[id^='status']").css("color","whitesmoke");
	$('#status-' + currentPage).css("color", "rgb(233, 218, 80)");

})

$('.house-thumb').hover(
	function(){  
	$(this).next('.perf').fadeIn();
	$(this).next('.perf').position({at: 'left middle', of: $(this), my: 'right top ', collision: 'fit'});
	},
	function(){  
	$('.perf').fadeOut();
	});
  

$("#email-submit").click(function() {
	$(".tips-black").css("display", "none");
	$("#alldone").css("display", "table-cell");
})

    
    var sections = {},
        _width  = $(window).width(),
        i        = 0;
    
    // Grab positions of our sections 
    $('.navsection').each(function(){
        sections[this.name] = $(this).offset().left;
    });


    $(document).scroll(function(){
        var $this = $(this),
            pos   = $this.scrollLeft();
  
        for(i in sections){
            if(sections[i] > pos && sections[i] < pos + _width){
                $('.navsection').removeClass('active');
                $('#nav_' + i).addClass('active');
            }  
        }
    });

if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
else
{
    var versions = ["Microsoft.XmlHttp",
            "MSXML2.XmlHttp",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.5.0"
    ];}

$("input:radio[name=thumbcheck]").change(function() {
    var houseChoice = $(this).val();
    var houseChoiceTitle = $(this).attr('title');
    // var houseChoiceTitle = $(this).attr('description');
    $(".home-choice-title").html("<h2 class='results'>" + houseChoiceTitle + "</h2>");
    // $("#home-choice-img").html("<img src='img/500px/" + houseChoice + "-500px.jpg' width='350px'>");
    // $("#home-choice-img-sm").html("<img src='img/110px/" + houseChoice + "-110px.jpg' width='350px'>");
    $(".clouds-flat-button-sm.house-controls").delay(200).addClass("navyfill", 600).removeClass("navyfill", 600);
    $("#commid:button").removeClass("disabled");



    // $("#home-choice-description").html(houseChoiceDescription);
});

$(".house-thumb").click(function(){
	$(".house-thumb").removeClass("selected");
	var elemMatch = $(this).attr("id");
	console.log(elemMatch);
	// $("div#detailedcontainer").children().hide();
	$("div#"+elemMatch+".perf").show();
	$(this).addClass("selected");	
	// $(".center-text").hide();	
})



$("#sub").click( function() {

console.log($(".selection:button").val());
console.log($("input:radio[name=thumbcheck]:checked").val());
	
var checkboxListHouse = ["garage", "yard", "own", "rent", "walking","biking", "driving", "transit", "ondemand", "taxi", "carshare", "seniorliving", "multigen", "nostep", "onestory", "nonslip",
"widedoor","widehall","extrafloor", "flush", "lighting", "leverdoor", "reachablecontrols", "support", "shower"];
var checkboxListHouseLength = checkboxListHouse.length;
for (i = 0; i < checkboxListHouseLength; i++) {
	if ($("#filter-"+checkboxListHouse[i]).is(":checked")) {
	window["house"+checkboxListHouse[i]] = $("#filter-"+checkboxListHouse[i]).val();	
}
else 
	window["house"+checkboxListHouse[i]] = "";
}	
var checkboxListComm = ["grocery","cafe","worship","restaurants","edu","arts","rec","med"]

var checkboxListCommLength = checkboxListComm.length;
for (i = 0; i < checkboxListCommLength; i++) {
	if ($("#filter-excl" +checkboxListComm[i]).is(":checked")) {
	window["commexcl" +checkboxListComm[i]] = $("#filter-excl"+checkboxListComm[i]).val();	
}
else 
	window["commexcl" +checkboxListComm[i]] = "";
}		

for (i = 0; i < checkboxListCommLength; i++) {
	window["commfreq" +checkboxListComm[i]] = $("#" + checkboxListComm[i] + "freq").val();
}

for (i = 0; i < checkboxListCommLength; i++) {
	window["commdist" +checkboxListComm[i]] = $("#" + checkboxListComm[i] + "-slider-range-min").slider("value");
}

var selectListCurr = ["edu", "work", "medi", "health", "neighborhood", "own", "costs", "move", "bloom", "healthfacilities", "largecity", "family", "airport"];
var selectListCurrLength = selectListCurr.length;
for (i = 0; i < selectListCurrLength; i++) {
	window["curr"+selectListCurr[i]] = $("#curr-"+selectListCurr[i]).val();
}


         $.ajax({
    
            type:"POST",
            url:"userInfo.php",
            crossDomain: true,
            data:"houseSizeMin="+$('#size-slider-container').slider( "values",0 )+
                 "&houseSizeMax="+$('#size-slider-container').slider( "values",1 )+
                 "&houseCostMin="+$('#cost-slider-container').slider( "values",0 )+
                 "&houseCostMax="+$('#cost-slider-container').slider( "values",1 )+
            	 "&housegarage="+housegarage+
            	 "&houseyard="+houseyard+
            	 "&houseown="+houseown+
            	 "&houserent="+houserent+
            	 "&housewalking="+housewalking+
            	 "&housebiking="+housebiking+
            	 "&housetransit="+housetransit+
            	 "&housedriving="+housedriving+
            	 "&houseondemand="+houseondemand+
            	 "&housetaxi="+housetaxi+
            	 "&housecarshare="+housecarshare+
            	 "&housesenior="+houseseniorliving+
            	 "&housemultigen="+housemultigen+
            	 "&housenostep="+housenostep+
            	 "&houseonestory="+houseonestory+
            	 "&housenonslip="+housenonslip+
            	 "&housewidedoor="+housewidedoor+
            	 "&housewidehall="+housewidehall+
            	 "&houseextrafloor="+houseextrafloor+
            	 "&houseflush="+houseflush+
				 "&houselighting="+houselighting+
				 "&houseleverdoor="+houseleverdoor+
				 "&housereachablecontrols="+housereachablecontrols+
				 "&housesupport="+housesupport+
				 "&houseshower="+houseshower+
				 "&commexclgrocery="+commexclgrocery+
				 "&commdistgrocery="+commdistgrocery+ 		
				 "&commfreqgrocery="+commfreqgrocery+	 
				 "&commexclcafe="+commexclcafe+
				 "&commdistcafe="+commdistcafe+ 		
				 "&commfreqcafe="+commfreqcafe+
				 "&commexclworship="+commexclworship+
				 "&commdistworship="+commdistworship+ 		
				 "&commfreqworship="+commfreqworship+
				 "&commexclrestaurants="+commexclrestaurants+
				 "&commdistrestaurants="+commdistrestaurants+ 		
				 "&commfreqrestaurants="+commfreqrestaurants+
				 "&commexcledu="+commexcledu+
				 "&commdistedu="+commdistedu+ 		
				 "&commfreqedu="+commfreqedu+
				 "&commexclarts="+commexclarts+
				 "&commdistarts="+commdistarts+ 		
				 "&commfreqarts="+commfreqarts+
				 "&commexclrec="+commexclrec+
				 "&commdistrec="+commdistrec+ 		
				 "&commfreqrec="+commfreqrec+				 
				 "&commexclmed="+commexclmed+
				 "&commdistmed="+commdistmed+ 		
				 "&commfreqmed="+commfreqmed+
				 "&curredu="+curredu+
				 "&currwork="+currwork+
				 "&currmedi="+currmedi+
				 "&currhealth="+currhealth+
				 "&currneighborhood="+currneighborhood+
				 "&currown="+currown+
				 "&currcosts="+currcosts+
				 "&currmove="+currmove+
				 "&currbloom="+currbloom+
				 "&currhealthfacilities="+currhealthfacilities+
				 "&currlargecity="+currlargecity+
				 "&currfamily="+currfamily+
				 "&currairport="+currairport+
				 "&currage="+$("#currage").val()+
				 "&currgender="+$("#curr-gender").val()+
				 "&currincome="+$("#curr-income").val()+
				 "$currzip="+$("#curr-zip").val()+
				 "&houseType="+$("input:radio[name=thumbcheck]:checked").val()+
				 "&transectChoice="+$(".selection:button").val(),
           success:function(response){
            // alert("ajax sent");
//             
            // console.log(transectChoice);
           } 
    
        });
});


    var currMinSize = 300,
    	currMaxSize = 3000,
    	minPrice = 0,
        maxPrice = 400000,
        minCost = 0,
        maxCost = 5000,
        currPrice = 150000,
        $filter_listsA = $(".listA"),
        $filter_listsB = $(".listB"),
        $filter_checkboxes = $("#house :checkbox"),
        $items = $("#thumbs div.house-thumb"),
        $filter_transectItems = $(".content-house-one");
        $selected_house = $(".choice");
	

	
	// $filter_transectItems.click(filterSystem); //Call filter function on transect selection
	$selected_house.click(function() {
		$filter_transectItems.removeClass("chosen") && $(this).parent().addClass("chosen") && $(this).find(".overlaychoice").addClass("chosen");
		filterSystem();
	});
	
	$filter_transectItems.hover(function() {
		$filter_transectItems.removeClass("chosen") && $(this).children().addClass("chosen") && $(this).find(".overlaychoice").addClass("chosen");
		filterSystem();
	}, 
	function() {
		$filter_transectItems.removeClass("chosen") && $(this).children().removeClass("chosen") && $(this).find(".overlaychoice").removeClass("chosen");
		filterSystem();
	});



    $filter_checkboxes.click(filterSystem); //Call filter function on checkbox change

	$("#size-amount").text( + currMinSize + " - " + currMaxSize + " sq ft");
    $('#size-slider-container').slider({
        range: true,
        min: currMinSize,
        max: currMaxSize,
        values: [currMinSize, currMaxSize],
        step: 100,
        slide: function (event, ui) {
            $("#size-amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            currMinSize = ui.values[0];
            currMaxSize = ui.values[1];
              $("#size-amount").text( + currMinSize + " - " + currMaxSize + " sq ft");
            filterSystem(); //Call filter function on slider change
        }
    });
    


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

	$("#cost-amount").text("$" + numberWithCommas(150000));
    $('#cost-slider-container').slider({
        range: "min",
        min: minPrice,
        max: maxPrice,
        value: 150000,
        step: 10000,
        slide: function (event, ui) {
            $("#cost-amount").val("$" + ui.value);
            currPrice = ui.value;
            currMonthlyPrice = parseInt(ui.value / 201);
              $("#cost-amount").html("$" + numberWithCommas(currPrice) + "<span class='tips-black-sm'>" + " (or about $" + numberWithCommas(currMonthlyPrice) + "/month) </span>");
            filterSystem(); //Call filter function on slider change
        }
    });

    //Slider filter
    function filterSlider(elem) {
        var minSize1 = parseInt($(elem).data("size1"), 10);
        var maxSize2 = parseInt($(elem).data("size2"), 10);
        var minPrice1 = parseInt($(elem).data("price1"), 10);
        var maxPrice2 = parseInt($(elem).data("price2"), 10);
        return currPrice >= minPrice1 &&  currMinSize <= maxSize2 && currMaxSize >= minSize1;
    }
    
// && minPrice <= maxPrice2
    //Checkbox filter 
      function filterCheckboxesA(elem) { 
          var $elem = $(elem),passAllFilters = true;
          
          $filter_listsA.each(function () {	
              var classes = $(this).find(':checkbox:checked').map(function () {
                  return $(this).val();
              }).get();
              // console.log("list a ", classes);

               if(classes==null || classes==undefined || classes=='') {
                  var passThisFilter = true;}
              else {
                  var passThisFilter = false;}
             $.each(classes, function (index, item) {
                  if ($elem.hasClass(item)) {
                      passThisFilter = true;
                      return false; //stop inner loop
                  }
              });
              if (!passThisFilter ) {
                  passAllFilters = false;
                  return false; //stop outer loop
              }
          });
          
         $filter_listsB.each(function () {
              var classes = $(this).find(':checkbox:checked').map(function () {
                  return $(this).val();
              }).get();
              if(classes==null || classes==undefined || classes=='') {
                  var passThisFilter = true;}
              else {
                  var passThisFilter = false;}
              // console.log(passThisFilter);
              $.each(classes, function (index, item) {
                  	if ($elem.hasClass(item)) {
                      passThisFilter = true;
                  	}
                  	else {
                  	  passThisFilter = false;
                  		
                  	}
                  	
              });
              if (!passThisFilter) {
                  passAllFilters = false;
                  return false; //stop outer loop
              }
          });
       
       	 $filter_transectItems.each(function () {
	      var classesT = $(".choice.chosen").map(function () {
	          return $(this).attr("value");
	      }).get();

	      if(classesT==null || classesT==undefined || classesT=='') {
	          var passThisFilter = true;}
	      else {
	          var passThisFilter = false;}
	      // console.log(passThisFilter);
	      $.each(classesT, function (index, item) {
	          	if ($elem.hasClass(item)) {
	              passThisFilter = true;
	              console.log(item);
	          	}
	          	else {
	          	  passThisFilter = false;
	          		
	          	}
	          	
	      });
	      if (!passThisFilter) {
	          passAllFilters = false;
	          return false; //stop outer loop
              }
          });
          
          return passAllFilters;
     
      }   
      
      

          
   
      
      
      
      function filterSystem() {
          $items.css("opacity",'.2').addClass("unclick").removeClass("selected").filter(function () {
              return filterSlider(this) && filterCheckboxesA(this);
          }).css("opacity",'1').removeClass("unclick");
      }



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
        max: 5,
        step: .2,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#grocery-amount").val(ui.value);
            groceryDist = parseFloat(ui.value);
            // setLabelPosition();
            var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + ui.value + '</div><div class="tooltip-arrow"></div></div>';
			var results = ui.value + " mi.";
   			  $('#grocery-slider-range-min .ui-slider-handle').html(tooltip);
   			  $('#grocery-results').html(results);
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
        max: 5,
        step: .2,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#cafe-amount").val("$" + ui.value);
            cafeDist = parseFloat(ui.value);
         	var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + ui.value + '</div><div class="tooltip-arrow"></div></div>';
   			$('#cafe-slider-range-min .ui-slider-handle').html(tooltip);
		var results = ui.value + " mi.";
		$('#cafe-results').html(results);
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
        max: 5,
        step: .2,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#worship-amount").val("$" + ui.value);
            worshipDist = parseFloat(ui.value);
            var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + ui.value + '</div><div class="tooltip-arrow"></div></div>';
   			$('#worship-slider-range-min .ui-slider-handle').html(tooltip);
		var results = ui.value + " mi.";
		$('#worship-results').html(results);
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
        max: 5,
        step: .2,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#restaurants-amount").val("$" + ui.value);
            restaurantsDist = parseFloat(ui.value);
            var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + ui.value + '</div><div class="tooltip-arrow"></div></div>';
   			$('#restaurants-slider-range-min .ui-slider-handle').html(tooltip);
            var results = ui.value + " mi.";
			$('#restaurants-results').html(results);
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
        max: 5,
        step: .2,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#edu-amount").val("$" + ui.value);
            eduDist = parseFloat(ui.value);
            var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + ui.value + '</div><div class="tooltip-arrow"></div></div>';
   			$('#edu-slider-range-min .ui-slider-handle').html(tooltip);
            var results = ui.value + " mi.";
			$('#edu-results').html(results);
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
        max: 5,
        step: .2,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#arts-amount").val("$" + ui.value);
            artsDist = parseFloat(ui.value);
            var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + ui.value + '</div><div class="tooltip-arrow"></div></div>';
   			$('#arts-slider-range-min .ui-slider-handle').html(tooltip);
            var results = ui.value + " mi.";
			$('#arts-results').html(results);
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
        max: 5,
        step: .2,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#rec-amount").val("$" + ui.value);
            recDist = parseFloat(ui.value);
            var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + ui.value + '</div><div class="tooltip-arrow"></div></div>';
   			$('#rec-slider-range-min .ui-slider-handle').html(tooltip);           
            var results = ui.value + " mi.";
			$('#rec-results').html(results);
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
        max: 5,
        step: .2,
        stop: function (event, ui) {
        	filterSystemCommunity();},
        slide: function (event, ui) {
            $("#med-amount").val("$" + ui.value);
            medDist = parseFloat(ui.value);
            var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + ui.value + '</div><div class="tooltip-arrow"></div></div>';
   			$('#med-slider-range-min .ui-slider-handle').html(tooltip);
            var results = ui.value + " mi.";
			$('#med-results').html(results);

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
              // console.log(classes);
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
          }).fadeTo(100,.5).addClass("countMeA").find("path, polygon, circle").attr("fill", "#ccc");;
    
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
      	  	($('div[class*="countMeA"][class~="transitmode"]').length * $("#groceryfreq").val()) + 
      	    ($('div[class*="countMeB"][class~="transitmode"]').length * $("#cafefreq").val()) +
      	    ($('div[class*="countMeC"][class~="transitmode"]').length * $("#worshipfreq").val()) +
      	    ($('div[class*="countMeD"][class~="transitmode"]').length * $("#restaurantsfreq").val())+
      	    ($('div[class*="countMeE"][class~="transitmode"]').length * $("#edufreq").val()) +
      	    ($('div[class*="countMeF"][class~="transitmode"]').length * $("#artsfreq").val()) +
      	    ($('div[class*="countMeG"][class~="transitmode"]').length * $("#recfreq").val()) +
      	    ($('div[class*="countMeH"][class~="transitmode"]').length * $("#medfreq").val())
      	  
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
		  Math.round(numItemsWalk),Math.round(numItemsBike),Math.round(numItemsDrive),Math.round(numItemsTran)];
		  
		  var totalTrips = [
		    (parseFloat($('div[class*="countMeA"]').length / $('div[class*="countMeA"]').length) * $("#groceryfreq").val()), 
      	    (parseFloat($('div[class*="countMeB"]').length / $('div[class*="countMeB"]').length) * $("#cafefreq").val()),
      	    (parseFloat($('div[class*="countMeC"]').length / $('div[class*="countMeC"]').length) * $("#worshipfreq").val()),
      	    (parseFloat($('div[class*="countMeD"]').length / $('div[class*="countMeD"]').length) * $("#restaurantsfreq").val()),
      	    (parseFloat($('div[class*="countMeE"]').length / $('div[class*="countMeE"]').length) * $("#edufreq").val()),
      	    (parseFloat($('div[class*="countMeF"]').length / $('div[class*="countMeF"]').length) * $("#artsfreq").val()),
      	    (parseFloat($('div[class*="countMeG"]').length / $('div[class*="countMeG"]').length) * $("#recfreq").val()),
      	    (parseFloat($('div[class*="countMeH"]').length / $('div[class*="countMeH"]').length) * $("#medfreq").val())
 		];
 		
 		for (i = 0; i < totalTrips.length; i++) {
 			if (totalTrips[i] > 0) {
 				totalTrips[i] = totalTrips[i];
 			}
 			else {
 				totalTrips[i] = 0;
 			}
 		}
 		
 		var totalTripsCombined = 0;
			$.each(totalTrips,function() {
			    totalTripsCombined += this;
			});
 		
		  var totalVal = 0;
			$.each(totalNum,function() {
			    totalVal += this;
			});
      	  console.log(totalTrips);
      	  
      	  var totalModes = 0;
			$.each(totalNum,function() {
			    if (this > 0) {
			    totalModes += 1;
				}
				else {
					return;
				}	 
			});
 		console.log(totalModes);
 

 	$('#currcost-amount').text("$" + minCost + " - $" + maxCost);
    $('#currcost-slider-range').slider({
        range: true,
        min: 0,
        max: 5000,
        step: 100,
        values: [minCost, maxCost],
        slide: function (event, ui) {
            $("#currcost-amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            minCost = ui.values[0];
            maxCost = ui.values[1];
            $("#currcost-amount").text("$" + minCost + " - $" + maxCost);
        }
    });
 
 
 
 //////////////////////////
 
 
 
 
 
 
      	  
      	  //D3 Begins	
			var data = [{mode: "Walk", books: numItemsWalk},
			{mode: "Bike", books: numItemsBike},
			{mode: "Drive", books: numItemsDrive},
			{mode: "Transit", books: numItemsTran}];
			
			console.log("walk= " +numItemsWalk, "bike= "+ numItemsBike, "drive= " + numItemsDrive, "transit= " + numItemsTran);
			var names = ["Walk", "Bike", "Drive", "Transit"];
	
			var margin = {top: 30, right: 5, bottom: 15, left:25};
			var barWidth = 20;
			var width = 200  - margin.left - margin.right;
			var height = 250 - margin.top - margin.bottom;
			var padding = 20;
			
			
			var x = d3.scale.ordinal().rangeRoundBands([0, width-20], .1);
			var y = d3.scale.linear().domain([0, totalTripsCombined]).
			  rangeRound([0, height]);
			
			console.log(y(numItemsWalk));
			var toNum = [15,56,3];
			var max = Math.max.apply(Math, totalNum);


			
			console.log("TotalTripsCombined=" + totalTripsCombined);
			x.domain(data.map(function(datum) { return datum.mode; }));
			

  			
			// add the canvas to the DOM
		  
			barDemo.selectAll("rect").
			  data(data).transition().duration(1000).
			  attr("x", function(datum) { return x(datum.mode); }).
			  attr("y", function(datum) { 
			  	var resultsY =  height - (datum.books / totalTripsCombined);
			  	console.log("resultsY= " + resultsY);
			  	return (height - (datum.books / totalTripsCombined) * 200) ; }).
			  attr("height", function(datum) { return (datum.books / totalTripsCombined) * 200 ; }).
			 attr("width", x.rangeBand()).
			  attr("fill", "#eee");	  
      
			
			
      		barDemo.selectAll("text.percent")
  			  .data(data)
			  .transition().duration(1000)
			  .attr("x", function(datum){ return (x(datum.mode)); } )
			  .attr("y", function(datum) { 
			  	if ((parseInt((datum.books / totalTripsCombined) * 100)) > 10) {
			  		return ((height) - y(datum.books) + 12); 	
			  	}
			  	else {
			  		return ((height) - y(datum.books) - 10); 
			  	}})
			  .attr("dy", ".36em")
			  // .attr("text-anchor", "middle")
			  .attr('class', 'percent')
			  .attr('display', 'inline')
			  .text(function(d) { 
			  	if (d.books > 0) {
			  		return (parseInt((d.books / totalTripsCombined) * 100) + "%");
			  		}
				else {
					return;
					}
			  	});
      }
      
      
      
			var data = [{year: 2006, books: 0},
			{year: 2007, books: 0},
			{year: 2008, books: 0},
			{year: 2009, books: 0}];
			var names = ["Walk", "Bike", "Drive", "Transit"];
			var margin = {top: 30, right: 5, bottom: 15, left:40};
			var barWidth = 20;
			var width = 200 - margin.left - margin.right;
			var height = 250 - margin.top - margin.bottom;
			var padding = 20;
			
			var x = d3.scale.ordinal().rangeRoundBands([0, width], .4);
			var y = d3.scale.linear().range([height, 0]);
			
			x.domain(names.map(function(datum) { return datum; }));
			
			var xAxis = d3.svg.axis()
                  .scale(x)
                  .orient("bottom");
           
           
                  
           
            var yAxis = d3.svg.axis()
                  .scale(y)
                  .orient("left") 
                  .ticks(5)
                  .tickFormat(function(d) { return d * 100 + "%"; });
			
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
			  attr("fill", "#7E9AAF"); 

      		barDemo.selectAll("text.percent")
  			  .data(data)
			  .enter()
			  .append("text")
			  .transition().duration(1000)
			  .attr("x", function(datum){ return (x(datum.mode)); } )
			  .attr("y", function(datum) { return ((height) - y(datum.books) + 10); })
			  .attr("dy", ".36em")
			  .attr("text-anchor", "start")
			  .attr('class', 'percent')
			  .attr('display', 'none')
			  .text(function(d) { return d.books;});



});
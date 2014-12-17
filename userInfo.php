<?php

	    header("Access-Control-Allow-Origin: *");
 		
 		include_once('db.php');
		
		$houseSizeMin = $_POST['houseSizeMin'];
		$houseSizeMax = $_POST['houseSizeMax'];
		$houseCostMin = $_POST['houseCostMin'];
		$houseCostMax = $_POST['houseCostMax'];
		$housegarage = $_POST['housegarage'];
		$houseyard = $_POST['houseyard'];
		$houseown= $_POST["houseown"];
		$houserent= $_POST["houserent"];
		$housewalking= $_POST["housewalking"];
		$housebiking= $_POST["housebiking"];
		$housetransit= $_POST["housetransit"];
		$housedriving= $_POST["housedriving"];
		$houseondemand= $_POST["houseondemand"];
		$housetaxi= $_POST["housetaxi"];
		$housecarshare= $_POST["housecarshare"];
		$housesenior = $_POST['housesenior'];
		$housemultigen = $_POST['housemultigen'];
		$housenostep= $_POST["housenostep"];
		$houseonestory= $_POST["houseonestory"];
		$housenonslip= $_POST["housenonslip"];
		$housewidedoor= $_POST["housewidedoor"];
		$housewidehall= $_POST["housewidehall"];
		$houseextrafloor= $_POST["houseextrafloor"];
		$houseflush= $_POST["houseflush"];
		$houselighting= $_POST["houselighting"];
		$houseleverdoor= $_POST["houseleverdoor"];
		$housereachablecontrols= $_POST["housereachablecontrols"];
		$housesupport= $_POST['housesupport'];
		$houseshower= $_POST['houseshower'];
		$commexclgrocery= $_POST['commexclgrocery'];
		$commdistgrocery= $_POST['commdistgrocery'];						 
		$commfreqgrocery= $_POST['commfreqgrocery'];
		$commexclcafe= $_POST['commexclcafe'];
		$commdistcafe= $_POST['commdistcafe']; 		
		$commfreqcafe= $_POST['commfreqcafe'];
		$commexclworship= $_POST['commexclworship'];
		$commdistworship= $_POST['commdistworship']; 		
		$commfreqworship= $_POST['commfreqworship'];
		$commexclrestaurants= $_POST['commexclrestaurants'];
		$commdistrestaurants= $_POST['commdistrestaurants']; 
		$commfreqrestaurants= $_POST['commfreqrestaurants'];
		$commexcledu= $_POST['commexcledu'];
		$commdistedu= $_POST['commdistedu']; 		
		$commfreqedu= $_POST['commfreqedu'];
		$commexclarts= $_POST['commexclarts'];
		$commdistarts= $_POST['commdistarts']; 		
		$commfreqarts= $_POST['commfreqarts'];
		$commexclrec= $_POST['commexclrec'];
		$commdistrec= $_POST['commdistrec']; 		
		$commfreqrec= $_POST['commfreqrec'];
		$commexclmed= $_POST['commexclmed'];
		$commdistmed= $_POST['commdistmed']; 		
		$commfreqmed= $_POST['commfreqmed'];	
		$curredu= $_POST['curredu'];
		$currwork= $_POST['currwork'];
		$currmedi= $_POST['currmedi'];
		$currhealth= $_POST['currhealth'];
		$currneighborhood= $_POST['currneighborhood'];
		$currown= $_POST['currown'];
		$currcosts= $_POST['currcosts'];
		$currmove= $_POST['currmove'];
		$currbloom= $_POST['currbloom'];
		$currhealthfacilities= $_POST['currhealthfacilities'];
		$currlargecity= $_POST['currlargecity'];
		$currfamily= $_POST['currfamily'];
		$currairport= $_POST['currairport'];
		$currage= $_POST['currage'];
		$currgender= $_POST['currgender'];
		$currzip= $_POST['currzip'];
		$currincome= $_POST['currincome'];
		$houseType= $_POST['houseType'];
		$transectChoice= $_POST['transectChoice'];

		
			
		if(mysqli_query($conn,"INSERT INTO test (housesize_min, housesize_max, yard, garage, housecost_min, housecost_max, own, rent, walking, biking, transit, driving, ondemand, taxi, carshare, senior, multigen, feat_nostep, feat_onestory, feat_nonslip, feat_widedoor,feat_widehall,feat_extrafloor, feat_flush, feat_lighting, feat_leverdoor, feat_reachablecontrols, feat_support, feat_shower, exclgrocery, distgrocery, freqgrocery,exclcafe,distcafe,freqcafe,exclworship,distworship,freqworship,exclrestaurants,distrestaurants,freqrestaurants,excledu,distedu,freqedu, exclarts, distarts, freqarts, exclrec,distrec,freqrec,exclmed,distmed,freqmed,edu,work,medi_status,health_status,current_hood,current_own,current_costs,move,bloom,healthfac,largecity,family,airport,age,gender,zip,income,houseType,transect) VALUES('$houseSizeMin', '$houseSizeMax', '$houseyard','$housegarage','$houseCostMin', '$houseCostMax', '$houseown', '$houserent', '$housewalking', '$housebiking', '$housetransit', '$housedriving','$houseondemand','$housetaxi','$housecarshare','$housesenior','$housemultigen','$housenostep','$houseonestory','$housenonslip','$housewidedoor','$housewidehall','$houseextrafloor','$houseflush','$houselighting','$houseleverdoor','$housereachablecontrols','$housesupport','$houseshower', '$commexclgrocery', '$commdistgrocery', '$commfreqgrocery','$commexclcafe','$commdistcafe','$commfreqcafe','$commexclworship','$commdistworship','$commfreqworship','$commexclrestaurants','$commdistrestaurants','$commfreqrestaurants','$commexcledu','$commdistedu','$commfreqedu','$commexclarts','$commdistarts','$commfreqarts','$commexclrec','$commdistrec','$commfreqrec','$commexclmed','$commdistmed','$commfreqmed','$curredu','$currwork','$currmedi','$currhealth','$currneighborhood','$currown','$currcosts','$currmove','$currbloom','$currhealthfacilities','$currlargecity','$currfamily','$currairport','$currage','$currgender','$currzip','$currincome','$houseType','$transectChoice')"))
		  echo "<script type='text/javascript'>alert('Success');</script>";										
		else
		  echo "<script type='text/javascript'>alert('Fail');</script>";
?>
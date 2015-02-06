
$(document).ready(function() {

	var bloodFruitSeasonList;
	var bloodVegSeasonList;

	function removeFruitDuplicates(arr) {
		var newBloodFruitSeasonList = [];
		arr.forEach(function(val){
		 if (newBloodFruitSeasonList.indexOf(val) === -1){
				newBloodFruitSeasonList.push(val);
			}
		});
		return newBloodFruitSeasonList;
	}

	function removeVegDuplicates(arr) {
		var newBloodVegSeasonList = [];
		arr.forEach(function(val){
			if(newBloodVegSeasonList.indexOf(val) === -1){
				newBloodVegSeasonList.push(val);
			}
		});
		return newBloodVegSeasonList;
	}

	function cleanUp(arr1, arr2){
		var newArr = [];
		arr1.forEach(function(arr1val){
			arr2.forEach(function(arr2val){
				if(arr1.indexOf(arr2val) !== -1){
					newArr.push(arr2val);
				}
			});
		});
		return newArr;
	} 

	document.getElementById("submit").addEventListener("submit", function(e) {
		e.preventDefault();
		
		var fruit =$("#bloodtype").val();
		var veg = $("#bloodtype").val();
		var season = $("#season").val();
		bloodFruitSeasonList = [];
		if (fruit === "O" && season === "Win") {
			bloodFruitSeasonList  = cleanUp(fruitO, fruitWinter);
		 }
	 	else if (fruit === "A" && season === "Win") {
			bloodFruitSeasonList = cleanUp(fruitA, fruitWinter);
		}
		else if (fruit === "B" && season === "Win") {
			bloodFruitSeasonList = cleanUp(fruitB, fruitWinter);
		}
		else if (fruit === "AB" && season === "Win") {
			bloodFruitSeasonList = cleanUp(fruitAB, fruitWinter);
		}
		else if (fruit === "Z" && season === "Win") {
			bloodFruitSeasonList = fruitWinter;
		}
		// --------------------------------------------
		else if (fruit === "O" && season === "Spr") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitSpring);
		}
		else if (fruit === "A" && season === "Spr") {
			bloodFruitSeasonList = cleanUp(fruitA, fruitSpring);
		}
		else if (fruit === "B" && season === "Spr") {
			bloodFruitSeasonList = cleanUp(fruitB, fruitSpring);
		}
		else if (fruit === "AB" && season === "Spr") {
			bloodFruitSeasonList = cleanUp(fruitAB, fruitSpring);
		}
		else if (fruit === "Z" && season === "Spr") {
			bloodFruitSeasonList = fruitSpring;
		}
		// -------------------------------------------
		else if (fruit === "O" && season === "Sum") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitSummer);
		}
		else if (fruit === "A" && season === "Sum") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitSummer);
		}
		else if (fruit === "B" && season === "Sum") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitSummer);
		}
		else if (fruit === "AB" && season === "Sum") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitSummer);
		}
		else if (fruit === "Z" && season === "Sum") {
			bloodFruitSeasonList = fruitSummer;
		}
		// -----------------------------------------------
		else if (fruit === "O" && season === "Fall") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitFall);
		}
		else if (fruit === "A" && season === "Fall") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitFall);
		}
		else if (fruit === "B" && season === "Fall") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitFall);
		}
		else if (fruit === "AB" && season === "Fall") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitFall);
		}
		else if (fruit === "Z" && season === "Fall") {
			bloodFruitSeasonList = fruitFall;
		}
		// ------------------------------------------------
		else if (fruit === "O" && season === "AYA") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitAllYearAround);
		}
		else if (fruit === "A" && season === "AYA") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitAllYearAround);
		}
		else if (fruit === "B" && season === "AYA") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitAllYearAround);
		}
		else if (fruit === "AB" && season === "AYA") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitAllYearAround);
		}
		else if (fruit === "Z" && season === "AYA") {
			bloodFruitSeasonList = fruitAllYearAround;
		}
		var newDataF = removeFruitDuplicates(bloodFruitSeasonList);
		
		// add this data to the page
		
		$("#fruitList").empty();
		newDataF.forEach(function(val)	{
			// create a list item  for each val
			var li = $("<li>"+ val +"</li>");
			// append that list item to the var ul
			$("#fruitList").append(li);
		});
		if (veg === "O" && season === "Win") {
			bloodVegSeasonList = cleanUp(vegO, vegWinter);
		}
		else if (veg === "A" && season === "Win") {
			bloodVegSeasonList = cleanUp(vegA, vegWinter);
		}
		else if (veg === "B" && season === "Win") {
			bloodVegSeasonList = cleanUp(vegB, vegWinter);
		}
		else if (veg === "AB" && season === "Win") {
			bloodVegSeasonList = cleanUp(vegAB, vegWinter);
		}
		else if (veg === "Z" && season === "Win") {
			bloodVegSeasonList = vegWinter;
		}
		// -----------------------------------
		else if (veg === "O" && season === "Spr") {
			bloodVegSeasonList = cleanUp(vegO, vegSpring);
		}
		else if (veg === "A" && season === "Spr") {
			bloodVegSeasonList = cleanUp(vegO, vegSpring);
		}
		else if (veg === "B" && season === "Spr") {
			bloodVegSeasonList = cleanUp(vegO, vegSpring);
		}
		else if (veg === "AB" && season === "Spr") {
			bloodVegSeasonList = cleanUp(vegO, vegSpring);
		}
		else if (veg === "Z" && season === "Spr") {
			bloodVegSeasonList = vegSpring;
		}
		// -----------------------------------
		else if (veg === "O" && season === "Sum") {
			bloodVegSeasonList = cleanUp(vegO, vegSummer);
		}
		else if (veg === "O" && season === "Sum") {
			bloodVegSeasonList = cleanUp(vegO, vegSummer);
		}
		else if (veg === "O" && season === "Sum") {
			bloodVegSeasonList = cleanUp(vegO, vegSummer);
		}
		else if (veg === "O" && season === "Sum") {
			bloodVegSeasonList = cleanUp(vegO, vegSummer);
		}
		else if (veg === "Z" && season === "Sum") {
			bloodVegSeasonList = vegSummer;
		}
		// -----------------------------------
		else if (veg === "O" && season === "Fall") {
			bloodVegSeasonList = cleanUp(vegO, vegFall);
		}
		else if (veg === "O" && season === "Fall") {
			bloodVegSeasonList = cleanUp(vegO, vegFall);
		}
		else if (veg === "O" && season === "Fall") {
			bloodVegSeasonList = cleanUp(vegO, vegFall);
		}
		else if (veg === "O" && season === "Fall") {
			bloodVegSeasonList = cleanUp(vegO, vegFall);
		}
		else if (veg === "Z" && season === "Fall") {
			bloodVegSeasonList = veg;
		}
		// -----------------------------------
		else if (veg === "O" && season === "AYA") {
			bloodVegSeasonList = cleanUp(vegO, vegAllYearAround);
		}
		else if (veg === "A" && season === "AYA") {
			bloodVegSeasonList = cleanUp(vegA, vegAllYearAround);
		}
		else if (veg === "B" && season === "AYA") {
			bloodVegSeasonList = cleanUp(vegB, vegAllYearAround);
		}
		else if (veg === "AB" && season === "AYA") {
			bloodVegSeasonList = cleanUp(vegAB, vegAllYearAround);
		}
		else if (veg === "Z" && season === "AYA") {
			bloodVegSeasonList = vegAllYearAround;
		}
		var newDataV = removeVegDuplicates(bloodVegSeasonList);

		$("#vegList").empty();
		newDataV.forEach(function(val)	{
			// create a list item  for each val
			var li = $("<li>"+ val +"</li>");
			// append that list item to the var ul
			$("#vegList").append(li);
		});
		if (season === "Win") {
			$("body").css("background-image", "url(http://cdn.blogs.sheknows.com/gardening.sheknows.com/2010/11/winter-vegetables.jpg)");
		}
		if (season === "Spr") {
			$("body").css("background-image", "url(http://kripalu.org/blog/thrive/media/2012/03/VEGGIEsliceiStock_000017490436Small.jpg)");
		}
		if (season === "Sum") {
			$("body").css("background-image", "url(http://myinspiredwedding.com/wp-content/blogs.dir/15/files/2012/04/fruit.jpg)");
		}
		if (season === "Fall") {
			$("body").css("background-image", "url(http://www.kkolias.com/wp-content/uploads/2012/01/FRUITS-VEGETABLE-WINTER.jpg)");
		}
		if (season === "AYA") {
			$("body").css("background-image", "url(http://i4.mirror.co.uk/incoming/article3337763.ece/alternates/s2197/Fruit-vegetables.jpg)");
		}

	});

});

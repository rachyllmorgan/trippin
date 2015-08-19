define(function(require){
	// declare dependencies
	var $ = require("jquery");

// determining if visited or not111
	var visited = true;

	$(".visited").click(function(){
		visited = false;
	});

	$(".wish-list").click(function(){
		visited = true;
	});

// submit location to firebase
$(".subBtn").click(function(){

	var newLocation = {
		location:$("#locationName").val(),
		location_type:$("#locationType").val() || "city",
		visited: visited
	}

	console.log(newLocation);

		$.ajax({
			url:"https://nss-rachel-trippin.firebaseio.com/trips.json",
			method: "POST",
			data: JSON.stringify(newLocation)
		})
		.done(function(newData){
			console.log("newData", newData);
		})
		.fail(function(xhr, status, error){
			console.log("error", error)
		})

		  $(".addForm").get(0).reset();
	})
})
define(function(require){
	var firebase = require("firebase");
	var $ = require("jquery");
	var templates = require("get-templates");

	var myFirebaseRef = new Firebase("https://nss-rachel-trippin.firebaseio.com/");

	myFirebaseRef.child("trips").on("value", function(snapshot) {
      var trips = snapshot.val();

      console.log("trips", trips);
      
      // holds the complete DOM string of trips
      var populatedTemplate = templates.tripTpl(trips);

      // Inserting into the DOM
      $("#list-of-trips").html(populatedTemplate);
    });

})
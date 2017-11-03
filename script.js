$(document).ready(function(){

   var getPlaces = function(){

        var queryString = $('#queryValue').val();

         if(queryString == ''){

            $("#venue-results").html("<p class=red>*Please enter location</p>");

         } else {

               $('#venue-results').html('');
		       var apiUrl = 'https://api.foursquare.com/v2/venues/search?ll=40.7,-74&query='+queryString+'&client_id=ONNZ0TVVACLT0LMMCA1MAEIHCNE1QRDS3S1CA1FSJIZ45CCS&client_secret=B0NRTIXKLFNESTQFAZ0LIUOHLN4W52GQEFXR5OVAFRXKHZYV&v=20170101';
		       //Retrieving the data from API using Jquery
		       $.getJSON(apiUrl, function(data) {
		          if(data.response.venues.length)
		           {
		               $.each(data.response.venues, function(i,venues){
		               content = '<p>' + venues.name + '</p>';
			           $(content).appendTo("#venue-results");
                       });
		           }
		           else {
		               $("#venue-results").html("<p>Sorry no results found.</p>");
		           }
		      });

          }

        return false;
   }

   $('#findPlace').click(getPlaces);
   $('#queryValue').keyup(function(event){
       if(event.keyCode == 13){
           getPlaces();
       }
   });

});

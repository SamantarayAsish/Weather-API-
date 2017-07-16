$(document).ready(function () {



 navigator.geolocation.getCurrentPosition(success);

function success(position){
	var cord=position.coords;
	
	
		 var url ="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+cord.latitude+"&lon="+cord.longitude+"&appid=63fc3d9a6be2d5f85a3a754d1c9835e8&units=metric";
		
		 $.getJSON( url, function( data ) {
			console.log(data);
			$('.city').html( "<i class='fa fa-map-marker' ></i> <span >"+data.name+"</span>");
			$('.temp').text(data.main.temp + " C");

	        
	        $('.weatherIcon').html("<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>");
		    var sunrise=new Date(data.sys.sunrise*1000);
		    var sunset=new Date(data.sys.sunset*1000);
		     sunrise= sunrise.toString();

		     
		     sunset= sunset.toString();
		    $('#sun_set_t').text(sunset.slice(16,24));
		    $('#sun_rise_t').text(sunrise.slice(16,24));
            $('#humidity').text(data.main.humidity+"%");
            $('#wind').text(data.wind.speed+" m/s");
            var w=data.weather[0].description;
            var pic="";
            switch(w)
            {
                case "clear sky":
                pic="https://www.novisdev.com/geolocation/weather/clearSky.jpg";
                break;
                
                case "few clouds":
               
                pic="https://www.novisdev.com/geolocation/weather/fewClouds.jpg";
                break;

                case "scattered clouds":
                case "broken clouds":
                pic="https://www.novisdev.com/geolocation/weather/scatteredClouds.jpg";
                break;

                case "shower rain":
                case "rain":
                pic="https://www.novisdev.com/geolocation/weather/rain.jpg";
                break;

                case "thunderstorm":
                pic="https://www.novisdev.com/geolocation/weather/thunderstorm.jpg";
                break;

                case "snow":
                pic="https://www.novisdev.com/geolocation/weather/snow.jpg";
                break;

                case "mist":
                pic="https://www.novisdev.com/geolocation/weather/mist.jpg";
                break;
            }
             $('#app').css('background-image',"url('"+pic+"')");

		    today();
		});
}
function today() {
     var month,day;
     var x= new Date();
     switch(x.getMonth())
     {
     	case 0 :
     	month= 'January';
     	break;
     	case 1 :
     	month= 'February';
     	break;
     	case 2 :
     	month= 'March';
     	break;
     	case 3 :
     	month= 'April';
     	break;
     	case 4 :
     	month= 'May';
     	break;
     	case 5 :
     	month= 'June';
     	break;
     	case 6 :
     	month= 'July';
     	break;
     	case 7 :
     	month= 'August';
     	break;
     	case 8 :
     	month= 'September';
     	break;
     	case 9 :
     	month= 'October';
     	break;
     	case 1 :
     	month= 'November';
     	break;
     	case 1 :
     	month= 'DEcember';
     	break;
     }
     switch (x.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
$('.date').text(day+","+month+" "+x.getDate()+"," +x.getFullYear());
 
}
 $('.temp').on('click',function(){
    var value=$(this).text();
    if(value[value.length-1]=="C"){
      $(this).text((parseFloat(value)*9/5+32).toFixed(2)+"F");  
  }else{
    $(this).text(((parseFloat(value)-32)*5/9).toFixed(2)+"C");
  }
    
 });
 
});
document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!');
  },
  false
);

// Loading Google Maps
function startMap() {
  const initialLoc = {
    lat: -23.562744,
    lng: -46.654751
  };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: initialLoc
  });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const user_location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // Center map with user location
        map.setCenter(user_location);

        // Add a marker for your user location
        const myMarker = new google.maps.Marker({
          position: {
            lat: user_location.lat,
            lng: user_location.lng
          },
          map,
          title: 'You are here.'
        });
      },
      function () {
        console.log('Error in the geolocation service.');
      }
    );
  } else {
    console.log('Browser does not support geolocation.');
  }
}

const directionsService = new google.maps.DirectionsService;
const directionsDisplay = new google.maps.DirectionsRenderer;


startMap();

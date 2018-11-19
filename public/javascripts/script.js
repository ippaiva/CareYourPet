document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!');
}, false);

// Loading Google Maps
function startMap() {
  const initialLoc = {
  	lat: -23.562744,
  	lng: -46.654751};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: initialLoc
    }
  );
}

startMap();
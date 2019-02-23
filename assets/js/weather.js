window.addEventListener("load", () => {
    let long;
    let lat;
    let tempratueDegree = document.querySelector(".temprature-degree")
    let tempratueDescription = document.querySelector(".temprature-description")
    let locationTimezone = document.querySelector(".location-timezone")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            // get current location longitude and latitude 
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}https://api.darksky.net/forecast/28219da3e847c1437eeece08ebfe1ac2/${lat},${long}`
            // api request to darksky
            fetch(api)
                .then(responce => {
                return responce.json();
                }) 
                .then(data => {
                    console.log(data);
                    const {temperature, summary, icon} = data.currently;
                    // set DOM elements from the api
                    tempratueDegree.textContent = temperature;
                    tempratueDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone; 
                    setIcon(icon, "icon1") 
                });
        });
    };

    function setIcon(icon, iconID){
        var skycons = new Skycons({"color": "white"});
        skycons.add(iconID, icon);
        skycons.play()
    }
});


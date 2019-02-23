window.addEventListener("load", () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}https://api.darksky.net/forecast/28219da3e847c1437eeece08ebfe1ac2/${lat},${long}`
            
            fetch(api)
                .then(responce => {
                console.log(responce.json())
            })
            

        });


    };

});


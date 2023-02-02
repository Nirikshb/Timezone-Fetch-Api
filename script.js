//got the id's for printing values

const btn = document.getElementById('btn');
const box2 = document.getElementsByClassName('box2')[0]
const address = document.getElementById('address')
//using event listener to hear a click on button
btn.addEventListener('click', function(){
    if(addressFunction())
    submitBtn();
});

function addressFunction(){
    try{
        const addressDetail = address.value

        if(addressDetail == '') 
        throw 'Timezone Could Not be Found'

    document.getElementById('output').innerHTML=''
    return true;   
}
 catch(err){
    console.log(err);
    document.getElementById('output').innerHTML = err;
    document.getElementById('output').style.color = 'red'
    return false;
}}
// addressFunction()
//using html5 geolocation to get current data
navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords
    document.getElementById('lat').innerHTML = `Lat : ${latitude}`
    document.getElementById('long').innerHTML = `Long : ${longitude}`
    latitude.innerHTML = latitude
    longitude.innerHTML = +longitude

    //calling getLocationData() to get the current user data
    getLocationData(latitude, longitude)
}
)

//create a function to call latitude, long of user currently that gets loaded automatically
function getLocationData(lat, long) {
    const url = `https://api.geoapify.com/v1/geocode/search?lat=${latitude}&lon=${longitude}&apiKey=f3df1cdb0d6347218cec5d3d43a03ff3`
    fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data);//checking data whether data gets printed or not
        // city.innerHTML = (`City : ${data.features[0].properties.city}`);
        // timezone.innerHTML = (`Name of Timezone : ${data.features[0].properties.timezone.name}`);
    })
    .catch((error)=>{
    console.log("wrong");
    console.log(error);
});
}

//created submitbtn() to print the data using fetch and printing desired address 
function submitBtn(){
    const address= document.getElementById('address').value    //using .value to check the input value 
    // let Api = 'f3df1cdb0d6347218cec5d3d43a03ff3'
    // fetch(`https://api.geoapify.com/v1/geocode/reverse?text=${address}&apiKey=f3df1cdb0d6347218cec5d3d43a03ff3`)
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=f3df1cdb0d6347218cec5d3d43a03ff3`
  
    fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        box2.style.display = 'block'

        //using two different id's being used to get data printed on the UI.
        city.innerHTML = (`City : ${data.features[0].properties.city}`);
        cityy.innerHTML = (`City : ${data.features[0].properties.city}`);
        
        timezone.innerHTML = (`Name of Timezone : ${data.features[0].properties.timezone.name}`);
        time.innerHTML = (`Name of Timezone : ${data.features[0].properties.timezone.name}`);
        
        lati.innerHTML = (`Lat : ${data.features[0].properties.lat}`)
        longi.innerHTML = (`Lat : ${data.features[0].properties.lon}`)

        std.innerHTML = (`Offset STD : ${data.features[0].properties.timezone.offset_STD}`)
        stdd.innerHTML = (`Offset STD : ${data.features[0].properties.timezone.offset_STD}`)

        stdsec.innerHTML = (`Offset STD Seconds :${data.features[0].properties.timezone.offset_STD_seconds}`)
        stdSec.innerHTML = (`OFfset STD Seconds : ${data.features[0].properties.timezone.offset_STD_seconds}`)

        dstt.innerHTML = (`Offest DST :${data.features[0].properties.timezone.offset_DST}`)
        dst.innerHTML = (`Offest DST :${data.features[0].properties.timezone.offset_DST}`)
      
        dstsec.innerHTML = (`Offest DST : ${data.features[0].properties.timezone.offset_DST_seconds}`)
        dstSec.innerHTML = (`Offest DST : ${data.features[0].properties.timezone.offset_DST_seconds}`)
        
        countryy.innerHTML = (`Offset DST Seconds : ${data.features[0].properties.country}`)
        country.innerHTML = (`Offset DST Seconds : ${data.features[0].properties.country}`)
        
        postcodee.innerHTML =(`Postcode : ${data.features[1].properties.postcode}`)
        postcode.innerHTML = (`Postcode : ${data.features[1].properties.postcode}`)
        
    })

    .catch((error)=>{
    console.log("wrong");
    console.log(error);
});
}


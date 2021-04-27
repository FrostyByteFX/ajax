var url ="https://www.finnkino.fi/xml/Schedule/";
fetch(url).then((response) => {
return response.text();
})
.then((data) => {
    console.log(data);
    document.getElementById("schedule").innerHTML = data;
});
var url ="https://www.finnkino.fi/xml/TheatreAreas/";
fetch(url).then((response) => {
return response.text();
})
.then((data) => {
    console.log(data);
    document.getElementById("content").innerHTML = data;
});
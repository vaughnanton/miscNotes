## JSON and AJAX Notes

Similar to how user interfaces help people use programs, APIs help programs interact with other programs.

**AJAX**

  - Programmers often use AJAX technologies when working with APIs.
  - AJAX originated form Asynchronous Javascript and XML
  - a group of technologies that make asynchronous requests to a server to transfer data, then load any data into page
  - an asynchronous process means the browser does not stop loading a page to wait for the server's response, also, the browser inserts updated data into part of the page wihtout having to refresh the entire page
  - UE benefits, page loads faster, requests/transfers happen in bg, when new data comes in only necessary part is updated

**JSON**

  - the data transferred between the browser and server is often in a format called JavaScript Object Notation
  - JSON resembles JavaScript object literal syntax, except transferred as a string, once received it can be converted to an object and used in a script

```
//to execute code only once page has finished loading:
document.adddEventListener('DOMContentLoaded',
function() {
//another event handler within the DOMContentLoaded
document.getElementById('getMessage').onclick=function(){};
});

//using js to update an HTML element
document.getElementsByClassName('message')
[0].textContent="Here is the message";
```

**Get JSON with JS XMLHttpRequest Method**

  - JSON transmitted by APIs are sent as bytes and received as string
  - JSON.parse method parses the string and constructs the JavaScript object described by it

example, request JSON from FCC Cat Photo API - code to put in click event

```
req = new XMLHttpRequest();
//open method initializes a request (type of request, url of API, boolean value where true makes it asynchronous request)
req.open("GET", '/json/cats.json', true);
//sends the request
req.send();
//onload event handler parses the returned data and applies .stringify to convert the JS object into a string, the string is then inserted as the message text
req.onload=function(){
  json=JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
};
```

**Access JSON Data from an API***

  - [ ] -> square brackets represent an array
  - { } -> curly braces represent an object
  - " " -> double quotes represent a string, also used for key names in JSON

cat photo API JSON example

```
json = [{"id":0,"imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg","altText":"A white cat wearing a green, helmet shaped melon on its head. ","codeNames":["Juggernaut","Mrs. Wallace","Buttercup"]},
{"id":1,"imageLink":"https://s3.amazonaws.com/freecodecamp/grumpy-cat.jpg","altText":"A white cat with blue eyes, looking very grumpy. ","codeNames":["Oscar","Scrooge","Tyrion"]},
{"id":2,"imageLink":"https://s3.amazonaws.com/freecodecamp/mischievous-cat.jpg","altText":"A ginger cat with one eye closed and mouth in a grin-like expression. Looking very mischievous. ","codeNames":["The Doctor","Loki","Joker"]}]
//returned data is an array of 3 objects, some key value pairs having arrays as values

console.log(json[0].altText);
//prints "A white cat wearing a green helmet shaped melon on its head"
```

**Convert JSON Data into HTML (for cat array case)**

```
var html = "";
json.forEach(function(val){
  var keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key){
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
```


**Render images from data sources**
  - can use imageLink property to display image in img element

```
html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
```

**Pre-filter JSON to get the Data you need**

  - if you don't want to render every cat photo you can for example filter out cat whose 'id' is 1

```
json = json.filter(function(val){
  return (val.id !== 1);
})
```

**Get Geolocation data to find a User's GPS Coordinates**
  - every browser has a built in navigator that can give this info

```
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: "+ position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

**Post Data with the JS XMLHttpRequest method**

  - you can also send data to an external resource, as long as it supports AJAX requests and you know the URL

```
req=new XMLHttpRequest();
//open method initializes request as POST to given URL and uses true to make it asynchronous
req.open("POST",url,true);
//setRequestHeader sets the value of HTTP request header, which contains info about sender/request
req.setRequestHeader('Content-Type','text/plain');
//event listener handles change in the state of the request, readystate of 4 means operation is complete, status 200 means it was successful request
req.onreadystatechange=function(){
  if(req.readyState==4 && req.status==200){
    document.getElementsByClassName('message')[0].innerHTML=req.responseText;
  }
};
//sends the request with userName value which was given by the user in the input field
req.send(userName);
```

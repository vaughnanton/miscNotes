https://closebrace.com/tutorials/2017-03-02/creating-a-simple-restful-web-app-with-nodejs-express-and-mongodb

Simple app that works without page refresh; won't have to visit URLs as in the first app (nodetest1).

###GOALS

- Learn what REST means in plain English
- Store and retriev JSON data in a MongoDB collection using HTTP POST and HTTP GET
- Remove data from the collection using HTTP DELETE
- Use AJAX for all data operations
- Update the DOM with jQuery

**What is REST?**

- Use HTTP methods explicitly
  - to retrieve data, use GET
  - to create data, use POST
  - to update/change data, use PUT
  - to delete data, use DELETE

- Be stateless
  - don't store state information on the server
  - if you must save a state, save it on client side via cookies or other methods
  - a front-end framework like Angular, is helpful here as it creates an entire client-side MVC setup
  - see statelessProgramming.html in notes repo for a general idea

- Expose directory structure-like URIs
  - instead of a url like `http://app.com/getfile.php?type=video&game=skyrim&pid=68` , you want `http://app.com/files/video/skyrim/68`

- Transfer XML, JavaScript Object Notation (JSON), or both
  - make sure that your back-end is sending XML or JSON
  - can easily manipulate this data in presentation layer, without hitting servers, unless you want data

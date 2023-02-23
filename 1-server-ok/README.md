Server OK
===

#### Tools Allowed:
- node's native [`http` module](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#class-httpserver)

#### Requirements:
- [ ] Web server running on port 3210
- [ ] Every request (no matter the HTTP method or URL) should get the response:
    - Status Code: `200`
    - Body: `"Server Running"`

#### Explore:
- [ ] What happens if your server throws an error? Will the client get a response?
- [ ] What if you wanted your http server to close after 20 seconds if it hasn't gotten a response? How would you do that?

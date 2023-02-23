Request URL
===

#### Tools Allowed:
- node's native [`http` module](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#class-httpserver)

#### Requirements:
- [ ] Web server running on port 3210
- [ ] If method is `GET` and url is `/ok`, respond with status `200` and body `"Server Running"`
- [ ] If method is `GET` and url is `/greet`, respond with status `200` and body `"Hello"`
- [ ] If url is `/internal-error` with any method respond with status `500` and body `"Internal Server Error"`
- [ ] If request is not handled by the previous logic, respond with status `404` and body `"Cannot ${METHOD} ${URL}"` where `METHOD` is the requested method and `URL` is the requested url

#### Explore:
- [ ] add more urls
- [ ] handle more http methods
- [ ] what if you had 20, 50, 100 url/method combinations you were handling? How might you structure your code differently?

Response Headers
===

#### Tools Allowed:
- node's native [`http` module](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#class-httpserver)

#### Requirements:
- [ ] Web server running on port 3210
- [ ] If method is `GET` and url is `/ok`, respond with status `200` and body `"Server Running"`
- [ ] If method is `GET` and url is `/old-path`, respond with `307` (Temporary Redirect) and appropriate headers
    - you can test that you implemented this correctly by going to `/old-path` in your browser and seeing if it ends up at `/ok`
- [ ] If the url of a request matches but the method does not, respond with status `405` and body `"Method Not Allowed for ${METHOD} ${URL}"` where `METHOD` is the requested method and `URL` is the requested url
- [ ] If request is not handled by the previous logic, respond with status `404` and body `"Cannot ${METHOD} ${URL}"` where `METHOD` is the requested method and `URL` is the requested url
- [ ] If an error is thrown in the handling of the request, respond with status `500` and body `"${MESSAGE}"` where `MESSAGE` is the `message` property of the `error` that was thrown
- [ ] Set appropriate `Content-Type` header (e.g. `text/plain`)
- [ ] Do research (documentation, and/or digging through the network inspector in Chrome for inspiration) to find three other Response headers that you could implement as part of your server; implement at least one of them

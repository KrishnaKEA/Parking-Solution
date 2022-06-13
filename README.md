# Full MESN(MongoDB, Express, Svelte and Node.js) Stack Parking Application

A fullstack application named OAK-Parking built with Svelte on the frontend and Node/Express on the backend.

### [Demo]

|  Name | gh  
|---|---|
|Adrian|https://github.com/adrian52x|
|Krishna|https://github.com/KrishnaKEA|
|Omar|https://github.com/OmarExpo|

This repo demonstrates almost everything you need to know to build a complete fullstack application using Svelte and Node/Express. This Application demo covers things like:
- Login and signup
- Real time chat feature using socket.io
- GDPR Consent
- Email confirmation using nodemailer
- Notification using toastr
- Authentication/Authorization with JWT
- Map visualization
- Routing
- Communicating with a backend API
- Handling errors
- Interactive and Responsive UI
- More stuff


## Endpoint Documentation
<p> 
  #user
<br>
http://localhost:3000/api/users - method GET - retrives  users.
<br> 
http://localhost:3000/api/user - method GET - retrives current user
<br>
http://localhost:3000/api/login - method POST - Handles the login functionality
<br>
http://localhost:3000/api/logout - method POST - Handles logout functionality.
<br>
  #Parking area
  http://localhost:3000/api/parkingArea - method GET - retrives all parking areas <br>
  http://localhost:3000/api/parkingArea/:key - method GET - retrives a parkingArea by location<br>
  http://localhost:3000/parkingarea/reservation/:slotNumber/:name/:hour - method PATCH - updates parking slot in parking area<br>


# Running the demo

1. Clone / Download this repo
2. Run `npm install`
3. Run `npm run dev` after navigating in the client directory
4. Run `npm run server`once you are in the server directory

To build it and run it in production mode:
1. Run `npm run build`
2. Run `npm run start`

<br>

<hr>
<br>
# OAK - Git brush up
#git documentation for all contributors

1. Do changes in your own branch
git checkout 'ur-branch-name'
-- do code code code

2. Push your local branch to remote
git add . 
git commit -m "message"
git push

3. If you need to merge your branch with master and push it to remote
git checkout master
git merge 'ur-branch-name'
git push

4. If you need to update your own branch (pull from master) 
git checkout 'ur-branch'
git pull origin master

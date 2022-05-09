this fake backend its merely for testing and mocking up the frontend. Of course, 
the 'backendAuth.ts' file actually runs in frontend, but it's to simulate a backend resources like sign up and login autentication with json-server. To run the service you just need to install json-server and run the following command: 

cd src/backend

json-server --watch db.json --port 5050 

in a real usage scenario, whith a real backend, this folder would not be present in the project.

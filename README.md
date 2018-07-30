SR National Excavator Initiative Frontend
=========================================

Features
--------

* Uses React
* Uses Webpack
* Uses Babel for ES6 support

Installation
------------
```
npm install
npm run setup
```

Usage
-----
```
npm start
```

ENV vars
-------
To setup/change your env files, run `npm run setup`.
```
BACKEND_URL: The full URL (including protocol and port) for the backend API.
HOST: The host where the front end code is being loaded.
PORT: The port where the front end code is being loaded.
ROLLBAR_TOKEN: The CLIENT access token for rollbar.
```

Deploy using NGINX
------------------
This is an example bash script for deploying through Nginx.
```
echo 'Building...'
npm run compile:prod

echo 'Copying...'
cp -R /root/code/dist /var/www
sudo chown -R www-data:web /var/www
sudo chmod -R 755 /var/www

echo 'Restarting Server...'
service nginx restart
```

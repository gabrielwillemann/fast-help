### For Ruby on Rails

```js
upstream app {
    # Path to Puma SOCK file, as defined previously
    server unix:/srv/project-name/tmp/sockets/puma.sock fail_timeout=0;
}

server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /srv/project-name/public;
    index index.html;

    try_files $uri/index.html $uri @app;

    location @app {
        proxy_pass http://app;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_redirect off;
    }

    error_page 500 502 503 504 /500.html;
    client_max_body_size 4G;
    keepalive_timeout 10;

    listen 443 ssl;
    ssl_certificate     /srv/project-name/ssl/certificate.crt;
    ssl_certificate_key /srv/project-name/ssl/private.key;
    if ($scheme = http) {
        return 301 https://$host$request_uri;
    }
}
```

### For mutiple proxies:

```js
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  root /srv/project-name/public;

  error_page 404 /404.html;

  index index.html;

  # proxy for ruby on rails
  location /0/ {
    proxy_pass http://unix:/srv/project-name/tmp/sockets/puma.sock:/;
  }

  # other proxy
  location /1/ {
    proxy_pass http://localhost:3001/;
  }

  # other proxy
  location /2/ {
    proxy_pass http://localhost:3002/;
  }

  location / {
    try_files $uri $uri/ =404;
  }
}
```

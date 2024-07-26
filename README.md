1. DB Configuration:
in the .env file, configure the DB Settings -
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
PORT=


2. Testing Shorten URL:

POST
http://localhost:3000/api/shorten

Body - Raw JSON,

{
    "longUrl": "https://www.linkedin.com/in/d"
}

3. Testing Retrieving long URL:

GET
http://localhost:3000/api/short_url 
- replace short_url with the corrrect shortened version

# Promptly_URL-API

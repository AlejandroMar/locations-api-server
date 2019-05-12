<<<<<<< HEAD
# Connecting to the API
To save locations with the API, make a <span style="color:red; font-weight:bold">POST </span> request to the following endpoint:
> http<nolink>://localhost:4000/api/locations/

## Request headers
The request should have a <strong>Content-Type: application/x-www-form-urlencoded </strong>

## Request body
The request should have a body with a key: <strong style="color:red; font-weight:bold">name</strong> and the value should be the .json file.

## File format and file name
The API only accepts .json files, and the location's name should be the file's name,
like the example below:
> panama.json
> 
> london.json
> 
> buenos-aires.json

## File's body
The file's body requires 2 mandatory fields in order to be accepted, both should be of type number.

Example:

```json
    {
      "lat": 4.5709,
      "lng": 74.2973 
    }
```
### Other fields
  + country (optional)
  + language (optional)
  + currency (optional)
  + capital (optional)
  
Example:
> cali.json
```json
  {
    "lat": 4.5709,
    "lng": 74.2973,
    "capital": "Bogotá",
    "country": "Colombia",
    "language": "Spanish"
  }
```

### That's all!





=======
# hola caracola
>>>>>>> 4d7824674cecc63e774b810c9eff4f58bcf8475c

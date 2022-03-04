cities = ["hyderabad","delhi","pune","bangalore","mumbai","chennai","kolkata"]
converted = cities.map(
    city => city.substring(0,1).toUpperCase() + city.substring(1).toLowerCase())
//capitalises the first letter of elements in string array

    console.log(converted)

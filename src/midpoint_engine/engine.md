# Midpoint Engine

## Overview

The engine is responsible for computing the midpoint of a set of locations.  The locations are presented to the in a list consisting of the  Latitude and Longitude for each location.  The midpoint is then calculated using the Geometric Centroid method of computing a midpoint

## Geometric Centroid Method

Simple averaging is not possible due to a number of issues with latitude and longitude and how they represent locations on a sphere.
 - Longitude Wrapping - Average of -179 and + 179 is 0 which is on the opposite side of the globe
 - Pole Proximity - Longitudinal lines converge at the pole and are greater at the equator
So the points must be converted to Cartesian Coordinates and then the linear distances and averages will reflect the midpoint taking into account the Earths geometry. 

## Functions
### calcMidPoint
parameters - array of locations pairs of latitude and longitude in degrees
returns - a pair of latitude and longitude values representing the midpoint in degrees
 1. Locations are converted to cartesian *convLatLonToCart*
 2. Midpoint / Average is calculated *calcAvgCartCoord*
 3. convert from cartesian to lat and lon and return midpoint *convCartToLatLon*
 
### convLatLonToCart
parameters - latitude and longitude in degrees
returns - object with the cartesian coordinates properties X, Y, and Z
 1. convert from latitude and longitude form degrees to radians *convDegToRad*
 2. then using math / geometric functions convert to X, Y, Z
x=  Math.cos(latitude) * Math.cos(longitude),
y = Math.cos(latitude) * Math.sin(longitude),
z = Math.sin(latitude)

### calcAvgCartCoord
parameters - takes an array of points (X, Y, Z)
returns - normalized average
 1. compute the average of all three points
 2. compute the normalization factor using the norm of a vector using the Euclidean norm  which is the square root of the sum of the squares of coordinates X, Y, Z
 3. apply the norm to the average of each point

 ### convCartToLatLon
parameters - a set of points X, Y, Z
return - latitude and longitude in degrees
 1. then using math / geometric functions X, Y, Z to latitude longitude (in radians)
lattitude = Math.atan2(z, Math.sqrt(x  x + y  y));
longitude = Math.atan2(y, x);
 2. convert radians to degrees *conRadToDeg*
    
### convRadToDeg
parameters - latitude or longitude point in radians
returns - point in degrees
 1. multiple radians by 180 and devide by pi   (rad * 180/ π )

### convDegToRad
parameters - latitude or longitude point in degrees
returns - point in degrees
 1. multiple degrees by pi and divide by 180 (deg * π / 180 )
//3/30 - Kevin Lattuada


const readline = require('readline');



//Converts degrees to radians.
function convDegToRad(deg) {
    return (deg*Math.PI/180);

}

//Converts radians to degrees.
function convRadToDeg(rad) {
    return (rad * 180 / Math.PI);

}


// Convert spherical coordinates (latitude and longitude) to Cartesian coordinates (X, Y, Z)
//Converts latitude and longitude coordinates to Cartesian coordinates.
//returns An object representing the Cartesian coordinates with properties x, y, and z.
function convLatLonToCart(lat, lon) {
    const latRad = convDegToRad(lat);
    const lonRad = convDegToRad(lon);

    return {
        x: Math.cos(latRad) * Math.cos(lonRad),
        y: Math.cos(latRad) * Math.sin(lonRad),
        z: Math.sin(latRad)
    };
}


//Calculates the average Cartesian coordinates of a set of points.
//points - An array of points with x, y, and z coordinates.
//returns An object containing the average x, y, and z coordinates normalized to unit length.

function avgCartCoord(points) {
    let sumX = 0;
    let sumY = 0;
    let sumZ = 0;

    for (const point of points) {
        sumX += point.x;
        sumY += point.y;
        sumZ += point.z;
    }

    const numPoints = points.length;

    const xAvg = sumX / numPoints;
    const yAvg = sumY / numPoints;
    const zAvg = sumZ / numPoints;

    const norm = Math.sqrt(xAvg * xAvg + yAvg * yAvg + zAvg * zAvg);

    return {
        x: xAvg / norm,
        y: yAvg / norm,
        z: zAvg / norm
    };
}



//converts cartisian coordinates to latitude and longitude

function cartToLatLon(x, y, z) {
    const latRad = Math.atan2(z, Math.sqrt(x * x + y * y));
    const lonRad = Math.atan2(y, x);

    const lat = convRadToDeg(latRad);
    const lon = convRadToDeg(lonRad);

    return {
        lat,
        lon
    };
}



// Calculates the midpoint of a set of coordinates.
// coord - An array of objects representing latitude and longitude, in degrees, coordinates.
// Returns an object containing the latitude and longitude of the midpoint.
function calcMidPoint(coord) {
    // Convert latitude and longitude coordinates to Cartesian coordinates.
    const cartPoints = [];
    for (let i = 0; i < coord.length; i++) {
        cartPoints.push(convLatLonToCart(coord[i].lat, coord[i].lon));
    }

    // Calculate the average Cartesian coordinates of the points.
    const avgCart = avgCartCoord(cartPoints);

    // Convert the average Cartesian coordinates back to latitude and longitude.
    const avgDeg = cartToLatLon(avgCart.x, avgCart.y, avgCart.z);

    return avgDeg;
}



//just some test coordinates i used as a starting point
const testCoord = [
    {
        lat: 41.4880,
        lon: -71.5340
    }, // University of Rhode Island
    {
        lat: 41.9212,
        lon: -71.5370
    }, // Bryant University
    {
        lat: 42.3868,
        lon: -72.5301
    }
    // UMass Amherst
];

//part of the tester
//const midPoint = calcMidPoint(testCoord);
//console.log('Middle Point Latitude:', midPoint.lat);
//console.log('Niddle Point Longitude:', midPoint.lon);



// Interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create an empty array to store the coordinates
const coordinates = [];

// Function to prompt the user for latitude and longitude
function promptCoordinates() {
    rl.question('Enter latitude: ', (lat) => {
        rl.question('Enter longitude: ', (lon) => {
            // Convert the input to numbers
            const latitude = parseFloat(lat);
            const longitude = parseFloat(lon);

            // Check if the input is valid
            if (isNaN(latitude) || isNaN(longitude)) {
                console.log('Invalid input. Please enter valid latitude and longitude.');
                promptCoordinates();
            } else {
                // Add the coordinates to the array
                coordinates.push({ lat: latitude, lon: longitude });

                // Ask if the user wants to enter more coordinates
                rl.question('Do you want to enter more coordinates? (yes/no): ', (answer) => {
                    if (answer.toLowerCase() === 'yes') {
                        promptCoordinates();
                    } else {
                        // Close the readline interface
                        rl.close();

                        // Calculate the midpoint
                        const midPoint = calcMidPoint(coordinates);

                        // Print the midpoint latitude and longitude
                        console.log('Middle Point Latitude:', midPoint.lat);
                        console.log('Middle Point Longitude:', midPoint.lon);
                    }
                });
            }
        });
    });
}


// Start prompting the user for coordinates
promptCoordinates();
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.checkUsernameExists = functions.https.onRequest(async (req, res) => {
  try {
    const username = req.query.username;
    if (!username) {
      return res.status(400).send("No username provided.");
    }

    const snapshot = await admin.database().ref("/").once("value");
    let usernameExists = false;

    snapshot.forEach((userSnapshot) => {
      const userData = userSnapshot.val();
      if (userData.username === username) {
        usernameExists = true;
      }
    });

    return res.send(usernameExists);
  } catch (error) {
    console.error("Error checking username:", error);
    return res.status(500).send("Error checking username.");
  }
});
exports.getUserCoordinates = functions.https.onRequest(async (req, res) => {
  try {
    const username = req.query.username;
    if (!username) {
      return res.status(400).send("No username provided.");
    }

    const snapshot = await admin.database().ref("/").once("value");
    let userCoordinates;

    snapshot.forEach((userSnapshot) => {
      const userData = userSnapshot.val();
      if (userData.username === username) {
        userCoordinates = {
          lat: userData.lat,
          long: userData.long
        };
      }
    });

    if (!userCoordinates) {
      return res.status(404).send("User not found.");
    }

    return res.send(userCoordinates);
  } catch (error) {
    console.error("Error getting user coordinates:", error);
    return res.status(500).send("Error getting user coordinates.");
  }
});
function convDegToRad(deg) {
  return deg * Math.PI / 180;
}

function convRadToDeg(rad) {
  return rad * 180 / Math.PI;
}

function convLatLonToCart(lat, lon) {
  const latRad = convDegToRad(lat);
  const lonRad = convDegToRad(lon);

  return {
      x: Math.cos(latRad) * Math.cos(lonRad),
      y: Math.cos(latRad) * Math.sin(lonRad),
      z: Math.sin(latRad)
  };
}

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

function calcMidPoint(coord) {
  const cartPoints = [];
  for (let i = 0; i < coord.length; i++) {
      cartPoints.push(convLatLonToCart(coord[i].lat, coord[i].lon));
  }
  const avgCart = avgCartCoord(cartPoints);
  const avgDeg = cartToLatLon(avgCart.x, avgCart.y, avgCart.z);
  return avgDeg;
}

exports.calculateMidpoint = functions.https.onRequest((req, res) => {
  try {
      const { lat1, lon1, lat2, lon2 } = req.query;

      if (!lat1 || !lon1 || !lat2 || !lon2) {
          return res.status(400).send("Latitude and longitude coordinates are required.");
      }

      const coordinates = [
          { lat: parseFloat(lat1), lon: parseFloat(lon1) },
          { lat: parseFloat(lat2), lon: parseFloat(lon2) }
      ];

      const midPoint = calcMidPoint(coordinates);
      return res.json(midPoint);
  } catch (error) {
      console.error("Error calculating midpoint:", error);
      return res.status(500).send("Error calculating midpoint.");
  }
});
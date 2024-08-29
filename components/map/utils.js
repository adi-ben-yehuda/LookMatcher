import * as Location from "expo-location";

export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRadians = (deg) => (deg * Math.PI) / 180.0;

  const R = 6371; // Earth's radius in km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
};

export const fetchLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("Permission to access location was denied");
    return null;
  }

  let location = await Location.getCurrentPositionAsync({});
  return location.coords;
};

export const findClosestStore = (userLocation, stores) => {
  if (!stores.length) return null;

  return stores.reduce((prev, curr) => {
    const prevDistance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      prev.latitude,
      prev.longitude
    );
    const currDistance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      curr.latitude,
      curr.longitude
    );
    return currDistance < prevDistance ? curr : prev;
  });
};

export const fetchStores = async (store) => {
  try {
    const response = await fetch(
      `http://192.168.1.109:3000/api/stores/${store}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch stores");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

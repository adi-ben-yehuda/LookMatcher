import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useRoute } from "@react-navigation/native";

export default function App() {
  const [location, setLocation] = useState(null);
  const [stores, setStores] = useState([]);
  const [closestStore, setClosestStore] = useState(null);
  const route = useRoute();
  const { store } = route.params;

  useEffect(() => {
    const fetchStores = async () => {
      try {
        console.log("Store passed to MapPage:", store);
        const response = await fetch(
          `http://192.168.1.109:3000/api/stores/${store}`
        );
        const data = await response.json();
        setStores(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);

      if (stores.length > 0) {
        const closest = stores.reduce((prev, curr) => {
          const prevDistance = calculateDistance(
            loc.coords.latitude,
            loc.coords.longitude,
            prev.latitude,
            prev.longitude
          );
          const currDistance = calculateDistance(
            loc.coords.latitude,
            loc.coords.longitude,
            curr.latitude,
            curr.longitude
          );
          return currDistance < prevDistance ? curr : prev;
        });

        setClosestStore(closest);
      }
    })();
  }, [stores]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (deg) => (deg * Math.PI) / 180.0;

    const R = 6371;
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

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location ? location.latitude : 32.0853,
          longitude: location ? location.longitude : 34.7818,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="My Location"
            pinColor="purple"
          />
        )}

        {stores.map((store) => (
          <Marker
            key={store._id}
            coordinate={{
              latitude: store.latitude,
              longitude: store.longitude,
            }}
            title={store.address}
            pinColor={
              closestStore && closestStore._id === store._id ? "red" : "blue"
            }
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

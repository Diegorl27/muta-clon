import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { PlayButton, RecolecButton, Cupon } from "../components";

import { colores } from "../../theme/AppTheme";

export const InicioScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.containerMain, paddingTop: top }}>
      <StatusBar backgroundColor={colores.tertiary} />
      <Text style={styles.header}>Buenas tardes mutante,</Text>
      <Text style={styles.name}>Jeffrey Saavedra</Text>

      <View style={styles.containerImg}>
        <Image
          source={{
            uri: "https://img.planetafobal.com/2022/08/manchester-city-tercera-camiseta-puma-2022-2023-bvh.jpg",
          }}
          style={styles.img}
        />
        <View style={styles.containerText}>
          <View>
            <Text style={styles.textImage}>Conoce nuestra</Text>
            <Text style={styles.textImage}>FUERZA MUTANTE</Text>
          </View>

          <PlayButton />
        </View>
      </View>

      <Text style={{ color: "white", marginTop: 5, fontSize: 13 }}>
        Lo nuevo
      </Text>

      <Cupon id="25d1-wlcu-ex9f" utilizado />

      <TouchableOpacity
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <RecolecButton />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: colores.tertiary,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 17,
    color: "white",
    opacity: 0.4,
  },
  name: {
    marginTop: 6,
    fontSize: 20,
    color: "white",
  },
  containerImg: {
    marginTop: 24,
    height: 160,
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 8,
  },
  img: {
    flex: 1,
    borderRadius: 8,
    resizeMode: "contain",
    opacity: 0.5,
  },
  containerText: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 30,
  },
  textImage: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});

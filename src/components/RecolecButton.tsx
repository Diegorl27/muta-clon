import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { colores } from "../../theme/AppTheme";
import Icon from "react-native-vector-icons/Ionicons";

export const RecolecButton = () => {
  return (
    <View style={styles.containerButton}>
      <Icon name="sync-outline" size={30} color={colores.secondary} />
      <Text style={styles.textButton}>Solicitar recolección</Text>
      <Icon name="arrow-forward-outline" size={20} color={colores.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 45,
    marginBottom: 20,
    width: 300,
    height: 60,
    backgroundColor: colores.primary,
    borderRadius: 50,
  },
  textButton: {
    color: colores.secondary,
    fontSize: 15,
    fontWeight: "800",
  },
});

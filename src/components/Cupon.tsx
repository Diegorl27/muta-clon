import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colores } from "../../theme/AppTheme";

interface Props {
  promo?: string;
  utilizado: boolean;
  id: string;
}

export const Cupon = ({
  id,
  utilizado,
  promo = "$15.000 en tom noodleshop",
}: Props) => {
  return (
    <View style={styles.cuponContainer}>
      <Text style={styles.cuponPrice}>{promo}</Text>
      <Text style={{ color: "white", fontSize: 12, fontWeight: "300" }}>
        Muestra este cupón y obtén tu beneficio
      </Text>
      <Text style={styles.IdCupon}>
        {id} - {utilizado ? "utilizado" : "canjeable"}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 11,
          fontWeight: "300",
          marginTop: 5,
        }}
      >
        * Tendrás 60 días para redimirlo - Válido solo presencial
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cuponContainer: {
    marginTop: 20,
    padding: 22,
    height: 110,
    justifyContent: "center",
    width: "100%",
    backgroundColor: colores.secondary,
    borderRadius: 8,
  },
  cuponPrice: {
    color: colores.primary,
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "700",
  },
  IdCupon: {
    marginTop: 3,
    color: "white",
    fontSize: 15.5,
    textTransform: "uppercase",
    fontWeight: "400",
  },
});

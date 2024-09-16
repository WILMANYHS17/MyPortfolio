import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import * as Animatable from "react-native-animatable";
import { useFocusEffect } from "@react-navigation/native";
import Styles from "../styles/about-styles";
import AboutMe from "../components/about-me";
const AboutScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);
  let animRef = React.useRef(null);

  // Simula la carga de datos
  useEffect(() => {
    const loadData = async () => {
      // Simula una llamada a la API o carga de datos
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula un retraso de 2 segundos
      setIsLoading(false); // Cambia el estado a false cuando los datos están listos
      setIsContentVisible(true); // Muestra el contenido
    };

    loadData();
  }, []);

  // Animación cuando la pantalla está en foco
  useFocusEffect(
    React.useCallback(() => {
      if (isContentVisible) {
        animRef.current?.fadeIn(1000); // Aplica la animación de entrada
      }
    }, [isContentVisible])
  );

  // Muestra el indicador de carga si está cargando
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Animatable.View style={Styles.container} ref={animRef}>
      <AboutMe></AboutMe>
    </Animatable.View>
  );
};
export default AboutScreen;

import React, { useState, useEffect } from "react";
import { View, Text, Image, Animated } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { FiraSans_400Regular } from "@expo-google-fonts/fira-sans";
import { FiraCode_400Regular } from "@expo-google-fonts/fira-code";
import * as SplashScreen from "expo-splash-screen";
import Styles from "../styles/skills-styles";
import { ScrollView } from "react-native-gesture-handler";
import { Bar } from "react-native-progress";

const SkillsMe = () => {
  const blueColor = "#3b5998";
  const percentage70 = 0.7;
  const percentage60 = 0.6;
  const percentage50 = 0.5;
  const percentage40 = 0.4;
  const percentage30 = 0.3;
  const percentage20 = 0.2;
  const [appReady, setAppReady] = useState(false);

  // Prevenir que la pantalla de carga se oculte automáticamente
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    FiraSans_400Regular,
    FiraCode_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded]);

  if (!appReady) {
    return null; // Muestra la pantalla de carga hasta que todo esté listo
  }
  const AnimatedContainer = ({ children }) => {
    const [scaleValue] = useState(new Animated.Value(1));

    const handleMouseEnter = () => {
      Animated.timing(scaleValue, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };

    const handleMouseLeave = () => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };

    return (
      <Animated.View
        style={[Styles.imagesContainer, { transform: [{ scale: scaleValue }] }]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Animated.View>
    );
  };

  return (
    <ScrollView>
      <View style={Styles.skillsContainer}>
        <Text style={Styles.title}>Lenguajes de programación</Text>
        <AnimatedContainer>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/kotlin-logo.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>Kotlin</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage70} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>70%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/java-logo-1.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>Java</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage60} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>60%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/html-1.svg")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>Html</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage40} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>40%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/css3-logo.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>Css</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage40} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>40%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/javascript-logo.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>JavaScript</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage50} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>50%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/python-logo.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>Python</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage30} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>30%</Text>
            </View>
          </View>
        </AnimatedContainer>
        <Text style={Styles.title}>Gestores de Bases de Datos</Text>
        <AnimatedContainer>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/mysql-logo.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>MySQL</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage50} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>50%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/microsoft-sql-server-logo.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>SQLServer</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage30} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>30%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/postgresql.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>PostgreSQL</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage40} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>40%</Text>
            </View>
          </View>
        </AnimatedContainer>
        <Text style={Styles.title}>Cloud</Text>
        <AnimatedContainer>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/firebase-logo.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>Firebase</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage50} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>50%</Text>
            </View>
          </View>
        </AnimatedContainer>
        <Text style={Styles.title}>Frameworks</Text>
        <AnimatedContainer>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/react-native.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>React Native</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage40} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>40%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/fastapi.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>FastAPI</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage30} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>30%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/laravel.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>Laravel</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage20} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>20%</Text>
            </View>
          </View>
        </AnimatedContainer>
        <Text style={Styles.title}>Entornos de desarrollo</Text>
        <AnimatedContainer>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/AndroidStudio2023.svg")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>Android Studio</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage70} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>70%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/visual-studio-code-logo.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>Visual Studio Code</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage60} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>60%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/eclipse-logo.png")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>Eclipse</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage50} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>50%</Text>
            </View>
          </View>
          <View style={Styles.imageText}>
            <Image
              source={require("../assets/images/NetBeans-Logo.wine.svg")}
              style={Styles.lenguageImages}
            ></Image>
            <Text style={Styles.lenguageText}>NetBeans</Text>
            <View style={Styles.progressBarContainer}>
              <Bar
                progress={percentage50} // Progreso (70%)
                width={150} // Ancho de la barra
                height={15} // Altura de la barra
                color={blueColor} // Color azul de la barra de progreso
                borderWidth={1} // Grosor del borde
                borderColor="#000" // Color del borde negro
                borderRadius={10} // Redondea las esquinas de la barra de progreso
                style={Styles.progressBar} // Estilo de la barra
              />
              <Text style={Styles.percentageText}>50%</Text>
            </View>
          </View>
        </AnimatedContainer>
      </View>
    </ScrollView>
  );
};

export default SkillsMe;

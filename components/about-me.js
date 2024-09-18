import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { RobotoMono_400Regular } from "@expo-google-fonts/roboto-mono";
import { FiraSans_400Regular } from "@expo-google-fonts/fira-sans";
import Styles from "../styles/about-styles";
import { TouchableOpacity } from "react-native";

const AboutMe = () => {
  const [appReady, setAppReady] = useState(false);

  // Prevenir que la pantalla de carga se oculte automáticamente
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Lato_400Regular,
    RobotoMono_400Regular,
    FiraSans_400Regular,
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
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../assets/documents/HV Wilman.pdf";
    link.download = "Hoja de vida Wilman.pdf";
    link.click();
  };
  const phoneNumber = "573133992230";
  const handlePress = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
    /*Linking.openURL(url).catch((err) =>
      console.error("Error al abrir WhatsApp", err)
    );*/
  };
  return (
    <View style={Styles.aboutContainer}>
      <View style={Styles.rowContainer}>
        <Image
          source={require("../assets/images/CircleProfilePhoto.jpeg")}
          style={Styles.profilePhoto}
        ></Image>
        <View style={Styles.textContainer}>
          <Text style={Styles.titleName}>Wilman Yecid Hernández Suesca</Text>
          <Text style={Styles.titleUniversitydegree}>
            Ingeniero de Sistemas
          </Text>
          <Text style={Styles.title}>Sobre Mí</Text>
          <Text style={Styles.description}>
            Profesional en ingeniería de sistemas, dedicado mayormente en el
            desarrollo móvil siendo FullStack con conocimientos necesarios para
            la estructuración, el desarrollo web y bases de datos. Pasión por la
            mejora continua y el aprendizaje constante me impulsa a superar
            desafíos y alcanzar objetivos, adaptándome rápidamente a los
            diferentes entornos laborales.
          </Text>
          <TouchableOpacity onPress={handleDownload} style={Styles.buttonPDF}>
            <Text style={Styles.buttonText}>Descargar Hoja de vida</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.contactContainer}>
        <View style={Styles.rowContainer}>
          <Text style={Styles.title}>Contáctame:</Text>
          <Image
            source={require("../assets/images/whatsApp.png")}
            style={Styles.iconImage}
          ></Image>
          <TouchableOpacity onPress={handlePress}>
            <Text style={Styles.description}>(+57) 3133992230</Text>
          </TouchableOpacity>
          <Image
            source={require("../assets/images/gmail.png")}
            style={Styles.iconImage}
          ></Image>
          <Text style={Styles.description}>whernandezsuesca@gmail.com</Text>
          <Image
            source={require("../assets/images/linkedin.png")}
            style={Styles.iconImage}
          ></Image>
          <a
            href={
              "https://www.linkedin.com/in/wilman-yecid-hernández-suesca-424317174"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text style={Styles.description}>
              Visitar mi perfil de LinkedIn
            </Text>
          </a>
        </View>
      </View>
    </View>
  );
};
export default AboutMe;

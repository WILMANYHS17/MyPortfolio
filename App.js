import React, { useState } from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, TouchableOpacity, Text } from "react-native";
import StylesHeader from "./styles/nav-styles";
import SkillsScreen from "./screens/skills-screen";
import AboutScreen from "./screens/about-screen";
import ExperienceScreen from "./screens/experience-screen";

const Stack = createNativeStackNavigator();
const CustomHeader = ({ navigation }) => {
  const route = useRoute();
  const [isHovered, setIsHovered] = useState({
    about: false,
    skills: false,
    experience: false,
  });
  const getUnderlineStyle = (screenName) => {
    return route.name === screenName ? StylesHeader.activeNavItem : null;
  };
  return (
    <View style={StylesHeader.header}>
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Text
          style={[
            StylesHeader.navItem,
            isHovered.about && StylesHeader.navItemHovered,
            getUnderlineStyle("About"),
          ]} // Aplica los estilos condicionalmente
          onMouseEnter={() => setIsHovered({ ...isHovered, about: true })} // Cambia el estado al pasar el cursor
          onMouseLeave={() => setIsHovered({ ...isHovered, about: false })} // Cambia el estado al salir el cursor
        >
          Sobre mí
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Skills")}>
        <Text
          style={[
            StylesHeader.navItem,
            isHovered.skills && StylesHeader.navItemHovered,
            getUnderlineStyle("Skills"),
          ]} // Aplica los estilos condicionalmente
          onMouseEnter={() => setIsHovered({ ...isHovered, skills: true })} // Cambia el estado al pasar el cursor
          onMouseLeave={() => setIsHovered({ ...isHovered, skills: false })} // Cambia el estado al salir el cursor
        >
          Habilidades
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Experience")}>
        <Text
          style={[
            StylesHeader.navItem,
            isHovered.experience && StylesHeader.navItemHovered,
            getUnderlineStyle("Experience"),
          ]} // Aplica los estilos condicionalmente
          onMouseEnter={() => setIsHovered({ ...isHovered, experience: true })} // Cambia el estado al pasar el cursor
          onMouseLeave={() => setIsHovered({ ...isHovered, experience: false })} // Cambia el estado al salir el cursor
        >
          Experiencia
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({ navigation }) => (
            <CustomHeader navigation={navigation}></CustomHeader>
          ),
        }}
      >
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "Sobre mí" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Skills"
          component={SkillsScreen}
          options={{ title: "Mis habilidades" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Experience"
          component={ExperienceScreen}
          options={{ title: "Mi Experiencia" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

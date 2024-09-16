import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import ExperienceStyles from "../styles/experience-styles";

const ExperienceMe = () => {
  return (
    <ScrollView>
      <View style={ExperienceStyles.experienceContainer}>
        <Text style={ExperienceStyles.title}>Proyectos</Text>
        <View style={ExperienceStyles.rowContainer}>
          <Image
            source={require("../assets/images/EasySoccer.jpeg")}
            style={ExperienceStyles.companyImage}
          ></Image>
          <View style={ExperienceStyles.textContainer}>
            <Text style={ExperienceStyles.companyTitle}>EasySoccer</Text>
            <Text style={ExperienceStyles.dateText}>
              Febrero a noviembre del 2023
            </Text>
            <Text style={ExperienceStyles.companyDescription}>
              Aplicación móvil en Android como proyecto de grado. Es un
              desarrollo individual lo cual involucra el diseño en Photoshop,
              documentación de repositorios nacionales, manipulación de datos en
              Firebase, investigación y recopilación de datos, programación en
              Android Studio con lenguaje Kotlin, inyección de dependencias
              Koin, arquitectura MVVM, Retrofit y diferentes parámetros para el
              óptimo funcionamiento de la aplicación.
            </Text>
            <View style={ExperienceStyles.rowContainer}>
              <Image
                source={require("../assets/images/github.png")}
                style={ExperienceStyles.iconImage}
              ></Image>
              <a
                href={"https://github.com/WILMANYHS17/EasySoccerFinal"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text style={ExperienceStyles.companyDescription}>
                  EasySoccer
                </Text>
              </a>
            </View>
          </View>
        </View>
        <View style={ExperienceStyles.rowContainer}>
          <Image
            source={require("../assets/images/portfolio_10661829.png")}
            style={ExperienceStyles.companyImage}
          ></Image>
          <View style={ExperienceStyles.textContainer}>
            <Text style={ExperienceStyles.companyTitle}>Portfolio</Text>
            <Text style={ExperienceStyles.dateText}>Julio del 2024</Text>
            <Text style={ExperienceStyles.companyDescription}>
              Mi portfolio desarrollado con el Framework React Native y
              JavaScript, con enfasis en la arquitectura MVC con el uso de
              componentes para cada vista del portfolio.
            </Text>
          </View>
        </View>
        <Text style={ExperienceStyles.title}>Experiencia laboral</Text>
        <View style={ExperienceStyles.rowContainer}>
          <Image
            source={require("../assets/images/Ejecutora-de-proyectos-icon.png")}
            style={ExperienceStyles.companyImage}
          ></Image>
          <View style={ExperienceStyles.textContainer}>
            <Text style={ExperienceStyles.companyTitle}>
              Soporte técnico en procesos electorales de escrutinio elecciones
              territoriales 2023
            </Text>
            <Text style={ExperienceStyles.dateText}>
              Octubre a Noviembre del 2023
            </Text>
            <Text style={ExperienceStyles.companyDescription}>
              Preparación, instalación, guía de uso de software, mantenimiento y
              organizador de los equipos e información correspondientes al
              escrutinio. Esto se realizó en el municipio de Boyacá, Boyacá.
            </Text>
          </View>
        </View>
        <View style={ExperienceStyles.rowContainer}>
          <Image
            source={require("../assets/images/Fundación.png")}
            style={ExperienceStyles.companyImage}
          ></Image>
          <View style={ExperienceStyles.textContainer}>
            <Text style={ExperienceStyles.companyTitle}>
              Capacitación para adultos mayores
            </Text>
            <Text style={ExperienceStyles.dateText}>
              Marzo a Septiembre del 2023
            </Text>
            <Text style={ExperienceStyles.companyDescription}>
              Control y capacitación acerca del manejo básico de las TIC
              (Tecnologías de la información y comunicación) a personas de la
              tercera edad en las verederas del municipio de Tuta Boyacá.
              Cumpliendo protocolos de seguridad informativos, control de
              tiempos, manejo de escenario y desarrollando informes
              correspondientes de los temas tratados en las capacitaciones.
            </Text>
          </View>
        </View>
        <View style={ExperienceStyles.rowContainer}>
          <Image
            source={require("../assets/images/Fundación.png")}
            style={ExperienceStyles.companyImage}
          ></Image>
          <View style={ExperienceStyles.textContainer}>
            <Text style={ExperienceStyles.companyTitle}>
              Embalaje de mercados
            </Text>
            <Text style={ExperienceStyles.dateText}>
              Noviembre a Diciembre del 2020
            </Text>
            <Text style={ExperienceStyles.companyDescription}>
              Embalador de mercado en una fundación benéfica para personas de la
              tercera edad en Tunja, Boyacá. Las responsabilidades incluían
              realizar el embalaje para un número determinado de personas con su
              correspondiente mercado, asegurando que cada mercado contuviera
              todos los elementos de la lista y organizándolos para que entraran
              en la bolsa o caja según fuera el caso. Además, se manejaba un
              peso específico para las verduras.
            </Text>
          </View>
        </View>
        <View style={ExperienceStyles.rowContainer}>
          <Image
            source={require("../assets/images/cafexpress.jpeg")}
            style={ExperienceStyles.companyImage}
          ></Image>
          <View style={ExperienceStyles.textContainer}>
            <Text style={ExperienceStyles.companyTitle}>Mesero y vendedor</Text>
            <Text style={ExperienceStyles.dateText}>
              Diciembre 2019 a Enero del 2020
            </Text>
            <Text style={ExperienceStyles.companyDescription}>
              Vendedor y mesero en la cafetería/Licorera Andes CafExpress en el
              municipio de Tuta, Boyacá. Responsabilidades incluyeron el manejo
              de la caja registradora, gestión de precios, atención al cliente,
              servicio de diversas bebidas (principalmente calientes), licor,
              dulces y alimentos calientes, así como el manejo de inventarios y
              la organización del local.
            </Text>
          </View>
        </View>
        <View style={ExperienceStyles.rowContainer}>
          <Image
            source={require("../assets/images/calzado.jpg")}
            style={ExperienceStyles.companyImage}
          ></Image>
          <View style={ExperienceStyles.textContainer}>
            <Text style={ExperienceStyles.companyTitle}>
              Auxiliar de ventas de calzado
            </Text>
            <Text style={ExperienceStyles.dateText}>Enero 2018</Text>
            <Text style={ExperienceStyles.companyDescription}>
              Vendedor de calzado en un almacén en la ciudad de Bogotá.
              Funciones de gestión de inventario de calzado y ofrecer atención
              al cliente personalizada. Esto incluía la tarea de convencer al
              cliente y presentar diversas alternativas según las necesidades y
              preferencias.
            </Text>
          </View>
        </View>

        <View style={ExperienceStyles.rowContainer}>
          <Image
            source={require("../assets/images/Mercoop.png")}
            style={ExperienceStyles.companyImage}
          ></Image>
          <View style={ExperienceStyles.textContainer}>
            <Text style={ExperienceStyles.companyTitle}>
              Auxiliar de mercadeo y bodega
            </Text>
            <Text style={ExperienceStyles.dateText}>
              Marzo a Julio del 2016
            </Text>
            <Text style={ExperienceStyles.companyDescription}>
              Auxiliar en el autoservicio MERCOOP del municipio Tuta, Boyacá.
              Responsabilidades incluyeron la atención al cliente, manejo de
              inventarios, surtido de mercado y otras actividades enfocadas en
              la organización y atención del local.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExperienceMe;

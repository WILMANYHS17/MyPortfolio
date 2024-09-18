import { StyleSheet } from "react-native";
const fonts = {
  montserrat: "Montserrat_400Regular", //Title
  lato: "Lato_400Regular", //Description
  robotoMono: "RobotoMono_400Regular", //Date
  firaSans: "FiraSans_400Regular", //Title secundary
};
const colors = {
  primaryBlue: "#007bff", // Ideal para botones principales
  darkBlue: "#0056b3", // Para botones al pasar el mouse o botones secundarios
  lightBlue: "#cce5ff", // Para fondos suaves o áreas destacadas
  primaryGreen: "#28a745", // Para botones de éxito o confirmación de acciones
  softGreen: "#d4edda", // Para fondos de secciones informativas o ligeras
  primaryRed: "#dc3545", // Para botones de alerta o acciones importantes
  lightRed: "#f8d7da", // Para alertas o fondos de advertencia
  yellow: "#ffc107", // Para notificaciones o botones de advertencia
  gold: "#ffdd57", // Botones o acentos elegantes y llamativos
  darkGray: "#343a40", // Para textos y fondos oscuros
  mediumGray: "#6c757d", // Para fondos de tarjetas o textos secundarios
  lightGray: "#f8f9fa", // Para fondos generales o zonas amplias
  softWhite: "#ffffff", // Color de fondo limpio o para contrastar con colores oscuros
  black: "#000000", // Para textos o acentos
  lavender: "#e6e6fa", // Para fondos suaves, componentes resaltados o textos sutiles
  blueColor: "#3b5998",
  lightWhite: "#f5f5f5",
};
const ExperienceStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  experienceContainer: {
    margin: 10,
    marginLeft: 100,
    marginRight: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    fontFamily: fonts.montserrat,
  },
  rowContainer: {
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    borderRadius: 10,
    borderColor: colors.darkBlue,
    borderWidth: 2,
    backgroundColor: colors.lightBlue,
  },
  companyImage: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginRight: 10,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
  },
  companyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
    fontFamily: fonts.montserrat,
  },
  dateText: {
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 10,
    fontFamily: fonts.robotoMono,
  },
  companyDescription: {
    fontSize: 16,
    textAlign: "justify",
    marginRight: 10,
    fontFamily: fonts.lato,
  },
  lenguageTitle: {
    fontSize: 16,
    textAlign: "center",
    marginRight: 10,
    fontFamily: fonts.firaSans,
  },
  lenguageImages: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 20,
  },
  rowContainerIcons: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageAndText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
export default ExperienceStyles;

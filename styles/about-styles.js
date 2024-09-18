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

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.lavender,
  },
  aboutContainer: {
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: colors.lightWhite,
    borderRadius: 20,
    borderColor: colors.darkBlue,
    borderWidth: 2,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    margin: 10,
  },
  titleName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: fonts.montserrat,
  },
  titleUniversitydegree: {
    fontSize: 26,
    fontWeight: "light",
    marginBottom: 50,
    fontStyle: "italic",
    fontFamily: fonts.firaSans,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: fonts.montserrat,
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    fontFamily: fonts.lato,
  },
  profilePhoto: {
    width: 400, // Ajusta el ancho según tu preferencia
    height: 400, // Ajusta la altura según tu preferencia
    marginBottom: 10, // Espacio entre la imagen y el texto
    marginTop: 15,
  },
  buttonPDF: {
    marginTop: 10,
    backgroundColor: colors.primaryBlue,
    borderRadius: 5,
    width: 200,
    height: 30,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: colors.darkGray,
  },
  contactContainer: {
    flex: 1,
    alignItems: "center",
  },
  iconImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 20,
  },
});
export default Styles;

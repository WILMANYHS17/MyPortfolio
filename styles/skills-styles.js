import { StyleSheet } from "react-native";
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
  },
  skillsContainer: {
    margin: 10,
    marginLeft: 100,
    marginRight: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
  },
  imagesContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: colors.darkBlue,
    borderWidth: 2,
    marginBottom: 20,
    backgroundColor: colors.lightBlue,
  },
  boxDefault: {
    transform: [{ scale: 1 }],
  },
  boxHovered: {
    transform: [{ scale: 1.1 }],
  },
  imageText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  lenguageImages: {
    width: 200,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "contain",
  },
  lenguageText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  progressBarContainer: {
    position: "relative", // Posicionamiento relativo para colocar el texto sobre la barra
    alignItems: "center",
  },
  progressBar: {
    borderWidth: 1, // Grosor del borde de la barra
    borderColor: colors.blueColor, // Color del borde
    borderRadius: 10, // Esquinas redondeadas
    marginBottom: 10,
  },
  percentageText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000", // Color del texto
  },
});

export default Styles;

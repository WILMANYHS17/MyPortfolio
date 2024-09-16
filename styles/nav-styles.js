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
const StylesHeader = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: colors.blueColor,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  navItem: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 20,
  },
  navItemHovered: {
    color: colors.gold, // El color al pasar el cursor
  },
});

export default StylesHeader;

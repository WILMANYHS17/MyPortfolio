import { StyleSheet } from "react-native";
const blueColor = "#3b5998";
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skillsContainer: {
    margin: 10,
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
  },
  imageText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
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
    marginBottom: 20,
  },
  progressBarContainer: {
    position: "relative", // Posicionamiento relativo para colocar el texto sobre la barra
    alignItems: "center",
  },
  progressBar: {
    borderWidth: 1, // Grosor del borde de la barra
    borderColor: blueColor, // Color del borde
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

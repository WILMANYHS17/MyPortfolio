import { StyleSheet } from "react-native";
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
  },
  rowContainer: {
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
  },
  companyImage: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  companyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  dateText: {
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 10,
  },
  companyDescription: {
    fontSize: 16,
    textAlign: "justify",
  },
  iconImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 20,
  },
});
export default ExperienceStyles;

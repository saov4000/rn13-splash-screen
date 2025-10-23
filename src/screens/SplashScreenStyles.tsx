import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3e3737ff",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: "15%",
    padding: 10*1.5,
  },
  logo: {
    
    width: 110*1.5,
    height: 110*1.5,
  },
  text: {
    color: "#EDF2F4",
    fontSize: 20*1.5,
    marginTop: 20*1.5,
  },
});

export default styles;

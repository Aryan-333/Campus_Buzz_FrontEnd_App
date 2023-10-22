import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width - 20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
  },

  tweetCard: {
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  container1: {
    alignSelf: "center",
    width,
  },
});

export default styles;

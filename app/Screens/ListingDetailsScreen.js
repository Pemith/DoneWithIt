import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Text from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red Jacket For Sale</Text>
        <Text style={styles.price}>$100</Text>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/Pemith.jpg")}
            title="Pemith Waidyaratne"
            subTitle="10 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;

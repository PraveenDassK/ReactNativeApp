import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  // FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Swiper from "react-native-swiper";
import { moderateScale } from "../config/scaling";
import { Rating } from 'react-native-ratings';

import Button from "../components/AppButton";

import itemObj from "../api/apiMarket";
import colors from "../config/colors";
import GlobalStyles from "../../GlobalStyles";

const itemArray = [itemObj, itemObj, itemObj, itemObj];

const itemArrayWithIds = itemArray.map((item, index) => {
  return { ...item, id: index + 1 };
});

const imageArray = [
  {
    id: 1,
    img: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    tag: "Fashion shouldn't cost the earth",
  },
  {
    id: 2,
    img: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    tag: "Fashion shouldn't cost the earth",
  },
  {
    id: 3,
    img: "https://fastly.picsum.photos/id/116/3504/2336.jpg?hmac=C46vgpj3R407e8pCyy8NhIsNaBZCjb4r5d71keNgMJY",
    tag: "Fashion shouldn't cost the earth",
  },
 
];

const capitalizeINIKA = (name) => {
  const names = name.split(" ");
  if (names[0] === "Inika") return names[0].toUpperCase() + " " + names[1];
};

const Marketplace = ({ navigation }) => {
  const [data, setData] = useState(itemArrayWithIds);
  const Item = ({
    name,
    images,
    fullName,
    description,
    price,
    score,
    discount,
    discountPrice,
    reviewCount,
  }) => (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("MarketPlaceItem")}
        style={styles.imageContainer}
      >
        <Image
          source={{ uri: images }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.cardFooterContainer}>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardheaderRow}>
            <Text style={styles.cardHeaderText}>{capitalizeINIKA(name)}</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="cards-heart-outline" size={24} />
            </TouchableOpacity>
          </View>
          <Text style={styles.cardHeaderText}>{fullName}</Text>
        </View>
        <Text style={styles.regularText}>{description}</Text>
        <View style={styles.priceContainer}>
          <View style={styles.priceItem}>
            <Text style={styles.priceSymbol}>£</Text>
            <Text style={styles.priceText}>{discountPrice.toFixed(2)}</Text>
          </View>
          <Text style={styles.priceDiscount}>{`${discount}% off`}</Text>
        </View>
        <View style={styles.priceItemFull}>
          <Text style={styles.priceSymbolFull}>£</Text>
          <Text style={[styles.priceTextFull, styles.regularText]}>
            {price.toFixed(2)}
          </Text>
        </View>
        <View style={styles.priceFooterContainer}>
          <View style={{flexDirection: "row"}}>
               <Rating startingValue={score} imageSize={20}/>
          <Text>
           ({reviewCount})
          </Text>
          </View>
     
          <TouchableOpacity>
            <Text style={styles.priceReview}>reviews</Text>
          </TouchableOpacity>
        </View>

        <Button title={"go to vendor"} textTransform={"uppercase"} onPress={() => navigation.navigate("MarketPlaceItem")}/>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      images={item.images[0]}
      fullName={item.fullName}
      description={item.description}
      discountPrice={item.price.fullPrice * item.price.discount}
      price={item.price.fullPrice}
      score={item.reviews.score}
      discount={item.price.discount * 100}
      reviewCount={item.reviews.reviews.length}
    />
  );

  // const ItemHeader = ({ image }) => (
  //   <View>
  //     <Image
  //       source={{ uri: image }}
  //       style={styles.imageHeader}
  //       resizeMode="cover"
  //     />
  //   </View>
  // );

  // const renderHeaderItem = ({ item }) => <ItemHeader image={item.img} />;

  const renderHeader = () => (
    <View style={styles.listHeaderConatainer}>
      <View style={styles.itemRow}>
        <Image
          source={require("../assets/logo-carbonyte.png")}
          style={styles.logoImage}
        />
        <View style={styles.itemRow}>
          <MaterialCommunityIcons name="magnify" size={24} />
          <MaterialCommunityIcons name="cards-heart-outline" size={24} />
        </View>
      </View>
      <View style={styles.imageContainerHeader}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          activeDotColor={colors.blue}
          nextButton={
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              color={colors.black}
              size={26}
            />
          }
          prevButton={
            <MaterialCommunityIcons
              name="arrow-left-circle-outline"
              color={colors.black}
              size={26}
            />
          }
        >
          {imageArray.map((item, index) => (
            <View key={item.id} style={styles.slide1}>
              <Image
                source={{ uri: imageArray[index]["img"] }}
                style={styles.image}
              />
              <View style={styles.slideTagContainer}>
                <Text style={styles.text}>{imageArray[index]["tag"]}</Text>
                <View style={styles.buttonContainer}>
                  <Button title="shop now" textTransform="uppercase" />
                </View>
              </View>
            </View>
          ))}
        </Swiper>
      </View>

      <View style={styles.ethikalContainer}>
        <Text style={styles.ethikalHeader}>
          Shop <Text style={styles.ethikalBoldHeader}>Carbonyte</Text>
        </Text>
        <Text>
          We are here to serve you & give you a better and reliable resource to
          make your purchase sustainable
        </Text>
      </View>

      <View style={styles.editorContainer}>
        <Text style={styles.editorHeader}>
          Editor's <Text style={styles.ethikalBoldHeader}>Top Picks</Text>
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(data) => data.id.toString()}
        data={data}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Marketplace;

const styles = StyleSheet.create({
  buttonContainer: { width: "60%" },
  buttonStyle: {
    color: colors.blue,
    fontSize: 30,
    fontWeight: "900",
  },
  cardFooterContainer: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 14,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    marginBottom: "5%",
  },
  cardHeaderContainer: {
    marginBottom: "5%",
  },
  cardheaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cardHeaderText: {
    fontWeight: "600",
  },
  comingSoonText: {
    textTransform: "uppercase",
    fontSize: moderateScale(80),
    fontWeight: "bold",
    textAlign: "center",
  },
  ethikalContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "5%",
  },
  ethikalHeader: {
    fontSize: 30,
  },
  ethikalBoldHeader: {
    fontWeight: "700",
  },
  ethikalText: {},
  editorContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "5%",
  },
  editorHeader: {
    fontSize: 30,
  },
  editorBoldHeader: {
    fontWeight: "700",
  },
  editorText: {},
  image: {
    flex: 1,
    width: "100%",
    height: 300,
  },
  imageHeader: {
    flex: 1,
    width: "100%",
    height: 300,
  },

  imageContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden", // Prevent image overflow
    backgroundColor: "white",
  },
  imageContainerHeader: {
    borderRadius: 15,
    overflow: "hidden", // Prevent image overflow
    backgroundColor: "white",
    width: "100%",
    height: 300,
    marginVertical: "5%",
  },

  listHeaderConatainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: "8%",
  },
  priceContainer: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceDiscount: {
    opacity: 0.9,
    fontWeight: "700",
    fontSize: 10,
  },
  regularText: {
    opacity: 0.9,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceFooterContainer: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceItem: {
    flexDirection: "row",
  },
  priceSymbol: {
    fontWeight: "600",
  },
  priceText: {
    fontSize: 24,
    fontWeight: "600",
  },
  priceItemFull: {
    flexDirection: "row",
  },
  priceSymbolFull: {
    fontSize: 8,
    fontWeight: "600",
  },
  priceReview: {
    color: colors.blue,
    textTransform: "capitalize",
  },
  priceTextFull: {
    fontSize: 10,
    textDecorationLine: "line-through",
  },
  logoImage: {
    width: 46,
    height: 46,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  slideTagContainer: {
    position: "absolute",
    bottom: 5,
    left: 5,
    width: "60%",
  },
  text: {
    color: colors.black,
    fontSize: 24,
    fontWeight: "600",
  },
});

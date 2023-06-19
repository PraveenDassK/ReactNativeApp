import React, { Fragment, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";

import { Rating, AirbnbRating } from "react-native-ratings";

import { MaterialCommunityIcons } from "react-native-vector-icons";
import Swiper from "react-native-swiper";
import { moderateScale } from "../config/scaling";

import Button from "../components/AppButton";

import itemObj from "../api/apiMarket";
import colors from "../config/colors";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel
} from "victory-native";

const sampleData = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 6 },
];

const itemArray = [itemObj, itemObj, itemObj, itemObj];

const itemArrayWithIds = itemArray.map((item, index) => {
  return { ...item, id: index + 1 };
});
const MarketPlaceItem = () => {
  const [data, setData] = useState(itemArrayWithIds);
  const discountPrice = itemObj.price.fullPrice * itemObj.price.discount;
  const discount = itemObj.price.discount * 100;
  const price = itemObj.price.fullPrice;
  const isTaxable = itemObj.price.taxInclusive;
  const capitalizeINIKA = (name) => {
    const names = name.split(" ");
    if (names[0] === "Inika") return names[0].toUpperCase() + " " + names[1];
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.imageContainerHeader}>
          <Image source={{ uri: itemObj.images[0] }} style={styles.image} />
        </View>
        <View style={styles.thumbnailsContainer}>
          {itemObj.thumbnailImages.map((image, index) => (
            <TouchableOpacity
              key={index.toString()}
              style={[
                styles.thumbnailContainer,
                { marginLeft: index !== 0 ? "2.5%" : null },
              ]}
            >
              <Image
                source={{ uri: image }}
                style={styles.thumbnailImages}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardheaderRow}>
            <Text style={styles.cardHeaderText}>
              {capitalizeINIKA(itemObj.name)}
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="cards-heart-outline" size={24} />
            </TouchableOpacity>
          </View>
          <Text style={styles.cardHeaderText}>{itemObj.fullName}</Text>
          <View style={styles.priceFooterContainer}>
            <Rating
              startingValue={itemObj.reviews.score}
              tintColor="#F6F5F8"
              imageSize={20}
            />
            <TouchableOpacity>
              <Text style={styles.priceReview}>
                ({itemObj.reviews.reviews.length} reviews)
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.priceContainer}>
            <View style={styles.priceItem}>
              <Text style={styles.priceSymbol}>£</Text>
              <Text style={styles.priceText}>{discountPrice.toFixed(2)}</Text>
              <View style={styles.priceItemFull}>
                <Text style={[styles.priceTextFull, styles.regularText]}>
                  {" "}
                  (£{price.toFixed(2)})
                </Text>
              </View>
            </View>
            <Text style={styles.priceDiscount}>{`${discount}% off`}</Text>
          </View>

          <View>
            {isTaxable ? (
              <Text>Inclusive of all taxes</Text>
            ) : (
              <Text>Not inclusive of all taxes</Text>
            )}
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeader}>description</Text>
            <View style={styles.descriptionContainerfull}>
              <Text>{itemObj.fullDescription}</Text>
            </View>
          </View>

          <View>
            <Text>Ethical Value</Text>
          </View>

          <View>
            <Button title={"go to vendor"} textTransform={"uppercase"} onPress={() => Alert.alert("Function in progress")}/>
          </View>
          <View style={styles.wishlistContainer}>
            <Text style={styles.wishlistText}>add to wishlist</Text>
            <View style={styles.wishListIcon}>
              <MaterialCommunityIcons name="cards-heart-outline" size={24} />
            </View>
          </View>

          <View style={styles.div} />

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeader}>product details</Text>
            <View style={styles.descriptionContainerfull}>
              <Text>{itemObj.productDetails}</Text>
            </View>
          </View>

          <View style={styles.div} />

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeader}>application</Text>
            <View style={styles.descriptionContainerfull}>
              <Text>{itemObj.howToUse}</Text>
            </View>
          </View>

          <View style={styles.div} />

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeader}>ingredients</Text>
            <View style={styles.descriptionContainerfull}>
              <Text>{itemObj.ingredients}</Text>
            </View>
          </View>

          <View style={styles.div} />

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeader}>seller information</Text>
            <View style={styles.descriptionSecondary}>
              <Text>
                Brand:{" "}
                <Text style={{ fontWeight: "700" }}>
                  {capitalizeINIKA(itemObj.name)}
                </Text>
              </Text>
            </View>
            <View style={styles.descriptionContainerfull}>
              <Text>{itemObj.sellerInformation}</Text>
            </View>
          </View>
        </View>
        <View style={styles.customReviewContainer}>
          <Text style={styles.customerHeader}>
            Customer <Text style={styles.customerBoldHeader}>Reviews</Text>
          </Text>
        </View>

        {/* <View style={styles.reviewImageContainerHeader}>
          <Text style={styles.descriptionHeader}>Reviews with images</Text>
          <View></View>
        </View> */}

        {itemObj.similarProducts[0]["reviews"]["reviews"].map(
          (product, index) => (
            <View key={index} style={styles.reviewImageContainerHeader}>
              <View style={styles.reviewImageHeader}>
                <View style={styles.reviewUser}>
                  <Text style={styles.reviewUserText}>
                    {product.reviewerName[0]}
                  </Text>
                </View>
                <View style={styles.reviewRatingContainer}>
                  <Text style={styles.reviewText}>{product.reviewerName}</Text>
                  <Rating startingValue={product.score} imageSize={20} />
                </View>
              </View>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionHeader}>{product.title}</Text>
                <View style={styles.descriptionContainerfull}>
                  <Text>{product.description}</Text>
                </View>
              </View>
            </View>
          )
        )}

        <View style={styles.reviewImageContainerHeader}>
          <View style={{justifyContent: "center", alignItems: "flex-start"}}>
            <View style={{marginVertical: "2%"}}>
              <Text style={styles.cardHeaderText}>Customer Reviews</Text>
            </View>
            
            <Rating startingValue={4} imageSize={26}/>
          </View>
          {/* <View style={{marginTop: "2%"}}>
            <Text style={{opacity: 0.9}}>Ratings</Text>
          </View> */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 200,
            }}
          >
            <VictoryChart
              domain={{ x: [0, 5], y: [0, 5] }}
              domainPadding={{ x: 50, y: 100 }}
            >
              <VictoryBar
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
                barRatio={0.8}
                horizontal
                style={{
                  data: { fill: "gold" },
                }}
                cornerRadius={{ top: 4 }}
                data={sampleData}
                labelComponent={<VictoryLabel dy={0}/>}
                labels={({ datum }) => datum.y -1}
              />
              <VictoryAxis
                style={{
                  axis: { stroke: "transparent" },
                  ticks: { stroke: "transparent" },
                  tickLabels: { fill: "transparent" },
                }}
              />
            </VictoryChart>
          </View>
        </View>

        <View style={styles.customReviewContainer}>
          <Text style={styles.customerHeader}>
            Explore{" "}
            <Text style={styles.customerBoldHeader}>Similar Products</Text>
          </Text>
        </View>
        <View style={styles.cardContainerHeader}>
          <Swiper style={styles.wrapper}>
            {data.map((item) => (
              <Card
                key={item.id}
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
            ))}
          </Swiper>
        </View>
      </ScrollView>
    </View>
  );
};

const Card = ({
  name,
  images,
  fullName,
  description,
  price,
  score,
  discount,
  discountPrice,
  reviewCount,
}) => {
  const capitalizeINIKA = (name) => {
    const names = name.split(" ");
    if (names[0] === "Inika") return names[0].toUpperCase() + " " + names[1];
  };
  return (
    <View>
      <TouchableOpacity
        // onPress={() => navigation.navigate("MarketPlaceItem")}
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
          <View style={{ flexDirection: "row" }}>
            <Rating startingValue={score} imageSize={20} />
            <Text>({reviewCount})</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.priceReview}>reviews</Text>
          </TouchableOpacity>
        </View>

        <Button title={"go to vender"} textTransform={"uppercase"} onPress={() => Alert.alert("Function in progress")}/>
      </View>
    </View>
  );
};

export default MarketPlaceItem;

const styles = StyleSheet.create({
  wrapper: {},

  cardContainerHeader: {
    borderRadius: 15,
    overflow: "hidden", // Prevent image overflow
    backgroundColor: "white",
    width: "100%",
    height: 600,
    marginVertical: "5%",
  },
  imageContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden", // Prevent image overflow
    backgroundColor: "white",
    height: 300,
  },
  cardHeaderContainer: {
    marginVertical: "5%",
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

  cardheaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  cardheaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cardHeaderText: {
    fontWeight: "600",
  },
  customReviewContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  customerHeader: {
    fontSize: 30,
  },
  customerBoldHeader: {
    fontWeight: "700",
  },
  descriptionContainer: {
    marginVertical: "5%",
  },
  descriptionContainerfull: {
    marginVertical: "5%",
  },
  descriptionHeader: {
    textTransform: "capitalize",
    fontWeight: "700",
  },
  descriptionSecondary: {
    marginTop: "2.5%",
  },
  div: {
    borderBottomWidth: 1,
    borderColor: colors.grey,
    marginVertical: "5%",
  },
  mainContainer: {
    flex: 1,
    padding: "5%",
  },
  priceContainer: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
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
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: "2.5%",
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
  priceDiscount: {
    opacity: 0.9,
    fontWeight: "700",
    fontSize: 10,
  },

  imageContainerHeader: {
    borderRadius: 10,
    overflow: "hidden", // Prevent image overflow
    backgroundColor: "white",
    width: "100%",
    height: 300,
    marginVertical: "2.5%",
  },
  image: {
    flex: 1,
    width: "100%",
    height: 300,
  },
  reviewImageContainerHeader: {
    borderRadius: 10,
    overflow: "hidden", // Prevent image overflow
    backgroundColor: "white",
    width: "100%",
    height: 300,
    marginVertical: "2.5%",
    padding: "5%",
  },
  customerReviewImageContainerHeader: {
    borderRadius: 10,
    overflow: "hidden", // Prevent image overflow
    backgroundColor: "white",
    width: "100%",
    height: 300,
    marginVertical: "2.5%",
    padding: "%",
  },
  reviewImageHeader: {
    flexDirection: "row",
  },
  reviewUser: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#F6F5F8",
    justifyContent: "center",
    alignItems: "center",
  },
  reviewRatingContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "2.5%",
  },
  reviewText: {
    fontWeight: "700",
  },
  reviewUserText: {
    fontSize: 26,
  },
  thumbnailsContainer: {
    flexDirection: "row",
  },
  thumbnailContainer: {
    borderRadius: 10,
    overflow: "hidden", // Prevent image overflow
    width: 50,
    height: "100%",
  },
  thumbnailImages: {
    height: 50,
    width: "100%",
  },
  wishlistContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  wishListIcon: {
    marginLeft: "2.5%",
  },
  wishlistText: {},
});

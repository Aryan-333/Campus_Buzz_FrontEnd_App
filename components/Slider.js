import React, { useRef, useEffect, useState } from "react";
import { FlatList, View, Dimensions, Image, Text } from "react-native";
import styles from "./Slider.style";

const width = Dimensions.get("window").width - 20;
let currentSlideIndex = 0;
let intervalId;

const Slider = ({ data, title }) => {
  const [dataToRender, setDataToRender] = useState([]);
  const [VisibleSlideIndex, setVisibleSlideIndex] = useState(0);
  const [activeSlideIndex, setactiveSlideIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    currentSlideIndex = viewableItems[0]?.index || 0;
    setVisibleSlideIndex(currentSlideIndex);
  });

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  const flatList = useRef();

  const handleScrollTo = (index) => {
    flatList.current.scrollToIndex({ animated: false, index });
  };

  const startSlider = () => {
    intervalId = setInterval(() => {
      const nextSlideIndex = (currentSlideIndex + 1) % dataToRender.length;
      handleScrollTo(nextSlideIndex);
    }, 4000);
  };

  const pauseSlider = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    if (dataToRender.length && flatList.current) {
      // startSlider();
    }
  }, [dataToRender.length]);

  useEffect(() => {
    const newData = [[...data].pop(), ...data, [...data].shift()];
    setDataToRender([...newData]);
  }, [data.length]);

  useEffect(() => {
    const length = dataToRender.length;
    //reset slide to first
    if (VisibleSlideIndex === length - 1 && length) handleScrollTo(1);

    //reset slide to last
    if (VisibleSlideIndex === 0 && length) handleScrollTo(length - 2);

    const lastSlide = currentSlideIndex === length - 1;
    const firstSlide = currentSlideIndex === 0;

    if (lastSlide && length) setactiveSlideIndex(0);
    else if (firstSlide && length) setactiveSlideIndex(length - 2);
    else setactiveSlideIndex(currentSlideIndex - 1);
  }, [VisibleSlideIndex]);

  return (
    <View style={styles.container1}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "700", color: "#383838" }}>
          {title}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {data.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  borderWidth: 2,
                  marginLeft: 5,
                  backgroundColor:
                    activeSlideIndex === index ? "#383838" : "transparent",
                }}
              />
            );
          })}
        </View>
      </View>
      {dataToRender.length > 0 && (
        <FlatList
          ref={flatList}
          data={dataToRender}
          keyExtractor={(item, index) => item.id + index}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={1}
          getItemLayout={(_, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          onViewableItemsChanged={onViewableItemsChanged.current}
          viewabilityConfig={viewabilityConfig.current}
          onScrollBeginDrag={pauseSlider}
          onScrollEndDrag={startSlider}
          renderItem={({ item }) => {
            return (
              <View>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={{
                    width,
                    height: width / 1.7,
                    borderRadius: 7,
                    //resizeMode: "contain",
                  }}
                />
                <View style={{ width }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 22,
                      fontWeight: "400",
                      color: "#383838",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
      ></View>
    </View>
  );
};

export default Slider;

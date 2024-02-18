import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

const BUTTON_WIDTH = Dimensions.get('screen').width - 48;
const SWIPE_RANGE = BUTTON_WIDTH - 74;

type SwipeButtonPropsType = {
  onSwipe: () => void;
};

const SwipeableButton = ({onSwipe}: SwipeButtonPropsType) => {
  const X = useSharedValue(0);
  X.value = withSpring(0);

  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: e => {
      const newValue = e.translationX;

      if (newValue >= 0 && newValue <= SWIPE_RANGE) {
        X.value = newValue;
      }
    },
    onEnd: () => {
      if (X.value < SWIPE_RANGE - 20) {
        X.value = withSpring(0);
      } else {
        X.value = withSpring(0);
        runOnJS(onSwipe)();
      }
    },
  });

  const AnimatedStyles = {
    swipeButton: useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: interpolate(
              X.value,
              [20, BUTTON_WIDTH],
              [0, BUTTON_WIDTH],
              Extrapolation.CLAMP,
            ),
          },
        ],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          [0, BUTTON_WIDTH / 4],
          [1, 0],
          Extrapolate.CLAMP,
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              [20, SWIPE_RANGE],
              [0, BUTTON_WIDTH / 3],
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    }),
  };

  return (
    <GestureHandlerRootView style={styles.swipeButtonContainer}>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.swipeButton, AnimatedStyles.swipeButton]}>
          <Icon
            name="diamond-sharp"
            size={30}
            color="#fff"
            style={styles.chevron}
          />
        </Animated.View>
      </PanGestureHandler>
      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
        Slide me to continue
      </Animated.Text>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  swipeButtonContainer: {
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    flexDirection: 'row',
    width: BUTTON_WIDTH,
  },
  swipeButton: {
    position: 'absolute',
    left: 0,
    height: 60,
    width: 80,
    borderRadius: 10,
    zIndex: 3,
    backgroundColor: '#56b3fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeText: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '400',
    zIndex: 2,
    color: '#56b3fd',
    marginLeft: 80,
  },
  chevron: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
});

export default SwipeableButton;

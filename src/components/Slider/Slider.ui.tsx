import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';
import styles from './Slider.styles';

interface Props {
  id: number;
  source: string[];
  activeSlider: number;
  handleSliderState: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

export default function SliderUI(props: Props): JSX.Element {
  const {id, source, handleSliderState, activeSlider} = props;
  const {width} = Dimensions.get('window');

  return (
    <View style={{width: width, height: width + 50}}>
      <ScrollView
        key={id}
        style={{flex: 1}}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleSliderState}>
        {source.map((url, index) => {
          return (
            <Image
              resizeMode="cover"
              key={index}
              source={{
                uri: url,
              }}
              width={width}
              height={width}
              style={{width: width, height: width}}
            />
          );
        })}
      </ScrollView>
      <View style={[styles.paginationWrapper, {bottom: 20}]}>
        {source.map((_, index) => (
          <View
            style={[
              styles.paginationDots,
              {opacity: index === activeSlider ? 1 : 0.2},
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
}

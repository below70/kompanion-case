import {useState} from 'react';
import SliderUI from './Slider.ui';

interface Props {
  id: number;
  source: string[];
}

export default function SliderContainer(props: Props): JSX.Element {
  const {id, source} = props;

  const [activeSlider, setActiveSlider] = useState<number>(0);

  const handleSliderState = (event: any) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );

    if (slide !== activeSlider) {
      setActiveSlider(slide);
    }
  };

  return (
    <SliderUI
      id={id}
      source={source}
      activeSlider={activeSlider}
      handleSliderState={handleSliderState}
    />
  );
}

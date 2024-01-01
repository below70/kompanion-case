import {View} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import styles from './Video.styles';

interface Props {
  id: number;
  source: string[];
  width: number;
}

export default function Video(props: Props): JSX.Element {
  const {id, source, width} = props;

  return (
    <View style={[styles.container, {width, height: width}]}>
      <VideoPlayer
        style={{width, height: width}}
        key={id}
        video={{
          uri: source[0],
        }}
        videoWidth={width}
        videoHeight={width}
        resizeMode="contain"
      />
    </View>
  );
}

import {Dimensions, View} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import styles from './Video.styles';

interface Props {
  id: number;
  source: string[];
}

export default function VideoUI(props: Props): JSX.Element {
  const {id, source} = props;
  const {width} = Dimensions.get('window');

  return (
    <View style={[styles.container, {width}]}>
      <VideoPlayer
        style={{width}}
        key={id}
        video={{
          uri: source[0],
        }}
      />
    </View>
  );
}

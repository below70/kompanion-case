import {Dimensions, View} from 'react-native';
import {Slider, Video} from '..';
import {Post} from '../../screens/Feed/Feed.container';
import styles from './PostCard.styles';

export default function PostCard(post: Post): JSX.Element {
  const {id, source, type} = post;
  const {width} = Dimensions.get('window');

  return (
    <View style={[styles.container, {width: width}]}>
      {type === 'video' ? (
        <Video id={id} source={source} width={width} />
      ) : (
        <Slider id={id} source={source} width={width} />
      )}
    </View>
  );
}

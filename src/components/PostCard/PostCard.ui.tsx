import {Dimensions, Text, View} from 'react-native';
import {Slider} from '..';
import {Post} from '../../screens/Feed/Feed.container';

export default function PostCardUI(post: Post): JSX.Element {
  const {id, source, type} = post;
  const {width} = Dimensions.get('window');

  return (
    <View style={{width: width}}>
      {type === 'video' ? (
        <Text>Video</Text>
      ) : (
        <Slider id={id} source={source} />
      )}
    </View>
  );
}

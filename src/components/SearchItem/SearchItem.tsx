import {Dimensions, Image, View} from 'react-native';
import {Video} from '..';
import {Post} from '../../screens/Feed/Feed.container';

export default function SearchItem(post: Post): JSX.Element {
  const {id, source, type} = post;
  const {width} = Dimensions.get('window');

  const gridWidth = Math.round(width / 2);

  return (
    <View style={{width: gridWidth, height: gridWidth}}>
      {type === 'video' ? (
        <Video id={id} source={source} width={gridWidth} />
      ) : (
        <Image source={{uri: source[0]}} width={gridWidth} height={gridWidth} />
      )}
    </View>
  );
}

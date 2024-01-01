import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Search.styles';
import {Post} from '../Feed/Feed.container';
import {SearchItem} from '../../components';
import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  loading: boolean;
  data: Post[];
  goBack: () => void;
}
export default function SearchUI(props: Props): JSX.Element {
  const {data, loading, goBack} = props;

  if (loading) {
    return (
      <ActivityIndicator
        testID="loading"
        style={styles.container}
        size={'large'}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <SearchItem {...item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <TouchableOpacity testID="back-button" onPress={goBack}>
              <Icon
                name="chevron-left"
                size={36}
                color="black"
                style={{marginHorizontal: 10}}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Search Results</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

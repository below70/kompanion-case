import {ActivityIndicator, FlatList} from 'react-native';
import styles from './Feed.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PostCard, SearchBar} from '../../components';
import {Post} from './Feed.container';

interface Props {
  loading: boolean;
  data: Post[];
  onSearch: () => void;
}

export default function FeedUI(props: Props): JSX.Element {
  const {loading, data, onSearch} = props;
  if (loading) {
    return <ActivityIndicator style={styles.container} size={'large'} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <PostCard {...item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<SearchBar onSearch={onSearch} />}
      />
    </SafeAreaView>
  );
}

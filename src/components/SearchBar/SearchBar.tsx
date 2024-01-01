import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './SearchBar.styles';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  onSearch: () => void;
}
export default function SearchBar(props: Props): JSX.Element {
  const {onSearch} = props;
  return (
    <View style={styles.container}>
      <TextInput placeholderTextColor={'black'} placeholder="type to search" />
      <TouchableOpacity style={styles.button} onPress={onSearch}>
        <Icon
          name="search1"
          size={20}
          color="black"
          style={{marginHorizontal: 10}}
        />
      </TouchableOpacity>
    </View>
  );
}

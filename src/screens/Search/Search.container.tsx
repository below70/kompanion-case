import {useEffect, useState} from 'react';
import SearchUI from './Search.ui';
import {Post} from '../Feed/Feed.container';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function SearchContainer(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/search')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function goBack() {
    navigation.goBack();
  }
  return <SearchUI data={data} loading={loading} goBack={goBack} />;
}

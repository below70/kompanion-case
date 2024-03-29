import {useEffect, useState} from 'react';
import FeedUI from './Feed.ui';

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface Post {
  id: number;
  source: string[];
  type: string;
}

export default function FeedContainer(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function onSearch() {
    navigation.navigate('Search');
  }

  return <FeedUI loading={loading} data={data} onSearch={onSearch} />;
}

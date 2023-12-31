import {useEffect, useState} from 'react';
import FeedUI from './Feed.ui';

export interface Post {
  id: number;
  source: string[];
  type: string;
}

export default function FeedContainer(): JSX.Element {
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

  return <FeedUI loading={loading} data={data} />;
}

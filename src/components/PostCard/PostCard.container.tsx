import {Post} from '../../screens/Feed/Feed.container';
import PostCardUI from './PostCard.ui';

export default function PostCardContainer(post: Post): JSX.Element {
  const {id, source, type} = post;
  return <PostCardUI id={id} source={source} type={type} />;
}

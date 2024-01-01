import VideoUI from './Video.ui';

interface Props {
  id: number;
  source: string[];
}

export default function VideoContainer(props: Props): JSX.Element {
  const {id, source} = props;
  return <VideoUI id={id} source={source} />;
}

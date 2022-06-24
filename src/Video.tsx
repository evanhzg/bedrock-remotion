import {Composition} from 'remotion';
import {Animation} from './Animation';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Animation"
				component={Animation}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};

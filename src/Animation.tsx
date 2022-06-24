import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './Animation/Logo';

export const Animation = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const scale = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - 25,
	});

	const blur = spring({
		fps,
		from: 1,
		to: 0,
		frame: frame - 30,
	});

	return (
		<AbsoluteFill style={{backgroundColor: 'black'}}>
			<AbsoluteFill style={{transform: `scale(${scale})`}}>
				<AbsoluteFill style={{transform: `blur(${blur})`}}>
					<Logo />
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

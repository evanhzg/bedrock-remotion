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

	// const logoTranslationProgress = spring({
	// 	frame: frame - 25,
	// 	fps,
	// 	config: {
	// 		damping: 100,
	// 	},
	// });
	//
	// const logoTranslation = interpolate(
	// 	logoTranslationProgress,
	// 	[0, 1],
	// 	[0, -150]
	// );

	const scale = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - 25,
	});

	return (
		<AbsoluteFill style={{backgroundColor: 'black'}}>
			<AbsoluteFill style={{transform: `scale(${scale})`}}>
				<Logo />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

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

	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});
	return null;
};

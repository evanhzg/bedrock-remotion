import {
    AbsoluteFill,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
} from 'remotion';

export const Logo: React.FC = () => {
    const videoConfig = useVideoConfig();
    const frame = useCurrentFrame();

    const scale = spring({
         frame,
         config: {
             mass: 0.5,
         },
         fps: videoConfig.fps,
     });

    return (
        <svg viewBox="0 0 80 80">
        <path
        fill="white"
        d="M53.9763 38.052c-.2687.8083-.7004 1.5142-1.2942 2.1179-.5945.6038-1.3564 1.0762-2.2861 1.4165-.9305.3409-2.056.5114-3.3792.5114H43.106V29.4783h3.9107c2.5115 0 4.3664.5258 5.5646 1.5776 1.1977 1.0515 1.7974 2.5122 1.7974 4.3816 0 .9346-.1343 1.8066-.4025 2.6145zm4.9425 11.9851c-.43-.7084-.933-1.3083-1.5084-1.8003-.5765-.4916-1.1969-.9048-1.8606-1.2394 1.3867-.5315 2.6118-1.2102 3.6769-2.0367 1.064-.826 1.9623-1.7653 2.6946-2.8183.7324-1.0522 1.2841-2.1986 1.6555-3.438.3704-1.2397.5565-2.5576.5565-3.9548 0-1.83-.3124-3.5218-.9374-5.0762-.6251-1.5542-1.626-2.902-3.0024-4.0433-1.377-1.141-3.1545-2.0314-5.3322-2.671C52.6839 22.3199 50.0525 22 46.9667 22h-2.9731L37 65h5.983V49.0928h2.5188c.762 0 1.3522.1179 1.7723.354.42.2361.7861.6298 1.0985 1.1804l7.0895 12.4842C56.1844 64.3706 57.376 65 59.0362 65H68l-9.0812-14.9629zM30.1791 50.5217h-7.1955v-10.75h7.135c1.2899 0 2.3586.1185 3.2051.3555.8465.2369 1.5269.573 2.0407 1.007.5143.4344.877.9671 1.0886 1.5989.2117.6322.3175 1.3428.3175 2.1323a7.7939 7.7939 0 01-.2722 2.0432c-.1812.6714-.5138 1.2735-.9976 1.8067-.4836.533-1.1544.9675-2.0107 1.303-.8573.336-1.9606.5034-3.3109.5034zm-7.1955-28.0434h6.0803c1.1667 0 2.1748.0898 3.0246.269.8496.1791 1.551.4776 2.1036.8957.5528.418.9623.9703 1.2285 1.6574.266.6867.399 1.5479.399 2.5828 0 1.0554-.1684 1.9313-.5063 2.6276-.338.6972-.8292 1.2444-1.474 1.6426-.6454.3983-1.4281.677-2.3497.836-.9212.1596-1.9553.2389-3.1014.2389h-5.4046v-10.75zm16.066 13.0928L42 18.004c-1.3196-.9281-2.9874-1.6554-5.012-2.1775C34.85 15.2758 32.2585 15 29.2138 15H13v43h17.6052c1.7046 0 3.2859-.1393 4.7472-.414l3.6493-21.7302.048-.2847z"
        />
        </svg>
    )
};
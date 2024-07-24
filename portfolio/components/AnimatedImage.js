import {motion} from 'framer-motion';


const AnimatedImage = ({src, alt}) => (
    <motion.img
    src={src}
    alt={alt}
    initial={{opacity: 0, y: 50}}
    animate={{opacity: 1, y: 0 }}
    transition= {{duration: 1}}
    className= "w-full h-auto rounded-lg"
    />
);

export default AnimatedImage;
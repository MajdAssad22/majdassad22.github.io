import { motion } from 'framer-motion';

const loaderContainerVariant = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const circleVariant = {
  start: {
    y: '-100%',
  },
  end: {
    y: '100%',
  },
};

const circleTransition = {
  duration: 0.6,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
};

const Loader = ({ isScreenLoader }) => {
  return (
    <motion.div
      className={`flex ${
        isScreenLoader ? 'h-screen w-screen' : 'h-full w-full'
      } justify-center items-center gap-2`}
      variants={loaderContainerVariant}
      initial="start"
      animate="end"
    >
      <motion.span
        className="w-5 h-5 bg-light rounded-full"
        variants={circleVariant}
        transition={circleTransition}
      ></motion.span>
      <motion.span
        className="w-5 h-5 bg-light rounded-full"
        variants={circleVariant}
        transition={circleTransition}
      ></motion.span>
      <motion.span
        className="w-5 h-5 bg-light rounded-full"
        variants={circleVariant}
        transition={circleTransition}
      ></motion.span>
      <motion.span
        className="w-5 h-5 bg-light rounded-full"
        variants={circleVariant}
        transition={circleTransition}
      ></motion.span>
    </motion.div>
  );
};

export default Loader;

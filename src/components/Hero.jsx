import { motion } from 'framer-motion';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey! I'm <span className="text-[#915eff]">Jonathan</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Warwick University Computer Science Undergraduate aspiring to become a Software Engineer. 
            <br></br>
            Quite recently, I have accepted an offer to work as a Software Engineering Intern at Amazon.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 text-white">
            <a href="https://www.linkedin.com/in/jonathan-lu-078259216/" target="_blank" rel="noopener noreferrer" className="hover:text-[#915eff]">
              LinkedIn
            </a>
            <a href="https://github.com/JonathanLu2005" target="_blank" rel="noopener noreferrer" className="hover:text-[#915eff]">
              GitHub
            </a>
            <a href="mailto:jonathanlu2005@example.com" className="hover:text-[#915eff]">
              Email
            </a>
            <a href="https://www.dropbox.com/scl/fi/k3maaz1rlep0vo1xdyuq2/Jonathan-Lu-CV.docx?rlkey=sojq76s5kyypttkovc6vcosb7&st=27xletyr&dl=0" target="_blank" rel="noopener noreferrer" className="hover:text-[#915eff]">
              My CV
            </a>
          </div>
        </div>

      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
            animate={{y: [0, 24, 0]}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1">
            </motion.dev>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
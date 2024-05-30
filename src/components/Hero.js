import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            twitter: 'https://twitter.com/Barath292907',
            github: 'https://github.com/Barath0729',
            linkedin: 'https://in.linkedin.com/in/barath2929'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im Barath 
                
            </h1>
            <div className='flex py-10'>
                <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                <a href={config.social.github} className='pr-5 hover:text-white'><FaGithub size={40} /></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} alt='Hero' />
    </section>
}
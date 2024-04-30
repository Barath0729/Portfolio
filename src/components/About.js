import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Barath. I am a Devops Engineer and frontend developer. I built PipeLines in Maven and Git Actions .',
        line2: 'I am proficient in AWS Features Like EC-2, Lambda, s-3 Buckets,IAM and Many More .',
        line3: 'In FrontEnd I know React js and In BackEnd, I know node js, Express.js, and MongoDB .'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} alt='About me' />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}

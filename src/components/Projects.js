import React from 'react';
import websiteImg2 from '../assets/food-ecommerce.jpeg';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg3,
                description: 'Online Auction Based web Application',
                link: 'https://github.com/Barath0729/Auction_House.git'
            },
            {
                image: websiteImg2,
                description: 'Street Light Fault Detection System',
                link: 'https://github.com/Barath0729/StreetLight_fault_detection.git'
            }
        ]
    };

    return (
        <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my best projects. I have built these with React, MERN, and vanilla CSS. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project, index) => (
                        <div className='relative' key={index}>
                            <img className='h-[200px] w-[400px]' src={project.image} alt={project.description}/>
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' rel='noopener noreferrer' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

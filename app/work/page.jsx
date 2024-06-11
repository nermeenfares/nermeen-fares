"use client";
import {motion} from 'framer-motion'
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtn from "@/components/WorkSliderBtn";
const projects=[
  {
    num:"01",
    title:"MYM Company Website User Interface (UI)",
    des:"Handled the frontend implementation of the company website UI using React.js and Material-UI.",
    stack: [
     {name:"React.js"}, {name:"Javascript"}, {name:"MUi"}],
      image:'/assets/work/mym.png',
      live:'https://mym-react-js.vercel.app/',
      github:"https://github.com/nermeenfares/MYM-React-JS"
  },
  {
    num:"02",
    title:"CityLife",
    des:"Provide Al-Rehab residents vital local information with ability to interact with those different facilities like restaurants, cinemas, hospitals, transportation, banks, ..etc, integrated localization with admin dashboard",
    stack: [
      {name:"React.js"},{name:"node.js"}, {name:"bootstrap"}, {name:"stripe payment"}],
      image:'/assets/work/citylife.png',
      live:'https://citylife-client.vercel.app/',
      github:"https://github.com/nermeenfares?tab=repositories"
  },
  {
    num:"03",
    title:"ShopXpress",
    des:"Responsive E-Commerce Project using React.js, Material UI Integration, and Stripe Payment.",
    stack: [
      {name:"React"}, {name:"TypeScript"},{name:"MUI"},],
      image:'/assets/work/shop.png',
      live:'https://shop-xpress-rho.vercel.app/',
      github:"https://github.com/nermeenfares/Shop-Xpress---React-E-Commerce"
  },

]

const Work = () => {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper)=>{
    // get current sldie indexx
    const currentIndex = swiper.activeIndex;
    // update proj state acc toString. curent slide index
    setProject(projects[currentIndex])
  }
  return (
  <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'}}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
<div className='container mx-auto'>
  <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col
    xl:justify-between order-2 xl:order-none'>
    <div className='flex flex-col gap-[30px] h-[50%]'>
      {/* outline numm here */}
<div className='text-8xl leading-none font-extrabold text-transparent 
text-outline '>{project.num}</div>
{/* proj des */}
<p className='text-white/60'> {project.des}</p>
{/* stack */}
<ul className='flex gap-4'>
  {project.stack.map((element,index)=>{
return <li key={index} className='text-xl text-accent-hover '>
{element.name}
{/* here we remove the last comma ... */}
{index !== project.stack.length-1 && ","}
</li>
  })}
</ul>
{/* border */}
<div className='border border-white/20 '></div>
{/* btnsss */}
<div className='flex items-center gap-4'>
{/* live btn */}
  <Link href={project.live}>
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
          <BsArrowUpRight className='text-white text-3xl group-hover:text-accent-hover'/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Live Project</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Link>
  {/* github btn */}
  <Link href={project.github}>
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
          <BsGithub className='text-white text-3xl group-hover:text-accent-hover'/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Github repo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Link>
</div>
    </div>
    </div>
    <div className='w-full  xl:w-[50%]'>
      <Swiper spaceBetween={30} slidePerView={1} className="xl:h-[520px] mb-12"
      onSlideChange={handleSlideChange}
      >
        {projects.map((proj,i)=>{
return <SwiperSlide className="w-full" key={i}>
  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
  {/* overlay comes here */}
  <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
  {/* image here */}
  <div className='relative w-full h-full'>
    <Image
     src={proj.image}
fill
className='object-cover'
alt=""
     />
  </div>
   </div>
</SwiperSlide>
        })}
        {/* slider btns */}
        <WorkSliderBtn btnStyles="bg-accent-hover hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all " containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none " iconStyles=""/>
      </Swiper>
    </div>
  </div>
</div>
  </motion.section>
  );
}

export default Work;

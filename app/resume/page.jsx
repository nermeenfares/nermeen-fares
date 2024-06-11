"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNexttdotjs, SiTypescript } from "react-icons/si";
// about
const about = {
  title: "About me",
  description:
    "Skilled Front-End developer adept at crafting dynamic and engaging web applications.Well-versed in Front-End technologies, including React, Next.js, TypeScript, Bootstrap, Material UI, and beyond",
  info: [
    {
      fieldName: "Front-End Web Development",
      fieldValue: "Nermeen Fares",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+20) 127 525 6896",
    },
    {
      fieldName: "Experience",
      fieldValue: "Nermeen Fares",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Egyptian",
    },
    {
      fieldName: "Email",
      fieldValue: "nermen.morgan99@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, English, French",
    },
  ],
};
// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  des: "Skilled Front-End developer adept at crafting dynamic and engaging web applications.Well-versed in Front-End technologies, including React, Next.js, TypeScript, Bootstrap, Material UI, and beyond",
  items: [
    {
      company: "Blackrock Technologies",
      position: "Front-End Web Developer",
      duration: "Dec 2023 - Jun 2024",
    },
    {
      company: "MYM Group",
      position: "Front-End Developer Intern",
      duration: "Aug 2023 - Dec 2023",
    },

    {
      company: "Sync Intern's",
      position: "Front-End DeveloperIntern",
      duration: "Jul 2023 - Aug 2023",
    },
    {
      company: "Upwork",
      position: "Freelance Front-End Web Developer",
      duration: "Aug 2019 - Feb 2024",
    },
  ],
};
// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  des: "Gained extensive coding knowledge through courses on Udemy and Coursera, participation in the IEEE CS department, and scholarships at ITI and Alx.",
  items: [
    {
      institution: "ALX Software Engineering",
      degree: "Front-End Web Development program",
      duration: "Dec 2023 - Jun 2024",
    },
    {
      institution: "Udemy",
      position: "Next.js 14 & React - The Complete Guide",
      duration: "May 2024 - Jun 2024",
    },

    {
      institution: "Information Technology Institute | ITI",
      degree: "Front-End and Cross Platform Mobile Development",
      duration: "Mar 2023 - Jun 2023",
    },
    {
      institution: "Coursera",
      position: "Advanced React",
      duration: "Dec 2022 - Feb 2023",
    },
    {
      institution: "Udemy",
      position: "The Complete Modern Javascript Course with ES6",
      duration: "Apr 2022 - Jun 2022",
    },

    {
      institution: "Udemy",
      degree: "Introduction to programming | CS50 course",
      duration: "Dec 2021 - Feb 2022",
    },
    {
      institution: "Zagazig University",
      position: "Bachelor of Science",
      duration: "Jan 2017 -  Oct 2021",
    },
  ],
};
const skills = {
  title: "My skills",
  des: "Skilled in frontend development through hands-on internships and significant contributions to various projects.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Item } from "@radix-ui/react-select";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
         gap-6 "
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* contenttt heree */}
          <div className="min-h-[70vh] w-full">
            {/* experience comes hereee */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">
                  {" "}
                  {experience.des}
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {" "}
                  {experience.des}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1  lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-hover ">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/* dottttttt */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">
                  {" "}
                  {education.des}
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {" "}
                  {experience.des}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1  lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-hover ">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/* dottttttt */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]  ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                    {skills.des}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap[30px] gap-4">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px] bg-[#232329]
    rounded-xl flex justify-center items-center group"
                            >
                              <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about meee */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div
                className="
flex flex-col gap-[30px] 
"
              >
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx:0">
                  {about.des}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
 mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

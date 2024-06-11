"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
const Services = () => {
  const services = [
    {
      num: "01",
      title: "Next.js Development",
      des: "Building server-side rendered and static web applications using Next.js.",
      href: "/services/nextjs-development",
    },
    {
      num: "02",
      title: "React Component Development",
      des: "Creating reusable and efficient React components for modern web applications.",
      href: "/services/react-component-development",
    },
    {
      num: "03",
      title: "Responsive Design",
      des: "Implementing responsive design to ensure your application looks great on all devices.",
      href: "/services/responsive-design",
    },
    {
      num: "04",
      title: "API Integration",
      des: "Seamlessly integrating RESTful and GraphQL APIs into your React/Next.js applications.",
      href: "/services/api-integration",
    },
    {
      num: "05",
      title: "Performance Optimization",
      des: "Optimizing the performance of your web applications for faster load times and better user experience.",
      href: "/services/performance-optimization",
    },
    {
      num: "06",
      title: "State Management",
      des: "Implementing efficient state management solutions using Context API, Redux, or Zustand.",
      href: "/services/state-management",
    },
    {
      num: "07",
      title: "Authentication & Authorization",
      des: "Setting up secure authentication and authorization mechanisms in your applications.",
      href: "/services/authentication-authorization",
    },
    {
      num: "08",
      title: "Custom Hooks Development",
      des: "Creating custom hooks to encapsulate reusable logic in your React applications.",
      href: "/services/custom-hooks-development",
    },
    {
      num: "09",
      title: "Static Site Generation (SSG)",
      des: "Leveraging Next.js to generate static sites for better performance and SEO.",
      href: "/services/static-site-generation",
    },
    {
      num: "10",
      title: "Client-Side Rendering (CSR)",
      des: "Implementing client-side rendering techniques for dynamic React applications.",
      href: "/services/client-side-rendering",
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group ">
                {/* top sectionn */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl  font-extrabold text-outline
                  text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] rounded-full bg-white group-hover:bg-accent-hover transition-all duration-500 flex
                  justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold  text-white  group-hover:text-accent-hover transition-all duration-500">{service.title}</h2>
                {/* description bta3 el service  */}
                <p className="text-white/60 ">{service.des}</p>
                {/* ell border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

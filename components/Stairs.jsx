
// "use client";
import { motion } from "framer-motion";
const stairAnimation = {
    initial:{
        top: "0%"
    },

    animate:{
        top: "100%"
    },
    exit:{
        top: "0%"
    },
}
//calculate he reverse index  for staggered delay
const reverseIndex = (index)=>{
const totalSteps = 6;
return totalSteps - index - 1
}
const Stairs = () => {
  return (
    <>

    {/* // ..here we gona render 6 motion divs, each represent  a step
    //each div will have its animation defined by the stair animation objjjjject
   //the delay in each div is calculated dynamically  based on its reversed index
   //creating a staggered effect with decresing delay for each div */}
 
   {
    [...Array(6)].map((_,index)=>{
        return <motion.div
         key={index} 
         variants={stairAnimation} 
         initial="initial" 
        animate="animate" 
        exit="exit"
transition={{
    duration:0.4,
    ease:"easeInOut",
    delay:reverseIndex(index) * 0.1
}}
className="h-full w-full bg-white relative"
        />
    })
   }
    </>
  );
}

export default Stairs;

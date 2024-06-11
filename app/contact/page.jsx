"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import {FaPhoneAlt, FaEnvelope , FaMapMarkerAlt} from 'react-icons/fa';
import {motion} from 'framer-motion';
import { useRef } from "react";
// import emailjs from '@emailjs/browser';
const info =
[
  {
  icon: <FaPhoneAlt/>,
  title: "Phone",
  des:"(+20) 127 525 6896"
},
{
  icon: <FaEnvelope/>,
  title: "Email",
  des:"nermen.morgan99@gmail.com"
},
{
  icon: <FaPhoneAlt/>,
  title: "Phone",
  des:"(+20) 127 525 6896"
},
{
  icon: <FaMapMarkerAlt/>,
  title: "Address",
  des:"Giza, Cairo, Egypt"
},
]
const Contact = () => {
  
 const formRef = useRef();
//  const [form, setForm] = useState({
//  firstname:'',
//    lastname: '',
//    phone:'',
//    email:'',
//    message:''
 
//  });
 
//  const handleChange = (e) => {
//    const { name, value } = e.target;
   
//    setForm({ ...form, [name]: value });
//    };

//    const handleSendEmail = (e) => {
//     console.log('triggereed')
//     e.preventDefault();
  
//     emailjs
//       .sendForm('service_r6fk6ik', 'template_jy1mxj5', 
   
//     formRef.current
//      ,
//       {
//         publicKey: 'XkH847brND8tuxWpU',
//       })
//       .then(
        
//         (error) => {
//           alert('email not sent')
  
//           console.log('FAILED...', error.text);
//         },
//       );
//   };




  return <motion.section initial={{opacity:0}}
  animate={{opacity:1, transition:{delay:2.4, duration: 0.4, ease:"easeIn"}}}
  className="py-6"
  >
<div className="container mx-auto">
<div className="flex flex-col xl:flex-row gap-[30px]">
{/* form comes here */}
<div className="xl:h-[54%] order-2 xl:order-none">
<form  ref={formRef} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
<h3 className="text-4xl text-accent-hover ">Let's work together</h3>
<p className="text-white/60">
  Get in touch with me for any project or idea you have in mind.
</p>
{/* input comes here */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Input type="first" placeholder="Firstname"/>
  <Input type="lastname" placeholder="Lasttname"/>
  <Input type="email" placeholder="Email"/>
  <Input type="phone" placeholder="Phone number"/>
</div>
{/* select
<Select>
  <SelectTrigger className="w-full">
  <SelectValue placeholder="Select a service"/>
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Select a service</SelectLabel>
      <SelectItem value=""></SelectItem>
      <SelectItem value=""></SelectItem>
      <SelectItem value=""></SelectItem>
    </SelectGroup>
  </SelectContent>
</Select> */}
<Textarea
className="h-[200px]"
placeholder="Type your message here"
/>
{/* btnn here */}
<Button size="md" className="max-w-40">
  Send message
</Button>
</form>
</div>
{/* infooo here */}
<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
<ul className="flex flex-col gap-10">
  {info.map((item,index)=>{
    return <li key={index} className="flex items-center gap-6 ">
<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-hover rounded-md flex items-center justify-center ">
  <div className="text-[28px]">{item.icon}</div>
</div>

<div className="flex-1">
  <p className="text-white/60">{item.title}</p>
  <h3 className="text-xl">{item.des}</h3>
</div>
    </li>
  })}
</ul>
</div>
</div>
</div>
  </motion.section>
    
  
}

export default Contact;

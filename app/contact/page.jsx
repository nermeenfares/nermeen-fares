"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomModal from "@/components/modal";
import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    des: "(+20) 127 525 6896",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    des: "nermen.morgan99@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    des: "(+20) 127 525 6896",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    des: "Giza, Cairo, Egypt",
  },
];
const Contact = () => {
  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);

  const formRef = useRef();
  const [form, setForm] = useState({
    lname: "",
    fname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        "service_m3hrc8c", // paste your ServiceID here (you'll get one when your service is created).
        "template_y17rbse", // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: "Nermeen", // put your name here.
          from_email: form.email,
          to_email: "nermen.morgan99@gmail.com", //put your email here.
          message: form.message,
        },
        "Dfe5VG7z0Gur6dA6j" //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setOpen(true);
          setLoading(false);
          console.log("donee");
          setForm({
            lname: "",
            fname: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
          console.log("erroeee");
        }
      );
  };

  return (
    <>
      <CustomModal
        handleClose={handleClose}
        open={open}
        body={
          <div className="flex flex-col justify-center items-center">
            <p className="text-left text-primary font-4xl">
              I have receiver your message!
            </p>
            <Link className="text-center text-primary " href="/">
              <Button className="btn-global fs-5 w-100 mt-5 text-light">
                Continue to Home screen
              </Button>
            </Link>
          </div>
        }
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form comes here */}
            <div className="xl:h-[54%] order-2 xl:order-none">
              <form
                onSubmit={handleSubmit}
                ref={formRef}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl "
              >
                <h3 className="text-4xl text-accent-hover ">
                  Lets work together
                </h3>
                <p className="text-white/60">
                  Get in touch with me for any project or idea you have in mind.
                </p>
                {/* input comes here */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="fname"
                    onChange={handleChange}
                    value={form.fname}
                    type="first"
                    placeholder="Firstname"
                  />
                  <Input
                    name="lname"
                    onChange={handleChange}
                    value={form.lname}
                    type="lastname"
                    placeholder="Lasttname"
                  />
                  <Input
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    type="email"
                    placeholder="Email"
                  />
                  <Input
                    name="phone"
                    onChange={handleChange}
                    value={form.phone}
                    type="phone"
                    placeholder="Phone number"
                  />
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
                  onChange={handleChange}
                  name="message"
                  value={form.message}
                  className="h-[200px]"
                  placeholder="Type your message here"
                />
                {/* btnn here */}
                <Button type="submit" size="md" className="max-w-40">
                  Send message
                </Button>
              </form>
            </div>
            {/* infooo here */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6 ">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-hover rounded-md flex items-center justify-center ">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>

                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.des}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;

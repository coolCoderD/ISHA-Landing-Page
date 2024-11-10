import React from "react";
import { motion } from 'framer-motion'
import { Brain, Activity, FileText, Stethoscope } from 'lucide-react'
import Robot from "./Robot";



const expertiseAreas = [
  {
    title: 'Medical Knowledge Base',
    icon: Brain,
    description: 'Comprehensive medical  database',
    className: 'rounded-br-[100px]'
  },
  {
    title: 'Health Vitals',
    icon: Activity,
    description: 'Real-time health monitoring',
    className: 'rounded-bl-[100px]'
  },
  {
    title: 'Complete Report Analysis',
    icon: FileText,
    description: 'Detailed medical report evaluation',
    className: 'rounded-tr-[100px]'
  },
  {
    title: 'Differential Diagnosis',
    icon: Stethoscope,
    description: 'Accurate diagnostic assessments',
    className: 'rounded-tl-[100px]'
  }
]
export function ExpertiseSection() {
  return (
    <div className="flex justify-center items-center">
      <section className="container relative  py-24 lg:mx-52">
        {/* Centered Circle */}
        <div className="absolute overflow-hidden top-1/2 left-1/2 bg-white  z-50  -translate-x-1/2 -translate-y-1/3 h-[36vh] w-[36vh]  rounded-full ">
        <Robot/>
        </div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-7xl md:text-8xl text-center font-bold tracking-tighter relative z-10"
        >
          Our Expertise<span className="text-blue-600">.</span>
        </motion.h2>

        {/* Expertise Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 relative z-10">
          {expertiseAreas.map(({ title, icon: Icon, description, className }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group "
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center text-center  bg-[#2b24e6] h-[15rem]   cursor-pointer"
              >
                <div className="p-3 bg-white/10 rounded-full ml-q">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-lg text-gray-200">{description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

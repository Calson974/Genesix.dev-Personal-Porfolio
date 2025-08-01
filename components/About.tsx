'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon,
  RocketLaunchIcon 
} from '@heroicons/react/24/outline'

const techStack = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

const goals = [
  {
    icon: CodeBracketIcon,
    title: 'Master Full-Stack Development',
    description: 'Continuously improving my skills in both frontend and backend technologies to build complete solutions.'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile-First Approach',
    description: 'Creating responsive, mobile-optimized experiences that work seamlessly across all devices.'
  },
  {
    icon: PaintBrushIcon,
    title: 'Design & User Experience',
    description: 'Bridging the gap between design and development to create beautiful, intuitive interfaces.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Innovation & Growth',
    description: 'Staying at the forefront of technology trends and contributing to open-source projects.'
  }
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get to know me better - my journey, skills, and aspirations in the world of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-2xl transform rotate-6"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/assets/img/Me-Square-tx.jpg"
                      alt="Calson Genesis - About"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Calson Genesis</span>
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer from Cameroon with a keen eye for creating 
                  beautiful, functional web applications. My journey in tech started with curiosity 
                  about how websites work, which led me to dive deep into the world of programming.
                </p>
                
                <p>
                  With expertise in modern web technologies like React, Next.js, and Node.js, 
                  I specialize in building scalable applications that provide exceptional user experiences. 
                  I believe in writing clean, maintainable code and following best practices.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. 
                  I'm always excited to take on new challenges and collaborate on innovative projects.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold mb-4">Quick Info</h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><span className="font-medium">📍 Location:</span> Bamenda, Cameroon</p>
                  <p><span className="font-medium">📧 Email:</span> cooljimmy974@gmail.com</p>
                  <p><span className="font-medium">📱 Phone:</span> +237 681 849 054</p>
                  <p><span className="font-medium">💼 Status:</span> Available for freelance</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              My <span className="gradient-text">Tech Stack</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center card-hover"
                >
                  <div className="w-12 h-12 mx-auto mb-3 relative">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Goals & Aspirations */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              My <span className="gradient-text">Goals</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goals.map((goal, index) => (
                <motion.div
                  key={goal.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <goal.icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">{goal.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
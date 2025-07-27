import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faCalendarAlt,
  faMapMarkerAlt,
  faCode,
  faUsers,
  faRocket
} from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  const experiences = [
    {
      title: "Process Associate – HCL Technologies (Pvt) Ltd",
      company: "HCL Technologies (Pvt) Ltd",
      location: "",
      period: "Feb 2024 – July 2024",
      type: "",
      description: "I’m good at handling information accurately, following procedures, and supporting smooth operations.",
      achievements: [],
      technologies: [],
      icon: faBriefcase,
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Data Entry Operator – HTCey Leisure (Pvt) Ltd",
      company: "HTCey Leisure (Pvt) Ltd",
      location: "",
      period: "April 2022 – May 2023",
      type: "",
      description: "I’m good at handling information accurately, following procedures, and supporting smooth operations.",
      achievements: [],
      technologies: [],
      icon: faBriefcase,
      color: "from-green-600 to-teal-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-bg-primary transition-colors duration-500">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-slate-900 dark:text-gray-100 mb-6">
            Work Experience
          </h2>
          <p className="section-subtitle text-slate-600 dark:text-gray-200 max-w-2xl mx-auto">
            My professional journey and key accomplishments in software development
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-bg-primary shadow-lg hidden md:block"></div>

                <div className="md:ml-20">
                  <motion.div
                    className="bg-white dark:bg-bg-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-white shadow-lg`}>
                          <FontAwesomeIcon icon={exp.icon} className="text-lg" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-gray-100 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary-600 dark:text-primary-300 mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <FontAwesomeIcon icon={faCalendarAlt} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                              <span>{exp.location}</span>
                            </div>
                            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-gray-200 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

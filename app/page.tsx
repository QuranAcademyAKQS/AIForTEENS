'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Building2, Lightbulb, Users, Globe, Star, ArrowRight, Play, Lock } from 'lucide-react'
import Link from 'next/link'

interface ClassData {
  id: number
  title: string
  subtitle: string
  duration: string
  topics: string[]
  activities: string[]
  islamicContext: string
  icon: React.ReactNode
  color: string
  locked: boolean
}

const classes: ClassData[] = [
  {
    id: 1,
    title: "Introduction to AI & Islamic Ethics",
    subtitle: "Understanding AI through Islamic Values",
    duration: "1 Hour",
    topics: ["What is AI?", "Islamic perspective on technology", "Ethical AI development"],
    activities: ["AI Ethics Discussion", "Islamic Values Workshop", "Interactive AI Demo"],
    islamicContext: "Exploring how AI aligns with Islamic principles of knowledge, wisdom, and ethical responsibility",
    icon: <Brain className="w-8 h-8" />,
    color: "from-islamic-gold to-yellow-400",
    locked: false
  },
  {
    id: 2,
    title: "Machine Learning & Pattern Recognition",
    subtitle: "Learning from Creation's Patterns",
    duration: "1 Hour",
    topics: ["Pattern recognition", "Supervised learning", "Natural patterns in creation"],
    activities: ["Pattern Recognition Game", "Nature Observation Activity", "ML Model Building"],
    islamicContext: "Understanding how Allah's creation follows patterns that we can learn from and replicate",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "from-islamic-green to-emerald-400",
    locked: true
  },
  {
    id: 3,
    title: "Neural Networks & Community Learning",
    subtitle: "Networks that Connect Like Ummah",
    duration: "1 Hour",
    topics: ["Neural networks", "Community learning", "Collaborative AI"],
    activities: ["Neural Network Simulation", "Community Building Exercise", "Group AI Project"],
    islamicContext: "Understanding how neural networks work like communities, similar to the concept of Ummah",
    icon: <Users className="w-8 h-8" />,
    color: "from-islamic-blue to-cyan-400",
    locked: true
  },
  {
    id: 4,
    title: "AI Applications & Global Impact",
    subtitle: "Technology for the Betterment of Humanity",
    duration: "1 Hour",
    topics: ["AI applications", "Global challenges", "Islamic solutions"],
    activities: ["AI Application Design", "Global Problem Solving", "Innovation Workshop"],
    islamicContext: "Using AI to solve global challenges while upholding Islamic values of compassion and justice",
    icon: <Globe className="w-8 h-8" />,
    color: "from-islamic-purple to-violet-400",
    locked: true
  },
  {
    id: 5,
    title: "Future of AI & Islamic Innovation",
    subtitle: "Building the Future with Faith",
    duration: "1 Hour",
    topics: ["Future AI trends", "Islamic innovation", "Career paths in AI"],
    activities: ["Future Vision Workshop", "Innovation Challenge", "Career Exploration"],
    islamicContext: "Preparing for a future where AI and Islamic values work together for human betterment",
    icon: <Star className="w-8 h-8" />,
    color: "from-futuristic-neon to-cyan-300",
    locked: true
  }
]

export default function Home() {
  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-futuristic-dark via-purple-900 to-futuristic-dark">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Building2 className="w-16 h-16 mx-auto text-islamic-gold glow-text mb-4" />
          </motion.div>
          <h1 className="text-6xl font-bold mb-4">
            <span className="glow-text">QIB Presents</span>
            <span className="text-islamic-gold"> AI for TEENS</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">Futuristic AI Education for Teenagers with Islamic Values</p>
          <p className="text-lg text-islamic-gold font-arabic">أعوذُ باللهِ منَ الشيطانِ الرَّجيمِ</p>
          <p className="text-lg text-islamic-gold font-arabic">بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Welcome to Your AI Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Embark on a 5-class adventure where you'll discover the fascinating world of Artificial Intelligence 
            while exploring how it connects with Islamic values and principles. Each class is designed to be 
            interactive, engaging, and meaningful.
          </p>
        </motion.section>

        {/* Class Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: classItem.locked ? 1 : 1.05, y: classItem.locked ? 0 : -10 }}
              className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                classItem.locked 
                  ? 'border-gray-600/30 opacity-60' 
                  : 'border-islamic-gold/30 hover:border-islamic-gold/60'
              }`}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${classItem.color} flex items-center justify-center text-white mb-4 mx-auto relative`}>
                {classItem.icon}
                {classItem.locked && (
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${classItem.locked ? 'text-gray-500' : 'text-white'}`}>
                {classItem.title}
                {classItem.locked && <span className="text-sm text-gray-500 ml-2">(Coming Soon)</span>}
              </h3>
              <p className={`mb-4 ${classItem.locked ? 'text-gray-500' : 'text-gray-400'}`}>{classItem.subtitle}</p>
              <div className="flex items-center justify-between mb-4">
                <span className={`font-semibold ${classItem.locked ? 'text-gray-500' : 'text-islamic-gold'}`}>{classItem.duration}</span>
                <ArrowRight className={`w-5 h-5 ${classItem.locked ? 'text-gray-500' : 'text-islamic-gold'}`} />
              </div>
              
              {/* Direct Start Class Button */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedClass(classItem)}
                  className={`flex-1 py-2 px-4 rounded-lg transition-colors text-sm ${
                    classItem.locked 
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  disabled={classItem.locked}
                >
                  Learn More
                </button>
                {classItem.locked ? (
                  <button className="flex-1 bg-gray-700 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed text-sm flex items-center justify-center">
                    <Lock className="w-4 h-4 mr-2" />
                    Locked
                  </button>
                ) : (
                  <Link href={`/class/${classItem.id}`} className="flex-1">
                    <button className="w-full bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all text-sm">
                      Start Class
                    </button>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Class Details Modal */}
        {selectedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedClass(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-islamic-gold/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${selectedClass.color} flex items-center justify-center text-white relative`}>
                  {selectedClass.icon}
                  {selectedClass.locked && (
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSelectedClass(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <h2 className={`text-3xl font-bold mb-4 ${selectedClass.locked ? 'text-gray-500' : 'text-white'}`}>
                {selectedClass.title}
                {selectedClass.locked && <span className="text-lg text-gray-500 ml-2">(Coming Soon)</span>}
              </h2>
              <p className={`text-xl mb-6 ${selectedClass.locked ? 'text-gray-500' : 'text-gray-300'}`}>{selectedClass.subtitle}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-islamic-gold mb-3">Topics Covered</h3>
                  <ul className="space-y-2">
                    {selectedClass.topics.map((topic, index) => (
                      <li key={index} className={`flex items-center ${selectedClass.locked ? 'text-gray-500' : 'text-gray-300'}`}>
                        <div className="w-2 h-2 bg-islamic-gold rounded-full mr-3"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-islamic-gold mb-3">Activities</h3>
                  <ul className="space-y-2">
                    {selectedClass.activities.map((activity, index) => (
                      <li key={index} className={`flex items-center ${selectedClass.locked ? 'text-gray-500' : 'text-gray-300'}`}>
                        <Play className="w-4 h-4 text-islamic-gold mr-3" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
                <h3 className="text-lg font-semibold text-islamic-gold mb-2">Islamic Context</h3>
                <p className={`${selectedClass.locked ? 'text-gray-500' : 'text-gray-300'}`}>{selectedClass.islamicContext}</p>
              </div>
              
              <div className="mt-6 flex justify-center">
                {selectedClass.locked ? (
                  <button className="bg-gray-700 text-gray-500 py-3 px-8 rounded-full cursor-not-allowed flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Class {selectedClass.id} Coming Soon
                  </button>
                ) : (
                  <Link href={`/class/${selectedClass.id}`}>
                    <button className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-400 hover:to-islamic-gold transition-all duration-300 flex items-center">
                      <Play className="w-5 h-5 mr-2" />
                      Start Class {selectedClass.id}
                    </button>
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center py-8 border-t border-islamic-gold/30"
        >
          <p className="text-gray-400">
            Designed with ❤️ for the next generation of AI innovators
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Embracing technology while upholding Islamic values
          </p>
        </motion.footer>
      </main>
    </div>
  )
} 
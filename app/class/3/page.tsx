'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code, 
  Gamepad2, 
  Lightbulb, 
  BookOpen, 
  Play, 
  Pause, 
  RotateCcw, 
  Award, 
  Star, 
  Eye, 
  EyeOff,
  Brain,
  Target,
  Zap,
  Users,
  Globe,
  Shield,
  Heart,
  CheckCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  Settings,
  Clock,
  TrendingUp,
  MessageCircle,
  User,
  Key,
  Database,
  Network,
  Cloud,
  Monitor,
  Tablet,
  Headphones,
  Camera,
  Video,
  Music,
  Gift,
  HeartHandshake,
  Home,
  Car,
  Cross,
  Leaf,
  Phone,
  Mail,
  MapPin,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

export default function Class3() {
  const [currentSection, setCurrentSection] = useState('intro')
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [showActivity, setShowActivity] = useState(false)
  const [activityStep, setActivityStep] = useState(0)
  const [userChoices, setUserChoices] = useState<{[key: string]: any}>({})

  const sections = [
    { id: 'intro', title: 'Introduction to AI Programming', icon: Code },
    { id: 'scratch', title: 'Scratch Programming Basics', icon: Gamepad2 },
    { id: 'mlkids', title: 'Machine Learning for Kids', icon: Brain },
    { id: 'visual', title: 'Visual AI Concepts', icon: Eye },
    { id: 'projects', title: 'Interactive AI Projects', icon: Play },
    { id: 'activities', title: 'Hands-on Activities', icon: Target },
    { id: 'quiz', title: 'Knowledge Check', icon: Award }
  ]

  const scratchTopics = {
    basics: {
      title: "Scratch Programming Fundamentals",
      quranicReferences: [
        {
          verse: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ",
          translation: "Indeed, Allah will not change the condition of a people until they change what is in themselves",
          reference: "Quran 13:11",
          explanation: "This teaches us that we have the power to create and change things through our own efforts, just like programming."
        },
        {
          verse: "وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا",
          translation: "And you have been given but little knowledge",
          reference: "Quran 17:85",
          explanation: "This reminds us to always seek more knowledge and learn new skills like programming."
        }
      ],
      hadith: [
        {
          text: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
          translation: "Seeking knowledge is obligatory upon every Muslim",
          reference: "Ibn Majah",
          explanation: "Learning programming and AI is part of seeking beneficial knowledge in our modern world."
        }
      ],
      principles: [
        { text: "Learn block-based programming concepts", icon: Code },
        { text: "Understand visual programming logic", icon: Eye },
        { text: "Create simple AI-like behaviors", icon: Brain },
        { text: "Practice problem-solving skills", icon: Target },
        { text: "Build interactive projects", icon: Play }
      ]
    },
    mlkids: {
      title: "Machine Learning for Kids.co.uk",
      quranicReferences: [
        {
          verse: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
          translation: "Read in the name of your Lord who created",
          reference: "Quran 96:1",
          explanation: "This first revelation emphasizes the importance of reading and learning, which includes learning about AI."
        },
        {
          verse: "وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا",
          translation: "And He taught Adam all the names",
          reference: "Quran 2:31",
          explanation: "Allah taught Adam to name and categorize things, similar to how machine learning classifies data."
        }
      ],
      hadith: [
        {
          text: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ",
          translation: "Whoever takes a path seeking knowledge, Allah will make easy for him a path to Paradise",
          reference: "Sahih Muslim",
          explanation: "Learning about AI and machine learning is a path to beneficial knowledge."
        }
      ],
      principles: [
        { text: "Explore ML for Kids.co.uk platform", icon: Globe },
        { text: "Learn about data classification", icon: Database },
        { text: "Understand pattern recognition", icon: Target },
        { text: "Practice with visual ML tools", icon: Eye },
        { text: "Create simple ML models", icon: Brain }
      ]
    },
    visual: {
      title: "Visual AI Concepts",
      quranicReferences: [
        {
          verse: "أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ",
          translation: "Do they not look at the camels, how they are created?",
          reference: "Quran 88:17",
          explanation: "This encourages us to observe and learn from creation, similar to how AI learns from data."
        },
        {
          verse: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ",
          translation: "Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding",
          reference: "Quran 3:190",
          explanation: "Understanding patterns in creation helps us understand how AI recognizes patterns."
        }
      ],
      hadith: [
        {
          text: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
          translation: "Indeed, Allah is beautiful and loves beauty",
          reference: "Sahih Muslim",
          explanation: "Creating beautiful and functional AI programs reflects this principle."
        }
      ],
      principles: [
        { text: "Understand visual pattern recognition", icon: Eye },
        { text: "Learn about image classification", icon: Camera },
        { text: "Explore visual programming concepts", icon: Code },
        { text: "Practice with visual AI tools", icon: Monitor },
        { text: "Create visual AI projects", icon: Play }
      ]
    }
  }

  const quizQuestions = [
    {
      id: 'q1',
      question: 'What is the main benefit of using Scratch for AI programming?',
      icon: Code,
      options: [
        'It\'s faster than other languages',
        'It uses visual blocks instead of text',
        'It only works on certain computers',
        'It doesn\'t require any learning'
      ],
      correct: 'It uses visual blocks instead of text',
      explanation: 'Scratch uses visual blocks that make programming concepts easier to understand and learn.'
    },
    {
      id: 'q2',
      question: 'What does Machine Learning for Kids.co.uk help you learn?',
      icon: Brain,
      options: [
        'Only advanced programming',
        'How to build websites',
        'Data classification and pattern recognition',
        'Only game development'
      ],
      correct: 'Data classification and pattern recognition',
      explanation: 'ML for Kids.co.uk teaches fundamental machine learning concepts like classification and pattern recognition.'
    },
    {
      id: 'q3',
      question: 'How does visual programming relate to Islamic learning?',
      icon: Eye,
      options: [
        'It has no connection',
        'It makes complex concepts simple to understand',
        'It only works for non-Muslims',
        'It\'s against Islamic values'
      ],
      correct: 'It makes complex concepts simple to understand',
      explanation: 'Visual programming makes complex AI concepts accessible, reflecting Allah\'s guidance in making things simple.'
    },
    {
      id: 'q4',
      question: 'What is the Islamic perspective on learning programming?',
      icon: BookOpen,
      options: [
        'It\'s forbidden',
        'It\'s obligatory for every Muslim',
        'It\'s only for adults',
        'It has no Islamic value'
      ],
      correct: 'It\'s obligatory for every Muslim',
      explanation: 'Seeking beneficial knowledge, including programming, is obligatory upon every Muslim.'
    },
    {
      id: 'q5',
      question: 'How do visual AI concepts help us understand creation?',
      icon: Globe,
      options: [
        'They don\'t help at all',
        'They show us how to recognize patterns like Allah\'s creation',
        'They only work for scientists',
        'They make things more complicated'
      ],
      correct: 'They show us how to recognize patterns like Allah\'s creation',
      explanation: 'Visual AI helps us understand how patterns work, similar to the patterns we see in Allah\'s creation.'
    }
  ]

  const handleQuizSubmit = () => {
    let correctAnswers = 0
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) {
        correctAnswers++
      }
    })
    setScore(correctAnswers)
    setQuizSubmitted(true)
  }

  const resetQuiz = () => {
    setQuizAnswers({})
    setQuizSubmitted(false)
    setScore(0)
  }

  // Scratch AI Project Component
  function ScratchAIProject({ onClose }: { onClose: () => void }) {
    const [currentStep, setCurrentStep] = useState(0)
    const [userCode, setUserCode] = useState<string[]>([])
    const [showResult, setShowResult] = useState(false)

    const projectSteps = [
      {
        title: "Step 1: Create a Smart Sprite",
        description: "Make a sprite that can recognize different objects",
        code: ["when green flag clicked", "forever", "if touching [object] then", "say [I see an object!]"],
        islamicContext: "Just like Allah gave us the ability to recognize and understand His creation, we can teach computers to recognize objects."
      },
      {
        title: "Step 2: Add Pattern Recognition",
        description: "Make the sprite respond to different patterns",
        code: ["when [pattern] detected", "change [color] by [10]", "play sound [pattern]"],
        islamicContext: "Patterns in creation help us understand Allah's wisdom, just like patterns help AI learn."
      },
      {
        title: "Step 3: Create Learning Behavior",
        description: "Make the sprite learn from interactions",
        code: ["when [interaction] happens", "remember [response]", "use [memory] for next time"],
        islamicContext: "Learning and remembering is a gift from Allah, and we can teach computers to do the same."
      }
    ]

    const handleAddCode = (code: string) => {
      setUserCode([...userCode, code])
    }

    const handleNext = () => {
      if (currentStep < projectSteps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setShowResult(true)
      }
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-orange-500/50"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Scratch AI Project</h2>
                <p className="text-gray-400">Build your first AI program with Scratch</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          {!showResult ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-500/50">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">{projectSteps[currentStep].title}</h3>
                <p className="text-gray-300 mb-4">{projectSteps[currentStep].description}</p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-green-400 font-semibold mb-2">Sample Code:</h4>
                  {projectSteps[currentStep].code.map((line, idx) => (
                    <div key={idx} className="text-green-300 font-mono text-sm mb-1">{line}</div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-islamic-gold/20 to-transparent p-3 rounded-lg border-l-4 border-islamic-gold">
                  <p className="text-sm text-gray-300">{projectSteps[currentStep].islamicContext}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-3">Your Code:</h4>
                  <div className="bg-gray-800/50 p-4 rounded-lg min-h-[200px]">
                    {userCode.map((code, idx) => (
                      <div key={idx} className="text-blue-300 font-mono text-sm mb-1">{code}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Add Code Blocks:</h4>
                  <div className="space-y-2">
                    {projectSteps[currentStep].code.map((code, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAddCode(code)}
                        className="w-full bg-gray-700 text-gray-300 p-2 rounded-lg hover:bg-gray-600 transition-colors text-left text-sm"
                      >
                        {code}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setUserCode([])}
                  className="bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-all"
                >
                  Clear Code
                </button>
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2 px-6 rounded-lg hover:from-orange-400 hover:to-red-400 transition-all"
                >
                  {currentStep === projectSteps.length - 1 ? 'Finish Project' : 'Next Step'}
                </button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-8 rounded-xl border border-green-500/50">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Project Complete!</h3>
                <p className="text-xl text-gray-300 mb-4">
                  You've created your first AI program with Scratch!
                </p>
                <p className="text-gray-300">
                  You learned how to create smart sprites, recognize patterns, and build learning behaviors. 
                  This is the foundation of AI programming!
                </p>
              </div>

              <button
                onClick={onClose}
                className="bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-all"
              >
                Close Project
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    )
  }

  // ML for Kids Activity Component
  function MLForKidsActivity({ onBack }: { onBack: () => void }) {
    const [currentActivity, setCurrentActivity] = useState(0)
    const [userChoices, setUserChoices] = useState<{[key: string]: any}>({})
    const [showResults, setShowResults] = useState(false)

    const activities = [
      {
        title: "Image Classification",
        description: "Learn how AI recognizes different types of images",
        task: "Classify these images into categories: Animals, Vehicles, Food",
        images: ["🐕", "🚗", "🍎", "🐱", "✈️", "🍕"],
        categories: ["Animals", "Vehicles", "Food"],
        islamicContext: "Just like Allah created different categories of things, AI learns to categorize and organize information."
      },
      {
        title: "Pattern Recognition",
        description: "Identify patterns in sequences",
        task: "What comes next in this pattern?",
        pattern: ["🔴", "🔵", "🔴", "🔵", "🔴", "?"],
        answer: "🔵",
        islamicContext: "Patterns in creation show Allah's wisdom and order, just like patterns help AI learn."
      },
      {
        title: "Data Training",
        description: "Train a simple AI model",
        task: "Help the AI learn by providing examples",
        examples: [
          { input: "Happy face", output: "Positive" },
          { input: "Sad face", output: "Negative" },
          { input: "Smiling", output: "Positive" }
        ],
        islamicContext: "Teaching and learning is a fundamental Islamic value, and we can teach AI just like we teach each other."
      }
    ]

    const handleChoice = (choice: string) => {
      setUserChoices({ ...userChoices, [currentActivity]: choice })
    }

    const handleNext = () => {
      if (currentActivity < activities.length - 1) {
        setCurrentActivity(currentActivity + 1)
      } else {
        setShowResults(true)
      }
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">ML for Kids Activities</h2>
            <p className="text-gray-300">Learn machine learning concepts through interactive activities</p>
          </div>
          <button
            onClick={onBack}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
          >
            ← Back to Activities
          </button>
        </div>

        {!showResults ? (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/50">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{activities[currentActivity].title}</h3>
              <p className="text-gray-300 mb-4">{activities[currentActivity].description}</p>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">{activities[currentActivity].task}</h4>
                {currentActivity === 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {activities[currentActivity].images.map((image, idx) => (
                      <div key={idx} className="text-4xl text-center p-4 bg-gray-700 rounded-lg">
                        {image}
                      </div>
                    ))}
                  </div>
                )}
                {currentActivity === 1 && (
                  <div className="flex space-x-4 mt-4">
                    {activities[currentActivity].pattern.map((item, idx) => (
                      <div key={idx} className="text-3xl p-4 bg-gray-700 rounded-lg">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
                {currentActivity === 2 && (
                  <div className="space-y-2 mt-4">
                    {activities[currentActivity].examples.map((example, idx) => (
                      <div key={idx} className="flex justify-between p-2 bg-gray-700 rounded">
                        <span className="text-gray-300">{example.input}</span>
                        <span className="text-green-400">{example.output}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-4 bg-gradient-to-r from-islamic-gold/20 to-transparent p-3 rounded-lg border-l-4 border-islamic-gold">
                <p className="text-sm text-gray-300">{activities[currentActivity].islamicContext}</p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all"
              >
                {currentActivity === activities.length - 1 ? 'See Results' : 'Next Activity'}
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-8 rounded-xl border border-green-500/50">
              <Brain className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Activities Complete!</h3>
              <p className="text-xl text-gray-300 mb-4">
                You've learned fundamental machine learning concepts!
              </p>
              <p className="text-gray-300">
                You now understand image classification, pattern recognition, and data training. 
                These are the building blocks of AI!
              </p>
            </div>

            <button
              onClick={() => setShowResults(false)}
              className="bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-all"
            >
              Try Again
            </button>
          </motion.div>
        )}
      </motion.div>
    )
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'intro':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center">
              <Code className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">AI Programming with Scratch & Machine Learning for Kids</h2>
              <p className="text-xl text-gray-300 mb-6">
                Learn to program AI using visual blocks and explore machine learning concepts designed for young learners
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(scratchTopics).map(([key, topic]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{topic.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Learn about {topic.title.toLowerCase()} through Quranic verses, Hadith, and practical principles.
                  </p>
                  <button
                    onClick={() => setCurrentSection(key)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:from-orange-400 hover:to-red-400 transition-all"
                  >
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-500/50">
              <h3 className="text-xl font-semibold text-white mb-3">Why Visual Programming Matters</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2 flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Visual Learning
                  </h4>
                  <p className="text-gray-300">
                    Visual programming makes complex concepts easier to understand and learn.
                  </p>
                </div>
                <div>
                  <h4 className="text-red-400 font-semibold mb-2 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Concepts
                  </h4>
                  <p className="text-gray-300">
                    Learn fundamental AI concepts through hands-on visual programming.
                  </p>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-2 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Block-Based Coding
                  </h4>
                  <p className="text-gray-300">
                    Use visual blocks to create programs without complex syntax.
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Problem Solving
                  </h4>
                  <p className="text-gray-300">
                    Develop logical thinking and problem-solving skills through programming.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )

      case 'activities':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center">
              <Play className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Interactive Activities</h2>
              <p className="text-gray-300 mb-6">
                Practice AI programming and machine learning concepts through hands-on activities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Scratch AI Project */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-500/50"
              >
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-orange-400" />
                  Scratch AI Project
                </h3>
                <p className="text-gray-300 mb-4">
                  Build your first AI program using Scratch's visual programming blocks
                </p>
                <button
                  onClick={() => setShowActivity(true)}
                  className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-500 transition-all"
                >
                  Start Project
                </button>
              </motion.div>

              {/* ML for Kids Activity */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/50"
              >
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-400" />
                  ML for Kids Activities
                </h3>
                <p className="text-gray-300 mb-4">
                  Explore machine learning concepts through interactive activities
                </p>
                <button
                  onClick={() => setCurrentSection('mlkids')}
                  className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-500 transition-all"
                >
                  Start Activities
                </button>
              </motion.div>
            </div>
          </motion.div>
        )

      case 'quiz':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center">
              <Award className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Knowledge Check</h2>
              <p className="text-gray-300 mb-6">
                Test your understanding of AI programming and machine learning concepts
              </p>
            </div>

            {!quizSubmitted ? (
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
                  >
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <q.icon className="w-5 h-5 mr-3 text-orange-500" />
                      Question {idx + 1}: {q.question}
                    </h3>
                    <div className="space-y-3">
                      {q.options.map((option, optIdx) => (
                        <label
                          key={optIdx}
                          className="flex items-center space-x-3 p-3 rounded-lg border border-gray-600 hover:border-orange-500 cursor-pointer transition-colors"
                        >
                          <input
                            type="radio"
                            name={q.id}
                            value={option}
                            onChange={(e) => setQuizAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                            className="text-orange-500"
                          />
                          <span className="text-gray-300">{option}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <div className="text-center">
                  <button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-orange-400 hover:to-red-400 transition-all"
                  >
                    Submit Quiz
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-8 rounded-xl border border-green-500/50">
                  <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Quiz Complete!
                  </h3>
                  <p className="text-xl text-gray-300 mb-4">
                    You scored {score} out of {quizQuestions.length}
                  </p>
                  <div className="text-4xl font-bold text-orange-500 mb-4">
                    {Math.round((score / quizQuestions.length) * 100)}%
                  </div>
                  <p className="text-gray-300">
                    {score === quizQuestions.length ? 'Perfect! You have excellent understanding of AI programming concepts!' :
                     score >= quizQuestions.length * 0.8 ? 'Great job! You have good understanding of visual AI programming.' :
                     score >= quizQuestions.length * 0.6 ? 'Good effort! Keep learning about AI programming concepts.' :
                     'Keep studying! Review the programming concepts and try again.'}
                  </p>
                </div>

                <button
                  onClick={resetQuiz}
                  className="bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-all"
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </motion.div>
        )

      default:
        if (scratchTopics[currentSection as keyof typeof scratchTopics]) {
          const topic = scratchTopics[currentSection as keyof typeof scratchTopics]
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">{topic.title}</h2>
                <p className="text-gray-300 mb-6">
                  Learn about {topic.title.toLowerCase()} through Islamic teachings
                </p>
              </div>

              {/* Quranic References */}
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-green-400" />
                  Quranic References
                </h3>
                <div className="space-y-4">
                  {topic.quranicReferences.map((ref, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gray-800/50 p-4 rounded-lg"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                          {ref.reference}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-green-400 quranic-text mb-2">{ref.verse}</p>
                          <p className="text-gray-300 text-sm mb-2">{ref.translation}</p>
                          <p className="text-gray-400 text-xs">{ref.explanation}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hadith */}
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-blue-400" />
                  Hadith & Prophetic Teachings
                </h3>
                <div className="space-y-4">
                  {topic.hadith.map((hadith, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gray-800/50 p-4 rounded-lg"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                          {hadith.reference}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-blue-400 hadith-text mb-2">{hadith.text}</p>
                          <p className="text-gray-300 text-sm mb-2">{hadith.translation}</p>
                          <p className="text-gray-400 text-xs">{hadith.explanation}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Programming Principles */}
              <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-500/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-orange-400" />
                  Programming Principles
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {topic.principles.map((principle, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg"
                    >
                      <principle.icon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300">{principle.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        }
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Class 3: AI Programming with Scratch & ML for Kids</h1>
              <p className="text-gray-400">Visual Programming and Machine Learning for Young Learners</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentSection('intro')}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  currentSection === section.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 border-t border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-400">
            <p>© 2024 AI for Teens - Learning AI Programming with Islamic Values</p>
          </div>
        </div>
      </div>

      {/* Activity Modals */}
      {showActivity && <ScratchAIProject onClose={() => setShowActivity(false)} />}
    </div>
  )
} 
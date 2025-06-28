'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Building2, Shield, Lightbulb, Users, ArrowLeft, Play, CheckCircle, XCircle, BookOpen, MessageCircle, Target, Heart, Globe, Database, TrendingUp, Code, Zap, Eye, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function Class2() {
  const [currentSection, setCurrentSection] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)
  const [currentActivity, setCurrentActivity] = useState(0)
  const [mlExperiment, setMlExperiment] = useState(0)
  const [patternData, setPatternData] = useState<number[]>([])

  const sections = [
    {
      title: "AI & You: Who Does What in the World of AI?",
      content: "In the AI ecosystem, different people have different roles and responsibilities. Understanding these roles helps us see how AI affects society and how we can participate responsibly. From developers who create AI to users who interact with it, everyone has a part to play.",
      islamicContext: "In Islam, we are taught about different roles and responsibilities in society. Each person has unique talents and duties. Similarly, in AI, different roles require different skills and ethical considerations. We must use our abilities to serve others and contribute positively.",
      activities: ["Role Exploration", "Responsibility Discussion", "Ethical Decision Making"],
      examples: ["AI developers", "Data scientists", "End users", "Policy makers", "Ethics committees"]
    },
    {
      title: "What is Machine Learning?",
      content: "Machine Learning is a type of AI that learns from data to make predictions and decisions. Instead of following strict rules, it finds patterns in information and improves over time. Think of it like teaching a computer to recognize patterns the way humans do.",
      islamicContext: "In Islam, we are taught to observe and learn from Allah's creation. Machine Learning mirrors this process - we observe patterns in data to understand and predict, just as we observe patterns in nature to understand Allah's wisdom.",
      activities: ["Pattern Recognition Game", "Data Observation", "Learning Discussion"],
      examples: ["Email spam detection", "Recommendation systems", "Medical diagnosis"]
    },
    {
      title: "Types of Machine Learning",
      content: "There are three main types: Supervised Learning (learning from labeled examples), Unsupervised Learning (finding hidden patterns), and Reinforcement Learning (learning through trial and error). Each type has different applications and strengths.",
      islamicContext: "Different approaches to learning reflect the diversity of Allah's creation. Just as there are many ways to seek knowledge, there are many ways for machines to learn and grow.",
      activities: ["Learning Type Matching", "Application Examples", "Method Comparison"],
      examples: ["Supervised: Image classification", "Unsupervised: Customer segmentation", "Reinforcement: Game playing"]
    },
    {
      title: "Data and Patterns",
      content: "Data is the foundation of Machine Learning. Quality data helps create better models. We look for patterns like trends, correlations, and relationships. The more diverse and representative our data, the better our AI systems become.",
      islamicContext: "In Islam, we value truth and accuracy. When working with data, we must ensure it represents reality fairly and completely, avoiding bias and misrepresentation.",
      activities: ["Data Quality Check", "Pattern Visualization", "Bias Discussion"],
      examples: ["Weather prediction data", "Social media patterns", "Economic indicators"]
    },
    {
      title: "Training and Testing",
      content: "We train models by showing them examples and testing their performance. Good models generalize well to new situations. We must avoid overfitting (memorizing instead of learning) and ensure our models work in real-world conditions.",
      islamicContext: "Testing and validation reflect Islamic principles of thoroughness and responsibility. We must verify our work before using it to help others.",
      activities: ["Model Training Simulation", "Testing Scenarios", "Validation Process"],
      examples: ["Cross-validation techniques", "Performance metrics", "Real-world testing"]
    },
    {
      title: "Ethical Machine Learning",
      content: "ML systems can inherit biases from their training data. We must ensure fairness, transparency, and accountability. Ethical ML means creating systems that treat everyone fairly and can explain their decisions.",
      islamicContext: "Islamic ethics require justice and fairness for all. Our AI systems must reflect these values, treating every person with dignity and respect regardless of background.",
      activities: ["Bias Detection", "Fairness Assessment", "Ethical Guidelines"],
      examples: ["Algorithmic bias detection", "Fairness metrics", "Explainable AI"]
    },
    {
      title: "Real-World Applications",
      content: "Machine Learning is transforming industries: healthcare (disease prediction), finance (fraud detection), education (personalized learning), and more. The key is using ML to solve real problems that benefit humanity.",
      islamicContext: "Using technology to serve humanity aligns with Islamic values. ML applications should prioritize helping people, improving lives, and solving community problems.",
      activities: ["Application Brainstorming", "Problem-Solving", "Impact Assessment"],
      examples: ["Healthcare diagnostics", "Environmental monitoring", "Educational tools"]
    }
  ]

  const quizQuestions = [
    {
      question: "What is the main difference between AI and Machine Learning?",
      options: ["They are the same thing", "ML is a subset of AI that learns from data", "AI is newer than ML", "ML doesn't use computers"],
      correct: "ML is a subset of AI that learns from data"
    },
    {
      question: "Which type of learning uses labeled examples?",
      options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Deep Learning"],
      correct: "Supervised Learning"
    },
    {
      question: "Why is data quality important in Machine Learning?",
      options: ["It doesn't matter", "Better data leads to better models", "It's only important for big companies", "It's just a technical requirement"],
      correct: "Better data leads to better models"
    },
    {
      question: "What is overfitting in Machine Learning?",
      options: ["When a model is too simple", "When a model memorizes training data instead of learning patterns", "When a model is too fast", "When a model uses too much data"],
      correct: "When a model memorizes training data instead of learning patterns"
    },
    {
      question: "Why is ethical consideration important in ML?",
      options: ["It's not important", "ML systems can inherit biases and cause harm", "It's only for research", "It's just a legal requirement"],
      correct: "ML systems can inherit biases and cause harm"
    },
    {
      question: "How should we approach ML applications according to Islamic values?",
      options: ["Focus only on profit", "Use ML to serve humanity and solve real problems", "Ignore ethical concerns", "Only use ML for entertainment"],
      correct: "Use ML to serve humanity and solve real problems"
    }
  ]

  const mlExperiments = [
    {
      title: "Pattern Recognition Game",
      description: "Learn how machines recognize patterns by playing a simple pattern matching game.",
      steps: [
        "Look at the sequence of numbers",
        "Try to predict the next number",
        "See how the algorithm learns from your predictions",
        "Discuss what patterns you noticed"
      ],
      islamicContext: "Pattern recognition is a gift from Allah that helps us understand His creation. Machines can learn this skill too, helping us solve complex problems."
    },
    {
      title: "Data Bias Detection",
      description: "Explore how bias can exist in data and affect ML systems.",
      steps: [
        "Examine sample datasets",
        "Identify potential biases",
        "Discuss how to fix biased data",
        "Learn about fairness metrics"
      ],
      islamicContext: "Justice and fairness are core Islamic values. We must ensure our data and algorithms treat everyone equally."
    },
    {
      title: "Model Training Simulation",
      description: "Experience the training process through an interactive simulation.",
      steps: [
        "Choose training parameters",
        "Watch the model learn",
        "Test on new data",
        "Analyze performance"
      ],
      islamicContext: "Learning and improvement are continuous processes, both for humans and machines. We should always strive to do better."
    }
  ]

  const discussionTopics = [
    "How can Machine Learning help solve problems in your community?",
    "What are some potential risks of biased ML systems?",
    "How can we ensure ML benefits everyone, not just wealthy people?",
    "What role should humans play in ML decision-making?",
    "How can ML be used to promote environmental sustainability?",
    "What are some ways ML could improve education for everyone?"
  ]

  const handleQuizSubmit = () => {
    setShowResults(true)
  }

  const getScore = () => {
    let correct = 0
    quizQuestions.forEach((q, index) => {
      if (quizAnswers[`q${index}`] === q.correct) correct++
    })
    return correct
  }

  const addPatternData = () => {
    setPatternData([...patternData, Math.floor(Math.random() * 10)])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-futuristic-dark via-purple-900 to-futuristic-dark">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-b border-islamic-gold/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-islamic-gold hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Classes
            </Link>
            <div className="flex items-center">
              <Brain className="w-8 h-8 text-islamic-gold mr-3" />
              <span className="text-white font-semibold">Class 2: Machine Learning Fundamentals</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-full mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progress</span>
            <span>{Math.round(((currentSection + 1) / sections.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-islamic-gold to-yellow-500 flex items-center justify-center text-black font-bold mr-4">
                  {currentSection + 1}
                </div>
                <h2 className="text-2xl font-bold text-white">{sections[currentSection].title}</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-3">Key Concepts</h3>
                  <p className="text-gray-300 leading-relaxed">{sections[currentSection].content}</p>
                </div>

                <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
                  <h3 className="text-lg font-semibold text-islamic-gold mb-2">Islamic Perspective</h3>
                  <p className="text-gray-300">{sections[currentSection].islamicContext}</p>
                </div>

                {/* Examples Section */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Real-World Examples</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {sections[currentSection].examples?.map((example, index) => (
                      <div key={index} className="flex items-center bg-gray-700/50 p-3 rounded-lg">
                        <Zap className="w-5 h-5 text-islamic-gold mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities Section */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Activities & Discussion</h3>
                  <div className="space-y-4">
                    {sections[currentSection].activities?.map((activity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-islamic-gold/20 flex items-center justify-center mr-3">
                          <span className="text-islamic-gold font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-300">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Activity for Teens */}
                {currentSection === 0 && (
                  // User Roles in AI – Role Exploration
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <div className="flex space-x-4 mb-4">
                      <button
                        onClick={() => setCurrentActivity(0)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                          currentActivity === 0
                            ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        Role Exploration
                      </button>
                      <button
                        onClick={() => setCurrentActivity(1)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                          currentActivity === 1
                            ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        Who Am I in the AI World?
                      </button>
                    </div>
                    
                    {currentActivity === 0 ? (
                      <>
                        <h4 className="text-lg font-semibold text-islamic-gold mb-2">Role Exploration</h4>
                        <p className="text-gray-300 mb-2">Explore different roles in AI and their responsibilities</p>
                        <UserRolesActivity />
                      </>
                    ) : (
                      <>
                        <h4 className="text-lg font-semibold text-islamic-gold mb-2">Who Am I in the AI World?</h4>
                        <p className="text-gray-300 mb-2">Take this fun quiz to discover which AI role best matches your interests and skills!</p>
                        <WhoAmIActivity />
                      </>
                    )}
                  </div>
                )}
                {currentSection === 1 && (
                  // What is Machine Learning? – Spot the AI!
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Spot the AI!</h4>
                    <p className="text-gray-300 mb-2">Which of these technologies use Machine Learning? (Select all that apply)</p>
                    <SpotTheAIActivity />
                  </div>
                )}
                {currentSection === 2 && (
                  // Types of Machine Learning – Match the Type!
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Match the Type!</h4>
                    <p className="text-gray-300 mb-2">Match each example to the correct type of Machine Learning.</p>
                    <MatchMLTypeActivity />
                  </div>
                )}
                {currentSection === 3 && (
                  // Data and Patterns – Find the Pattern!
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Find the Pattern!</h4>
                    <FindPatternActivity />
                  </div>
                )}
                {currentSection === 4 && (
                  // Training and Testing – Train the Model!
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Train the Model!</h4>
                    <TrainModelActivity />
                  </div>
                )}
                {currentSection === 5 && (
                  // Ethical Machine Learning – Is it Fair?
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Is it Fair?</h4>
                    <IsItFairActivity />
                  </div>
                )}
                {currentSection === 6 && (
                  // Real-World Applications – ML for Good!
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">ML for Good!</h4>
                    <MLForGoodActivity />
                  </div>
                )}
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  disabled={currentSection === 0}
                  className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                  disabled={currentSection === sections.length - 1}
                  className="px-6 py-2 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-400 hover:to-islamic-gold transition-all"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Navigation */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
              <h3 className="text-lg font-semibold text-white mb-4">Class Sections</h3>
              <div className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      currentSection === index
                        ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {index + 1}. {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* ML Concepts */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
              <h3 className="text-lg font-semibold text-white mb-4">ML Concepts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Database className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Data is the foundation</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Models learn from patterns</span>
                </div>
                <div className="flex items-center">
                  <Code className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Training improves performance</span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Testing validates results</span>
                </div>
                <div className="flex items-center">
                  <Cpu className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Ethics guide development</span>
                </div>
              </div>
            </div>

            {/* Time Tracker */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
              <h3 className="text-lg font-semibold text-white mb-4">Class Progress</h3>
              <div className="text-center">
                <div className="text-2xl font-bold text-islamic-gold mb-2">
                  {Math.round(((currentSection + 1) / sections.length) * 60)} min
                </div>
                <div className="text-sm text-gray-400">
                  of 60 minutes completed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Activities Section */}
        {currentSection === sections.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 space-y-8"
          >
            {/* ML Experiments */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Hands-On ML Experiments</h2>
              
              <div className="space-y-6">
                {mlExperiments.map((experiment, index) => (
                  <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-3">{experiment.title}</h3>
                    <p className="text-gray-300 mb-4">{experiment.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <h4 className="text-sm font-semibold text-islamic-gold">Steps:</h4>
                      {experiment.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-islamic-gold/20 flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-islamic-gold font-bold text-xs">{stepIndex + 1}</span>
                          </div>
                          <span className="text-gray-300 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
                      <h4 className="text-sm font-semibold text-islamic-gold mb-2">Islamic Perspective</h4>
                      <p className="text-gray-300 text-sm">{experiment.islamicContext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group Discussion */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Group Discussion</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Discussion Topics</h3>
                  <div className="space-y-3">
                    {discussionTopics.map((topic, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <MessageCircle className="w-5 h-5 text-islamic-gold mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{topic}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Your Thoughts</h3>
                  <textarea
                    placeholder="Share your thoughts on Machine Learning and its impact..."
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                  <button className="mt-3 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all">
                    Share Response
                  </button>
                </div>
              </div>
            </div>

            {/* Knowledge Check Quiz */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Knowledge Check</h2>
              
              {!showResults ? (
                <div className="space-y-6">
                  {quizQuestions.map((question, index) => (
                    <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        {index + 1}. {question.question}
                      </h3>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name={`q${index}`}
                              value={option}
                              onChange={(e) => setQuizAnswers({...quizAnswers, [`q${index}`]: e.target.value})}
                              className="mr-3 text-islamic-gold"
                            />
                            <span className="text-gray-300">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={handleQuizSubmit}
                    className="w-full bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all"
                  >
                    Submit Answers
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {getScore() === quizQuestions.length ? '🎉' : '📚'}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    You got {getScore()} out of {quizQuestions.length} correct!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {getScore() === quizQuestions.length 
                      ? "Excellent! You've mastered the fundamentals of Machine Learning."
                      : "Good effort! Review the material and try again to strengthen your understanding."
                    }
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => {
                        setShowResults(false)
                        setQuizAnswers({})
                      }}
                      className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Try Again
                    </button>
                    <Link href="/class/3" className="px-6 py-2 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all">
                      Next Class
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Reflection and Application */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Personal Reflection</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">What I Learned</h3>
                  <textarea
                    placeholder="Reflect on the key Machine Learning concepts you learned today..."
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Future Applications</h3>
                  <textarea
                    placeholder="How could you use Machine Learning to solve problems in your community?"
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all">
                  Save Reflection
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  )
}

// --- Interactive Activity Components (placeholders) ---
function SpotTheAIActivity() {
  const originalOptions = [
    { label: 'Voice Assistant (e.g., Siri)', isAI: true },
    { label: 'Electric Fan', isAI: false },
    { label: 'Email Spam Filter', isAI: true },
    { label: 'Calculator', isAI: false },
    { label: 'Video Recommendation System', isAI: true },
    { label: 'Flashlight', isAI: false },
    { label: 'Self-driving Car', isAI: true },
    { label: 'Mechanical Clock', isAI: false },
  ];

  // Shuffle function
  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [options, setOptions] = useState(() => shuffleArray(originalOptions));
  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleToggle = (idx: number) => {
    if (submitted) return;
    setSelected(selected.includes(idx)
      ? selected.filter(i => i !== idx)
      : [...selected, idx]);
  };

  const handleSubmit = () => {
    let correct = 0;
    options.forEach((opt, idx) => {
      if (opt.isAI && selected.includes(idx)) correct++;
      if (!opt.isAI && !selected.includes(idx)) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  const handleReset = () => {
    setOptions(shuffleArray(originalOptions));
    setSelected([]);
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-3 mb-4">
        {options.map((opt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleToggle(idx)}
            className={`flex items-center w-full p-3 rounded-lg border transition-colors
              ${selected.includes(idx)
                ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black border-islamic-gold'
                : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-700/50'}
              ${submitted && ((opt.isAI && selected.includes(idx)) || (!opt.isAI && !selected.includes(idx))) ? 'ring-2 ring-green-400' : ''}
              ${submitted && ((opt.isAI && !selected.includes(idx)) || (!opt.isAI && selected.includes(idx))) ? 'ring-2 ring-red-400' : ''}
            `}
            disabled={submitted}
          >
            <span className="ml-2">{opt.label}</span>
          </button>
        ))}
      </div>
      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-2 px-6 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all"
          disabled={selected.length === 0}
        >
          Submit
        </button>
      ) : (
        <div className="mt-3 space-y-3">
          <span className="text-lg font-semibold text-islamic-gold">You got {score} out of {options.length} correct!</span>
          <button
            onClick={handleReset}
            className="bg-gray-700 text-gray-300 font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Try Again (Shuffle)
          </button>
        </div>
      )}
    </div>
  );
}
function MatchMLTypeActivity() {
  const examples = [
    { id: 1, example: 'Image classification (cat vs dog)', answer: 'Supervised', description: 'Learning from labeled examples of cats and dogs' },
    { id: 2, example: 'Customer segmentation for marketing', answer: 'Unsupervised', description: 'Finding hidden patterns in customer data without labels' },
    { id: 3, example: 'Game playing (e.g., chess AI)', answer: 'Reinforcement', description: 'Learning through trial and error with rewards' },
    { id: 4, example: 'Spam email detection', answer: 'Supervised', description: 'Learning from examples of spam and non-spam emails' },
    { id: 5, example: 'Grouping news articles by topic', answer: 'Unsupervised', description: 'Organizing articles without predefined categories' },
    { id: 6, example: 'Robot learning to walk', answer: 'Reinforcement', description: 'Learning optimal walking strategy through practice' },
  ];
  
  const types = [
    { 
      name: 'Supervised', 
      color: 'from-blue-500 to-blue-600', 
      description: 'Learns from labeled examples',
      icon: '📚',
      detailedDescription: 'Supervised learning uses labeled data to learn patterns. The algorithm is given input-output pairs and learns to map inputs to correct outputs.',
      realWorldExamples: [
        'Email spam detection (spam/not spam)',
        'Medical diagnosis (disease/no disease)',
        'House price prediction',
        'Image recognition (cat/dog/person)',
        'Language translation'
      ],
      advantages: [
        'Very accurate when trained well',
        'Clear evaluation metrics',
        'Predictable results',
        'Widely used and understood'
      ],
      disadvantages: [
        'Requires labeled data (expensive)',
        'Can overfit to training data',
        'Limited to known categories',
        'Needs human expertise to label'
      ],
      islamicPerspective: 'In Islam, we are taught to learn from teachers and mentors. Supervised learning mirrors this process - we learn from labeled examples, just as we learn from knowledgeable teachers who guide us with correct answers.'
    },
    { 
      name: 'Unsupervised', 
      color: 'from-green-500 to-green-600', 
      description: 'Finds hidden patterns without labels',
      icon: '🔍',
      detailedDescription: 'Unsupervised learning discovers hidden patterns in data without any labels or guidance. It explores the data structure on its own.',
      realWorldExamples: [
        'Customer segmentation',
        'Topic modeling in documents',
        'Anomaly detection',
        'Market basket analysis',
        'Social network analysis'
      ],
      advantages: [
        'No need for labeled data',
        'Can discover unknown patterns',
        'Useful for data exploration',
        'Can find unexpected insights'
      ],
      disadvantages: [
        'Results can be hard to interpret',
        'No clear evaluation metrics',
        'May find irrelevant patterns',
        'Less predictable outcomes'
      ],
      islamicPerspective: 'Islamic tradition values independent thinking and discovery. Unsupervised learning reflects this - it explores and discovers patterns independently, like a scholar researching and finding new knowledge without a teacher.'
    },
    { 
      name: 'Reinforcement', 
      color: 'from-purple-500 to-purple-600', 
      description: 'Learns through trial and error',
      icon: '🎮',
      detailedDescription: 'Reinforcement learning learns by interacting with an environment, receiving rewards for good actions and penalties for bad ones.',
      realWorldExamples: [
        'Game playing (chess, Go)',
        'Robot navigation',
        'Autonomous driving',
        'Trading algorithms',
        'Resource management'
      ],
      advantages: [
        'Can learn complex strategies',
        'Adapts to changing environments',
        'Can achieve superhuman performance',
        'Learns through experience'
      ],
      disadvantages: [
        'Requires many trials to learn',
        'Can be computationally expensive',
        'May take dangerous actions during learning',
        'Hard to predict behavior'
      ],
      islamicPerspective: 'Islam teaches us to learn from our experiences and consequences. Reinforcement learning embodies this principle - it learns from the consequences of its actions, improving through trial and error, just as we grow wiser through life experiences.'
    }
  ];

  const [selected, setSelected] = useState<string[]>(Array(examples.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showHints, setShowHints] = useState<{[key: number]: boolean}>({});
  const [animations, setAnimations] = useState<{[key: number]: string}>({});
  const [expandedType, setExpandedType] = useState<string | null>(null);

  const handleChange = (idx: number, value: string) => {
    if (submitted) return;
    const updated = [...selected];
    updated[idx] = value;
    setSelected(updated);
    
    // Add animation
    setAnimations(prev => ({ ...prev, [idx]: 'pulse' }));
    setTimeout(() => setAnimations(prev => ({ ...prev, [idx]: '' })), 500);
  };

  const handleSubmit = () => {
    let correct = 0;
    examples.forEach((ex, idx) => {
      if (selected[idx] === ex.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected(Array(examples.length).fill(''));
    setSubmitted(false);
    setScore(0);
    setShowHints({});
    setAnimations({});
  };

  const toggleHint = (idx: number) => {
    setShowHints(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleTypeDetails = (typeName: string) => {
    setExpandedType(expandedType === typeName ? null : typeName);
  };

  const getTypeInfo = (typeName: string) => {
    return types.find(t => t.name === typeName);
  };

  return (
    <div>
      {/* Learning Types Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-6">
        {types.map((type, idx) => (
          <motion.div
            key={type.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-gradient-to-r ${type.color} p-4 rounded-lg text-white cursor-pointer transition-all duration-300 hover:scale-105`}
            onClick={() => toggleTypeDetails(type.name)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl">{type.icon}</div>
              <button className="text-white/80 hover:text-white transition-colors">
                {expandedType === type.name ? '−' : '+'}
              </button>
            </div>
            <h4 className="font-bold mb-1">{type.name}</h4>
            <p className="text-sm opacity-90">{type.description}</p>
            
            {expandedType === type.name && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 space-y-3 text-sm"
              >
                <div>
                  <h5 className="font-semibold mb-1">How it works:</h5>
                  <p className="opacity-90">{type.detailedDescription}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-1">Real-world examples:</h5>
                  <ul className="opacity-90 space-y-1">
                    {type.realWorldExamples.map((example, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <h5 className="font-semibold mb-1 text-green-200">✅ Advantages:</h5>
                    <ul className="opacity-90 space-y-1">
                      {type.advantages.map((adv, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-1 text-red-200">⚠️ Disadvantages:</h5>
                    <ul className="opacity-90 space-y-1">
                      {type.disadvantages.map((dis, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{dis}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white/10 p-3 rounded-lg">
                  <h5 className="font-semibold mb-1 text-yellow-200">🕌 Islamic Perspective:</h5>
                  <p className="opacity-90 text-sm">{type.islamicPerspective}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Matching Game */}
      <div className="space-y-4 mb-6">
        {examples.map((ex, idx) => (
          <motion.div
            key={ex.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-gray-800/50 p-6 rounded-lg border transition-all duration-300 ${
              animations[idx] ? 'animate-pulse' : ''
            } ${
              submitted
                ? selected[idx] === ex.answer
                  ? 'border-green-400 bg-green-900/20'
                  : 'border-red-400 bg-red-900/20'
                : 'border-gray-600 hover:border-islamic-gold'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
              <div className="flex-1">
                <span className="text-gray-300 font-medium text-lg">{ex.example}</span>
                {showHints[idx] && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-sm text-gray-400 mt-2 italic"
                  >
                    💡 {ex.description}
                  </motion.p>
                )}
              </div>
              
              <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                <button
                  onClick={() => toggleHint(idx)}
                  className="text-gray-400 hover:text-islamic-gold transition-colors text-lg"
                  title="Show hint"
                >
                  💡
                </button>
                
                <select
                  className={`rounded-lg p-3 border focus:outline-none focus:border-islamic-gold transition-all duration-300 min-w-[200px] ${
                    submitted
                      ? selected[idx] === ex.answer
                        ? 'border-green-400 bg-green-900/30 text-green-300'
                        : 'border-red-400 bg-red-900/30 text-red-300'
                      : 'border-gray-600 bg-gray-700 text-gray-300 hover:border-islamic-gold'
                  }`}
                  value={selected[idx]}
                  onChange={e => handleChange(idx, e.target.value)}
                  disabled={submitted}
                >
                  <option value="">Select type…</option>
                  {types.map(type => (
                    <option key={type.name} value={type.name}>
                      {type.icon} {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result feedback */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 p-2 rounded-lg ${
                  selected[idx] === ex.answer
                    ? 'bg-green-900/30 border border-green-400'
                    : 'bg-red-900/30 border border-red-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className={selected[idx] === ex.answer ? 'text-green-400' : 'text-red-400'}>
                    {selected[idx] === ex.answer ? '✅ Correct!' : '❌ Incorrect'}
                  </span>
                  <span className="text-gray-300 text-sm">
                    Correct answer: {getTypeInfo(ex.answer)?.icon} {ex.answer}
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-4 px-10 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all disabled:opacity-50 text-lg"
            disabled={selected.some(val => !val)}
          >
            Check Answers
          </button>
        ) : (
          <>
            <div className="flex-1">
              <div className="text-center lg:text-left">
                <div className="text-4xl mb-3">
                  {score === examples.length ? '🎉' : score > examples.length / 2 ? '👍' : '📚'}
                </div>
                <span className="text-xl font-semibold text-islamic-gold">
                  You got {score} out of {examples.length} correct!
                </span>
                <p className="text-gray-400 text-base mt-2">
                  {score === examples.length 
                    ? "Perfect! You understand the different types of Machine Learning!"
                    : score > examples.length / 2
                    ? "Good job! Review the incorrect answers to improve your understanding."
                    : "Keep learning! Review the material and try again."
                  }
                </p>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="bg-gray-700 text-gray-300 font-bold py-4 px-8 rounded-lg hover:bg-gray-600 transition-all text-lg"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
function FindPatternActivity() {
  const patterns = [
    // Easy patterns
    { 
      id: 1,
      seq: [2, 4, 6, 8], 
      answer: 10, 
      hint: 'Add 2 each time.',
      difficulty: 'Easy',
      patternType: 'Arithmetic',
      explanation: 'This is an arithmetic sequence where we add the same number (2) to each term.',
      islamicContext: 'In Islam, we learn about consistency and regularity. This pattern shows how consistent rules create predictable outcomes.'
    },
    { 
      id: 2,
      seq: [10, 7, 4, 1], 
      answer: -2, 
      hint: 'Subtract 3 each time.',
      difficulty: 'Easy',
      patternType: 'Arithmetic',
      explanation: 'This is a decreasing arithmetic sequence where we subtract 3 from each term.',
      islamicContext: 'Sometimes we need to decrease or simplify things to find clarity, just as this pattern decreases systematically.'
    },
    { 
      id: 3,
      seq: [1, 3, 5, 7], 
      answer: 9, 
      hint: 'Add 2 each time (odd numbers).',
      difficulty: 'Easy',
      patternType: 'Arithmetic',
      explanation: 'This sequence shows consecutive odd numbers, adding 2 each time.',
      islamicContext: 'Odd numbers have special significance in Islamic geometry and patterns.'
    },
    
    // Medium patterns
    { 
      id: 4,
      seq: [3, 6, 12, 24], 
      answer: 48, 
      hint: 'Multiply by 2.',
      difficulty: 'Medium',
      patternType: 'Geometric',
      explanation: 'This is a geometric sequence where each term is multiplied by 2.',
      islamicContext: 'Geometric growth is like knowledge - when shared, it multiplies and benefits everyone.'
    },
    { 
      id: 5,
      seq: [1, 1, 2, 3, 5], 
      answer: 8, 
      hint: 'Fibonacci sequence.',
      difficulty: 'Medium',
      patternType: 'Fibonacci',
      explanation: 'Each number is the sum of the two preceding numbers: 1+1=2, 1+2=3, 2+3=5, 3+5=8.',
      islamicContext: 'The Fibonacci sequence appears in nature and Islamic art, showing Allah\'s perfect design.'
    },
    { 
      id: 6,
      seq: [2, 6, 18, 54], 
      answer: 162, 
      hint: 'Multiply by 3.',
      difficulty: 'Medium',
      patternType: 'Geometric',
      explanation: 'This is a geometric sequence where each term is multiplied by 3.',
      islamicContext: 'Exponential growth reminds us of how small good deeds can multiply into great rewards.'
    },
    { 
      id: 7,
      seq: [1, 4, 9, 16], 
      answer: 25, 
      hint: 'Perfect squares.',
      difficulty: 'Medium',
      patternType: 'Square Numbers',
      explanation: 'These are perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25.',
      islamicContext: 'Perfect squares represent completeness and balance, important concepts in Islamic architecture.'
    },
    
    // Hard patterns
    { 
      id: 8,
      seq: [1, 2, 4, 7, 11], 
      answer: 16, 
      hint: 'Add increasing numbers.',
      difficulty: 'Hard',
      patternType: 'Triangular Numbers',
      explanation: 'Add 1, then 2, then 3, then 4, then 5. Each difference increases by 1.',
      islamicContext: 'This pattern shows how complexity can emerge from simple rules, like the complexity of creation.'
    },
    { 
      id: 9,
      seq: [2, 3, 5, 7, 11], 
      answer: 13, 
      hint: 'Prime numbers.',
      difficulty: 'Hard',
      patternType: 'Prime Numbers',
      explanation: 'These are consecutive prime numbers: 2, 3, 5, 7, 11, 13.',
      islamicContext: 'Prime numbers are unique and indivisible, like the oneness of Allah (Tawhid).'
    },
    { 
      id: 10,
      seq: [1, 3, 6, 10, 15], 
      answer: 21, 
      hint: 'Add consecutive numbers.',
      difficulty: 'Hard',
      patternType: 'Triangular Numbers',
      explanation: 'Add 2, then 3, then 4, then 5, then 6. These are triangular numbers.',
      islamicContext: 'Triangular numbers represent building and growth, like building knowledge step by step.'
    },
    { 
      id: 11,
      seq: [1, 2, 6, 24, 120], 
      answer: 720, 
      hint: 'Factorial sequence.',
      difficulty: 'Hard',
      patternType: 'Factorial',
      explanation: '1!, 2!, 3!, 4!, 5!, 6! = 1, 2, 6, 24, 120, 720.',
      islamicContext: 'Factorials show how possibilities multiply, like the infinite possibilities Allah has created.'
    },
    { 
      id: 12,
      seq: [1, 1, 2, 3, 5, 8], 
      answer: 13, 
      hint: 'Extended Fibonacci.',
      difficulty: 'Hard',
      patternType: 'Fibonacci',
      explanation: 'Extended Fibonacci sequence: each number is the sum of the two before it.',
      islamicContext: 'The golden ratio in Fibonacci appears in Islamic art and architecture, reflecting divine proportion.'
    }
  ];

  const [patternIdx, setPatternIdx] = useState(0);
  const [guess, setGuess] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [difficulty, setDifficulty] = useState('All');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const current = patterns[patternIdx];

  const filteredPatterns = difficulty === 'All' 
    ? patterns 
    : patterns.filter(p => p.difficulty === difficulty);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttempts(attempts + 1);
    setCorrect(Number(guess) === current.answer);
    setSubmitted(true);
    if (Number(guess) === current.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const currentFilteredIndex = filteredPatterns.findIndex(p => p.id === current.id);
    const nextIndex = (currentFilteredIndex + 1) % filteredPatterns.length;
    const nextPattern = filteredPatterns[nextIndex];
    const nextGlobalIndex = patterns.findIndex(p => p.id === nextPattern.id);
    
    setPatternIdx(nextGlobalIndex);
    setGuess('');
    setSubmitted(false);
    setCorrect(false);
    setShowHint(false);
    setShowExplanation(false);
  };

  const handleDifficultyChange = (newDifficulty: string) => {
    setDifficulty(newDifficulty);
    const firstPatternInDifficulty = patterns.find(p => 
      newDifficulty === 'All' || p.difficulty === newDifficulty
    );
    if (firstPatternInDifficulty) {
      setPatternIdx(patterns.findIndex(p => p.id === firstPatternInDifficulty.id));
      setGuess('');
      setSubmitted(false);
      setCorrect(false);
      setShowHint(false);
      setShowExplanation(false);
    }
  };

  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setPatternIdx(0);
    setGuess('');
    setSubmitted(false);
    setCorrect(false);
    setShowHint(false);
    setShowExplanation(false);
  };

  return (
    <div>
      {/* Difficulty Selector */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Choose Difficulty:</h3>
        <div className="flex flex-wrap gap-2">
          {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
            <button
              key={diff}
              onClick={() => handleDifficultyChange(diff)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                difficulty === diff
                  ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Pattern Display */}
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-gray-300 text-lg">What comes next in this sequence?</span>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                current.difficulty === 'Easy' ? 'bg-green-600 text-white' :
                current.difficulty === 'Medium' ? 'bg-yellow-600 text-black' :
                'bg-red-600 text-white'
              }`}>
                {current.difficulty}
              </span>
              <span className="text-gray-400 text-sm">{current.patternType}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Score: {score}</div>
            <div className="text-sm text-gray-400">Attempts: {attempts}</div>
          </div>
        </div>

        {/* Sequence Display */}
        <div className="flex flex-wrap gap-3 mb-6">
          {current.seq.map((num, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="w-16 h-16 bg-gradient-to-br from-islamic-gold to-yellow-500 rounded-lg flex items-center justify-center text-black font-bold text-lg shadow-lg"
            >
              {num}
            </motion.div>
          ))}
          <div className="w-16 h-16 border-2 border-dashed border-gray-500 rounded-lg flex items-center justify-center text-gray-400 font-bold text-lg">
            ?
          </div>
        </div>

        {/* Input and Controls */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
            <input
              type="number"
              value={guess}
              onChange={e => setGuess(e.target.value)}
              className="flex-1 rounded-lg p-3 border border-gray-600 bg-gray-700 text-gray-300 focus:border-islamic-gold focus:outline-none text-lg"
              placeholder="Your answer"
              disabled={submitted}
            />
            <div className="flex space-x-2 mt-2 lg:mt-0">
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                disabled={submitted}
              >
                💡 Hint
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all"
                disabled={submitted || !guess}
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        {/* Hint */}
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-blue-900/30 border border-blue-400 rounded-lg"
          >
            <p className="text-blue-300 font-semibold">💡 Hint: {current.hint}</p>
          </motion.div>
        )}

        {/* Result */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-lg border ${
              correct 
                ? 'bg-green-900/30 border-green-400' 
                : 'bg-red-900/30 border-red-400'
            }`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <span className={correct ? 'text-green-400' : 'text-red-400'} className="text-2xl">
                {correct ? '🎉' : '❌'}
              </span>
              <span className={correct ? 'text-green-400' : 'text-red-400'} className="font-semibold text-lg">
                {correct ? 'Correct!' : 'Not quite right.'}
              </span>
            </div>
            <p className="text-gray-300 mb-2">
              The answer is <span className="font-bold text-islamic-gold">{current.answer}</span>
            </p>
            
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="text-blue-400 hover:text-blue-300 transition-colors mb-2"
            >
              {showExplanation ? 'Hide' : 'Show'} Explanation
            </button>
            
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-3"
              >
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-1">How it works:</h4>
                  <p className="text-gray-300">{current.explanation}</p>
                </div>
                <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-3 rounded-lg border-l-4 border-islamic-gold">
                  <h4 className="font-semibold text-islamic-gold mb-1">Islamic Perspective:</h4>
                  <p className="text-gray-300 text-sm">{current.islamicContext}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleNext}
            className="bg-gray-700 text-gray-300 font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-all"
          >
            Next Pattern
          </button>
          <button
            onClick={resetGame}
            className="bg-gray-800 text-gray-400 font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-all"
          >
            Reset Game
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="text-center">
        <p className="text-gray-400">
          Pattern {filteredPatterns.findIndex(p => p.id === current.id) + 1} of {filteredPatterns.length}
        </p>
        {attempts > 0 && (
          <p className="text-gray-400 mt-1">
            Success rate: {Math.round((score / attempts) * 100)}%
          </p>
        )}
      </div>
    </div>
  );
}

function UserRolesActivity() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const roles = [
    {
      title: "AI Developer",
      description: "Creates AI systems and writes code",
      responsibilities: ["Write algorithms", "Test systems", "Fix bugs", "Improve performance"],
      ethicalDuties: ["Ensure fairness", "Prevent bias", "Protect privacy", "Consider safety"]
    },
    {
      title: "Data Scientist",
      description: "Analyzes data and builds models",
      responsibilities: ["Collect data", "Clean data", "Build models", "Validate results"],
      ethicalDuties: ["Use quality data", "Avoid bias", "Respect privacy", "Be transparent"]
    },
    {
      title: "End User",
      description: "Uses AI systems in daily life",
      responsibilities: ["Use AI responsibly", "Report problems", "Learn how it works", "Make informed decisions"],
      ethicalDuties: ["Use ethically", "Don't misuse", "Stay informed", "Question when needed"]
    },
    {
      title: "Policy Maker",
      description: "Creates rules and regulations for AI",
      responsibilities: ["Set guidelines", "Create laws", "Monitor compliance", "Balance interests"],
      ethicalDuties: ["Protect public", "Ensure fairness", "Promote innovation", "Consider all stakeholders"]
    },
    {
      title: "Ethics Committee Member",
      description: "Reviews AI systems for ethical concerns",
      responsibilities: ["Review proposals", "Assess risks", "Recommend changes", "Monitor outcomes"],
      ethicalDuties: ["Uphold values", "Prevent harm", "Ensure justice", "Protect rights"]
    }
  ];

  const handleToggleRole = (roleTitle: string) => {
    if (submitted) return;
    setSelectedRoles(prev => 
      prev.includes(roleTitle) 
        ? prev.filter(r => r !== roleTitle)
        : [...prev, roleTitle]
    );
  };

  const handleSubmit = () => {
    // All roles are important, so give full points for any selection
    setScore(Math.min(selectedRoles.length * 2, 10));
    setSubmitted(true);
  };

  return (
    <div>
      <p className="text-gray-300 mb-4">
        Select the AI roles you think are most important for creating responsible AI systems:
      </p>
      
      <div className="space-y-4 mb-6">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-lg border transition-colors cursor-pointer ${
              selectedRoles.includes(role.title)
                ? 'bg-gradient-to-r from-islamic-gold/20 to-yellow-500/20 border-islamic-gold'
                : 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50'
            }`}
            onClick={() => handleToggleRole(role.title)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-1">{role.title}</h4>
                <p className="text-gray-300 text-sm mb-2">{role.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <h5 className="text-islamic-gold font-semibold mb-1">Responsibilities:</h5>
                    <ul className="text-gray-400 space-y-1">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i}>• {resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-green-400 font-semibold mb-1">Ethical Duties:</h5>
                    <ul className="text-gray-400 space-y-1">
                      {role.ethicalDuties.map((duty, i) => (
                        <li key={i}>• {duty}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ml-4 ${
                selectedRoles.includes(role.title)
                  ? 'bg-islamic-gold border-islamic-gold'
                  : 'border-gray-500'
              }`}>
                {selectedRoles.includes(role.title) && (
                  <CheckCircle className="w-4 h-4 text-black" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={selectedRoles.length === 0 || submitted}
        className="w-full bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit Selection
      </button>

      {submitted && (
        <div className="mt-4 p-4 bg-green-900/30 border border-green-500 rounded-lg">
          <h4 className="text-green-400 font-semibold mb-2">Excellent understanding!</h4>
          <p className="text-gray-300 text-sm mb-2">
            You selected {selectedRoles.length} important roles. All these roles work together to create responsible AI systems.
          </p>
          <p className="text-gray-300 text-sm">
            <strong>Key insight:</strong> Every role in AI has both technical responsibilities and ethical duties. 
            Success depends on everyone doing their part with integrity and care for others.
          </p>
        </div>
      )}
    </div>
  );
} 
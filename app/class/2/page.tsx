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

      <main className="max-w-6xl mx-auto px-4 py-8">
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
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
                  // What is Machine Learning? – Spot the AI!
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Spot the AI!</h4>
                    <p className="text-gray-300 mb-2">Which of these technologies use Machine Learning? (Select all that apply)</p>
                    <SpotTheAIActivity />
                  </div>
                )}
                {currentSection === 1 && (
                  // Types of Machine Learning – Match the Type!
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Match the Type!</h4>
                    <p className="text-gray-300 mb-2">Match each example to the correct type of Machine Learning.</p>
                    <MatchMLTypeActivity />
                  </div>
                )}
                {currentSection === 2 && (
                  // Data and Patterns – Find the Pattern!
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Find the Pattern!</h4>
                    <FindPatternActivity />
                  </div>
                )}
                {currentSection === 3 && (
                  // Training and Testing – Train the Model!
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Train the Model!</h4>
                    <TrainModelActivity />
                  </div>
                )}
                {currentSection === 4 && (
                  // Ethical Machine Learning – Is it Fair?
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Is it Fair?</h4>
                    <IsItFairActivity />
                  </div>
                )}
                {currentSection === 5 && (
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
  const options = [
    { label: 'Voice Assistant (e.g., Siri)', isAI: true },
    { label: 'Electric Fan', isAI: false },
    { label: 'Email Spam Filter', isAI: true },
    { label: 'Calculator', isAI: false },
    { label: 'Movie Recommendation System', isAI: true },
    { label: 'Flashlight', isAI: false },
    { label: 'Self-driving Car', isAI: true },
    { label: 'Mechanical Clock', isAI: false },
  ];
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
        <div className="mt-3">
          <span className="text-lg font-semibold text-islamic-gold">You got {score} out of {options.length} correct!</span>
        </div>
      )}
    </div>
  );
}
function MatchMLTypeActivity() {
  const examples = [
    { example: 'Image classification (cat vs dog)', answer: 'Supervised' },
    { example: 'Customer segmentation for marketing', answer: 'Unsupervised' },
    { example: 'Game playing (e.g., chess AI)', answer: 'Reinforcement' },
    { example: 'Spam email detection', answer: 'Supervised' },
    { example: 'Grouping news articles by topic', answer: 'Unsupervised' },
    { example: 'Robot learning to walk', answer: 'Reinforcement' },
  ];
  const types = ['Supervised', 'Unsupervised', 'Reinforcement'];
  const [selected, setSelected] = useState<string[]>(Array(examples.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (idx: number, value: string) => {
    if (submitted) return;
    const updated = [...selected];
    updated[idx] = value;
    setSelected(updated);
  };

  const handleSubmit = () => {
    let correct = 0;
    examples.forEach((ex, idx) => {
      if (selected[idx] === ex.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  return (
    <div>
      <div className="space-y-4 mb-4">
        {examples.map((ex, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <span className="text-gray-300 flex-1 mb-2 md:mb-0">{ex.example}</span>
            <select
              className={`rounded-lg p-2 border focus:outline-none focus:border-islamic-gold transition-colors
                ${submitted
                  ? selected[idx] === ex.answer
                    ? 'border-green-400 bg-green-50 text-green-800'
                    : 'border-red-400 bg-red-50 text-red-800'
                  : 'border-gray-600 bg-gray-800 text-gray-300'}
              `}
              value={selected[idx]}
              onChange={e => handleChange(idx, e.target.value)}
              disabled={submitted}
            >
              <option value="">Select type…</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-2 px-6 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all"
          disabled={selected.some(val => !val)}
        >
          Submit
        </button>
      ) : (
        <div className="mt-3">
          <span className="text-lg font-semibold text-islamic-gold">You got {score} out of {examples.length} correct!</span>
        </div>
      )}
    </div>
  );
}
function FindPatternActivity() {
  // Example patterns: arithmetic, geometric, Fibonacci, etc.
  const patterns = [
    { seq: [2, 4, 6, 8], answer: 10, hint: 'Add 2 each time.' },
    { seq: [3, 6, 12, 24], answer: 48, hint: 'Multiply by 2.' },
    { seq: [1, 1, 2, 3, 5], answer: 8, hint: 'Fibonacci sequence.' },
    { seq: [10, 7, 4, 1], answer: -2, hint: 'Subtract 3 each time.' },
    { seq: [5, 10, 20, 40], answer: 80, hint: 'Multiply by 2.' },
  ];
  const [patternIdx, setPatternIdx] = useState(0);
  const [guess, setGuess] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const current = patterns[patternIdx];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCorrect(Number(guess) === current.answer);
    setSubmitted(true);
  };

  const handleNext = () => {
    setPatternIdx((patternIdx + 1) % patterns.length);
    setGuess('');
    setSubmitted(false);
    setCorrect(false);
  };

  return (
    <div>
      <div className="mb-4">
        <span className="text-gray-300">What comes next in this sequence?</span>
        <div className="flex space-x-2 mt-2">
          {current.seq.map((num, idx) => (
            <div key={idx} className="w-10 h-10 bg-gradient-to-br from-islamic-gold to-yellow-500 rounded-lg flex items-center justify-center text-black font-bold">
              {num}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <input
          type="number"
          value={guess}
          onChange={e => setGuess(e.target.value)}
          className="rounded-lg p-2 border border-gray-600 bg-gray-800 text-gray-300 focus:border-islamic-gold focus:outline-none mb-2 md:mb-0"
          placeholder="Your guess"
          disabled={submitted}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-2 px-6 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all"
          disabled={submitted || !guess}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="ml-0 md:ml-2 mt-2 md:mt-0 bg-gray-700 text-gray-300 font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-all"
        >
          Try Another
        </button>
      </form>
      {submitted && (
        <div className="mt-3">
          {correct ? (
            <span className="text-green-400 font-semibold">Correct! 🎉</span>
          ) : (
            <span className="text-red-400 font-semibold">Not quite. Hint: {current.hint}</span>
          )}
        </div>
      )}
    </div>
  );
}
function TrainModelActivity() {
  const [trainingSteps, setTrainingSteps] = useState(0);
  const [tested, setTested] = useState(false);
  const [result, setResult] = useState('');
  const requiredSteps = 5;

  const handleTrain = () => {
    if (trainingSteps < requiredSteps) {
      setTrainingSteps(trainingSteps + 1);
    }
    setTested(false);
    setResult('');
  };

  const handleTest = () => {
    setTested(true);
    if (trainingSteps >= requiredSteps) {
      setResult('Success! The model performs well on new data. 🎉');
    } else {
      setResult('Model needs more training to perform well. Try more training steps!');
    }
  };

  const progressPercent = Math.min((trainingSteps / requiredSteps) * 100, 100);

  return (
    <div>
      <div className="mb-4">
        <span className="text-gray-300">Simulate training a model by clicking "Train". When you think the model is ready, click "Test"!</span>
        <div className="w-full bg-gray-700 rounded-full h-3 mt-4">
          <div
            className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-3 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="text-sm text-gray-400 mt-2">Training steps: {trainingSteps} / {requiredSteps}</div>
      </div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={handleTrain}
          className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-2 px-6 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all"
          disabled={trainingSteps >= requiredSteps}
        >
          Train
        </button>
        <button
          onClick={handleTest}
          className="bg-gray-700 text-gray-300 font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-all"
          disabled={trainingSteps === 0}
        >
          Test
        </button>
        <button
          onClick={() => { setTrainingSteps(0); setTested(false); setResult(''); }}
          className="bg-gray-800 text-gray-400 font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-all"
        >
          Reset
        </button>
      </div>
      {tested && (
        <div className="mt-3">
          <span className={result.startsWith('Success') ? 'text-green-400 font-semibold' : 'text-red-400 font-semibold'}>{result}</span>
        </div>
      )}
    </div>
  );
}
function IsItFairActivity() {
  const scenarios = [
    {
      text: 'A job application AI always prefers candidates from one city, even if others are equally qualified.',
      answer: 'Biased',
      explanation: 'Preferring one city is unfair and likely reflects bias in the data.'
    },
    {
      text: 'A medical diagnosis AI is tested on many different groups and works equally well for all.',
      answer: 'Fair',
      explanation: 'Testing on diverse groups and equal performance means the system is fair.'
    },
    {
      text: 'A loan approval AI only uses financial history and ignores gender or race.',
      answer: 'Fair',
      explanation: 'Ignoring irrelevant personal info and focusing on financial data is fair.'
    },
    {
      text: 'A facial recognition system works well for adults but poorly for children.',
      answer: 'Biased',
      explanation: 'If it works poorly for some groups, it is biased and needs improvement.'
    },
    {
      text: 'A school grading AI gives lower scores to essays written by students with non-Western names.',
      answer: 'Biased',
      explanation: 'This is a clear sign of bias and unfairness.'
    },
  ];
  const [selected, setSelected] = useState<string[]>(Array(scenarios.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (idx: number, value: string) => {
    if (submitted) return;
    const updated = [...selected];
    updated[idx] = value;
    setSelected(updated);
  };

  const handleSubmit = () => {
    let correct = 0;
    scenarios.forEach((sc, idx) => {
      if (selected[idx] === sc.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  return (
    <div>
      <div className="space-y-4 mb-4">
        {scenarios.map((sc, idx) => (
          <div key={idx} className="bg-gray-800/50 p-4 rounded-lg">
            <span className="text-gray-300">{sc.text}</span>
            <div className="mt-2 flex space-x-4">
              {['Fair', 'Biased'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleSelect(idx, opt)}
                  className={`py-1 px-4 rounded-lg border font-semibold transition-colors
                    ${selected[idx] === opt
                      ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black border-islamic-gold'
                      : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'}
                    ${submitted && selected[idx] === sc.answer && selected[idx] === opt ? 'ring-2 ring-green-400' : ''}
                    ${submitted && selected[idx] && selected[idx] !== sc.answer && selected[idx] === opt ? 'ring-2 ring-red-400' : ''}
                  `}
                  disabled={submitted}
                >
                  {opt}
                </button>
              ))}
            </div>
            {submitted && (
              <div className="mt-2 text-sm">
                <span className={selected[idx] === sc.answer ? 'text-green-400' : 'text-red-400'}>
                  {selected[idx] === sc.answer ? 'Correct!' : 'Not quite.'}
                </span>
                <span className="ml-2 text-gray-400">{sc.explanation}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-2 px-6 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all"
          disabled={selected.some(val => !val)}
        >
          Submit
        </button>
      ) : (
        <div className="mt-3">
          <span className="text-lg font-semibold text-islamic-gold">You got {score} out of {scenarios.length} correct!</span>
        </div>
      )}
    </div>
  );
}
function MLForGoodActivity() {
  return <div className="text-gray-400">[Interactive: ML for Good! Activity coming soon]</div>;
} 
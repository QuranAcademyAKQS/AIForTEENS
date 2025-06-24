'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Building2, Shield, Lightbulb, Users, ArrowLeft, Play, CheckCircle, XCircle, BookOpen, MessageCircle, Target, Heart, Globe, Network, Layers, Zap, Eye, Cpu, Activity, GitBranch } from 'lucide-react'
import Link from 'next/link'

export default function Class3() {
  const [currentSection, setCurrentSection] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)
  const [currentActivity, setCurrentActivity] = useState(0)
  const [neuralNetwork, setNeuralNetwork] = useState({
    layers: [3, 4, 4, 2],
    connections: [],
    learning: false
  })
  const [simulationData, setSimulationData] = useState<number[]>([])

  const sections = [
    {
      title: "What are Neural Networks?",
      content: "Neural Networks are AI systems inspired by how human brains work. They consist of interconnected nodes (neurons) that process information in layers. Each connection has a weight that determines how much influence it has on the final decision.",
      islamicContext: "The human brain is one of Allah's most amazing creations. Neural networks attempt to mimic this divine design, showing how we can learn from Allah's creation to build beneficial technology.",
      activities: ["Brain vs Computer Comparison", "Network Visualization", "Learning Process Discussion"],
      examples: ["Image recognition", "Speech processing", "Language translation"]
    },
    {
      title: "How Neural Networks Work",
      content: "Information flows through the network from input layer to output layer, with hidden layers in between. Each neuron receives inputs, applies weights, and uses an activation function to decide whether to 'fire' or not. The network learns by adjusting these weights.",
      islamicContext: "Just as our brains process information through complex pathways, neural networks create digital pathways for information. This reflects the intricate design Allah has placed in creation.",
      activities: ["Signal Flow Simulation", "Weight Adjustment", "Activation Function Demo"],
      examples: ["Forward propagation", "Backpropagation", "Gradient descent"]
    },
    {
      title: "Training Neural Networks",
      content: "Training involves showing the network many examples and adjusting weights to minimize errors. We use backpropagation to calculate how much each weight should change. The goal is to make the network's predictions as accurate as possible.",
      islamicContext: "Learning and improvement are continuous processes in Islam. Just as we strive to better ourselves, neural networks continuously improve through training and experience.",
      activities: ["Training Simulation", "Error Analysis", "Performance Tracking"],
      examples: ["Supervised learning", "Loss functions", "Optimization algorithms"]
    },
    {
      title: "Deep Learning and Layers",
      content: "Deep Learning uses many layers to learn complex patterns. Each layer extracts different features - early layers detect simple patterns like edges, while deeper layers recognize complex objects. More layers can learn more sophisticated relationships.",
      islamicContext: "Depth and complexity in learning reflect the layers of wisdom in Islamic knowledge. Just as we study different levels of understanding, deep networks process information at multiple levels.",
      activities: ["Layer Analysis", "Feature Extraction", "Depth Comparison"],
      examples: ["Convolutional Neural Networks", "Recurrent Neural Networks", "Transformers"]
    },
    {
      title: "Neural Network Applications",
      content: "Neural networks power many modern AI applications: computer vision, natural language processing, autonomous vehicles, medical diagnosis, and more. They excel at tasks that require pattern recognition and complex decision-making.",
      islamicContext: "Using neural networks to help humanity aligns with Islamic values of service and compassion. These technologies should be applied to solve real problems and improve people's lives.",
      activities: ["Application Brainstorming", "Problem-Solving", "Impact Assessment"],
      examples: ["Self-driving cars", "Medical imaging", "Virtual assistants"]
    },
    {
      title: "Ethical Neural Networks",
      content: "Neural networks can inherit biases from training data and make decisions that affect people's lives. We must ensure transparency, fairness, and accountability. Explainable AI helps us understand how networks make decisions.",
      islamicContext: "Islamic ethics require transparency and justice. Our AI systems must be accountable and treat everyone fairly, reflecting the principles of adl (justice) and ihsan (excellence).",
      activities: ["Bias Detection", "Transparency Analysis", "Ethical Guidelines"],
      examples: ["Explainable AI", "Fairness metrics", "Bias mitigation"]
    }
  ]

  const quizQuestions = [
    {
      question: "What inspired the design of neural networks?",
      options: ["Computer circuits", "Human brain structure", "Mathematical formulas", "Electrical wiring"],
      correct: "Human brain structure"
    },
    {
      question: "What are the basic building blocks of neural networks?",
      options: ["Transistors", "Neurons (nodes)", "Batteries", "Wires"],
      correct: "Neurons (nodes)"
    },
    {
      question: "How do neural networks learn?",
      options: ["By reading books", "By adjusting connection weights", "By asking questions", "By watching videos"],
      correct: "By adjusting connection weights"
    },
    {
      question: "What is backpropagation used for?",
      options: ["Moving data forward", "Calculating weight adjustments", "Storing information", "Displaying results"],
      correct: "Calculating weight adjustments"
    },
    {
      question: "Why are multiple layers important in deep learning?",
      options: ["They look cooler", "They can learn more complex patterns", "They use more electricity", "They are easier to build"],
      correct: "They can learn more complex patterns"
    },
    {
      question: "What ethical consideration is most important for neural networks?",
      options: ["Speed", "Cost", "Fairness and transparency", "Complexity"],
      correct: "Fairness and transparency"
    },
    {
      question: "How should neural networks be used according to Islamic values?",
      options: ["Only for profit", "To serve humanity and solve problems", "Only for entertainment", "To replace humans"],
      correct: "To serve humanity and solve problems"
    }
  ]

  const neuralExperiments = [
    {
      title: "Neural Network Visualization",
      description: "Explore how information flows through a simple neural network.",
      steps: [
        "Watch how data moves through layers",
        "See how weights affect the flow",
        "Observe the learning process",
        "Understand the decision-making"
      ],
      islamicContext: "Understanding how systems work helps us appreciate Allah's wisdom in creation and use technology responsibly."
    },
    {
      title: "Pattern Recognition Training",
      description: "Train a simple neural network to recognize patterns.",
      steps: [
        "Provide training examples",
        "Watch the network learn",
        "Test on new data",
        "Analyze performance"
      ],
      islamicContext: "Learning and improvement are continuous processes that reflect our journey of spiritual and intellectual growth."
    },
    {
      title: "Bias Detection Exercise",
      description: "Learn to identify and address bias in neural networks.",
      steps: [
        "Examine training data",
        "Identify potential biases",
        "Test on diverse examples",
        "Implement fairness measures"
      ],
      islamicContext: "Justice and fairness are core Islamic values that must be reflected in our technological creations."
    }
  ]

  const discussionTopics = [
    "How do neural networks compare to human learning?",
    "What are the potential risks of deep learning systems?",
    "How can we ensure neural networks make fair decisions?",
    "What role should humans play in neural network decisions?",
    "How can neural networks help solve global problems?",
    "What are some ways neural networks could improve education?",
    "How should we regulate neural network development?"
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

  const addSimulationData = () => {
    setSimulationData([...simulationData, Math.random()])
  }

  const startLearning = () => {
    setNeuralNetwork({...neuralNetwork, learning: true})
    setTimeout(() => {
      setNeuralNetwork({...neuralNetwork, learning: false})
    }, 3000)
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
              <Network className="w-8 h-8 text-islamic-gold mr-3" />
              <span className="text-white font-semibold">Class 3: Neural Networks & Deep Learning</span>
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

            {/* Neural Network Concepts */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
              <h3 className="text-lg font-semibold text-white mb-4">Neural Network Concepts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Network className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Inspired by human brain</span>
                </div>
                <div className="flex items-center">
                  <Layers className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Multiple processing layers</span>
                </div>
                <div className="flex items-center">
                  <GitBranch className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Connected neurons</span>
                </div>
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Weighted connections</span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Pattern recognition</span>
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
            {/* Neural Network Visualization */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Neural Network Visualization</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Network Structure</h3>
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <div className="space-y-4">
                      {neuralNetwork.layers.map((layerSize, layerIndex) => (
                        <div key={layerIndex} className="flex items-center justify-center space-x-2">
                          <span className="text-gray-300 text-sm w-20">Layer {layerIndex + 1}:</span>
                          <div className="flex space-x-1">
                            {Array.from({ length: layerSize }).map((_, nodeIndex) => (
                              <div
                                key={nodeIndex}
                                className={`w-4 h-4 rounded-full ${
                                  neuralNetwork.learning 
                                    ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 animate-pulse' 
                                    : 'bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={startLearning}
                      disabled={neuralNetwork.learning}
                      className="mt-4 w-full bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all disabled:opacity-50"
                    >
                      {neuralNetwork.learning ? 'Learning...' : 'Start Learning'}
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Learning Process</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300 text-sm">
                      Watch how the neural network learns by adjusting its connections and weights. This simulates how real neural networks improve through training.
                    </p>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-islamic-gold mb-2">Learning Steps:</h4>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div>1. Input data flows through network</div>
                        <div>2. Network makes prediction</div>
                        <div>3. Compare with actual result</div>
                        <div>4. Adjust weights to improve</div>
                        <div>5. Repeat until accurate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Neural Network Experiments */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Hands-On Neural Network Experiments</h2>
              
              <div className="space-y-6">
                {neuralExperiments.map((experiment, index) => (
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
                    placeholder="Share your thoughts on neural networks and their impact..."
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
                      ? "Excellent! You've mastered the concepts of Neural Networks and Deep Learning."
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
                    <Link href="/class/4" className="px-6 py-2 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all">
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
                    placeholder="Reflect on the key Neural Network concepts you learned today..."
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Future Applications</h3>
                  <textarea
                    placeholder="How could you use neural networks to solve problems in your community?"
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
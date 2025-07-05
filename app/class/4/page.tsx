'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Users, MessageCircle, Cpu, Play, CheckCircle, ArrowLeft, Target, Eye, Network, Zap, Lightbulb, BookOpen, Heart, Globe, Activity, Database, TrendingUp, Code, GitBranch, XCircle } from 'lucide-react'
import Link from 'next/link'

export default function Class4() {
  const [currentSection, setCurrentSection] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)
  const [currentActivity, setCurrentActivity] = useState(0)
  const [neuralData, setNeuralData] = useState<number[]>([])

  const sections = [
    {
      title: "Understanding Neural Networks",
      content: "Neural networks are inspired by how our brains work. They consist of interconnected nodes (neurons) that process information and learn patterns. Each connection has a weight that adjusts as the network learns, just like how our brain strengthens connections through learning.",
      islamicContext: "In Islam, we are taught about transformation and change. The Quran says 'Indeed, Allah will not change the condition of a people until they change what is in themselves' (13:11). Neural networks embody this principle of continuous learning and adaptation.",
      activities: ["Neural Network Visualization", "Pattern Recognition", "Learning Process"],
      examples: ["Image recognition", "Speech processing", "Language translation", "Game playing"]
    },
    {
      title: "How Neural Networks Learn",
      content: "Neural networks learn through a process called backpropagation. They make predictions, compare them to correct answers, and adjust their connections to reduce errors. This iterative process continues until the network can make accurate predictions on new data.",
      islamicContext: "Learning and improvement are continuous processes in Islam. The Prophet (ﷺ) said 'Seek knowledge from the cradle to the grave.' Neural networks demonstrate this principle of lifelong learning and self-improvement.",
      activities: ["Training Simulation", "Error Analysis", "Learning Visualization"],
      examples: ["Gradient descent", "Loss functions", "Weight updates", "Convergence"]
    },
    {
      title: "Layers and Architecture",
      content: "Neural networks are organized in layers: input layer (receives data), hidden layers (process information), and output layer (produces results). Deep networks have multiple hidden layers, allowing them to learn complex patterns and relationships.",
      islamicContext: "Just as Islamic knowledge has different levels and layers - from basic principles to advanced understanding - neural networks use multiple layers to build complex understanding from simple inputs.",
      activities: ["Layer Exploration", "Architecture Design", "Depth Analysis"],
      examples: ["Input layer", "Hidden layers", "Output layer", "Deep networks"]
    },
    {
      title: "Community Learning in AI",
      content: "Community learning occurs when multiple AI systems work together, sharing knowledge and experiences. This collaborative approach can lead to better solutions, faster learning, and more robust systems that benefit from diverse perspectives.",
      islamicContext: "The Prophet (ﷺ) said 'The believers are like a building, each part supporting the other.' Community learning in AI reflects this Islamic principle of cooperation and mutual support for the greater good.",
      activities: ["Collaborative Training", "Knowledge Sharing", "Collective Intelligence"],
      examples: ["Federated learning", "Ensemble methods", "Distributed training", "Knowledge transfer"]
    },
    {
      title: "Neural Network Applications",
      content: "Neural networks are used in many applications: computer vision, natural language processing, robotics, healthcare, and more. They excel at tasks that require pattern recognition and can process large amounts of data quickly and accurately.",
      islamicContext: "Using technology to serve humanity aligns with Islamic values. Neural network applications should prioritize helping people, solving real problems, and making the world a better place for everyone.",
      activities: ["Application Exploration", "Problem Solving", "Impact Assessment"],
      examples: ["Medical diagnosis", "Autonomous vehicles", "Smart assistants", "Financial analysis"]
    },
    {
      title: "Ethical Neural Networks",
      content: "As neural networks become more powerful, we must consider their ethical implications. Issues include bias in training data, privacy concerns, transparency of decisions, and ensuring AI systems align with human values and Islamic principles.",
      islamicContext: "Islamic ethics require justice, fairness, and responsibility. Our neural networks must reflect these values, treating every person with dignity and respect, and being accountable for their decisions and actions.",
      activities: ["Bias Detection", "Ethical Guidelines", "Responsibility Discussion"],
      examples: ["Algorithmic bias", "Privacy protection", "Explainable AI", "Human oversight"]
    },
    {
      title: "Future of Neural Networks",
      content: "The future of neural networks includes more efficient learning, better interpretability, and integration with other AI technologies. We must ensure these advances benefit all of humanity and align with Islamic values of compassion and service.",
      islamicContext: "Islam encourages innovation and progress that serves humanity. As we advance neural network technology, we must remember our responsibility to use it wisely and for the benefit of all people.",
      activities: ["Future Visioning", "Innovation Discussion", "Responsible Development"],
      examples: ["Neuromorphic computing", "Quantum neural networks", "Brain-computer interfaces", "Sustainable AI"]
    },
    {
      title: "Neural Networks vs Machine Learning",
      content: "Machine Learning is a broad field that includes many different methods for teaching computers to learn from data. Neural Networks are a specific type of machine learning inspired by how human brains work, using interconnected nodes (neurons) to process information. While all neural networks are machine learning, not all machine learning uses neural networks.",
      islamicContext: "The Quran teaches us to 'reflect on the creation of the heavens and the earth' (3:191). Understanding different approaches to learning helps us appreciate the diversity of Allah's creation and the various ways we can solve problems and gain knowledge.",
      activities: ["Comparison Analysis", "Method Exploration", "Real-world Examples", "Islamic Perspective Discussion"],
      examples: ["Decision trees", "Support vector machines", "Neural networks", "Clustering algorithms", "Reinforcement learning"]
    },
    {
      title: "How ChatGPT Works",
      content: "ChatGPT is a large language model that uses transformer neural networks to understand and generate human-like text. It was trained on vast amounts of text data from books, websites, and conversations, learning patterns in language to respond intelligently to questions and prompts.",
      islamicContext: "The Quran teaches us to 'Read in the name of your Lord who created' (96:1). ChatGPT represents the culmination of human knowledge sharing and learning, helping us access and understand information more easily. However, we must use it responsibly and verify information from reliable sources.",
      activities: ["ChatGPT Simulation", "Prompt Engineering", "Bias Detection", "Ethical Discussion"],
      examples: ["Text generation", "Question answering", "Language translation", "Code assistance", "Creative writing"]
    }
  ]

  const quizQuestions = [
    {
      question: "What are neural networks inspired by?",
      options: ["Computer circuits", "Human brain", "Mathematical equations", "Programming languages"],
      correct: "Human brain"
    },
    {
      question: "How do neural networks learn?",
      options: ["By reading manuals", "Through backpropagation and adjusting weights", "By asking humans", "By copying other networks"],
      correct: "Through backpropagation and adjusting weights"
    },
    {
      question: "What is the purpose of multiple layers in neural networks?",
      options: ["To make them look bigger", "To process information in stages and learn complex patterns", "To use more electricity", "To be more expensive"],
      correct: "To process information in stages and learn complex patterns"
    },
    {
      question: "What is community learning in AI?",
      options: ["Learning alone", "Multiple AI systems working together and sharing knowledge", "Only human learning", "Reading textbooks"],
      correct: "Multiple AI systems working together and sharing knowledge"
    },
    {
      question: "What Islamic value does community learning reflect?",
      options: ["Individualism", "Cooperation and mutual support", "Competition", "Isolation"],
      correct: "Cooperation and mutual support"
    },
    {
      question: "Why is ethical consideration important in neural networks?",
      options: ["It's not important", "Neural networks can inherit biases and cause harm", "It's only for research", "It's just a legal requirement"],
      correct: "Neural networks can inherit biases and cause harm"
    },
    {
      question: "How should we approach neural network development according to Islamic values?",
      options: ["Focus only on profit", "Use technology to serve humanity and solve real problems", "Ignore ethical concerns", "Only use for entertainment"],
      correct: "Use technology to serve humanity and solve real problems"
    },
    {
      question: "What should we remember when developing neural networks?",
      options: ["Only technical aspects", "Ethical considerations and Islamic values", "Only speed", "Only cost"],
      correct: "Ethical considerations and Islamic values"
    },
    {
      question: "What type of neural network does ChatGPT use?",
      options: ["Convolutional neural networks", "Transformer neural networks", "Recurrent neural networks", "Simple neural networks"],
      correct: "Transformer neural networks"
    },
    {
      question: "How does ChatGPT understand and respond to text?",
      options: ["By memorizing responses", "By learning patterns from vast amounts of text data", "By asking humans", "By following strict rules"],
      correct: "By learning patterns from vast amounts of text data"
    },
    {
      question: "What Islamic principle does ChatGPT's knowledge sharing represent?",
      options: ["Individualism", "Seeking and sharing knowledge", "Competition", "Isolation"],
      correct: "Seeking and sharing knowledge"
    },
    {
      question: "Why should we verify information from ChatGPT?",
      options: ["It's always wrong", "It can make mistakes and we should verify from reliable sources", "It's too slow", "It's too expensive"],
      correct: "It can make mistakes and we should verify from reliable sources"
    },
    {
      question: "What is the relationship between neural networks and machine learning?",
      options: ["They are completely different", "All neural networks are machine learning, but not all machine learning uses neural networks", "They are the same thing", "Neural networks are not machine learning"],
      correct: "All neural networks are machine learning, but not all machine learning uses neural networks"
    },
    {
      question: "What are neural networks inspired by?",
      options: ["Computer circuits", "Human brain", "Mathematical equations", "Programming languages"],
      correct: "Human brain"
    },
    {
      question: "Which of these is NOT a type of machine learning?",
      options: ["Decision trees", "Neural networks", "Word processing", "Clustering algorithms"],
      correct: "Word processing"
    },
    {
      question: "What Islamic principle does understanding different learning methods reflect?",
      options: ["Individualism", "Appreciating diversity in Allah's creation", "Competition", "Isolation"],
      correct: "Appreciating diversity in Allah's creation"
    }
  ]

  const neuralExperiments = [
    {
      title: "Neural Network Visualization",
      description: "Explore how neural networks process information through interactive visualization.",
      steps: [
        "Watch how data flows through the network",
        "See how neurons activate and connect",
        "Observe learning in action",
        "Understand pattern recognition"
      ],
      islamicContext: "Understanding Allah's creation helps us appreciate His wisdom. Neural networks show us how complex systems can emerge from simple components."
    },
    {
      title: "Pattern Recognition Game",
      description: "Practice recognizing patterns like neural networks do.",
      steps: [
        "Identify visual patterns",
        "Learn from mistakes",
        "Improve accuracy over time",
        "Understand learning algorithms"
      ],
      islamicContext: "Pattern recognition is a gift from Allah that helps us understand His creation. Machines can learn this skill too."
    },
    {
      title: "Community Learning Simulation",
      description: "Experience how multiple AI systems can learn together.",
      steps: [
        "Start with individual learning",
        "Connect multiple learners",
        "Share knowledge and insights",
        "See improved collective performance"
      ],
      islamicContext: "Cooperation and mutual support are Islamic values. Community learning demonstrates how working together leads to better results."
    }
  ]

  const discussionTopics = [
    "How can neural networks help solve problems in your community?",
    "What are some potential risks of biased neural networks?",
    "How can we ensure neural networks benefit everyone, not just wealthy people?",
    "What role should humans play in neural network decision-making?",
    "How can neural networks be used to promote environmental sustainability?",
    "What are some ways neural networks could improve education for everyone?"
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

  const addNeuralData = () => {
    setNeuralData([...neuralData, Math.floor(Math.random() * 10)])
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
              <span className="text-white font-semibold">Class 4: Neural Networks & Community Learning</span>
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

                {/* Interactive Activities */}
                {currentSection === 0 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Neural Network Visualization</h4>
                    <p className="text-gray-300 mb-4">Explore how neural networks process information through this interactive visualization.</p>
                    <NeuralNetworkVisualization />
                  </div>
                )}
                {currentSection === 1 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Learning Process Simulation</h4>
                    <p className="text-gray-300 mb-4">Watch how neural networks learn through backpropagation.</p>
                    <LearningProcessSimulation />
                  </div>
                )}
                {currentSection === 2 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Layer Architecture Explorer</h4>
                    <p className="text-gray-300 mb-4">Explore different neural network architectures and their layers.</p>
                    <LayerArchitectureExplorer />
                  </div>
                )}
                {currentSection === 3 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Community Learning Simulation</h4>
                    <p className="text-gray-300 mb-4">Experience how multiple AI systems can learn together.</p>
                    <CommunityLearningSimulation />
                  </div>
                )}
                {currentSection === 4 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Application Explorer</h4>
                    <p className="text-gray-300 mb-4">Explore real-world applications of neural networks.</p>
                    <ApplicationExplorer />
                  </div>
                )}
                {currentSection === 5 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Ethical Neural Networks</h4>
                    <p className="text-gray-300 mb-4">Discuss ethical considerations in neural network development.</p>
                    <EthicalNeuralNetworks />
                  </div>
                )}
                {currentSection === 6 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Future Vision</h4>
                    <p className="text-gray-300 mb-4">Explore the future of neural networks and AI.</p>
                    <FutureVision />
                  </div>
                )}
                {currentSection === 7 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Machine Learning vs Neural Networks</h4>
                    <p className="text-gray-300 mb-4">Compare different machine learning methods and understand their relationships.</p>
                    <MLvsNNComparison />
                  </div>
                )}
                {currentSection === 8 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">ChatGPT Simulation</h4>
                    <p className="text-gray-300 mb-4">Experience how ChatGPT works through this interactive simulation.</p>
                    <ChatGPTSimulation />
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

            {/* Neural Network Concepts */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
              <h3 className="text-lg font-semibold text-white mb-4">Neural Network Concepts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Brain className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Inspired by human brain</span>
                </div>
                <div className="flex items-center">
                  <Network className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Connected neurons</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Learn from data</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Community learning</span>
                </div>
              </div>
            </div>

            {/* Quick Quiz */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
              <h3 className="text-lg font-semibold text-white mb-4">Knowledge Check</h3>
              {!showResults ? (
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm">Test your understanding of neural networks and community learning.</p>
                  <button
                    onClick={() => setShowResults(true)}
                    className="w-full bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold py-2 px-4 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all"
                  >
                    Take Quiz
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-islamic-gold mb-2">
                      {getScore()}/{quizQuestions.length}
                    </div>
                    <p className="text-gray-300 text-sm">
                      {getScore() >= 6 ? "Excellent understanding!" :
                       getScore() >= 4 ? "Good progress!" :
                       "Keep learning!"}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowResults(false)
                      setQuizAnswers({})
                    }}
                    className="w-full bg-gray-700 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>

            {/* Discussion Topics */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
              <h3 className="text-lg font-semibold text-white mb-4">Discussion Topics</h3>
              <div className="space-y-3">
                {discussionTopics.slice(0, 3).map((topic, index) => (
                  <div key={index} className="text-gray-300 text-sm">
                    • {topic}
                  </div>
                ))}
                <button className="text-islamic-gold text-sm hover:text-yellow-400 transition-colors">
                  View all topics →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Modal */}
        {showResults && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Neural Networks & Community Learning Quiz</h2>
              <div className="space-y-6">
                {quizQuestions.map((question, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-lg font-semibold text-islamic-gold">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <label key={optionIndex} className="flex items-center gap-3 p-3 rounded-lg border border-gray-600 hover:bg-gray-700 cursor-pointer">
                          <input
                            type="radio"
                            name={`q${index}`}
                            value={option}
                            onChange={(e) => setQuizAnswers({...quizAnswers, [`q${index}`]: e.target.value})}
                            className="text-islamic-gold"
                          />
                          <span className="text-gray-300">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex gap-4">
                  <button
                    onClick={handleQuizSubmit}
                    className="flex-1 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all"
                  >
                    Submit Answers
                  </button>
                  <button
                    onClick={() => setShowResults(false)}
                    className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

// Interactive Activity Components
function NeuralNetworkVisualization() {
  const [currentStep, setCurrentStep] = useState(0)
  
  const steps = [
    "Data enters the input layer",
    "Information flows through hidden layers",
    "Neurons activate and process data",
    "Output layer produces results",
    "Network learns from feedback"
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-center mb-4">
        <div className="flex items-center space-x-4">
          {[1, 2, 3, 4].map((layer, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-xs text-gray-400 mb-2">Layer {layer}</div>
              <div className="space-y-1">
                {[1, 2, 3].map((neuron) => (
                  <div
                    key={neuron}
                    className={`w-4 h-4 rounded-full border ${
                      currentStep >= index ? 'bg-islamic-gold border-islamic-gold' : 'bg-gray-600 border-gray-500'
                    } transition-all duration-500`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-gray-300 mb-4">{steps[currentStep]}</p>
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            className="px-4 py-2 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-400 hover:to-islamic-gold transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

function LearningProcessSimulation() {
  const [epoch, setEpoch] = useState(0)
  const [accuracy, setAccuracy] = useState(30)
  
  const simulateLearning = () => {
    if (epoch < 10) {
      setEpoch(epoch + 1)
      setAccuracy(Math.min(95, accuracy + Math.random() * 10))
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-800/50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-300">Epoch: {epoch}/10</span>
          <span className="text-islamic-gold font-semibold">Accuracy: {accuracy.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div 
            className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${accuracy}%` }}
          />
        </div>
      </div>
      
      <div className="text-center">
        <button
          onClick={simulateLearning}
          disabled={epoch >= 10}
          className="px-6 py-2 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-400 hover:to-islamic-gold transition-all"
        >
          {epoch >= 10 ? 'Training Complete!' : 'Train Next Epoch'}
        </button>
      </div>
    </div>
  )
}

function LayerArchitectureExplorer() {
  const [selectedArchitecture, setSelectedArchitecture] = useState('simple')
  
  const architectures = {
    simple: { layers: 2, description: "Basic neural network with input and output layers" },
    deep: { layers: 5, description: "Deep neural network with multiple hidden layers" },
    wide: { layers: 3, description: "Wide neural network with many neurons per layer" }
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 mb-4">
        {Object.keys(architectures).map((arch) => (
          <button
            key={arch}
            onClick={() => setSelectedArchitecture(arch)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              selectedArchitecture === arch
                ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {arch.charAt(0).toUpperCase() + arch.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="bg-gray-800/50 p-4 rounded-lg">
        <h4 className="text-islamic-gold font-semibold mb-2">
          {selectedArchitecture.charAt(0).toUpperCase() + selectedArchitecture.slice(1)} Architecture
        </h4>
        <p className="text-gray-300 text-sm mb-3">{architectures[selectedArchitecture].description}</p>
        <div className="flex items-center space-x-2">
          {Array.from({ length: architectures[selectedArchitecture].layers }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-xs text-gray-400 mb-1">L{index + 1}</div>
              <div className="w-8 h-8 bg-islamic-gold/20 border border-islamic-gold rounded-lg flex items-center justify-center">
                <span className="text-islamic-gold text-xs font-bold">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CommunityLearningSimulation() {
  const [individualAccuracy, setIndividualAccuracy] = useState(75)
  const [communityAccuracy, setCommunityAccuracy] = useState(85)
  
  const improveCommunity = () => {
    setCommunityAccuracy(Math.min(98, communityAccuracy + Math.random() * 5))
  }

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <h4 className="text-islamic-gold font-semibold mb-2">Individual Learning</h4>
          <div className="text-2xl font-bold text-gray-300 mb-2">{individualAccuracy}%</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gray-500 h-2 rounded-full" style={{ width: `${individualAccuracy}%` }} />
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <h4 className="text-islamic-gold font-semibold mb-2">Community Learning</h4>
          <div className="text-2xl font-bold text-gray-300 mb-2">{communityAccuracy}%</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-2 rounded-full" style={{ width: `${communityAccuracy}%` }} />
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <button
          onClick={improveCommunity}
          className="px-6 py-2 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all"
        >
          Share Knowledge
        </button>
      </div>
    </div>
  )
}

function ApplicationExplorer() {
  const [selectedApp, setSelectedApp] = useState('medical')
  
  const applications = {
    medical: { name: "Medical Diagnosis", description: "AI systems that help doctors diagnose diseases from medical images", icon: "🏥" },
    autonomous: { name: "Autonomous Vehicles", description: "Self-driving cars that use neural networks for navigation", icon: "🚗" },
    language: { name: "Language Translation", description: "Real-time translation between different languages", icon: "🌐" },
    finance: { name: "Financial Analysis", description: "AI systems that analyze market trends and detect fraud", icon: "💰" }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 mb-4">
        {Object.keys(applications).map((app) => (
          <button
            key={app}
            onClick={() => setSelectedApp(app)}
            className={`p-3 rounded-lg transition-colors ${
              selectedApp === app
                ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <div className="text-2xl mb-1">{applications[app].icon}</div>
            <div className="text-xs">{applications[app].name}</div>
          </button>
        ))}
      </div>
      
      <div className="bg-gray-800/50 p-4 rounded-lg">
        <h4 className="text-islamic-gold font-semibold mb-2">{applications[selectedApp].name}</h4>
        <p className="text-gray-300 text-sm">{applications[selectedApp].description}</p>
      </div>
    </div>
  )
}

function EthicalNeuralNetworks() {
  const [selectedIssue, setSelectedIssue] = useState('bias')
  
  const issues = {
    bias: { name: "Algorithmic Bias", description: "Neural networks can inherit biases from training data", solution: "Use diverse, representative training data" },
    privacy: { name: "Privacy Concerns", description: "AI systems may collect and process personal data", solution: "Implement strong privacy protections" },
    transparency: { name: "Lack of Transparency", description: "Neural networks can be 'black boxes'", solution: "Develop explainable AI techniques" },
    accountability: { name: "Accountability", description: "Who is responsible for AI decisions?", solution: "Establish clear responsibility frameworks" }
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 mb-4">
        {Object.keys(issues).map((issue) => (
          <button
            key={issue}
            onClick={() => setSelectedIssue(issue)}
            className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${
              selectedIssue === issue
                ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {issues[issue].name}
          </button>
        ))}
      </div>
      
      <div className="bg-gray-800/50 p-4 rounded-lg">
        <h4 className="text-islamic-gold font-semibold mb-2">{issues[selectedIssue].name}</h4>
        <p className="text-gray-300 text-sm mb-3">{issues[selectedIssue].description}</p>
        <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-3 rounded-lg border-l-4 border-islamic-gold">
          <h5 className="text-islamic-gold font-semibold text-sm mb-1">Islamic Solution</h5>
          <p className="text-gray-300 text-sm">{issues[selectedIssue].solution}</p>
        </div>
      </div>
    </div>
  )
}

function FutureVision() {
  const [selectedFuture, setSelectedFuture] = useState('efficiency')
  
  const futures = {
    efficiency: { name: "More Efficient Learning", description: "Neural networks that learn faster with less data", impact: "Reduced computational costs and environmental impact" },
    interpretability: { name: "Better Interpretability", description: "AI systems that can explain their decisions", impact: "Increased trust and accountability" },
    integration: { name: "Human-AI Integration", description: "Seamless collaboration between humans and AI", impact: "Enhanced human capabilities and productivity" },
    sustainability: { name: "Sustainable AI", description: "Environmentally friendly neural networks", impact: "Reduced carbon footprint and resource usage" }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 mb-4">
        {Object.keys(futures).map((future) => (
          <button
            key={future}
            onClick={() => setSelectedFuture(future)}
            className={`p-3 rounded-lg transition-colors ${
              selectedFuture === future
                ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <div className="text-sm font-semibold">{futures[future].name}</div>
          </button>
        ))}
      </div>
      
      <div className="bg-gray-800/50 p-4 rounded-lg">
        <h4 className="text-islamic-gold font-semibold mb-2">{futures[selectedFuture].name}</h4>
        <p className="text-gray-300 text-sm mb-3">{futures[selectedFuture].description}</p>
        <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-3 rounded-lg border-l-4 border-islamic-gold">
          <h5 className="text-islamic-gold font-semibold text-sm mb-1">Potential Impact</h5>
          <p className="text-gray-300 text-sm">{futures[selectedFuture].impact}</p>
        </div>
      </div>
    </div>
  )
}

function MLvsNNComparison() {
  const [selectedMethod, setSelectedMethod] = useState("")
  const [showDetails, setShowDetails] = useState(false)

  const methods = {
    "Neural Networks": {
      description: "Inspired by human brain, uses interconnected neurons",
      pros: ["Can learn complex patterns", "Good for image/speech recognition", "Can handle large datasets"],
      cons: ["Requires lots of data", "Can be a 'black box'", "Computationally expensive"],
      examples: ["ChatGPT", "Image recognition", "Self-driving cars"]
    },
    "Decision Trees": {
      description: "Tree-like model of decisions and consequences",
      pros: ["Easy to understand", "Works with small datasets", "No data scaling needed"],
      cons: ["Can overfit", "May not capture complex relationships", "Sensitive to data changes"],
      examples: ["Medical diagnosis", "Credit scoring", "Game AI"]
    },
    "Support Vector Machines": {
      description: "Finds the best boundary between different classes",
      pros: ["Effective in high dimensions", "Memory efficient", "Versatile"],
      cons: ["Sensitive to feature scaling", "Can be slow with large datasets", "Requires careful parameter tuning"],
      examples: ["Text classification", "Image classification", "Bioinformatics"]
    },
    "Clustering": {
      description: "Groups similar data points together",
      pros: ["No labels needed", "Reveals hidden patterns", "Simple to understand"],
      cons: ["May not find meaningful groups", "Sensitive to distance metrics", "Requires choosing number of clusters"],
      examples: ["Customer segmentation", "Image compression", "Document organization"]
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl p-6 border border-islamic-gold/30">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <GitBranch className="w-5 h-5 mr-2 text-islamic-gold" />
        Machine Learning Methods Comparison
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Object.keys(methods).map((method) => (
          <button
            key={method}
            onClick={() => {
              setSelectedMethod(method)
              setShowDetails(true)
            }}
            className={`p-3 rounded-lg border transition-all ${
              selectedMethod === method
                ? "border-islamic-gold bg-islamic-gold/20 text-white"
                : "border-gray-600 bg-gray-700/50 text-gray-300 hover:border-islamic-gold/50"
            }`}
          >
            <div className="text-sm font-medium">{method}</div>
          </button>
        ))}
      </div>

      {showDetails && selectedMethod && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/70 rounded-lg p-6 border border-islamic-gold/20"
        >
          <h4 className="text-lg font-bold text-islamic-gold mb-3">{selectedMethod}</h4>
          <p className="text-gray-300 mb-4">{methods[selectedMethod as keyof typeof methods].description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-green-400 font-semibold mb-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                Advantages
              </h5>
              <ul className="text-sm text-gray-300 space-y-1">
                {methods[selectedMethod as keyof typeof methods].pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-red-400 font-semibold mb-2 flex items-center">
                <XCircle className="w-4 h-4 mr-1" />
                Limitations
              </h5>
              <ul className="text-sm text-gray-300 space-y-1">
                {methods[selectedMethod as keyof typeof methods].cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-4">
            <h5 className="text-blue-400 font-semibold mb-2 flex items-center">
              <Lightbulb className="w-4 h-4 mr-1" />
              Real-world Examples
            </h5>
            <div className="flex flex-wrap gap-2">
              {methods[selectedMethod as keyof typeof methods].examples.map((example, index) => (
                <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  {example}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

function ChatGPTSimulation() {
  const [userInput, setUserInput] = useState('')
  const [chatHistory, setChatHistory] = useState<Array<{role: string, content: string}>>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  
  const processingSteps = [
    "Analyzing your input...",
    "Understanding context...",
    "Generating response...",
    "Applying language patterns...",
    "Finalizing answer..."
  ]

  const sampleResponses = {
    "hello": "Hello! I'm a simulation of ChatGPT. How can I help you learn about neural networks today?",
    "how do neural networks work": "Neural networks work by processing information through interconnected nodes (neurons) that learn patterns from data. Each connection has a weight that adjusts as the network learns, similar to how our brains strengthen connections through learning.",
    "what is machine learning": "Machine learning is a type of AI that learns from data to make predictions and decisions. Instead of following strict rules, it finds patterns in information and improves over time.",
    "explain islamic values in ai": "Islamic values in AI emphasize using technology to serve humanity, ensuring fairness and justice, protecting privacy, and being accountable for our creations. We should use AI to help people and solve real problems while treating everyone with dignity and respect.",
    "help": "I can help you understand neural networks, machine learning, AI applications, and how these technologies relate to Islamic values. Just ask me a question!"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userInput.trim()) return

    const userMessage = { role: 'user', content: userInput }
    setChatHistory([...chatHistory, userMessage])
    setIsProcessing(true)
    setCurrentStep(0)

    // Simulate processing
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < processingSteps.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          setIsProcessing(false)
          
          // Generate response
          const lowerInput = userInput.toLowerCase()
          let response = "I'm a simulation of ChatGPT. I can help you learn about neural networks, AI, and Islamic perspectives on technology. Try asking me about how neural networks work, machine learning, or Islamic values in AI."
          
          for (const [key, value] of Object.entries(sampleResponses)) {
            if (lowerInput.includes(key)) {
              response = value
              break
            }
          }
          
          const aiMessage = { role: 'assistant', content: response }
          setChatHistory(prev => [...prev, aiMessage])
          setUserInput('')
          return prev
        }
      })
    }, 800)
  }

  return (
    <div className="space-y-4">
      {/* Processing Visualization */}
      {isProcessing && (
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <h4 className="text-islamic-gold font-semibold mb-3">ChatGPT Processing</h4>
          <div className="space-y-2">
            {processingSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  index <= currentStep ? 'bg-islamic-gold' : 'bg-gray-600'
                }`} />
                <span className={`text-sm ${
                  index <= currentStep ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chat Interface */}
      <div className="bg-gray-800/50 p-4 rounded-lg">
        <h4 className="text-islamic-gold font-semibold mb-3">Chat Interface</h4>
        <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
          {chatHistory.map((message, index) => (
            <div key={index} className={`p-3 rounded-lg ${
              message.role === 'user' 
                ? 'bg-islamic-gold/20 ml-8' 
                : 'bg-gray-700/50 mr-8'
            }`}>
              <div className="text-xs text-gray-400 mb-1">
                {message.role === 'user' ? 'You' : 'ChatGPT'}
              </div>
              <div className="text-gray-300 text-sm">{message.content}</div>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask me about neural networks, AI, or Islamic values..."
            className="flex-1 bg-gray-700 text-gray-300 px-3 py-2 rounded-lg border border-gray-600 focus:border-islamic-gold focus:outline-none"
            disabled={isProcessing}
          />
          <button
            type="submit"
            disabled={isProcessing || !userInput.trim()}
            className="px-4 py-2 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-400 hover:to-islamic-gold transition-all"
          >
            Send
          </button>
        </form>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
        <h5 className="text-islamic-gold font-semibold text-sm mb-2">Try asking:</h5>
        <div className="space-y-1 text-sm text-gray-300">
          <div>• "How do neural networks work?"</div>
          <div>• "What is machine learning?"</div>
          <div>• "Explain Islamic values in AI"</div>
          <div>• "Hello"</div>
        </div>
      </div>
    </div>
  )
} 
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Users, MessageCircle, Cpu, Play, CheckCircle, ArrowLeft, Target, Eye, Network, Zap, Lightbulb, BookOpen, Heart, Globe, Activity, Database, TrendingUp, Code, GitBranch, XCircle, Layers } from 'lucide-react'
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
      title: "Neural Networks vs Machine Learning",
      content: "Machine Learning is a broad field that includes many different methods for teaching computers to learn from data. Neural Networks are a specific type of machine learning inspired by how human brains work, using interconnected nodes (neurons) to process information. While all neural networks are machine learning, not all machine learning uses neural networks.",
      islamicContext: "The Quran teaches us to 'reflect on the creation of the heavens and the earth' (3:191). Understanding different approaches to learning helps us appreciate the diversity of Allah's creation and the various ways we can solve problems and gain knowledge.",
      activities: ["Comparison Analysis", "Method Exploration", "Real-world Examples", "Islamic Perspective Discussion"],
      examples: ["Decision trees", "Support vector machines", "Neural networks", "Clustering algorithms", "Reinforcement learning"]
    },
    {
      title: "How Neural Networks Learn",
      content: "Neural networks learn through a sophisticated process called backpropagation. This involves several key components working together: Backpropagation calculates how much each connection contributed to the error and adjusts them accordingly. Gradient descent is the optimization algorithm that finds the best path to minimize errors by following the steepest descent. Loss functions measure how far off the network's predictions are from the correct answers. Weight updates adjust the strength of connections based on their contribution to errors. Convergence occurs when the network stops improving significantly, indicating it has learned the patterns in the data.",
      islamicContext: "Learning and improvement are continuous processes in Islam. The Prophet (ﷺ) said 'Seek knowledge from the cradle to the grave.' Neural networks demonstrate this principle of lifelong learning and self-improvement. Just as we learn from our mistakes and strive to do better, neural networks continuously refine their understanding through error correction and adaptation.",
      activities: ["Training Simulation", "Error Analysis", "Learning Visualization", "Gradient Descent Explorer", "Loss Function Analysis"],
      examples: ["Backpropagation algorithm", "Gradient descent optimization", "Loss functions (MSE, Cross-entropy)", "Weight update rules", "Convergence criteria"]
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
      title: "Transformer Neural Networks",
      content: "Transformer neural networks are a revolutionary architecture that changed how AI processes language. Unlike traditional neural networks that process information sequentially, transformers can look at all parts of a sentence at once using 'attention mechanisms.' This allows them to understand context and relationships between words much better, making them perfect for language tasks like translation, summarization, and conversation.",
      islamicContext: "The Quran emphasizes the importance of understanding context and meaning: 'We have sent it down as an Arabic Quran so that you may understand' (12:2). Transformers embody this principle by paying attention to the full context of language, helping us better understand and communicate meaning.",
      activities: ["Attention Mechanism Explorer", "Context Understanding Game", "Transformer Architecture Visualization", "Language Processing Simulation"],
      examples: ["Self-attention", "Multi-head attention", "Positional encoding", "Encoder-decoder architecture", "Context windows"]
    },
    {
      title: "How ChatGPT Works",
      content: "ChatGPT is a large language model that uses transformer neural networks to understand and generate human-like text. It was trained on vast amounts of text data from books, websites, and conversations, learning patterns in language to respond intelligently to questions and prompts.",
      islamicContext: "The Quran teaches us to 'Read in the name of your Lord who created' (96:1). ChatGPT represents the culmination of human knowledge sharing and learning, helping us access and understand information more easily. However, we must use it responsibly and verify information from reliable sources.",
      activities: ["ChatGPT Simulation", "Prompt Engineering", "Bias Detection", "Ethical Discussion"],
      examples: ["Text generation", "Question answering", "Language translation", "Code assistance", "Creative writing"]
    },
    {
      title: "Building Your Own ChatGPT",
      content: "Creating your own language model involves several key steps: data collection (gathering text from books, websites, conversations), preprocessing (cleaning and formatting the data), model architecture (designing the transformer network), training (teaching the model on your data), fine-tuning (specializing for specific tasks), and deployment (making it available for use). While building a full-scale ChatGPT requires significant resources, you can start with smaller models and learn the process step by step.",
      islamicContext: "The Prophet (ﷺ) said 'The best of people are those who are most beneficial to people.' When building AI systems, we should focus on creating tools that help others, solve real problems, and contribute positively to society. Our creations should reflect Islamic values of service, knowledge sharing, and ethical responsibility.",
      activities: ["Model Building Simulator", "Data Collection Exercise", "Training Process Explorer", "Ethical AI Design"],
      examples: ["Data preprocessing", "Model architecture design", "Training loops", "Fine-tuning", "Deployment strategies", "API development"]
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
    },
    {
      question: "What is backpropagation in neural networks?",
      options: ["A type of neural network", "A method to calculate how much each connection contributed to errors", "A programming language", "A hardware component"],
      correct: "A method to calculate how much each connection contributed to errors"
    },
    {
      question: "What does gradient descent do?",
      options: ["Creates new neural networks", "Finds the best path to minimize errors by following steepest descent", "Adds more layers to the network", "Changes the network's name"],
      correct: "Finds the best path to minimize errors by following steepest descent"
    },
    {
      question: "What is the purpose of loss functions?",
      options: ["To make the network faster", "To measure how far off predictions are from correct answers", "To change the network's color", "To add more neurons"],
      correct: "To measure how far off predictions are from correct answers"
    },
    {
      question: "What happens during weight updates?",
      options: ["The network gets bigger", "The strength of connections is adjusted based on their contribution to errors", "The network changes its name", "The network stops working"],
      correct: "The strength of connections is adjusted based on their contribution to errors"
    },
    {
      question: "What is convergence in neural networks?",
      options: ["When the network stops working", "When the network stops improving significantly, indicating it has learned", "When the network gets smaller", "When the network changes color"],
      correct: "When the network stops improving significantly, indicating it has learned"
    },
    {
      question: "What makes transformer neural networks different from traditional neural networks?",
      options: ["They are smaller", "They can look at all parts of a sentence at once using attention mechanisms", "They are faster", "They use less memory"],
      correct: "They can look at all parts of a sentence at once using attention mechanisms"
    },
    {
      question: "What is the key innovation of transformer neural networks?",
      options: ["Self-attention mechanism", "More layers", "Bigger size", "Different colors"],
      correct: "Self-attention mechanism"
    },
    {
      question: "What does the attention mechanism in transformers do?",
      options: ["Makes them faster", "Allows each word to pay attention to all other words in the sentence", "Reduces their size", "Changes their color"],
      correct: "Allows each word to pay attention to all other words in the sentence"
    },
    {
      question: "What type of neural network does ChatGPT use?",
      options: ["Convolutional neural networks", "Transformer neural networks", "Recurrent neural networks", "Simple neural networks"],
      correct: "Transformer neural networks"
    },
    {
      question: "How do transformers understand context better than traditional neural networks?",
      options: ["By being bigger", "By processing words sequentially", "By using attention mechanisms to look at all words simultaneously", "By using more memory"],
      correct: "By using attention mechanisms to look at all words simultaneously"
    },
    {
      question: "What is the first step in building your own language model?",
      options: ["Training the model", "Data collection", "Deploying the model", "Writing code"],
      correct: "Data collection"
    },
    {
      question: "What is fine-tuning in language model development?",
      options: ["Making the model smaller", "Specializing the model for specific tasks", "Deleting the model", "Changing the model's name"],
      correct: "Specializing the model for specific tasks"
    },
    {
      question: "What is a major challenge in building large language models?",
      options: ["They are too small", "They require significant computational resources", "They are too simple", "They don't need data"],
      correct: "They require significant computational resources"
    },
    {
      question: "What should you consider when building AI systems according to Islamic values?",
      options: ["Only technical aspects", "How the system can help others and solve real problems", "Only making money", "Only speed"],
      correct: "How the system can help others and solve real problems"
    },
    {
      question: "What is the purpose of model architecture in building language models?",
      options: ["To make them look pretty", "To design the structure of the neural network", "To change their color", "To make them smaller"],
      correct: "To design the structure of the neural network"
    },

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
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Machine Learning vs Neural Networks</h4>
                    <p className="text-gray-300 mb-4">Compare different machine learning methods and understand their relationships.</p>
                    <MLvsNNComparison />
                  </div>
                )}
                {currentSection === 2 && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold">
                      <h4 className="text-lg font-semibold text-islamic-gold mb-2">Learning Process Simulation</h4>
                      <p className="text-gray-300 mb-4">Watch how neural networks learn through backpropagation.</p>
                      <LearningProcessSimulation />
                    </div>
                    
                    <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold">
                      <h4 className="text-lg font-semibold text-islamic-gold mb-2">Teen Learning Journey - Understanding Epochs</h4>
                      <p className="text-gray-300 mb-4">Experience how epochs work through relatable learning scenarios!</p>
                      <TeenEpochExample />
                    </div>
                  </div>
                )}
                {currentSection === 3 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Layer Architecture Explorer</h4>
                    <p className="text-gray-300 mb-4">Explore different neural network architectures and their layers.</p>
                    <LayerArchitectureExplorer />
                  </div>
                )}
                {currentSection === 4 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Community Learning Simulation</h4>
                    <p className="text-gray-300 mb-4">Experience how multiple AI systems can learn together.</p>
                    <CommunityLearningSimulation />
                  </div>
                )}
                {currentSection === 5 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Application Explorer</h4>
                    <p className="text-gray-300 mb-4">Explore real-world applications of neural networks.</p>
                    <ApplicationExplorer />
                  </div>
                )}
                {currentSection === 6 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Ethical Neural Networks</h4>
                    <p className="text-gray-300 mb-4">Discuss ethical considerations in neural network development.</p>
                    <EthicalNeuralNetworks />
                  </div>
                )}
                {currentSection === 7 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">Transformer Architecture Explorer</h4>
                    <p className="text-gray-300 mb-4">Explore how transformer neural networks process language using attention mechanisms.</p>
                    <TransformerExplorer />
                  </div>
                )}
                {currentSection === 8 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">ChatGPT Simulation</h4>
                    <p className="text-gray-300 mb-4">Experience how ChatGPT works through this interactive simulation.</p>
                    <ChatGPTSimulation />
                  </div>
                )}
                {currentSection === 9 && (
                  <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-6 rounded-lg border-l-4 border-islamic-gold mt-4">
                    <h4 className="text-lg font-semibold text-islamic-gold mb-2">AI Model Builder</h4>
                    <p className="text-gray-300 mb-4">Learn how to build your own language model step by step.</p>
                    <AIModelBuilder />
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

function TeenEpochExample() {
  const [currentEpoch, setCurrentEpoch] = useState(0)
  const [learningProgress, setLearningProgress] = useState(0)
  const [currentTask, setCurrentTask] = useState('')
  const [completedTasks, setCompletedTasks] = useState<string[]>([])
  
  const learningTasks = [
    "Learning to ride a bike",
    "Memorizing Quran verses", 
    "Learning to cook a new recipe",
    "Practicing basketball shots",
    "Learning to play",
    "Studying for a math test",
    "Learning Arabic calligraphy",
    "Practicing soccer skills",
    "Memorizing hadith",
    "Learning to code"
  ]
  
  const epochDescriptions = [
    "First try - lots of mistakes, but you're starting to understand!",
    "Second attempt - you remember some things from before",
    "Third time - getting better, fewer mistakes",
    "Fourth round - you're building confidence",
    "Fifth try - you're getting the hang of it!",
    "Sixth attempt - really improving now",
    "Seventh round - almost there!",
    "Eighth try - you're doing great!",
    "Ninth attempt - almost perfect!",
    "Tenth round - you've mastered it! 🎉"
  ]
  
  const startNewEpoch = () => {
    if (currentEpoch < 10) {
      setCurrentEpoch(currentEpoch + 1)
      setLearningProgress(Math.min(100, learningProgress + Math.random() * 15 + 5))
      
      // Add a new task for this epoch
      const newTask = learningTasks[currentEpoch]
      setCurrentTask(newTask)
      setCompletedTasks([...completedTasks, newTask])
    }
  }
  
  const resetLearning = () => {
    setCurrentEpoch(0)
    setLearningProgress(0)
    setCurrentTask('')
    setCompletedTasks([])
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl p-6 border border-islamic-gold/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-islamic-gold" />
          Teen Learning Journey - Understanding Epochs
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 font-semibold">Learning Epoch: {currentEpoch}/10</span>
                <span className="text-islamic-gold font-bold text-lg">{learningProgress.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div 
                  className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${learningProgress}%` }}
                />
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-islamic-gold font-semibold mb-2">Current Learning Task:</h4>
              <p className="text-gray-300 text-lg font-medium">{currentTask || "Click 'Start Learning' to begin!"}</p>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-islamic-gold font-semibold mb-2">What's Happening:</h4>
              <p className="text-gray-300 text-sm">{epochDescriptions[currentEpoch] || "Ready to start your learning journey!"}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-islamic-gold font-semibold mb-3">Completed Learning Tasks:</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {completedTasks.map((task, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-2 bg-gray-700/50 p-2 rounded"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{task}</span>
                  </motion.div>
                ))}
                {completedTasks.length === 0 && (
                  <p className="text-gray-500 text-sm italic">No tasks completed yet. Start learning!</p>
                )}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
              <h4 className="text-islamic-gold font-semibold mb-2">💡 How This Relates to Neural Networks:</h4>
              <p className="text-gray-300 text-sm">
                Just like you learn through repetition and practice, neural networks learn through multiple epochs. 
                Each epoch is like studying the same material again - you get better each time!
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-6">
          <button
            onClick={startNewEpoch}
            disabled={currentEpoch >= 10}
            className="px-6 py-3 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-400 hover:to-islamic-gold transition-all"
          >
            {currentEpoch >= 10 ? '🎉 Learning Complete!' : '📚 Start Next Epoch'}
          </button>
          
          <button
            onClick={resetLearning}
            className="px-6 py-3 bg-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-600 transition-all"
          >
            🔄 Reset Learning
          </button>
        </div>
      </div>
    </div>
  )
}

function LayerArchitectureExplorer() {
  const [selectedArchitecture, setSelectedArchitecture] = useState('simple')
  
  const architectures: { [key: string]: { layers: number; description: string } } = {
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
  
  const applications: { [key: string]: { name: string; description: string; icon: string } } = {
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
  
  const issues: { [key: string]: { name: string; description: string; solution: string } } = {
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

function TransformerExplorer() {
  const [currentStep, setCurrentStep] = useState(0)
  const [attentionWeights, setAttentionWeights] = useState<{[key: string]: number}>({})
  const [sentence, setSentence] = useState("The cat sat on the mat")
  const [selectedWord, setSelectedWord] = useState("")
  const [contextWindow, setContextWindow] = useState<string[]>([])

  const words = sentence.split(" ")
  
  const attentionMechanism = (focusWord: string) => {
    const weights: {[key: string]: number} = {}
    words.forEach(word => {
      // Simulate attention weights based on word relationships
      if (word === focusWord) {
        weights[word] = 1.0
      } else if (word.toLowerCase() === focusWord.toLowerCase()) {
        weights[word] = 0.8
      } else if (word.length === focusWord.length) {
        weights[word] = 0.6
      } else {
        weights[word] = 0.2 + Math.random() * 0.3
      }
    })
    setAttentionWeights(weights)
    setSelectedWord(focusWord)
  }

  const addToContext = (word: string) => {
    if (!contextWindow.includes(word)) {
      setContextWindow([...contextWindow, word])
    }
  }

  const clearContext = () => {
    setContextWindow([])
    setAttentionWeights({})
    setSelectedWord("")
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sentence Visualization */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600">
          <h4 className="text-lg font-semibold text-islamic-gold mb-4">Sentence Processing</h4>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Input Sentence:</label>
            <input
              type="text"
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
              placeholder="Enter a sentence..."
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {words.map((word, index) => (
              <button
                key={index}
                onClick={() => attentionMechanism(word)}
                className={`px-3 py-2 rounded-lg transition-all ${
                  selectedWord === word 
                    ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {word}
              </button>
            ))}
          </div>

          {selectedWord && (
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h5 className="text-islamic-gold font-semibold mb-2">Attention Weights for "{selectedWord}":</h5>
              <div className="space-y-2">
                {Object.entries(attentionWeights).map(([word, weight]) => (
                  <div key={word} className="flex items-center justify-between">
                    <span className="text-gray-300">{word}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-2 rounded-full transition-all"
                          style={{width: `${weight * 100}%`}}
                        ></div>
                      </div>
                      <span className="text-gray-400 text-sm">{(weight * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Context Window */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600">
          <h4 className="text-lg font-semibold text-islamic-gold mb-4">Context Window</h4>
          <p className="text-gray-300 mb-4 text-sm">
            Transformers can look at multiple words at once, building context and understanding relationships.
          </p>
          
          <div className="mb-4">
            <h5 className="text-gray-300 mb-2">Add words to context:</h5>
            <div className="flex flex-wrap gap-2 mb-4">
              {words.map((word, index) => (
                <button
                  key={index}
                  onClick={() => addToContext(word)}
                  disabled={contextWindow.includes(word)}
                  className={`px-2 py-1 rounded text-sm transition-all ${
                    contextWindow.includes(word)
                      ? 'bg-gray-600 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h5 className="text-gray-300 mb-2">Current Context:</h5>
            <div className="bg-gray-700/50 p-3 rounded-lg min-h-[60px]">
              {contextWindow.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {contextWindow.map((word, index) => (
                    <span key={index} className="px-2 py-1 bg-gradient-to-r from-islamic-gold/20 to-yellow-500/20 text-islamic-gold rounded border border-islamic-gold/30">
                      {word}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No words in context yet. Click words above to add them.</p>
              )}
            </div>
          </div>

          <button
            onClick={clearContext}
            className="w-full bg-gray-700 text-gray-300 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Clear Context
          </button>
        </div>
      </div>

      {/* Transformer Architecture */}
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600">
        <h4 className="text-lg font-semibold text-islamic-gold mb-4">Transformer Architecture</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-700/50 rounded-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-islamic-gold to-yellow-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <Eye className="w-6 h-6 text-black" />
            </div>
            <h5 className="text-white font-semibold mb-2">Self-Attention</h5>
            <p className="text-gray-300 text-sm">Each word pays attention to all other words in the sentence</p>
          </div>
          
          <div className="text-center p-4 bg-gray-700/50 rounded-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-islamic-gold to-yellow-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <Layers className="w-6 h-6 text-black" />
            </div>
            <h5 className="text-white font-semibold mb-2">Multi-Head</h5>
            <p className="text-gray-300 text-sm">Multiple attention mechanisms work in parallel</p>
          </div>
          
          <div className="text-center p-4 bg-gray-700/50 rounded-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-islamic-gold to-yellow-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <Network className="w-6 h-6 text-black" />
            </div>
            <h5 className="text-white font-semibold mb-2">Feed Forward</h5>
            <p className="text-gray-300 text-sm">Processes information through neural network layers</p>
          </div>
        </div>
      </div>

      {/* Islamic Context */}
      <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
        <h4 className="text-lg font-semibold text-islamic-gold mb-2">Islamic Perspective</h4>
        <p className="text-gray-300 text-sm">
          Just as the Quran emphasizes understanding context and meaning, transformer neural networks excel at 
          understanding the full context of language. This technology helps us better communicate and understand 
          each other, reflecting the Islamic value of clear communication and mutual understanding.
        </p>
      </div>
    </div>
  )
}

function AIModelBuilder() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [modelData, setModelData] = useState<{[key: string]: any}>({
    dataSize: 0,
    modelLayers: 0,
    trainingProgress: 0,
    accuracy: 0,
    ethicalScore: 0
  })
  const [selectedDataset, setSelectedDataset] = useState("")
  const [modelType, setModelType] = useState("")
  const [trainingStatus, setTrainingStatus] = useState("idle")

  const phases = [
    {
      title: "Data Collection",
      description: "Gather and prepare your training data",
      steps: ["Collect text data", "Clean and format", "Split into training/validation sets"],
      datasets: ["Books and articles", "Conversations", "Code repositories", "News articles", "Academic papers"]
    },
    {
      title: "Model Architecture",
      description: "Design your transformer neural network",
      steps: ["Choose model size", "Configure layers", "Set attention heads", "Define vocabulary"],
      architectures: ["Small (10M parameters)", "Medium (100M parameters)", "Large (1B+ parameters)", "Custom design"]
    },
    {
      title: "Training Process",
      description: "Train your model on the collected data",
      steps: ["Initialize weights", "Run training loops", "Monitor loss", "Validate performance"],
      trainingOptions: ["Basic training", "Advanced optimization", "Distributed training", "Transfer learning"]
    },
    {
      title: "Fine-tuning",
      description: "Specialize your model for specific tasks",
      steps: ["Select target task", "Prepare task-specific data", "Adjust learning rate", "Evaluate performance"],
      tasks: ["Question answering", "Text summarization", "Language translation", "Code generation", "Creative writing"]
    },
    {
      title: "Deployment",
      description: "Make your model available for use",
      steps: ["Optimize for inference", "Create API", "Set up monitoring", "Deploy to cloud"],
      deploymentOptions: ["Local server", "Cloud platform", "Edge device", "Mobile app"]
    }
  ]

  const startTraining = () => {
    setTrainingStatus("training")
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 10
      if (progress >= 100) {
        progress = 100
        setTrainingStatus("completed")
        clearInterval(interval)
      }
      setModelData(prev => ({
        ...prev,
        trainingProgress: Math.min(progress, 100),
        accuracy: Math.min(progress * 0.8, 80)
      }))
    }, 500)
  }

  const selectDataset = (dataset: string) => {
    setSelectedDataset(dataset)
    setModelData(prev => ({
      ...prev,
      dataSize: Math.floor(Math.random() * 1000000) + 100000
    }))
  }

  const selectModelType = (type: string) => {
    setModelType(type)
    const layerMap: {[key: string]: number} = {
      "Small (10M parameters)": 6,
      "Medium (100M parameters)": 12,
      "Large (1B+ parameters)": 24,
      "Custom design": 18
    }
    setModelData(prev => ({
      ...prev,
      modelLayers: layerMap[type] || 12
    }))
  }

  const evaluateEthics = () => {
    const ethicalScore = Math.floor(Math.random() * 30) + 70 // 70-100 range
    setModelData(prev => ({
      ...prev,
      ethicalScore
    }))
  }

  return (
    <div className="space-y-6">
      {/* Phase Navigation */}
      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
        <h4 className="text-lg font-semibold text-islamic-gold mb-4">Model Building Phases</h4>
        <div className="flex flex-wrap gap-2">
          {phases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setCurrentPhase(index)}
              className={`px-3 py-2 rounded-lg text-sm transition-all ${
                currentPhase === index
                  ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {index + 1}. {phase.title}
            </button>
          ))}
        </div>
      </div>

      {/* Current Phase Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600">
          <h4 className="text-lg font-semibold text-islamic-gold mb-4">{phases[currentPhase].title}</h4>
          <p className="text-gray-300 mb-4">{phases[currentPhase].description}</p>
          
          <div className="mb-4">
            <h5 className="text-gray-300 mb-2">Steps:</h5>
            <ul className="space-y-1">
              {phases[currentPhase].steps.map((step, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-center">
                  <span className="w-5 h-5 bg-islamic-gold text-black rounded-full flex items-center justify-center text-xs mr-2">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

                     {/* Phase-specific options */}
           {currentPhase === 0 && phases[currentPhase]?.datasets && (
             <div>
               <h5 className="text-gray-300 mb-2">Select Dataset Type:</h5>
               <div className="grid grid-cols-1 gap-2">
                 {phases[currentPhase].datasets.map((dataset, index) => (
                   <button
                     key={index}
                     onClick={() => selectDataset(dataset)}
                     className={`p-2 rounded text-sm transition-all ${
                       selectedDataset === dataset
                         ? 'bg-gradient-to-r from-islamic-gold/20 to-yellow-500/20 text-islamic-gold border border-islamic-gold/30'
                         : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                     }`}
                   >
                     {dataset}
                   </button>
                 ))}
               </div>
             </div>
           )}

           {currentPhase === 1 && phases[currentPhase]?.architectures && (
             <div>
               <h5 className="text-gray-300 mb-2">Choose Model Architecture:</h5>
               <div className="grid grid-cols-1 gap-2">
                 {phases[currentPhase].architectures.map((arch, index) => (
                   <button
                     key={index}
                     onClick={() => selectModelType(arch)}
                     className={`p-2 rounded text-sm transition-all ${
                       modelType === arch
                         ? 'bg-gradient-to-r from-islamic-gold/20 to-yellow-500/20 text-islamic-gold border border-islamic-gold/30'
                         : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                     }`}
                   >
                     {arch}
                   </button>
                 ))}
               </div>
             </div>
           )}

           {currentPhase === 2 && phases[currentPhase]?.trainingOptions && (
             <div>
               <h5 className="text-gray-300 mb-2">Training Options:</h5>
               <div className="grid grid-cols-1 gap-2">
                 {phases[currentPhase].trainingOptions.map((option, index) => (
                   <button
                     key={index}
                     className="p-2 rounded text-sm bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all"
                   >
                     {option}
                   </button>
                 ))}
               </div>
              <button
                onClick={startTraining}
                disabled={trainingStatus === "training"}
                className="mt-4 w-full bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-400 hover:to-islamic-gold transition-all"
              >
                {trainingStatus === "training" ? "Training..." : "Start Training"}
              </button>
            </div>
          )}
        </div>

        {/* Model Status */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600">
          <h4 className="text-lg font-semibold text-islamic-gold mb-4">Model Status</h4>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Data Size</span>
                <span className="text-gray-400">{modelData.dataSize.toLocaleString()} tokens</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-2 rounded-full transition-all"
                  style={{width: `${Math.min(modelData.dataSize / 10000, 100)}%`}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Model Layers</span>
                <span className="text-gray-400">{modelData.modelLayers}</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-2 rounded-full transition-all"
                  style={{width: `${(modelData.modelLayers / 24) * 100}%`}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Training Progress</span>
                <span className="text-gray-400">{modelData.trainingProgress.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-2 rounded-full transition-all"
                  style={{width: `${modelData.trainingProgress}%`}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Accuracy</span>
                <span className="text-gray-400">{modelData.accuracy.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-2 rounded-full transition-all"
                  style={{width: `${modelData.accuracy}%`}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Ethical Score</span>
                <span className="text-gray-400">{modelData.ethicalScore}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-2 rounded-full transition-all"
                  style={{width: `${modelData.ethicalScore}%`}}
                ></div>
              </div>
            </div>
          </div>

          <button
            onClick={evaluateEthics}
            className="mt-4 w-full bg-gray-700 text-gray-300 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Evaluate Ethics
          </button>
        </div>
      </div>

      {/* Real-world Considerations */}
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600">
        <h4 className="text-lg font-semibold text-islamic-gold mb-4">Real-world Considerations</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-green-400 font-semibold mb-2">What You Can Do:</h5>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Start with small models and learn the basics</li>
              <li>• Use pre-trained models and fine-tune them</li>
              <li>• Focus on specific tasks rather than general AI</li>
              <li>• Collaborate with others and share knowledge</li>
              <li>• Consider ethical implications from the start</li>
            </ul>
          </div>
          <div>
            <h5 className="text-red-400 font-semibold mb-2">Challenges:</h5>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Requires significant computational resources</li>
              <li>• Needs large amounts of quality training data</li>
              <li>• Training can take weeks or months</li>
              <li>• Requires expertise in machine learning</li>
              <li>• Ethical considerations and bias mitigation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Islamic Perspective */}
      <div className="bg-gradient-to-r from-islamic-gold/10 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
        <h4 className="text-lg font-semibold text-islamic-gold mb-2">Islamic Perspective</h4>
        <p className="text-gray-300 text-sm">
          When building AI systems, remember the Islamic principle of serving others. Focus on creating tools that help people, 
          solve real problems, and contribute positively to society. Consider the ethical implications of your work and ensure 
          your AI systems reflect values of justice, fairness, and responsibility. The Prophet (ﷺ) taught us that the best of 
          people are those who are most beneficial to people - let this guide your AI development.
        </p>
      </div>
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
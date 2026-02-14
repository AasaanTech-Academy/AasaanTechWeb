// export const blogPosts = [
//   {
//     id: 1,
//     title: "10 Essential Skills Every Web Developer Should Master in 2026",
//     excerpt: "Discover the must-have skills that will keep you ahead in the rapidly evolving world of web development.",
//     content: "Web development continues to evolve at a rapid pace. In 2024, developers need to stay updated with the latest technologies and best practices...",
//     author: "Jannath",
//     authorId: 1,
//     date: "2024-01-15",
//     category: "Web Development",
//     image: "/images/herosection.jpg",
//     tags: ["React", "JavaScript", "Web Development"],
//     readTime: "5 min read"
//   },
//   {
//     id: 2,
//     title: "Getting Started with Machine Learning: A Beginner's Guide",
//     excerpt: "Learn the fundamentals of machine learning and how to start your journey in this exciting field.",
//     content: "Machine learning is transforming industries across the globe. Whether you're interested in data science, AI, or automation, understanding ML is crucial...",
//     author: "Vaishnavi",
//     authorId: 2,
//     date: "2024-01-10",
//     category: "Data Science",
//     image: "/images/herosection.jpg",
//     tags: ["Machine Learning", "Python", "Data Science"],
//     readTime: "8 min read"
//   },
//   {
//     id: 3,
//     title: "Cloud Computing Trends: What to Expect in 2024",
//     excerpt: "Explore the latest trends in cloud computing and how they're shaping the future of technology.",
//     content: "Cloud computing has become the backbone of modern IT infrastructure. As we move through 2024, several trends are emerging that will shape the industry...",
//     author: "Jannath",
//     authorId: 1,
//     date: "2024-01-05",
//     category: "Cloud Computing",
//     image: "/images/herosection.jpg",
//     tags: ["AWS", "Cloud Computing", "Technology"],
//     readTime: "6 min read"
//   },
//   {
//     id: 4,
//     title: "Building Your First React Native App: Step-by-Step Tutorial",
//     excerpt: "A comprehensive guide to building your first cross-platform mobile application with React Native.",
//     content: "React Native has revolutionized mobile app development by allowing developers to build apps for both iOS and Android using a single codebase...",
//     author: "Sathish",
//     authorId: 4,
//     date: "2023-12-28",
//     category: "Mobile Development",
//     image: "/images/herosection.jpg",
//     tags: ["React Native", "Mobile Development", "Tutorial"],
//     readTime: "12 min read"
//   },
//   {
//     id: 5,
//     title: "Cybersecurity Best Practices for Developers",
//     excerpt: "Essential security practices every developer should implement to protect their applications and users.",
//     content: "In today's digital landscape, cybersecurity is not optional—it's essential. As a developer, you have a responsibility to build secure applications...",
//     author: "Gayathri",
//     authorId: 5,
//     date: "2023-12-20",
//     category: "Cybersecurity",
//     image: "/images/herosection.jpg",
//     tags: ["Security", "Best Practices", "Development"],
//     readTime: "7 min read"
//   },
//   {
//     id: 6,
//     title: "Introduction to DevOps: Automating Your Development Workflow",
//     excerpt: "Learn how DevOps practices can streamline your development process and improve team collaboration.",
//     content: "DevOps has become a critical practice for modern software development teams. By combining development and operations, teams can deliver software faster and more reliably...",
//     author: "Sreeja",
//     authorId: 6,
//     date: "2023-12-15",
//     category: "DevOps",
//     image: "/images/herosection.jpg",
//     tags: ["DevOps", "CI/CD", "Automation"],
//     readTime: "9 min read"
//   }
// ];

// export const categories = [
//   "All",
//   "Web Development",
//   "Data Science",
//   "Cloud Computing",
//   "Mobile Development",
//   "Cybersecurity",
//   "DevOps"
// ];


export const categories = [
  'All',
  'Web Development',
  'Data Science',
  'Career Tips',
  'Technology',
  'Programming',
  'AI & ML'
];

export const blogPosts = [  // ← CORRECTED: lowercase 'blogPosts'
  {
    id: 1,
    title: 'The Complete Guide to Modern Web Development in 2026',
    excerpt: 'Discover the essential tools, frameworks, and best practices that every web developer needs to master in 2026. From React to TypeScript, we cover it all.',
    content: `Web development has evolved dramatically over the past few years. With the rise of new frameworks, tools, and methodologies, staying current is more important than ever. In this comprehensive guide, we'll explore the modern web development landscape and what you need to know to succeed.

**The Modern Stack**

Today's web developers need to be proficient in a variety of technologies. The MERN stack (MongoDB, Express, React, Node.js) continues to dominate, but new players like Next.js, Remix, and Astro are changing the game. These frameworks offer improved performance, better developer experience, and enhanced SEO capabilities.

**TypeScript: No Longer Optional**

TypeScript has become the de facto standard for professional web development. Its type safety catches bugs before they reach production, improves code documentation, and makes refactoring safer. Major companies like Airbnb, Slack, and Microsoft have fully adopted TypeScript in their codebases.

**Performance is King**

With Core Web Vitals becoming a ranking factor for SEO, performance optimization is no longer optional. Techniques like code splitting, lazy loading, and image optimization are essential. Tools like Lighthouse and WebPageTest help you measure and improve your site's performance.

**The Rise of Serverless**

Serverless architecture is transforming how we build and deploy web applications. Services like Vercel, Netlify, and AWS Lambda allow developers to focus on code rather than infrastructure. This shift reduces operational overhead and improves scalability.

**Accessibility Matters**

Building accessible websites isn't just about compliance—it's about creating inclusive experiences for all users. Learn ARIA attributes, semantic HTML, and keyboard navigation to make your applications usable by everyone.

**Conclusion**

The web development landscape continues to evolve rapidly. By staying current with these trends and continuously learning, you'll position yourself for success in this dynamic field. Remember, the best developers are those who never stop learning.`,
    author: 'Priya Sharma',
    date: '2026-02-10',
    readTime: '8 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop',
    tags: ['React', 'TypeScript', 'WebDev', 'Frontend', 'JavaScript']
  },
  {
    id: 2,
    title: 'Data Science Career Path: From Beginner to Expert',
    excerpt: 'A comprehensive roadmap for aspiring data scientists. Learn the skills, tools, and strategies you need to build a successful career in data science.',
    content: `Data science is one of the most sought-after careers in tech today. With businesses increasingly relying on data-driven insights, the demand for skilled data scientists continues to grow. Here's your complete roadmap to becoming a data science professional.

**Phase 1: Foundation (Months 1-3)**

Start with the fundamentals: statistics, probability, and linear algebra. These mathematical foundations are crucial for understanding machine learning algorithms. Learn Python—it's the lingua franca of data science. Master libraries like NumPy, Pandas, and Matplotlib for data manipulation and visualization.

**Phase 2: Core Skills (Months 4-6)**

Dive into machine learning with scikit-learn. Understand supervised learning (regression, classification) and unsupervised learning (clustering, dimensionality reduction). Learn SQL for database querying—most real-world data lives in databases. Practice on platforms like Kaggle to apply your skills on real datasets.

**Phase 3: Advanced Topics (Months 7-9)**

Explore deep learning with TensorFlow or PyTorch. Understand neural networks, CNNs for computer vision, and RNNs for sequence data. Learn about natural language processing (NLP) and work with libraries like NLTK and spaCy. Study big data tools like Apache Spark for handling large-scale datasets.

**Phase 4: Specialization (Months 10-12)**

Choose your specialization: computer vision, NLP, time series analysis, or recommender systems. Build a strong portfolio with 4-5 substantial projects showcasing your skills. Create a personal blog or YouTube channel to demonstrate your expertise. Contribute to open-source projects to gain real-world experience.

**Essential Soft Skills**

Technical skills alone aren't enough. Develop strong communication skills to explain complex concepts to non-technical stakeholders. Learn to tell stories with data through effective visualization. Practice problem-solving and critical thinking. Work on your business acumen to understand how your analyses drive business decisions.

**Breaking Into the Industry**

Network with professionals through LinkedIn, meetups, and conferences. Apply to entry-level positions and internships. Don't be discouraged by rejections—they're part of the journey. Consider freelancing on platforms like Upwork to build experience. Prepare thoroughly for technical interviews by practicing coding problems and case studies.

**Continuous Learning**

Data science evolves rapidly. Stay current by reading research papers, following industry leaders on social media, and taking online courses. Join communities like Towards Data Science, r/datascience, and local meetup groups. The learning never stops in this field—embrace it!`,
    author: 'Rajesh Kumar',
    date: '2026-02-08',
    readTime: '10 min read',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['DataScience', 'MachineLearning', 'Python', 'Career', 'AI']
  },
  {
    id: 3,
    title: 'Top 10 Programming Languages to Learn in 2026',
    excerpt: 'Explore the most in-demand programming languages of 2026. From Python to Rust, discover which languages offer the best career opportunities.',
    content: `Choosing the right programming language can significantly impact your career trajectory. Here are the top 10 languages dominating the tech industry in 2026.

**1. Python - The Swiss Army Knife**

Python continues to reign supreme, especially in data science, AI, and automation. Its simple syntax and vast ecosystem make it perfect for beginners and experts alike. Average salary: ₹8-15 LPA for beginners, ₹25-40 LPA for experienced developers.

**2. JavaScript/TypeScript - Web Development Kings**

JavaScript powers the modern web, while TypeScript adds type safety and enterprise features. Essential for frontend, backend (Node.js), and mobile development (React Native). Frameworks like React, Vue, and Angular are built on JavaScript.

**3. Java - Enterprise Standard**

Java remains the backbone of enterprise applications and Android development. Its robustness, scalability, and extensive ecosystem make it a safe career choice. Spring Boot is the go-to framework for microservices.

**4. Go (Golang) - Cloud Native Champion**

Go's simplicity and performance make it ideal for cloud infrastructure, microservices, and DevOps tools. Companies like Google, Uber, and Netflix use Go extensively. Salary range: ₹10-25 LPA.

**5. Rust - Performance & Safety**

Rust combines C/C++ performance with memory safety. It's gaining traction in systems programming, blockchain, and WebAssembly. Mozilla, Dropbox, and AWS use Rust in production.

**6. Kotlin - Android's Future**

Google's preferred language for Android development. Kotlin is more concise and safer than Java while maintaining full interoperability. It's also used for backend development with frameworks like Ktor.

**7. Swift - iOS Development**

Essential for iOS, macOS, and Apple ecosystem development. With Apple's growing market share in India, Swift developers are in high demand. Clean syntax and strong type safety.

**8. C# - Microsoft Ecosystem**

Crucial for game development (Unity), enterprise applications, and .NET development. Strong integration with Microsoft technologies. Salary: ₹6-20 LPA depending on experience.

**9. SQL - Data is Everywhere**

While not a traditional programming language, SQL is essential for any developer. Every application needs to interact with databases. Master PostgreSQL, MySQL, or MongoDB.

**10. R - Statistical Computing**

Preferred by statisticians and researchers for data analysis. Excellent visualization libraries and statistical packages. Common in academia and pharmaceutical industries.

**How to Choose?**

Consider your career goals. Want to work in AI/ML? Choose Python. Interested in web development? JavaScript/TypeScript. Building mobile apps? Kotlin or Swift. Remember, the "best" language is the one that aligns with your goals and interests.

**Learning Strategy**

Master one language deeply before moving to another. Understand programming fundamentals—they transfer across languages. Build real projects, not just tutorials. Contribute to open-source projects. Most importantly, consistency beats intensity.`,
    author: 'Aisha Patel',
    date: '2026-02-05',
    readTime: '7 min read',
    category: 'Programming',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=500&fit=crop',
    tags: ['Programming', 'Career', 'Languages', 'Development', 'Tech']
  },
  {
    id: 4,
    title: 'How AI and Machine Learning are Transforming Industries',
    excerpt: 'From healthcare to finance, AI is revolutionizing every sector. Learn how machine learning is creating new opportunities and changing the way we work.',
    content: `Artificial Intelligence and Machine Learning are no longer buzzwords—they're transforming industries at an unprecedented pace. Let's explore how AI is reshaping various sectors and creating new career opportunities.

**Healthcare Revolution**

AI is revolutionizing healthcare through early disease detection, personalized treatment plans, and drug discovery. Machine learning models analyze medical images with accuracy matching or exceeding human radiologists. IBM Watson Health uses AI to suggest cancer treatments based on patient history and latest research. Startups like PathAI use ML to improve pathology diagnosis accuracy.

**Financial Services Transformation**

Banks use AI for fraud detection, analyzing millions of transactions in real-time to identify suspicious patterns. Algorithmic trading systems make split-second decisions based on market data. Robo-advisors provide personalized investment advice at a fraction of traditional advisor costs. Credit scoring models now incorporate alternative data for more accurate risk assessment.

**Retail and E-commerce**

Amazon's recommendation engine drives 35% of its revenue through personalized product suggestions. Computer vision enables cashier-less stores like Amazon Go. Chatbots handle customer service inquiries 24/7, reducing response times and costs. Dynamic pricing algorithms optimize revenue based on demand, competition, and inventory levels.

**Manufacturing and Industry 4.0**

Predictive maintenance systems use sensor data to predict equipment failures before they occur, reducing downtime by up to 30%. Quality control systems inspect products with computer vision, achieving >99% accuracy. Supply chain optimization algorithms reduce costs and improve delivery times.

**Agriculture and Food Security**

AI-powered systems analyze satellite imagery to monitor crop health, predict yields, and optimize irrigation. Drones equipped with ML models detect plant diseases early. Precision agriculture reduces water and pesticide usage while increasing yields. This technology is crucial for feeding a growing global population.

**Transportation and Logistics**

Self-driving cars use deep learning to navigate safely. Route optimization algorithms save logistics companies millions in fuel costs. Uber and Lyft use ML for demand prediction and dynamic pricing. AI-powered traffic management systems reduce congestion in smart cities.

**The Skills Gap Challenge**

While AI creates opportunities, there's a significant skills gap. Companies struggle to find qualified AI/ML engineers, data scientists, and ML engineers. This gap creates tremendous opportunities for those willing to learn.

**Career Opportunities**

The AI field offers diverse roles: ML Engineer, Data Scientist, AI Research Scientist, NLP Engineer, Computer Vision Engineer, AI Product Manager, MLOps Engineer. Salaries range from ₹8-15 LPA for entry-level to ₹40-80 LPA for experienced professionals.

**Getting Started in AI**

Begin with Python and mathematics fundamentals. Learn ML through courses on Coursera, fast.ai, or DeepLearning.AI. Build projects and contribute to open-source. Stay current by reading papers on arXiv and following AI researchers on Twitter. Join communities and attend conferences.

**The Future is Now**

AI isn't coming—it's here. The question isn't whether AI will transform your industry, but how quickly. By developing AI skills now, you're not just preparing for the future; you're shaping it.`,
    author: 'Dr. Arjun Reddy',
    date: '2026-02-03',
    readTime: '9 min read',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    tags: ['AI', 'MachineLearning', 'Technology', 'Innovation', 'Future']
  },
  {
    id: 5,
    title: '5 Essential Soft Skills Every Tech Professional Needs',
    excerpt: 'Technical skills get you hired, but soft skills get you promoted. Discover the crucial interpersonal skills that distinguish great tech professionals.',
    content: `In the tech industry, coding skills alone won't guarantee success. The most successful professionals combine technical expertise with strong soft skills. Here are five essential skills every tech professional should develop.

**1. Communication: Bridging the Technical Gap**

The ability to explain complex technical concepts to non-technical stakeholders is invaluable. Whether you're presenting to executives, writing documentation, or mentoring juniors, clear communication is crucial. Practice simplifying technical jargon. Use analogies and visual aids. Listen actively to understand requirements before jumping to solutions.

**Practical Tips:**
- Write regular blog posts about your work
- Present at team meetings or local meetups
- Pair program with colleagues to practice explaining code
- Create documentation for your projects
- Practice the "elevator pitch" for your technical solutions

**2. Collaboration: No Developer is an Island**

Modern software development is a team sport. You'll work with designers, product managers, QA engineers, and other developers. Success requires effective collaboration. Learn to give and receive feedback constructively. Respect different perspectives and expertise. Use collaboration tools effectively (Slack, Jira, GitHub).

**Building Collaboration Skills:**
- Participate in code reviews with empathy
- Contribute to team discussions actively
- Help colleagues when they're stuck
- Share knowledge through internal wikis or presentations
- Practice active listening in meetings

**3. Problem-Solving: Beyond the Code**

Tech professionals face complex challenges daily. Strong problem-solving skills involve breaking down large problems, thinking critically, and finding creative solutions. Don't just fix symptoms—identify root causes. Consider trade-offs between different approaches. Learn from failures and iterate.

**Developing Problem-Solving:**
- Practice algorithmic thinking with platforms like LeetCode
- Work on open-ended projects
- Learn debugging techniques systematically
- Study how others solve problems (code reviews, tech talks)
- Document your problem-solving process

**4. Adaptability: Embracing Change**

Technology evolves rapidly. Yesterday's best practices become today's anti-patterns. New frameworks emerge constantly. Successful professionals adapt quickly. Stay curious and open to learning. Don't be afraid to leave your comfort zone. Embrace change as an opportunity for growth.

**Staying Adaptable:**
- Set aside time weekly for learning
- Experiment with new technologies in side projects
- Follow tech trends through newsletters and podcasts
- Attend conferences and workshops
- Be willing to refactor legacy code

**5. Time Management: Working Smart, Not Just Hard**

Tech professionals often juggle multiple priorities: feature development, bug fixes, meetings, and learning. Effective time management prevents burnout and increases productivity. Learn to prioritize ruthlessly. Use time-blocking techniques. Minimize context-switching. Take regular breaks to maintain focus.

**Time Management Strategies:**
- Use the Pomodoro Technique for focused work
- Block calendar time for deep work
- Say no to unnecessary meetings
- Batch similar tasks together
- Set realistic deadlines and communicate early if they're at risk

**Developing These Skills**

Unlike technical skills, soft skills develop gradually through conscious practice and reflection. Seek feedback regularly from colleagues and mentors. Observe professionals you admire and learn from their approaches. Join Toastmasters for public speaking practice. Read books on communication and leadership.

**The Competitive Advantage**

Many developers have strong technical skills, but those with excellent soft skills stand out. They get promoted faster, lead teams successfully, and build stronger professional networks. They're the ones companies fight to retain and competitors try to poach.

**Investment in Yourself**

Developing soft skills is an investment in your long-term career success. Technical skills might get you the interview, but soft skills get you the job offer—and the promotion. Start developing these skills today, and watch your career trajectory change.

**Remember:** The most valuable developers aren't just great coders—they're great communicators, collaborators, and problem-solvers who adapt quickly and manage their time effectively. These skills compound over time, creating exponential career growth.`,
    author: 'Meera Krishnan',
    date: '2026-02-01',
    readTime: '6 min read',
    category: 'Career Tips',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    tags: ['Career', 'SoftSkills', 'Professional', 'Growth', 'Success']
  },
  {
    id: 6,
    title: "Cloud Computing Trends: What's Next in 2026?",
    excerpt: 'Cloud computing continues to evolve. Explore the latest trends in serverless, edge computing, and multi-cloud strategies that are shaping the future.',
    content: `Cloud computing has become the backbone of modern technology infrastructure. As we progress through 2026, several trends are reshaping how organizations leverage cloud technologies. Let's explore what's driving the cloud revolution.

**Serverless Goes Mainstream**

Serverless computing has moved beyond early adoption. Companies like Netflix, Coca-Cola, and Thomson Reuters run significant workloads on AWS Lambda, Azure Functions, and Google Cloud Functions. The appeal is clear: no server management, automatic scaling, and pay-per-execution pricing. Developers focus on code, not infrastructure.

**Key Benefits:**
- Reduced operational overhead
- Automatic scaling from zero to millions of requests
- Cost optimization (pay only for what you use)
- Faster time to market
- Built-in high availability

**Popular Serverless Platforms:**
- AWS Lambda (most mature ecosystem)
- Azure Functions (best for .NET developers)
- Google Cloud Functions (excellent for data processing)
- Cloudflare Workers (edge computing)

**Edge Computing Takes Center Stage**

Edge computing brings computation closer to data sources, reducing latency and bandwidth usage. Critical for IoT applications, autonomous vehicles, and real-time analytics. 5G networks enable more sophisticated edge applications.

**Real-World Applications:**
- Smart cities processing traffic data locally
- Retail stores analyzing customer behavior in real-time
- Manufacturing plants running quality control at the edge
- Content delivery networks (CDNs) serving content from nearby locations

**Multi-Cloud Strategy Becomes Standard**

Organizations are avoiding vendor lock-in by adopting multi-cloud strategies. They use AWS for compute, Azure for AI services, and GCP for data analytics. Kubernetes enables portability across clouds. Tools like Terraform manage infrastructure as code across providers.

**Advantages:**
- Best-of-breed services from each provider
- Improved resilience and disaster recovery
- Better negotiating power with vendors
- Geographic distribution for compliance

**Challenges:**
- Increased complexity
- Need for multi-cloud expertise
- Security and governance across platforms
- Cost optimization becomes more difficult

**Kubernetes Dominates Container Orchestration**

Kubernetes has become the de facto standard for container orchestration. Major cloud providers offer managed Kubernetes services (EKS, AKS, GKE). The ecosystem continues expanding with service meshes (Istio, Linkerd) and security tools (Falco, OPA).

**Why Kubernetes Won:**
- Declarative configuration
- Self-healing capabilities
- Horizontal scaling
- Rolling updates and rollbacks
- Strong community and ecosystem

**AI/ML Integration in Cloud Platforms**

Cloud providers are democratizing AI/ML through easy-to-use services. AWS SageMaker, Azure ML, and Google AI Platform enable data scientists to build, train, and deploy models without managing infrastructure. Pre-trained models for vision, NLP, and speech are available via APIs.

**Accessible AI Services:**
- Vision API (image recognition)
- Translation API (100+ languages)
- Speech-to-Text and Text-to-Speech
- Natural Language Processing
- Recommendation engines

**Sustainability and Green Cloud**

Companies are pressured to reduce carbon footprints. Cloud providers invest heavily in renewable energy. AWS aims for 100% renewable energy by 2025. Google has been carbon-neutral since 2007. Organizations optimize cloud usage to reduce environmental impact.

**Green Cloud Initiatives:**
- Choosing regions with renewable energy
- Right-sizing instances to reduce waste
- Using spot instances for flexible workloads
- Implementing auto-scaling to match demand
- Monitoring and optimizing resource usage

**FinOps: Cloud Cost Optimization**

As cloud spending grows, FinOps (Financial Operations) emerges as a discipline. Organizations implement cost allocation, budget alerts, and optimization strategies. Tools like CloudHealth, Kubecost, and native provider tools help manage spending.

**Cost Optimization Strategies:**
- Reserved instances for predictable workloads
- Spot instances for flexible workloads
- Auto-scaling to match demand
- S3 lifecycle policies for storage optimization
- Monitoring and rightsizing instances

**Cloud Security Evolution**

Zero Trust security models replace traditional perimeter defenses. Cloud-native security tools like AWS Security Hub, Azure Security Center, and GCP Security Command Center provide centralized visibility. Compliance automation helps meet regulatory requirements.

**Security Best Practices:**
- Implement least privilege access
- Enable multi-factor authentication everywhere
- Encrypt data at rest and in transit
- Regular security audits and penetration testing
- Automated compliance checking

**Career Opportunities**

The cloud computing boom creates tremendous career opportunities. Cloud architects earn ₹15-35 LPA, DevOps engineers ₹10-25 LPA, and cloud security specialists ₹12-30 LPA. Certifications from AWS, Azure, and GCP are highly valued.

**In-Demand Cloud Roles:**
- Cloud Architect
- DevOps Engineer
- Site Reliability Engineer (SRE)
- Cloud Security Specialist
- Cloud Cost Analyst

**Getting Started**

Begin with one cloud provider (AWS is largest, Azure for Microsoft shops, GCP for data science). Get certified (AWS Solutions Architect Associate is popular). Build projects and deploy to cloud. Learn Infrastructure as Code (Terraform, CloudFormation). Practice on free tiers.

**The Cloud-First Future**

Cloud computing isn't just a technology choice—it's a business strategy. Organizations that master cloud technologies gain competitive advantages: faster innovation, better scalability, and reduced costs. The future belongs to cloud-native companies. Start your cloud journey today!`,
    author: 'Vikram Singh',
    date: '2026-01-28',
    readTime: '11 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
    tags: ['Cloud', 'AWS', 'Azure', 'DevOps', 'Infrastructure']
  }
];

export default blogPosts;  // ← CORRECTED: lowercase 'blogPosts'

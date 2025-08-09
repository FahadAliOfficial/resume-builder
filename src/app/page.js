import Head from 'next/head';

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-[#FDFCFB] via-[#F8F9FA] to-[#E8F5E8] text-[#2C3E50] min-h-screen">
      <Head>
        <title>AI Resume Builder - Land Your Dream Job Faster</title>
        <meta name="description" content="Create ATS-friendly resumes with AI-powered content generation. Tailored to job descriptions using Gemini AI. Get hired faster with professional templates." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 container mx-auto backdrop-blur-sm bg-white/70 rounded-lg shadow-lg sticky top-4 z-50">
        <div className="text-3xl font-bold text-[#004D40] flex items-center">
          <span className="bg-gradient-to-r from-[#004D40] to-[#F4A261] bg-clip-text text-transparent">AI</span>
          <span className="ml-1">ResumeBuilder</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-[#F4A261] transition-colors font-medium">Features</a>
          <a href="#templates" className="hover:text-[#F4A261] transition-colors font-medium">Templates</a>
          <a href="#how-it-works" className="hover:text-[#F4A261] transition-colors font-medium">How It Works</a>
          <a href="#pricing" className="hover:text-[#F4A261] transition-colors font-medium">Pricing</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-[#004D40] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all">Log In</button>
          <button className="bg-gradient-to-r from-[#004D40] to-[#006B5B] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">Get Started Free</button>
        </div>
      </nav>

      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center py-24 relative">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-[#F4A261]/20 rounded-full blur-xl"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-[#004D40]/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-[#A9CCE3]/30 rounded-full blur-xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center bg-gradient-to-r from-[#004D40]/10 to-[#F4A261]/10 px-6 py-2 rounded-full mb-6 border border-[#004D40]/20">
              <span className="text-sm font-semibold text-[#004D40]">🚀 Powered by Gemini AI</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold text-[#004D40] leading-tight mb-6">
              Land Your Dream Job with
              <span className="block bg-gradient-to-r from-[#F4A261] to-[#E67E22] bg-clip-text text-transparent">
                AI-Powered Resumes
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-[#7F8C8D] max-w-3xl mx-auto leading-relaxed">
              Transform job descriptions into tailored, ATS-friendly resumes in minutes. Our AI analyzes requirements and crafts compelling content that gets you noticed by recruiters.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-[#F4A261] to-[#E67E22] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center">
                <span>Start Building for Free</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="border-2 border-[#004D40] text-[#004D40] font-semibold py-4 px-8 rounded-full text-lg hover:bg-[#004D40] hover:text-white transition-all duration-300 flex items-center">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>
            
            <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-[#7F8C8D]">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No Credit Card Required
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                5-Minute Setup
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                ATS-Optimized
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white/50 rounded-3xl mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004D40] mb-4">
              Why Choose AI ResumeBuilder?
            </h2>
            <p className="text-xl text-[#7F8C8D] max-w-2xl mx-auto">
              Experience the future of resume building with cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Content Generation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#A9CCE3] to-[#7FB3D3] h-16 w-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg">
                🤖
              </div>
              <h3 className="text-2xl font-bold text-[#004D40] mb-4 text-center">Gemini AI Content</h3>
              <p className="text-[#7F8C8D] text-center leading-relaxed">
                Paste any job description and watch our AI craft compelling summaries, optimize keywords, and tailor your experience to match requirements perfectly.
              </p>
            </div>

            {/* Real-time Chat Interface */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#F4A261] to-[#E67E22] h-16 w-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg">
                💬
              </div>
              <h3 className="text-2xl font-bold text-[#004D40] mb-4 text-center">Smart Chat Interface</h3>
              <p className="text-[#7F8C8D] text-center leading-relaxed">
                Interactive AI assistant guides you through resume optimization, suggests improvements, and helps you highlight your best achievements.
              </p>
            </div>

            {/* ATS Templates */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#85C88A] to-[#52B788] h-16 w-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg">
                📄
              </div>
              <h3 className="text-2xl font-bold text-[#004D40] mb-4 text-center">ATS-Optimized Templates</h3>
              <p className="text-[#7F8C8D] text-center leading-relaxed">
                Choose from professionally designed templates that pass Applicant Tracking Systems and catch recruiter attention instantly.
              </p>
            </div>

            {/* Real-time Preview */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#DDA0DD] to-[#BA55D3] h-16 w-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-[#004D40] mb-4 text-center">Live Resume Preview</h3>
              <p className="text-[#7F8C8D] text-center leading-relaxed">
                See your changes instantly with our real-time editing interface. What you see is exactly what you'll download.
              </p>
            </div>

            {/* Multi-format Export */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#FFB347] to-[#FF8C00] h-16 w-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg">
                📥
              </div>
              <h3 className="text-2xl font-bold text-[#004D40] mb-4 text-center">PDF & Word Export</h3>
              <p className="text-[#7F8C8D] text-center leading-relaxed">
                Download your resume in multiple formats - PDF for applications, Word for easy editing, ensuring compatibility everywhere.
              </p>
            </div>

            {/* User Dashboard */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#87CEEB] to-[#4682B4] h-16 w-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg">
                📊
              </div>
              <h3 className="text-2xl font-bold text-[#004D40] mb-4 text-center">Personal Dashboard</h3>
              <p className="text-[#7F8C8D] text-center leading-relaxed">
                Manage multiple resumes, track applications, and store your professional information securely in one centralized location.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-gradient-to-br from-[#004D40]/5 to-[#F4A261]/5 rounded-3xl mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004D40] mb-4">
              From Job Description to Job Offer
            </h2>
            <p className="text-xl text-[#7F8C8D] max-w-2xl mx-auto">
              Our streamlined process gets you from zero to hired-ready resume in minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-[#F4A261] to-[#E67E22] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#004D40] mb-3">Quick Registration</h3>
              <p className="text-[#7F8C8D] leading-relaxed">
                Sign up in seconds with your email. No lengthy forms, just the essentials to get started.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-[#F4A261] to-[#E67E22] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#004D40] mb-3">Complete Your Profile</h3>
              <p className="text-[#7F8C8D] leading-relaxed">
                Add your professional details, experience, education, and skills through our intelligent guided setup.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-[#F4A261] to-[#E67E22] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#004D40] mb-3">Choose Template & Chat</h3>
              <p className="text-[#7F8C8D] leading-relaxed">
                Select from ATS-optimized templates, then paste the job description into our AI chat interface.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-[#F4A261] to-[#E67E22] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#004D40] mb-3">Generate & Download</h3>
              <p className="text-[#7F8C8D] leading-relaxed">
                Watch AI create your tailored resume in real-time. Edit, refine, and download as PDF or Word.
              </p>
            </div>
          </div>
          
          {/* Process Flow Visualization */}
          <div className="mt-16 bg-white/70 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex justify-center items-center space-x-4 text-sm text-[#7F8C8D] flex-wrap gap-4">
              <span className="bg-[#004D40]/10 px-4 py-2 rounded-full font-medium">Job Description Input</span>
              <svg className="w-6 h-6 text-[#F4A261]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="bg-[#F4A261]/10 px-4 py-2 rounded-full font-medium">AI Content Generation</span>
              <svg className="w-6 h-6 text-[#F4A261]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="bg-green-500/10 px-4 py-2 rounded-full font-medium">Perfect Resume</span>
            </div>
          </div>
        </section>

        {/* Templates Showcase */}
        <section id="templates" className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004D40] mb-4">
              Professional Templates That Get Results
            </h2>
            <p className="text-xl text-[#7F8C8D] max-w-2xl mx-auto">
              Choose from our collection of ATS-optimized templates designed by industry experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Template 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-white rounded-lg shadow-sm">
                  <div className="h-3 bg-[#004D40] rounded-sm m-2 mb-1"></div>
                  <div className="h-1 bg-gray-300 rounded-sm mx-2 mb-1"></div>
                  <div className="h-1 bg-gray-300 rounded-sm mx-2 mb-2"></div>
                  <div className="grid grid-cols-2 gap-1 mx-2">
                    <div className="h-1 bg-gray-200 rounded-sm"></div>
                    <div className="h-1 bg-gray-200 rounded-sm"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#004D40]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[#004D40] font-semibold">Preview</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#004D40] mb-2">Modern Professional</h3>
              <p className="text-[#7F8C8D] text-sm">Clean, contemporary design perfect for tech and creative roles</p>
            </div>

            {/* Template 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-64 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-white rounded-lg shadow-sm">
                  <div className="h-3 bg-blue-600 rounded-sm m-2 mb-1"></div>
                  <div className="h-1 bg-gray-300 rounded-sm mx-2 mb-1"></div>
                  <div className="h-1 bg-gray-300 rounded-sm mx-2 mb-2"></div>
                  <div className="grid grid-cols-2 gap-1 mx-2">
                    <div className="h-1 bg-gray-200 rounded-sm"></div>
                    <div className="h-1 bg-gray-200 rounded-sm"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">Preview</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#004D40] mb-2">Executive Classic</h3>
              <p className="text-[#7F8C8D] text-sm">Traditional format ideal for corporate and executive positions</p>
            </div>

            {/* Template 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 h-64 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-white rounded-lg shadow-sm">
                  <div className="h-3 bg-green-600 rounded-sm m-2 mb-1"></div>
                  <div className="h-1 bg-gray-300 rounded-sm mx-2 mb-1"></div>
                  <div className="h-1 bg-gray-300 rounded-sm mx-2 mb-2"></div>
                  <div className="grid grid-cols-2 gap-1 mx-2">
                    <div className="h-1 bg-gray-200 rounded-sm"></div>
                    <div className="h-1 bg-gray-200 rounded-sm"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-green-600 font-semibold">Preview</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#004D40] mb-2">Creative Impact</h3>
              <p className="text-[#7F8C8D] text-sm">Eye-catching design for creative professionals and startups</p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-[#004D40] to-[#006B5B] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              View All Templates
            </button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-[#F4A261]/5 to-[#004D40]/5 rounded-3xl mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004D40] mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-[#7F8C8D]">
              Join thousands who landed their dream jobs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F4A261] to-[#E67E22] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#004D40]">Sarah Johnson</h4>
                  <p className="text-sm text-[#7F8C8D]">Product Manager at Google</p>
                </div>
              </div>
              <p className="text-[#7F8C8D] italic leading-relaxed">
                "The AI suggestions were incredible! I landed my dream job at Google within a week of using this platform. The job-specific optimization made all the difference."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#004D40] to-[#006B5B] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#004D40]">Marcus Chen</h4>
                  <p className="text-sm text-[#7F8C8D]">Software Engineer at Microsoft</p>
                </div>
              </div>
              <p className="text-[#7F8C8D] italic leading-relaxed">
                "Finally, a resume builder that understands tech roles! The AI perfectly highlighted my coding skills and projects. Got 3 interview calls in the first week!"
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A9CCE3] to-[#7FB3D3] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  E
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#004D40]">Emily Rodriguez</h4>
                  <p className="text-sm text-[#7F8C8D]">Marketing Director at Spotify</p>
                </div>
              </div>
              <p className="text-[#7F8C8D] italic leading-relaxed">
                "The template selection is amazing and the real-time editing feature saved me hours. My new resume got past the ATS and straight to the hiring manager!"
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-center bg-gradient-to-r from-[#004D40] to-[#006B5B] rounded-3xl text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join over 50,000 professionals who've transformed their careers with AI-powered resumes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#F4A261] hover:bg-[#E67E22] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Building for Free
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#004D40] font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              View Pricing Plans
            </button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            ✨ No credit card required • ⚡ 5-minute setup • 🎯 ATS-optimized templates
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-3xl font-bold mb-4 flex items-center">
                <span className="bg-gradient-to-r from-[#F4A261] to-[#E67E22] bg-clip-text text-transparent">AI</span>
                <span className="ml-1">ResumeBuilder</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering professionals worldwide with AI-powered resume building technology.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-[#F4A261] rounded-full flex items-center justify-center hover:bg-[#E67E22] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#F4A261] rounded-full flex items-center justify-center hover:bg-[#E67E22] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#F4A261] rounded-full flex items-center justify-center hover:bg-[#E67E22] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">AI Technology</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Resume Examples</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Career Tips</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Job Search Guide</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#F4A261] transition-colors">Partnership</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 AI ResumeBuilder. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <a href="#" className="hover:text-[#F4A261] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#F4A261] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#F4A261] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
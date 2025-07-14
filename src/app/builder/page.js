import Head from 'next/head';
import Link from 'next/link';

export default function ResumeBuilderPage() {
  return (
    <div className="bg-gradient-to-br from-[#FDFCFB] via-[#F8F9FA] to-[#E8F5E8] text-[#2C3E50] min-h-screen">
      <Head>
        <title>Resume Builder - AI Resume Builder</title>
        <meta name="description" content="Create your professional resume with AI-powered content generation and real-time preview." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-lg border-b border-gray-200">
        <Link href="/dashboard" className="text-2xl font-bold text-[#004D40] flex items-center">
          <span className="bg-gradient-to-r from-[#004D40] to-[#F4A261] bg-clip-text text-transparent">AI</span>
          <span className="ml-1">ResumeBuilder</span>
        </Link>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-100 text-[#004D40] font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
            Save Draft
          </button>
          <button className="bg-gradient-to-r from-[#F4A261] to-[#E67E22] text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            Download
          </button>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - Chat Interface */}
        <div className="w-1/2 bg-white border-r border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#004D40]/5 to-[#F4A261]/5">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-[#F4A261] to-[#E67E22] h-12 w-12 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
                🤖
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#004D40]">AI Resume Assistant</h2>
                <p className="text-[#7F8C8D]">Paste a job description to get started</p>
              </div>
            </div>
            
            {/* Job Description Input */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <label className="block text-sm font-semibold text-[#004D40] mb-2">
                Job Description
              </label>
              <textarea
                placeholder="Paste the job description here and our AI will tailor your resume to match the requirements..."
                className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
              />
              <button className="mt-3 bg-gradient-to-r from-[#F4A261] to-[#E67E22] text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all">
                Analyze & Optimize
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {/* AI Message */}
            <div className="flex items-start">
              <div className="bg-[#F4A261] h-8 w-8 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-1">
                AI
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                <p className="text-sm text-[#2C3E50]">
                  Hello! I'm your AI resume assistant. I can help you create a tailored resume by analyzing job descriptions and optimizing your content. To get started, please paste a job description in the box above.
                </p>
              </div>
            </div>

            {/* Example AI Suggestions */}
            <div className="flex items-start">
              <div className="bg-[#F4A261] h-8 w-8 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-1">
                AI
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-sm">
                <p className="text-sm text-[#2C3E50] mb-3">
                  I can help you with:
                </p>
                <ul className="text-sm text-[#2C3E50] space-y-1">
                  <li>• Writing compelling professional summaries</li>
                  <li>• Optimizing keywords for ATS systems</li>
                  <li>• Enhancing job descriptions</li>
                  <li>• Suggesting relevant skills</li>
                  <li>• Formatting improvements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Ask me anything about your resume..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
              />
              <button className="bg-[#004D40] text-white p-3 rounded-lg hover:bg-[#006B5B] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Resume Preview */}
        <div className="w-1/2 bg-gray-50 flex flex-col">
          {/* Preview Header */}
          <div className="p-6 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#004D40]">Live Preview</h3>
              <div className="flex items-center space-x-3">
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261]">
                  <option>Modern Professional</option>
                  <option>Executive Classic</option>
                  <option>Creative Impact</option>
                </select>
                <button className="text-[#7F8C8D] hover:text-[#004D40] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-[600px] mx-auto p-8 min-h-[800px]">
              {/* Resume Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-[#004D40] mb-2">John Doe</h1>
                <p className="text-lg text-[#7F8C8D] mb-3">Software Engineer</p>
                <div className="flex flex-wrap gap-4 text-sm text-[#7F8C8D]">
                  <span>📧 john.doe@email.com</span>
                  <span>📱 (555) 123-4567</span>
                  <span>📍 San Francisco, CA</span>
                  <span>🔗 linkedin.com/in/johndoe</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-[#004D40] mb-3 border-b border-gray-200 pb-1">Professional Summary</h2>
                <p className="text-[#2C3E50] text-sm leading-relaxed">
                  Experienced Software Engineer with 5+ years of expertise in full-stack development, 
                  specializing in React, Node.js, and cloud technologies. Proven track record of 
                  delivering scalable applications and leading cross-functional teams to achieve 
                  business objectives.
                </p>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-[#004D40] mb-3 border-b border-gray-200 pb-1">Experience</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-[#004D40]">Senior Software Engineer</h3>
                        <p className="text-[#7F8C8D]">TechCorp Inc.</p>
                      </div>
                      <span className="text-sm text-[#7F8C8D]">2021 - Present</span>
                    </div>
                    <ul className="text-sm text-[#2C3E50] space-y-1 ml-4">
                      <li>• Led development of microservices architecture serving 1M+ users</li>
                      <li>• Improved application performance by 40% through optimization</li>
                      <li>• Mentored 3 junior developers and conducted code reviews</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-[#004D40]">Software Engineer</h3>
                        <p className="text-[#7F8C8D]">StartupXYZ</p>
                      </div>
                      <span className="text-sm text-[#7F8C8D]">2019 - 2021</span>
                    </div>
                    <ul className="text-sm text-[#2C3E50] space-y-1 ml-4">
                      <li>• Built responsive web applications using React and TypeScript</li>
                      <li>• Collaborated with product team to define technical requirements</li>
                      <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-[#004D40] mb-3 border-b border-gray-200 pb-1">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Git', 'MongoDB'].map((skill) => (
                    <span key={skill} className="bg-[#004D40]/10 text-[#004D40] px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-bold text-[#004D40] mb-3 border-b border-gray-200 pb-1">Education</h2>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-[#004D40]">Bachelor of Science in Computer Science</h3>
                      <p className="text-[#7F8C8D]">University of California, Berkeley</p>
                    </div>
                    <span className="text-sm text-[#7F8C8D]">2015 - 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Footer */}
          <div className="p-6 bg-white border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-[#7F8C8D]">
                Auto-saved • Last updated: 2 minutes ago
              </div>
              <div className="flex space-x-3">
                <button className="bg-gray-100 text-[#004D40] font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Edit Manually
                </button>
                <button className="bg-gradient-to-r from-[#004D40] to-[#006B5B] text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Export PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

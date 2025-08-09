import Head from 'next/head';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="bg-gradient-to-br from-[#FDFCFB] via-[#F8F9FA] to-[#E8F5E8] text-[#2C3E50] min-h-screen">
      <Head>
        <title>Dashboard - AI Resume Builder</title>
        <meta name="description" content="Manage your resumes, templates, and account settings in your AI Resume Builder dashboard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 container mx-auto backdrop-blur-sm bg-white/70 rounded-lg shadow-lg sticky top-4 z-50">
        <Link href="/dashboard" className="text-3xl font-bold text-[#004D40] flex items-center">
          <span className="bg-gradient-to-r from-[#004D40] to-[#F4A261] bg-clip-text text-transparent">AI</span>
          <span className="ml-1">ResumeBuilder</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/dashboard" className="text-[#004D40] font-medium hover:text-[#F4A261] transition-colors">Dashboard</Link>
          <Link href="/templates" className="text-[#7F8C8D] font-medium hover:text-[#F4A261] transition-colors">Templates</Link>
          <Link href="/profile" className="text-[#7F8C8D] font-medium hover:text-[#F4A261] transition-colors">Profile</Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#F4A261] to-[#E67E22] rounded-full flex items-center justify-center text-white font-bold">
            J
          </div>
          <button className="text-[#7F8C8D] hover:text-[#004D40] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#004D40] to-[#006B5B] rounded-3xl text-white p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, John!</h1>
              <p className="text-xl opacity-90">Ready to land your next dream job?</p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm opacity-75">Active Resumes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/builder" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-[#F4A261] to-[#E67E22] h-12 w-12 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
              ✨
            </div>
            <h3 className="text-xl font-bold text-[#004D40] mb-2">Create New Resume</h3>
            <p className="text-[#7F8C8D]">Start building a new AI-powered resume from scratch</p>
          </Link>

          <Link href="/templates" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-[#85C88A] to-[#52B788] h-12 w-12 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
              📄
            </div>
            <h3 className="text-xl font-bold text-[#004D40] mb-2">Browse Templates</h3>
            <p className="text-[#7F8C8D]">Choose from our collection of ATS-optimized templates</p>
          </Link>

          <Link href="/profile" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-[#A9CCE3] to-[#7FB3D3] h-12 w-12 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
              👤
            </div>
            <h3 className="text-xl font-bold text-[#004D40] mb-2">Update Profile</h3>
            <p className="text-[#7F8C8D]">Keep your professional information up to date</p>
          </Link>
        </div>

        {/* Recent Resumes */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#004D40]">Your Resumes</h2>
            <Link href="/builder" className="bg-gradient-to-r from-[#F4A261] to-[#E67E22] text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all">
              + New Resume
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resume 1 */}
            <div className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-2 bg-white rounded shadow-sm">
                  <div className="h-1 bg-[#004D40] rounded-sm m-1 mb-0.5"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm mx-1 mb-0.5"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm mx-1"></div>
                </div>
                <div className="absolute inset-0 bg-[#004D40]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-[#004D40] px-3 py-1 rounded text-sm font-medium">Edit</button>
                </div>
              </div>
              <h3 className="font-semibold text-[#004D40] mb-1">Software Engineer Resume</h3>
              <p className="text-sm text-[#7F8C8D] mb-3">Updated 2 days ago</p>
              <div className="flex space-x-2">
                <button className="text-sm bg-[#004D40]/10 text-[#004D40] px-2 py-1 rounded">Edit</button>
                <button className="text-sm bg-gray-100 text-[#7F8C8D] px-2 py-1 rounded">Download</button>
              </div>
            </div>

            {/* Resume 2 */}
            <div className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-32 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-2 bg-white rounded shadow-sm">
                  <div className="h-1 bg-blue-600 rounded-sm m-1 mb-0.5"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm mx-1 mb-0.5"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm mx-1"></div>
                </div>
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium">Edit</button>
                </div>
              </div>
              <h3 className="font-semibold text-[#004D40] mb-1">Marketing Manager Resume</h3>
              <p className="text-sm text-[#7F8C8D] mb-3">Updated 1 week ago</p>
              <div className="flex space-x-2">
                <button className="text-sm bg-[#004D40]/10 text-[#004D40] px-2 py-1 rounded">Edit</button>
                <button className="text-sm bg-gray-100 text-[#7F8C8D] px-2 py-1 rounded">Download</button>
              </div>
            </div>

            {/* Resume 3 */}
            <div className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 h-32 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-2 bg-white rounded shadow-sm">
                  <div className="h-1 bg-green-600 rounded-sm m-1 mb-0.5"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm mx-1 mb-0.5"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm mx-1"></div>
                </div>
                <div className="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-green-600 px-3 py-1 rounded text-sm font-medium">Edit</button>
                </div>
              </div>
              <h3 className="font-semibold text-[#004D40] mb-1">Product Designer Resume</h3>
              <p className="text-sm text-[#7F8C8D] mb-3">Updated 2 weeks ago</p>
              <div className="flex space-x-2">
                <button className="text-sm bg-[#004D40]/10 text-[#004D40] px-2 py-1 rounded">Edit</button>
                <button className="text-sm bg-gray-100 text-[#7F8C8D] px-2 py-1 rounded">Download</button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Tips */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Usage Stats */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-[#004D40] mb-6">Your Progress</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#7F8C8D]">Resumes Created</span>
                <span className="font-bold text-[#004D40]">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#7F8C8D]">Templates Used</span>
                <span className="font-bold text-[#004D40]">5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#7F8C8D]">AI Optimizations</span>
                <span className="font-bold text-[#004D40]">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#7F8C8D]">Downloads</span>
                <span className="font-bold text-[#004D40]">8</span>
              </div>
            </div>
          </div>

          {/* Career Tips */}
          <div className="bg-gradient-to-br from-[#F4A261]/10 to-[#E67E22]/10 rounded-3xl p-8 border border-[#F4A261]/20">
            <h3 className="text-xl font-bold text-[#004D40] mb-4">💡 Career Tips</h3>
            <div className="space-y-4">
              <div className="bg-white/70 rounded-lg p-4">
                <h4 className="font-semibold text-[#004D40] mb-2">Optimize for ATS</h4>
                <p className="text-sm text-[#7F8C8D]">Use keywords from job descriptions to pass applicant tracking systems.</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4">
                <h4 className="font-semibold text-[#004D40] mb-2">Quantify Achievements</h4>
                <p className="text-sm text-[#7F8C8D]">Include numbers and metrics to showcase your impact and results.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

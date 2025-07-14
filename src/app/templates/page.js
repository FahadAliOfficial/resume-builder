import Head from 'next/head';
import Link from 'next/link';

export default function TemplatesPage() {
  return (
    <div className="bg-gradient-to-br from-[#FDFCFB] via-[#F8F9FA] to-[#E8F5E8] text-[#2C3E50] min-h-screen">
      <Head>
        <title>Templates - AI Resume Builder</title>
        <meta name="description" content="Choose from our collection of ATS-optimized resume templates designed by industry experts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 container mx-auto backdrop-blur-sm bg-white/70 rounded-lg mt-4 shadow-lg sticky top-4 z-50">
        <Link href="/dashboard" className="text-3xl font-bold text-[#004D40] flex items-center">
          <span className="bg-gradient-to-r from-[#004D40] to-[#F4A261] bg-clip-text text-transparent">AI</span>
          <span className="ml-1">ResumeBuilder</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/dashboard" className="text-[#7F8C8D] font-medium hover:text-[#F4A261] transition-colors">Dashboard</Link>
          <Link href="/templates" className="text-[#004D40] font-medium hover:text-[#F4A261] transition-colors">Templates</Link>
          <Link href="/profile" className="text-[#7F8C8D] font-medium hover:text-[#F4A261] transition-colors">Profile</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-[#7F8C8D] hover:text-[#004D40] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="w-10 h-10 bg-gradient-to-br from-[#F4A261] to-[#E67E22] rounded-full flex items-center justify-center text-white font-bold">
            J
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-[#004D40]/10 to-[#F4A261]/10 px-6 py-2 rounded-full mb-6 border border-[#004D40]/20">
            <span className="text-sm font-semibold text-[#004D40]">📋 Professional Templates</span>
          </div>
          <h1 className="text-5xl font-bold text-[#004D40] mb-4">
            Choose Your Perfect Template
          </h1>
          <p className="text-xl text-[#7F8C8D] max-w-2xl mx-auto">
            Select from our collection of ATS-optimized templates designed to get you noticed by recruiters and hiring managers.
          </p>
        </div>

        {/* Filter Options */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors">
                <option>All Categories</option>
                <option>Modern</option>
                <option>Classic</option>
                <option>Creative</option>
                <option>Executive</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors">
                <option>All Industries</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Marketing</option>
                <option>Education</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors">
                <option>All Experience Levels</option>
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
                <option>Executive</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Template 1 - Modern Professional */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 bg-white rounded-lg shadow-sm">
                <div className="h-4 bg-[#004D40] rounded-sm m-3 mb-2"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-1"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-3"></div>
                <div className="grid grid-cols-2 gap-2 mx-3 mb-3">
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded-sm mx-3 mb-1"></div>
                <div className="space-y-1 mx-3">
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm w-3/4"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#004D40]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href="/builder?template=modern" className="bg-white text-[#004D40] font-semibold px-4 py-2 rounded-lg shadow-lg">
                  Use Template
                </Link>
              </div>
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                ATS Optimized
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#004D40] mb-2">Modern Professional</h3>
            <p className="text-[#7F8C8D] text-sm mb-4">Clean, contemporary design perfect for tech and creative roles. Features modern typography and subtle color accents.</p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[#7F8C8D]">1,234 users</span>
            </div>
          </div>

          {/* Template 2 - Executive Classic */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-80 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 bg-white rounded-lg shadow-sm">
                <div className="h-4 bg-blue-600 rounded-sm m-3 mb-2"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-1"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-3"></div>
                <div className="grid grid-cols-2 gap-2 mx-3 mb-3">
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded-sm mx-3 mb-1"></div>
                <div className="space-y-1 mx-3">
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm w-3/4"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href="/builder?template=executive" className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow-lg">
                  Use Template
                </Link>
              </div>
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Popular
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#004D40] mb-2">Executive Classic</h3>
            <p className="text-[#7F8C8D] text-sm mb-4">Traditional format ideal for corporate and executive positions. Professional appearance with emphasis on experience.</p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[#7F8C8D]">2,156 users</span>
            </div>
          </div>

          {/* Template 3 - Creative Impact */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-green-50 to-green-100 h-80 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 bg-white rounded-lg shadow-sm">
                <div className="h-4 bg-green-600 rounded-sm m-3 mb-2"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-1"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-3"></div>
                <div className="grid grid-cols-2 gap-2 mx-3 mb-3">
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded-sm mx-3 mb-1"></div>
                <div className="space-y-1 mx-3">
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm w-3/4"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href="/builder?template=creative" className="bg-white text-green-600 font-semibold px-4 py-2 rounded-lg shadow-lg">
                  Use Template
                </Link>
              </div>
              <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                Creative
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#004D40] mb-2">Creative Impact</h3>
            <p className="text-[#7F8C8D] text-sm mb-4">Eye-catching design for creative professionals and startups. Balances creativity with professionalism.</p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[#7F8C8D]">987 users</span>
            </div>
          </div>

          {/* Template 4 - Minimalist Pro */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 h-80 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 bg-white rounded-lg shadow-sm">
                <div className="h-4 bg-purple-600 rounded-sm m-3 mb-2"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-1"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-3"></div>
                <div className="grid grid-cols-2 gap-2 mx-3 mb-3">
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded-sm mx-3 mb-1"></div>
                <div className="space-y-1 mx-3">
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm w-3/4"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href="/builder?template=minimalist" className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg shadow-lg">
                  Use Template
                </Link>
              </div>
              <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                New
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#004D40] mb-2">Minimalist Pro</h3>
            <p className="text-[#7F8C8D] text-sm mb-4">Clean and simple design focusing on content. Perfect for any industry with emphasis on readability.</p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-sm text-[#7F8C8D]">543 users</span>
            </div>
          </div>

          {/* Template 5 - Academic Focus */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 h-80 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 bg-white rounded-lg shadow-sm">
                <div className="h-4 bg-indigo-600 rounded-sm m-3 mb-2"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-1"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-3"></div>
                <div className="grid grid-cols-2 gap-2 mx-3 mb-3">
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded-sm mx-3 mb-1"></div>
                <div className="space-y-1 mx-3">
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm w-3/4"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href="/builder?template=academic" className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg shadow-lg">
                  Use Template
                </Link>
              </div>
              <div className="absolute top-2 right-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">
                Academic
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#004D40] mb-2">Academic Focus</h3>
            <p className="text-[#7F8C8D] text-sm mb-4">Designed for academic and research positions. Emphasizes publications, research, and education background.</p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[#7F8C8D]">321 users</span>
            </div>
          </div>

          {/* Template 6 - Sales Professional */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-red-50 to-red-100 h-80 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 bg-white rounded-lg shadow-sm">
                <div className="h-4 bg-red-600 rounded-sm m-3 mb-2"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-1"></div>
                <div className="h-1 bg-gray-300 rounded-sm mx-3 mb-3"></div>
                <div className="grid grid-cols-2 gap-2 mx-3 mb-3">
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                  <div className="h-1 bg-gray-200 rounded-sm"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded-sm mx-3 mb-1"></div>
                <div className="space-y-1 mx-3">
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm"></div>
                  <div className="h-0.5 bg-gray-300 rounded-sm w-3/4"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href="/builder?template=sales" className="bg-white text-red-600 font-semibold px-4 py-2 rounded-lg shadow-lg">
                  Use Template
                </Link>
              </div>
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Results-Focused
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#004D40] mb-2">Sales Professional</h3>
            <p className="text-[#7F8C8D] text-sm mb-4">Optimized for sales and business development roles. Highlights achievements, metrics, and revenue impact.</p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[#7F8C8D]">756 users</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#004D40] to-[#006B5B] rounded-3xl text-white p-12">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find the Perfect Template?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our AI can adapt any template to your specific needs and industry requirements
          </p>
          <Link href="/builder" className="bg-[#F4A261] hover:bg-[#E67E22] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            Create Custom Resume
          </Link>
        </div>
      </main>
    </div>
  );
}

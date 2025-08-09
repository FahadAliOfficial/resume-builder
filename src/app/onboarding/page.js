import Head from 'next/head';
import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <div className="bg-gradient-to-br from-[#FDFCFB] via-[#F8F9FA] to-[#E8F5E8] text-[#2C3E50] min-h-screen">
      <Head>
        <title>Complete Your Profile - AI Resume Builder</title>
        <meta name="description" content="Complete your professional profile to get started with AI-powered resume building." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 container mx-auto backdrop-blur-sm bg-white/70 rounded-lg shadow-lg sticky top-4 z-50">
        <div className="text-3xl font-bold text-[#004D40] flex items-center">
          <span className="bg-gradient-to-r from-[#004D40] to-[#F4A261] bg-clip-text text-transparent">AI</span>
          <span className="ml-1">ResumeBuilder</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-[#F4A261]/20 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-[#F4A261]">Step 1 of 4</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#004D40]">Complete Your Profile</h2>
              <span className="text-sm text-[#7F8C8D]">25% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-[#F4A261] to-[#E67E22] h-2 rounded-full" style={{width: '25%'}}></div>
            </div>
          </div>
        </div>

        {/* Onboarding Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-[#004D40]/10 to-[#F4A261]/10 px-6 py-3 rounded-full mb-6 border border-[#004D40]/20">
                <span className="text-lg font-semibold text-[#004D40]">👤 Personal Information</span>
              </div>
              <h1 className="text-3xl font-bold text-[#004D40] mb-2">Let's Get to Know You</h1>
              <p className="text-[#7F8C8D] text-lg">This information will help our AI create better, more personalized resume content for you.</p>
            </div>

            <form className="space-y-8">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-[#004D40] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-[#004D40] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#004D40] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-[#004D40] mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                    placeholder="San Francisco, CA"
                    required
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-[#004D40] mb-2">
                  Professional Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                  placeholder="Software Engineer, Marketing Manager, Product Designer..."
                  required
                />
              </div>

              {/* Experience Level */}
              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-[#004D40] mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                  required
                >
                  <option value="">Select your experience level</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (3-5 years)</option>
                  <option value="senior">Senior Level (6-10 years)</option>
                  <option value="executive">Executive Level (10+ years)</option>
                </select>
              </div>

              {/* Industry */}
              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-[#004D40] mb-2">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                  required
                >
                  <option value="">Select your industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="marketing">Marketing & Advertising</option>
                  <option value="education">Education</option>
                  <option value="consulting">Consulting</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* LinkedIn Profile */}
              <div>
                <label htmlFor="linkedin" className="block text-sm font-semibold text-[#004D40] mb-2">
                  LinkedIn Profile (Optional)
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              {/* Professional Summary */}
              <div>
                <label htmlFor="summary" className="block text-sm font-semibold text-[#004D40] mb-2">
                  Brief Professional Summary (Optional)
                </label>
                <textarea
                  id="summary"
                  name="summary"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                  placeholder="Tell us about your professional background, key achievements, and career goals. Our AI will use this to enhance your resume content."
                ></textarea>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Link href="/dashboard" className="text-[#7F8C8D] hover:text-[#004D40] font-medium flex items-center transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Skip for now
                </Link>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#F4A261] to-[#E67E22] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
                >
                  Continue
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Benefits Sidebar */}
          <div className="mt-8 bg-gradient-to-br from-[#004D40]/5 to-[#F4A261]/5 rounded-3xl p-8 border border-[#004D40]/10">
            <h3 className="text-xl font-bold text-[#004D40] mb-4">Why We Need This Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#004D40]">Personalized AI Content</h4>
                  <p className="text-sm text-[#7F8C8D]">Our AI creates better, more relevant resume content based on your background</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#004D40]">Industry-Specific Optimization</h4>
                  <p className="text-sm text-[#7F8C8D]">Tailored keywords and formatting for your specific industry</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#004D40]">Faster Resume Creation</h4>
                  <p className="text-sm text-[#7F8C8D]">Pre-filled information saves you time on future resumes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

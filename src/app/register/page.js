import Head from 'next/head';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="bg-gradient-to-br from-[#FDFCFB] via-[#F8F9FA] to-[#E8F5E8] text-[#2C3E50] min-h-screen">
      <Head>
        <title>Sign Up - AI Resume Builder</title>
        <meta name="description" content="Create your AI Resume Builder account and start building professional resumes with AI assistance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 container mx-auto backdrop-blur-sm bg-white/70 rounded-lg shadow-lg sticky top-4 z-50">
        <Link href="/" className="text-3xl font-bold text-[#004D40] flex items-center">
          <span className="bg-gradient-to-r from-[#004D40] to-[#F4A261] bg-clip-text text-transparent">AI</span>
          <span className="ml-1">ResumeBuilder</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-[#004D40] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all">
            Sign In
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 flex items-center justify-center min-h-[calc(100vh-140px)] py-8">
        <div className="w-full max-w-md">
          {/* Register Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-gray-100">
            <div className="text-center mb-8">
              {/* <div className="inline-flex items-center bg-gradient-to-r from-[#004D40]/10 to-[#F4A261]/10 px-4 py-2 rounded-full mb-4 border border-[#004D40]/20">
                <span className="text-sm font-semibold text-[#004D40]">🚀 Start Your Journey</span>
              </div> */}
              <h1 className="text-3xl font-bold text-[#004D40] mb-2">Create Your Account</h1>
              <p className="text-[#7F8C8D]">Join thousands who landed their dream jobs</p>
            </div>

            <form className="space-y-6">
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[#004D40] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#004D40] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-[#004D40] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                  placeholder="Create a strong password"
                  required
                />
                <div className="mt-2 text-xs text-[#7F8C8D]">
                  Must be at least 8 characters with letters, numbers, and symbols
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-[#004D40] mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4A261] focus:border-[#F4A261] transition-colors"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              {/* Terms & Privacy */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-[#F4A261] bg-gray-100 border-gray-300 rounded focus:ring-[#F4A261] focus:ring-2 mt-1"
                  required
                />
                <label htmlFor="terms" className="ml-3 text-sm text-[#7F8C8D]">
                  I agree to the{' '}
                  <Link href="/terms" className="text-[#F4A261] hover:text-[#E67E22] font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-[#F4A261] hover:text-[#E67E22] font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Marketing Consent */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="marketing"
                  className="w-4 h-4 text-[#F4A261] bg-gray-100 border-gray-300 rounded focus:ring-[#F4A261] focus:ring-2 mt-1"
                />
                <label htmlFor="marketing" className="ml-3 text-sm text-[#7F8C8D]">
                  I'd like to receive helpful career tips and product updates via email
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F4A261] to-[#E67E22] text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-[#7F8C8D]">Or sign up with</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Registration */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign up with Google
              </button>
              
              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-3" fill="#0066CC" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Sign up with LinkedIn
              </button>
            </div>

            {/* Sign In Link */}
            <div className="mt-8 text-center">
              <p className="text-[#7F8C8D]">
                Already have an account?{' '}
                <Link href="/login" className="text-[#F4A261] hover:text-[#E67E22] font-semibold">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <div className="flex justify-center items-center space-x-6 text-sm text-[#7F8C8D] flex-wrap gap-2">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free Forever
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No Credit Card
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Data Secured
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

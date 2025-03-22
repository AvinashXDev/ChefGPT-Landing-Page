import React, { useState, useEffect } from 'react';
import { ChefHat, Sparkles, Utensils, Clock, Book, Share2, Twitter, Github, Linkedin, Star, Heart, Users } from 'lucide-react';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <ChefHat className="w-8 h-8 text-emerald-400" />
                <a href="#home"><span className="ml-2 text-xl font-bold bg-gradient-to-r from-white via-emerald-200 to-emerald-400 text-transparent bg-clip-text">ChefGPT</span></a>

              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors">Features</a>
                <a href="#recipes" className="text-gray-300 hover:text-emerald-400 transition-colors">Recipes</a>
                <a href="#pricing" className="text-gray-300 hover:text-emerald-400 transition-colors">Pricing</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors">Sign In</button>
              <a href="https://chefgpt-yopb.vercel.app/">  <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
                Get Started
              </button></a>
            



            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden flex items-center" id='home'>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2070"
            alt="Kitchen Background"
            className="w-full h-full object-cover opacity-10 scale-105 transform transition-transform duration-10000 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-800"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div
              className="inline-flex items-center justify-center mb-6 group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative">
                <ChefHat className={`w-16 h-16 text-emerald-400 transition-all duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`} />
                <Sparkles className={`absolute -right-2 -top-2 w-8 h-8 text-emerald-400 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
              </div>
            </div>
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in bg-gradient-to-r from-white via-emerald-200 to-emerald-400 text-transparent bg-clip-text">
                Chef<span className="text-emerald-400 animate-pulse">GPT</span>
              </h1>
              <div className="absolute -top-4 -right-4 animate-spin-slow">
                <Star className="w-8 h-8 text-emerald-400/30" />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up leading-relaxed">
              Your AI-powered culinary companion. Transform ingredients into extraordinary recipes with the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
              <a href="https://chefgpt-yopb.vercel.app/"> <button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 group">
                <span>Start Cooking</span>
                <Sparkles className="w-5 h-5 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button></a>
             <a href="">   <button className="w-full sm:w-auto border-2 border-emerald-500/50 hover:border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-emerald-500/10">
                Watch Demo
              </button></a>
            

            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 animate-fade-in">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>10k+ Users(soon)</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span>4.9 Rating(by me)</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                <span>50k+ Recipes(soon)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32" id="features">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 blur-3xl"></div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience the future of cooking with our advanced AI-powered features.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Utensils className="w-10 h-10 text-emerald-400" />}
            title="Smart Recipe Generation"
            description="Input your available ingredients and let AI create personalized recipes tailored to your preferences."
            delay="delay-100"
          />
          <FeatureCard
            icon={<Clock className="w-10 h-10 text-emerald-400" />}
            title="Quick & Easy"
            description="Get instant recipe suggestions with detailed instructions and cooking times."
            delay="delay-200"
          />
          <FeatureCard
            icon={<Book className="w-10 h-10 text-emerald-400" />}
            title="Recipe Library"
            description="Access thousands of AI-generated recipes and save your favorites for later."
            delay="delay-300"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-12 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in text-center">
                Ready to Transform Your Cooking?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center text-lg">
                Join thousands of home chefs who are already creating amazing dishes with ChefGPT.
                Start your culinary journey today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 group">
                  Get Started Free
                  <Sparkles className="w-5 h-5 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="border-2 border-emerald-500/50 hover:border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-emerald-500/10">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <ChefHat className="w-8 h-8 text-emerald-400" />
                <span className="ml-2 text-xl font-bold">ChefGPT</span>
              </div>
              <p className="text-gray-400 text-sm">Transform your cooking experience with the power of AI.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">© 2024 ChefGPT. Made with 💗 by Avinash</p>
            <div className="flex items-center gap-6">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-300" />
              <Github className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-300" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-300" />
              <Share2 className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-300" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: string }) {
  return (
    <div className={`group bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 animate-fade-in ${delay}`}>
      <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );


}

export default App;
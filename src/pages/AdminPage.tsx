import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, 
  Eye, 
  EyeOff, 
  Settings, 
  Image, 
  FileText, 
  Users, 
  Calendar,
  Upload,
  Save,
  Edit3,
  Trash2
} from 'lucide-react';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('content');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'zephyr2024') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const tabs = [
    { id: 'content', name: 'Content Management', icon: FileText },
    { id: 'gallery', name: 'Gallery', icon: Image },
    { id: 'blog', name: 'Blog Posts', icon: Edit3 },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center px-4 pt-24 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 shadow-xl max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-primary-600" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-neutral-800 mb-2">
              Admin Access
            </h1>
            <p className="text-neutral-600">
              Enter your password to access the admin panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors pr-12"
                  placeholder="Enter admin password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Access Admin Panel
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-neutral-500">
            <p>Demo password: zephyr2024</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 lg:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-neutral-800">
                Admin Dashboard
              </h1>
              <p className="text-neutral-600 mt-2">
                Manage your website content and settings
              </p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-neutral-200 text-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-300 transition-colors"
            >
              Logout
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="border-b border-neutral-200">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {activeTab === 'content' && <ContentManagement />}
          {activeTab === 'gallery' && <GalleryManagement />}
          {activeTab === 'blog' && <BlogManagement />}
          {activeTab === 'settings' && <SettingsManagement />}
        </motion.div>
      </div>
    </div>
  );
};

const ContentManagement = () => {
  const [heroContent, setHeroContent] = useState({
    title: 'Weddings Made Extraordinary',
    subtitle: 'Creating unforgettable moments with elegant design, flawless execution, and personalized touches that make your special day truly yours.',
    buttonText: 'Plan With Us'
  });

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-neutral-800 mb-6">Hero Section</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Main Title
            </label>
            <input
              type="text"
              value={heroContent.title}
              onChange={(e) => setHeroContent({...heroContent, title: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Subtitle
            </label>
            <textarea
              value={heroContent.subtitle}
              onChange={(e) => setHeroContent({...heroContent, subtitle: e.target.value})}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Button Text
            </label>
            <input
              type="text"
              value={heroContent.buttonText}
              onChange={(e) => setHeroContent({...heroContent, buttonText: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
            />
          </div>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
            <Save className="h-4 w-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-neutral-800 mb-6">About Section</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Section Title
            </label>
            <input
              type="text"
              defaultValue="About Zephyr Events"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Description
            </label>
            <textarea
              defaultValue="We believe every love story deserves a celebration as unique and beautiful as the couple themselves. Let us help you create memories that will last a lifetime."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors resize-none"
            />
          </div>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
            <Save className="h-4 w-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const GalleryManagement = () => {
  const [images, setImages] = useState([
    { id: 1, src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg', alt: 'Wedding ceremony', category: 'weddings' },
    { id: 2, src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg', alt: 'Reception decor', category: 'decor' },
    { id: 3, src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg', alt: 'Floral arrangements', category: 'flowers' },
  ]);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-neutral-800">Gallery Images</h2>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
            <Upload className="h-4 w-4" />
            <span>Upload Images</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors">
                  <Edit3 className="h-4 w-4" />
                </button>
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium text-neutral-800">{image.alt}</p>
                <p className="text-xs text-neutral-500 capitalize">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogManagement = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '10 Essential Wedding Planning Tips for 2024', status: 'published', date: '2024-03-15' },
    { id: 2, title: 'Spring Wedding Color Palettes', status: 'draft', date: '2024-03-12' },
    { id: 3, title: 'Choosing the Perfect Venue', status: 'published', date: '2024-03-10' },
  ]);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-neutral-800">Blog Posts</h2>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            New Post
          </button>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div>
                <h3 className="font-medium text-neutral-800">{post.title}</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {post.status}
                  </span>
                  <span className="text-sm text-neutral-500">{post.date}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-neutral-600 hover:text-primary-600 transition-colors">
                  <Edit3 className="h-4 w-4" />
                </button>
                <button className="p-2 text-neutral-600 hover:text-red-600 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SettingsManagement = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-neutral-800 mb-6">Site Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Site Title
            </label>
            <input
              type="text"
              defaultValue="Zephyr Events - Premium Wedding & Event Planning"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Contact Email
            </label>
            <input
              type="email"
              defaultValue="info@zephyrevents.com"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Address
            </label>
            <textarea
              defaultValue="123 Event Plaza, New York, NY 10001"
              rows={2}
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors resize-none"
            />
          </div>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
            <Save className="h-4 w-4" />
            <span>Save Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
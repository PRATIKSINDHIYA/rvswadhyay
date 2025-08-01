import React from 'react';
import { Target, Eye, Heart, Clock, Wifi, Shield, Users, BookOpen, Coffee, Zap } from 'lucide-react';

const About = () => {
  const facilities = [
    {
      icon: Clock,
      title: 'Open 24x7',
      description: 'Study at your convenience, any time of day or night'
    },
    {
      icon: Wifi,
      title: 'High-Speed Wi-Fi',
      description: 'Fast and reliable internet for all your research needs'
    },
    {
      icon: Shield,
      title: 'Fully Sanitized',
      description: 'Maintaining the highest hygiene standards daily'
    },
    {
      icon: Users,
      title: 'Hybrid Packages',
      description: 'Monthly, daily, and hourly options available'
    },
    {
      icon: BookOpen,
      title: 'Study Resources',
      description: 'Reference books and materials available'
    },
    {
      icon: Coffee,
      title: 'Comfortable Seating',
      description: 'Long-duration study chairs for maximum comfort'
    },
    {
      icon: Zap,
      title: 'Zero Noise',
      description: 'Complete silence maintained for focused study'
    },
    {
      icon: Heart,
      title: 'Spiritual Vibe',
      description: 'Peaceful atmosphere conducive to learning'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            About RV स्वाध्याय लाइब्रेरी
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A student-first initiative focused on providing a peaceful and fully-equipped 
            self-study environment in Dhar, MP.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-white via-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary-100">
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                "To empower students with an ideal space to focus, learn, and grow."
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that every student deserves access to a premium study environment. 
                Our mission is to provide a space where students can achieve their academic 
                goals without any distractions or limitations.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary-100">
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Eye className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                "To become the most trusted and preferred self-study destination for students in Dhar and beyond."
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where quality education support is accessible to all. 
                Through our services, we aim to contribute to the success of thousands of 
                students pursuing their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for productive study sessions, all under one roof.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 group"
              >
                <div className="bg-gradient-to-r from-primary-100 to-secondary-100 group-hover:from-primary-200 group-hover:to-secondary-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 shadow-md">
                  <facility.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-white via-secondary-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary-100">
            <p className="text-xl leading-relaxed mb-8">
              RV स्वाध्याय लाइब्रेरी was born from a simple observation: students in Dhar needed 
              a dedicated, professional space for serious study. Too many bright minds were 
              struggling with distractions, poor internet, and uncomfortable environments.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              We opened our doors with a commitment to change that. Every detail in our library 
              has been designed with the student in mind - from the ergonomic chairs that support 
              long study sessions to the lighting that reduces eye strain, from the whisper-quiet 
              environment to the blazing-fast Wi-Fi.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Today, we're proud to serve students preparing for UPSC, competitive exams, 
              professional courses, and academic studies. Our 24/7 operations mean that whether 
              you're an early bird or a night owl, RV स्वाध्याय लाइब्रेरी is here for you.
            </p>
            
            <blockquote className="text-2xl font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent text-center border-l-4 border-gradient-to-b from-primary-500 to-secondary-500 pl-6 my-12">
              "Success is not just about studying hard, but studying smart in the right environment."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12 drop-shadow-lg">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-white bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="bg-gradient-to-r from-primary-400 to-secondary-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-white/90">
                We maintain the highest standards in cleanliness, service, and facility management.
              </p>
            </div>
            
            <div className="text-white bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="bg-gradient-to-r from-primary-400 to-secondary-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Student-First</h3>
              <p className="text-white/90">
                Every decision we make prioritizes the needs and success of our students.
              </p>
            </div>
            
            <div className="text-white bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="bg-gradient-to-r from-primary-400 to-secondary-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-white/90">
                We foster a supportive community where students motivate and inspire each other.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
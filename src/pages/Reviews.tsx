import React from 'react';
import { Star, Quote, User, Instagram, MapPin, Phone } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Priya Soni',
      exam: 'SSC CGL',
      rating: 5,
      review: 'Silent and clean space, great for SSC preparation. The 24/7 facility has been a game-changer for my study schedule. Highly recommend!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: 'January 2025'
    },
    {
      id: 2,
      name: 'Ravi Patel',
      exam: 'MP Police',
      rating: 5,
      review: 'High-speed Wi-Fi and comfortable chairs make long hours easier. The environment is perfect for focused study and physical training preparation.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: 'December 2024'
    },
    {
      id: 3,
      name: 'Anjali Sharma',
      exam: 'MPPSC',
      rating: 5,
      review: 'Best library in Dhar! Clean, peaceful, and well-maintained. The staff is very helpful and understanding for state service preparation.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: 'December 2024'
    },
    {
      id: 4,
      name: 'Mohit Gupta',
      exam: 'UPSC CSE',
      rating: 5,
      review: 'Perfect place for UPSC preparation. The silence policy is strictly maintained, and facilities are top-notch for civil service aspirants.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: 'November 2024'
    },
    {
      id: 5,
      name: 'Sneha Verma',
      exam: 'SSC CHSL',
      rating: 5,
      review: 'Amazing study environment! The hybrid packages are very flexible and suit different needs perfectly for clerical grade preparation.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: 'November 2024'
    },
    {
      id: 6,
      name: 'Arjun Singh',
      exam: 'SSC GD',
      rating: 5,
      review: 'Excellent facilities and very hygienic. The 24-hour access is particularly helpful for working professionals preparing for government jobs.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: 'October 2024'
    }
  ];

  const stats = [
    { label: 'Happy Students', value: '200+' },
    { label: 'Success Stories', value: '150+' },
    { label: 'Average Rating', value: '4.5/5' },
    { label: 'Years of Service', value: '1+' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Student Reviews
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Hear what our students have to say about their experience at RV स्वाध्याय लाइब्रेरी
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-white via-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary-100">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from real students who achieved their goals with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary-600" />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{review.review}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-2">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-500">({review.rating}/5)</span>
                </div>

                {/* Student Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-primary-100 flex items-center justify-center"><svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>`;
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-primary-600">{review.exam}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-br from-white via-secondary-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-8">
            Success Stories
          </h2>
          
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl border border-primary-100 shadow-xl">
            <div className="mb-6">
              <Quote className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <p className="text-xl text-gray-700 leading-relaxed italic">
                "RV स्वाध्याय लाइब्रेरी provided me with the perfect environment to crack SSC CGL. 
                The disciplined atmosphere, excellent facilities, and 24/7 availability made all 
                the difference in my preparation journey. Today, I'm proud to serve as a government officer."
              </p>
            </div>
            <div className="border-t border-primary-200 pt-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-200 to-secondary-200 flex items-center justify-center shadow-lg">
                  <User className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-primary-600">SSC CGL Officer, 2023 Batch</p>
                  <p className="text-sm text-gray-500">RV Library Student (2021-2023)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Contact Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">
            Connect With Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Instagram className="h-8 w-8 text-white" />
                <h3 className="text-xl font-semibold text-white">Follow Us</h3>
              </div>
              <a 
                href="https://www.instagram.com/rv_swadhyay_library__dhar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg"
              >
                <Instagram className="h-5 w-5" />
                <span>@rv_swadhyay_library__dhar</span>
              </a>
            </div>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <MapPin className="h-8 w-8 text-white" />
                <h3 className="text-xl font-semibold text-white">Visit Us</h3>
              </div>
              <div className="text-white/90 text-sm leading-relaxed">
                <p className="font-semibold mb-2">📍 Dhar - The city of 'Raja Bhoj'</p>
                <p>77, Trimurti Nagar, Above Shriram Finance,</p>
                <p>Near Angel Bakery, Dhar, MP</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Visit Us Today
            </a>
            <a
              href="tel:09926216052"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
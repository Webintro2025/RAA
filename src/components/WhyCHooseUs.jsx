const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Uncompromising Quality',
      description: 'We are committed to excellence. Our products undergo strict quality checks to ensure they meet industry standards and deliver superior performance in your applications.',
      color: '#3F6165'
    },
    {
      id: 2,
      title: 'Extensive Product Portfolio',
      description: 'With a wide variety of granules including ABS, GPPS, PET, PP, and SAN in both virgin and reprocessed forms, we are your one-stop solution for polymer needs.',
      color: '#D01364'
    },
    {
      id: 3,
      title: 'Customer-Centric Approach',
      description: 'Your satisfaction is our top priority. We listen to your requirements and direct all our activities to provide products that perfectly match your specifications and expectations.',
      color: '#D01364'
    },
    {
      id: 4,
      title: 'Ethical Business Practices',
      description: 'We believe in building lasting relationships through honesty. With us, you can expect crystal-clear transparency in every transaction and a commitment to moral business policies.',
      color: '#D01364'
    },
    {
      id: 5,
      title: 'Proven Track Record',
      description: 'Since 2015, we have consistently grown by delivering on our promises. Our strong market presence and annual turnover of ₹1.5 - 5 Cr are a testament to the trust our customers place in us.',
      color: '#D01364'
    },
    {
      id: 6,
      title: 'Flexible & Reliable Operations',
      description: 'We offer multiple payment modes (Bank Transfer, Cash, Credit Card, Cheque) and ensure dependable shipment by road, making the entire procurement process smooth and hassle-free for you.',
      color: '#D01364'
    }
  ];

  return (
    <>
  <div className="py-10 md:py-16 bg-[#F0F8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-block mb-3 sm:mb-4">
              <div className="bg-[#E8F4FD] rounded-full px-4 sm:px-6 py-1.5 sm:py-2 border-2 border-[#449833]/30">
                <span className="text-[#449833] font-bold text-xs sm:text-sm uppercase tracking-wide">
                  Why Choose Us
                </span>
              </div>
            </div>
            <h2 className="text-lg sm:text-2xl md:text-4xl font-black text-[#449833] mb-2 sm:mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Why Choose <span className="text-[#48A1C7]">Raa Polyplast</span>?
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-[#449833] max-w-3xl mx-auto leading-relaxed">
              Choosing the right supplier is critical to your business. At Raa Polyplast, we provide compelling reasons to make us your <span className="text-[#48A1C7] font-semibold">preferred partner</span> for polymer solutions.
            </p>
            <div className="flex justify-center items-center gap-2 mt-4 sm:mt-6">
              <div className="w-6 sm:w-8 h-0.5 bg-[#449833]"></div>
              <div className="w-2 h-2 bg-[#48A1C7] rounded-full"></div>
              <div className="w-8 sm:w-12 h-0.5 bg-[#449833]"></div>
              <div className="w-2 h-2 bg-[#48A1C7] rounded-full"></div>
              <div className="w-6 sm:w-8 h-0.5 bg-[#449833]"></div>
            </div>
          </div>
          {/* Features Grid - Mobile: 2 per row, Tablet: 2 per row, Desktop: 3 per row */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-xl border-2 border-black p-3 sm:p-6 flex flex-col items-center"
                style={{ boxShadow: '0 2px 8px 0 #e0e0e0' }}
              >
                <h4 className="text-xs sm:text-base md:text-lg font-bold text-[#449833] mb-1 sm:mb-2 text-center">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-[#449833] text-center leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-2 sm:mt-3 h-1 w-8 sm:w-12 rounded-full" style={{backgroundColor: '#48A1C7'}}></div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-[#E8F4FD] rounded-xl p-4 sm:p-8 text-black border-2 border-[#449833]">
              <h3 className="text-base sm:text-2xl font-bold mb-2 sm:mb-3">Ready to Partner with Excellence?</h3>
              <p className="text-xs sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust us for their polymer granule needs and experience the Raa Polyplast difference
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://wa.me/918287334248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#449833] text-white border-2 border-[#449833] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-base hover:bg-[#48A1C7] hover:text-white transition-colors duration-200"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+918287334248"
                  className="inline-flex items-center gap-2 border-2 border-[#449833] text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-base hover:bg-[#48A1C7] hover:text-white transition-colors duration-200"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
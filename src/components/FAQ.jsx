'use client';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of plastic granules do you offer?",
      answer: "We specialize in a wide range of polymer granules, including ABS, GPPS, Polystyrene, PP, and SAN. To meet diverse needs and budgets, we offer most of these materials in both high-grade virgin and cost-effective reprocessed forms."
    },
    {
      question: "What is the difference between virgin and reprocessed granules?",
      answer: "Virgin granules are produced directly from petrochemical raw materials and offer the highest level of performance and consistency. Reprocessed (or recycled) granules are made from post-industrial or post-consumer plastic waste, making them a more cost-effective and environmentally friendly option for many applications. Our team can help you decide which is best for your product."
    },
    {
      question: "How do you guarantee the quality of your products?",
      answer: "Quality is our top priority. All our products, whether virgin or reprocessed, undergo strict quality checks to ensure they meet high industry standards for consistency, purity, and performance. We are committed to delivering a product you can rely on every time."
    },
    {
      question: "Can you provide granules in a specific colour or with specific properties?",
      answer: "Yes. We understand that every project is unique. We work closely with our clients to provide tailored solutions, including specific colour matching and adjusting material properties to meet your exact manufacturing requirements."
    },
    {
      question: "Which industries do you primarily serve?",
      answer: "We cater to a diverse range of industries, including Automotive, Packaging, Household Appliances, Consumer Goods & Toys, Electronics, and Textiles, among others."
    },
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer: "Our minimum order quantity varies depending on the specific product, grade, and availability. Please contact our sales team with your requirements, and we will be happy to provide you with all the details."
    },
    {
      question: "Where are you located and what are your delivery options?",
      answer: "Our facility is strategically located in the Bawana Industrial Area, New Delhi, India. We offer dependable shipment by road, allowing us to serve clients efficiently across the region."
    },
    {
      question: "What payment methods do you accept?",
      answer: "To ensure a smooth and hassle-free transaction process, we offer multiple payment options. We accept Bank Transfers, Cheques, Cash, and Credit Cards."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#449833] mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="w-24 h-1 bg-[#48A1C7] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to the most common questions about our polymer granules and services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-gradient-to-r from-[#449833] to-[#2d5a20] hover:from-[#48A1C7] hover:to-[#3a8eb5] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`px-6 bg-white transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'py-5 opacity-100 max-h-96'
                    : 'py-0 opacity-0 max-h-0'
                } overflow-hidden`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-white rounded-lg p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-[#449833] mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you find the perfect polymer solution for your needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#449833] to-[#2d5a20] text-white font-semibold px-8 py-3 rounded-full hover:from-[#48A1C7] hover:to-[#3a8eb5] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
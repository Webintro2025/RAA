
const About = () => {
  return (
  <div className="w-full px-0 py-8 sm:py-10">
      {/* Technology Section */}
      <section className="flex flex-col md:flex-row flex-wrap justify-between items-center mb-10 md:mb-10 w-full px-2 sm:px-5 md:px-12">
        <div className="flex-1 min-w-[220px] max-w-[700px] px-0">
          <h2 className="italic font-bold text-lg sm:text-xl md:text-3xl underline mb-3 sm:mb-5">
            <em>
              <u>ABOUT US...</u>
            </em>
          </h2>
         
          <div className="mb-7">
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-[#449833] mb-1 sm:mb-2">About Us</h2>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              Welcome to Raa Polyplast, a trusted name in the polymer industry since 2016. Based in the industrial heart of New Delhi, we have established ourselves as a leading manufacturer and wholesaler of high-quality plastic granules. Our journey began with a clear mission: to cater to the expectations of our customers by providing excellent quality products that drive their success.
            </p>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed">
              Our foundation is built on strong moral business policies and complete transparency in all our transactions, allowing us to build healthy, long-term relationships with our clients. Under the insightful guidance of our mentor, Ms. Ridhi Mittal, Raa Polyplast has achieved exponential growth and carved a niche for itself in a competitive market. We are more than just a supplier; we are a reliable partner committed to your gratification.
            </p>
          </div>
          <button
            className="bg-[#449833] text-white rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium min-w-[140px] sm:min-w-[180px] hover:bg-[#48A1C7] hover:text-white transition-colors"
            type="button"
          >
          Read More...
          </button>
        </div>
        <div className="flex-1 min-w-[180px] max-w-[700px] px-0 mt-6 md:mt-0 flex justify-center md:justify-end w-full">
          <img
            src="GPPS Green Reprocess Granules.png"
            alt="Large industrial packaging machine with white and blue parts on a light gradient background"
            className="w-[90vw] max-w-[350px] sm:max-w-[400px] md:max-w-full h-auto object-contain rounded-lg shadow-md"
            width={350}
            height={200}
          />
        </div>
      </section>

      {/* Sustainability Section */}
  <section className="flex flex-col-reverse md:flex-row flex-wrap justify-between items-center mb-10 md:mb-10 w-full px-2 sm:px-5 md:px-12 bg-[#F0F8FF] rounded-xl py-6 sm:py-8">
        <div className="flex-1 min-w-[120px] max-w-[400px] px-0 mt-6 md:mt-0 flex justify-center md:justify-start w-full">
          <img
            src="/Green Reprocessed Abs Granules.png"
            alt="Hands holding small green plant seedling with soil and blurred green background"
            className="w-[100vw] max-w-[300px] sm:max-w-[350px] md:max-w-full object-contain rounded-lg shadow-md mx-auto"
            width={300}
            height={150}
          />
        </div>
        <div className="flex-1 min-w-[220px] max-w-[700px] px-0 text-center md:text-left">
          <h2 className="italic font-bold text-lg sm:text-xl md:text-3xl underline mb-3 sm:mb-5">
            <em>
              <u>OUR VISION & MISSION</u>
            </em>
          </h2>
          <div className="mb-5 sm:mb-7">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#449833] mb-1 sm:mb-2">Our Vision</h3>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed mb-3">
              To be the most trusted and preferred partner for polymer solutions in India, setting new benchmarks for quality, reliability, and customer satisfaction. We aim to be a name that is synonymous with excellence in the plastic granules industry.
            </p>
            
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#449833] mb-1 sm:mb-2 mt-3 sm:mt-4">Our Mission</h3>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed mb-3">
              To consistently manufacture and supply superior-grade plastic granules while upholding the highest standards of integrity. We strive to empower our clients' businesses by providing them with customized solutions, dependable service, and a partnership built on transparency and mutual respect.
            </p>

            
          </div>

          <div className="mb-5 sm:mb-7">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#449833] mb-1 sm:mb-2">Our Commitment to Excellence</h3>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed">
              At Raa Polyplast, our commitment to excellence is embedded in our operational philosophy. From our manufacturing processes at our New Delhi facility to our streamlined supply chain, every step is optimized for quality and efficiency. We believe in continuous improvement, constantly exploring new ways to enhance our product offerings and service delivery. This dedication ensures that we not only meet the current demands of the market but also anticipate future trends, providing our clients with a distinct competitive edge.
            </p>
          </div>

          <button
            className="bg-[#449833] text-white rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium min-w-[140px] sm:min-w-[180px] hover:bg-[#48A1C7] hover:text-white transition-colors"
            type="button"
          >
            Learn More About Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
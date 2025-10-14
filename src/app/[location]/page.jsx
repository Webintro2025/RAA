
import locations from "../../location";

import ContactForm from "@/components/ContactForm";

const normalizeLocation = (location) => {
  return location
    .toLowerCase()
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

export async function generateMetadata({ params }) {
  const { location } = params;
  const formattedLocation = normalizeLocation(location);

    return {
      title: `Reprocess ABS Granules Manufacturers in ${formattedLocation} | Raa Polyplast`,
      description: `Looking for Reprocess ABS Granules Manufacturers in ${formattedLocation}? Raa Polyplast offers Reprocess ABS And Gpps Granules Manufacturers in ${formattedLocation}, India.`,
      keywords: [
        `Reprocess ABS Granules Manufacturers in ${formattedLocation}`,
        `Virgin ABS Granules Manufacturers in ${formattedLocation}`,
        `Polystyrene Granules Manufacturers And Wholesaler in ${formattedLocation}`,
        `Reprocess GPPS Granules Manufacturers And Wholesaler in ${formattedLocation}`,
        `Virgin GPPS Granules Manufacturers And Wholesaler in ${formattedLocation}`,
        `PET Granules Manufacturers And Wholesaler in ${formattedLocation}`,
        `Wankai PET Resin Manufacturers And Wholesaler in ${formattedLocation}`,
        `SAN Regrind Manufacturers And Wholesaler in ${formattedLocation}`,

      ],
      alternates: {
        canonical: `https://plasticgranules.in/${location}`,
      },
    };
}

export default function LocationPage({ params }) {
  const { location } = params;
  const formattedLocation = normalizeLocation(location);

  // Normalize for case-insensitive match
  const locationName = locations.find(
    (loc) => loc.toLowerCase() === formattedLocation.toLowerCase()
  );

  if (!locationName) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Location Not Found</h1>
        <p className="text-gray-700">Sorry, the location you are looking for does not exist in our Market Place list.</p>
      </div>
    );
  }

  return (
    
 





  <main className="w-full "> 
     



<div class="relative bg-gradient-to-r from-green-500 to-blue-500 bg-cover bg-center w-full h-[220px] xs:h-[320px] sm:h-[320px] md:h-[350px] lg:h-[380px] xl:h-[450px]">
 
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 class="text-white mt-28 font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
     Reprocess ABS Granules Manufacturers in {formattedLocation}
    </h1>
    <p class="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://plasticgranules.in/">Raa Polyplast,</a> If You Are Looking For Reprocess ABS Granules Manufacturers in {formattedLocation}, We Are The Best Option For You. Best Reprocess ABS Granules Manufacturers in {formattedLocation}, Reprocess GPPS Granules Manufacturers in {formattedLocation}, India.
    </p>
    <button
      class="mt-4 sm:mt-6 bg-[#F0B630] hover:bg-yellow-700 text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-normal py-1.5 xs:py-2 px-4 xs:px-6 rounded-full flex items-center space-x-2 shadow"
      type="button"
    >
      <span><a href="https://plasticgranules.in/contact">Contact Now</a></span>
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
</div>







<div class="bg-white px-10">
  <main class="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div class="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      <section class="w-full md:w-1/2 text-black">
        <h2 class="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
         Reprocess ABS Granules Manufacturers in {formattedLocation}
        </h2>
        <p class="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
       Welcome to Raa Polyplast, a trusted name in the polymer industry since 2016, based in the industrial hub of New Delhi, India. We take immense pride in being one of the leading <strong>Reprocess ABS Granules Manufacturers in {formattedLocation}</strong>, offering high-quality, durable, and sustainable polymer solutions to clients across various industries. Over the years, we have built our reputation on the pillars of quality, innovation, and customer satisfaction, making us a preferred choice for businesses that demand excellence. At Raa Polyplast <strong>Reprocess GPPS Granules Manufacturers in {formattedLocation}</strong>, our journey began with a simple yet powerful mission — to deliver premium-grade plastic granules that empower our clients to manufacture products with unmatched strength and reliability. Our state-of-the-art facility in New Delhi is equipped with advanced machinery and technology, enabling us to produce a comprehensive range of polymer granules catering to diverse industrial applications.
        </p>
      </section>
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          alt={`Reprocess ABS Granules Manufacturers in ${formattedLocation}`}
          class="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[400px] shadow"
          
          src="/RAA-760 IP Violet ABS Granules.png"
        
        />
      </div>
    </div>
  </main>
</div>



<hr />












<div class="bg-white text-[#1a1a1a] w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <div class="flex flex-col md:flex-row gap-6 md:gap-10 border-t border-b border-gray-300 py-4 sm:py-6">
      <div class="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 pr-0 md:pr-6 pb-6 md:pb-0">
        <h2 class="text-base xs:text-lg sm:text-xl md:text-2xl text-center leading-[1.2] mb-4 sm:mb-8 font-semibold">
          Why Choose Raa Polyplast as Your Reprocess ABS Granules Manufacturer in {formattedLocation}
        </h2>
        <div class="text-xs xs:text-sm sm:text-base text-gray-800 leading-relaxed text-left space-y-4">
          <ol class="list-decimal pl-4 space-y-2">
            <li>
              <span class="font-semibold">Commitment to Quality:</span> Quality is at the heart of everything we do. As a top <strong>Reprocess ABS Granules Manufacturers in {formattedLocation}</strong>, we use only the finest raw materials and advanced processing techniques to ensure that every batch meets our strict quality parameters.
            </li>
            <li>
              <span class="font-semibold">Sustainable Manufacturing Practices:</span> We are committed to reducing environmental impact through responsible recycling and reprocessing of plastics. Our <strong>Reprocess ABS and GPPS Granules in {formattedLocation}</strong> help industries move toward eco-friendly and cost-effective production solutions.
            </li>
            <li>
              <span class="font-semibold">State-of-the-Art Infrastructure:</span> Our modern production facility in New Delhi is equipped with cutting-edge technology that allows for precision manufacturing, color matching, and quality testing to ensure consistent results.
            </li>
            <li>
              <span class="font-semibold">Experienced Team:</span> With years of experience in the polymer industry, our team of professionals is dedicated to innovation and excellence. We continuously invest in R&D to develop new materials and improve our production capabilities.
            </li>
            <li>
              <span class="font-semibold">Customized Solutions:</span> Every industry has unique needs, and at Raa Polyplast <strong>Reprocess ABS Granules Manufacturers in {formattedLocation}</strong>, we offer customized <a href="https://en.wikipedia.org/wiki/Plastic_extrusion">granule</a>  formulations to meet specific technical requirements. Whether it’s color, texture, or mechanical strength — we deliver materials tailored to your product’s needs.
            </li>
          </ol>
        </div>
      </div>
    <div class="w-full md:w-1/2 pl-0 md:pl-6 p-16">
      <ContactForm />

     
    </div>
  </div>
</div>




<div class=" bg-gradient-to-r from-green-200 to-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
  <h3 class="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact Raa Polyplast today to discuss your requirements, request a quote, or place an order.</h3>
  <p class="text-xs xs:text-sm sm:text-base mb-2 text-center">If you are looking for the best <strong>Reprocess ABS Granules Manufacturer in {formattedLocation}</strong>, Raa Polyplast is your trusted partner.</p>
  <ul class="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base  mb-2">
    <li>👉 <strong>Call Now:</strong> +91-8287334248</li>
    <li>👉 <strong>Visit Our Website</strong> <a href="https://plasticgranules.in/"> – www.plasticgranules.in</a></li>
    <li>👉 <strong>Our Email Address</strong>ajit@raapolyplast.com </li>
  </ul>
</div>


<div class="w-full mx-auto px-6 xs:px-8 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10">
  <h2 class="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Our Product Range in {formattedLocation}
  </h2>
  <p class="mb-4 text-xs xs:text-sm sm:text-base text-gray-800">
    At Raa Polyplast <strong>Reprocess ABS Granules Manufacturers in {formattedLocation}</strong>, offers a diverse range of high-quality polymer granules, designed to meet the demands of various industrial sectors such as automotive, electronics, household goods, and packaging. Our product portfolio includes:
  </p>
  <ol class="list-decimal pl-4 sm:pl-8 space-y-4 text-xs xs:text-sm sm:text-base text-gray-800">
    <li>
      <span class="font-bold">Reprocess ABS Granules Manufacturers And Wholesaler in {formattedLocation}:</span> We are renowned as one of the top Reprocess ABS Granules Manufacturers in India. Our Reprocess ABS Granules are produced from high-quality recycled ABS scrap, carefully processed to deliver excellent mechanical properties, strength, and durability. These granules are ideal for molding and extrusion applications, providing exceptional impact resistance and surface finish at an economical price.
    </li>
    <li>
      <span class="font-bold">Virgin ABS Granules Manufacturers And Wholesaler in {formattedLocation}:</span> Our Virgin ABS Granules are formulated using 100% virgin raw materials sourced from trusted global suppliers. Known for their glossy finish, toughness, and dimensional stability, these granules are widely used in industries like automotive interiors, home appliances, and consumer electronics.
    </li>
    <li>
      <span class="font-bold">Polystyrene Granules Manufacturers And Wholesaler in {formattedLocation}:</span> As a trusted name in the polymer industry, we supply Polystyrene Granules that are known for their lightweight nature, rigidity, and ease of processing. These granules are ideal for applications in packaging, containers, toys, and disposable products.
    </li>
    <li>
      <span class="font-bold">Reprocess GPPS Granules Manufacturers And Wholesaler in {formattedLocation}:</span> Our Reprocess GPPS Granules are produced from high-quality recycled polystyrene material, offering excellent clarity and consistent quality. These are widely used in the manufacturing of plastic cutlery, stationery items, and transparent packaging materials.
    </li>
    <li>
      <span class="font-bold">Virgin GPPS Granules Manufacturers And Wholesaler in {formattedLocation}:</span> Raa Polyplast provides Virgin GPPS Granules with superior transparency, gloss, and strength. These granules are widely preferred by clients who require premium-grade raw materials for precision molding and extrusion processes.
    </li>
    <li>
      <span class="font-bold">PET Granules Manufacturers And Wholesaler in {formattedLocation}:</span> We are a reliable supplier of PET Granules known for their high clarity, toughness, and recyclability. These are extensively used in packaging industries for producing bottles, films, and containers that meet international quality benchmarks.
    </li>
    <li>
      <span class="font-bold">Wankai PET Resin Manufacturers And Wholesaler in {formattedLocation}:</span> Our Wankai PET Resin is globally recognized for its excellent viscosity, high melting point, and superior clarity. It is perfect for bottle manufacturing, textile fibers, and packaging solutions that require both aesthetics and durability.
    </li>
    <li>
      <span class="font-bold">Reprocess SAN Granules Manufacturers And Wholesaler in {formattedLocation}:</span> We manufacture and supply Reprocess SAN Granules that are ideal for producing household items, cosmetic packaging, and office supplies. These granules offer outstanding stiffness, transparency, and resistance to chemicals.
    </li>
    <li>
      <span class="font-bold">SAN Regrind Manufacturers And Wholesaler in {formattedLocation}:</span> Our SAN Regrind materials are derived from quality recycled sources and are processed with advanced techniques to maintain uniformity and color consistency. They are an economical and sustainable alternative for various molding applications.
    </li>
    <li>
      <span class="font-bold">Virgin PP Granules Manufacturers And Wholesaler in {formattedLocation}:</span> We also specialize in Virgin PP (Polypropylene) Granules, known for their chemical resistance, low density, and excellent thermal stability. These are widely used in automotive parts, textiles, containers, and injection molding products.
    </li>
  </ol>
</div>

<hr />




<hr />
<div class="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 class="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p class="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
    If you’re looking for <strong>Reprocess ABS Granules Manufacturers in {formattedLocation}</strong> who combine quality, sustainability, and competitive pricing, <strong>Raa Polyplast</strong> is your go-to partner. Get in touch with us today to discuss your requirements or request a sample of our premium-grade granules.
  </p>
</div>

    </main>





    
  );
}

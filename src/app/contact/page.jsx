
import GetInTouch from '../../components/GetInTouch';
import Maps from '../../components/Maps';

const ContactPage = () => {
  return (
    <main className="min-h-screen mt-20 bg-blue-50">
      <div className="py-10 text-center bg-gradient-to-r from-[#449833] via-[#48A1C7] to-[#449833]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
          Contact Us
        </h1>
      </div>
   
        <GetInTouch />
       
        <Maps />
 
    </main>
  );
};

export default ContactPage;

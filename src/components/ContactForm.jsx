"use client";
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess('Thank you for your inquiry! We will contact you soon.');
        setFormData({ fullName: '', phoneNumber: '', email: '', message: '' });
      } else {
        setError('Failed to send your inquiry. Please try again later.');
      }
    } catch (err) {
      setError('Failed to send your inquiry. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-[#449833] mb-4 text-center">Contact Us</h2>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48A1C7]"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48A1C7]"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48A1C7]"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48A1C7]"
        />
      </div>
      {success && <div className="text-green-600 text-center font-semibold">{success}</div>}
      {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-[#449833] to-[#48A1C7] text-white font-bold py-2 px-6 rounded-md hover:from-[#5AA843] hover:to-[#5BB1D7] transition-all duration-300"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;

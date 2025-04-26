import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let error = {};
    if (!formData.name) error.name = 'Name is required';
    if (!formData.email) {
      error.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      error.email = 'Email is invalid';
    }
    if (!formData.message) error.message = 'Message is required';
    return error;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setError({});
      setIsSending(true);

      emailjs
        .sendForm(
          'service_a1ayxww',
          'template_6gvrh1ja',
          form.current,
          'v-8f1_qRg2PG6uF8u'
        )
        .then(response => {
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch(error => {
          console.error('FAILED', error);
          toast.error('Failed to send message. Please try again.');
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section className="bg-stone-50 p-4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold">Let's Contact</h2>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="mx-auto mb-20 lg:max-w-3xl"
      >
        <div className="flex space-x-4">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 appearance-none rounded-lg border-2 border-emerald-950 bg-transparent text-sm focus:border-stone-400 focus:outline-none"
            />
            {error.name && (
              <p className="text-red-500 text-sm mt-1">{error.name}</p>
            )}
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 appearance-none rounded-lg border-2 border-emerald-950 bg-transparent text-sm focus:border-stone-400 focus:outline-none"
            />
            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-3 appearance-none rounded-lg border-2 border-emerald-950 bg-transparent text-sm focus:border-stone-400 focus:outline-none"
          ></textarea>
          {error.message && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>

        {/* Hidden Time Field */}
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-emerald-700 hover:bg-emerald-950 text-white font-bold py-3 rounded transition disabled:opacity-50 cursor-pointer"
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

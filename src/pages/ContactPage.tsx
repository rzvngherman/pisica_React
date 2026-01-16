import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { ContactFormState } from '../types';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-900 font-serif">Contactați-mă</h2>
        <p className="mt-4 text-lg text-stone-600">
          Vrei să trimiți un mesaj, să propui un contract de sponsorizare pentru ton premium sau pur și simplu să-l saluți? Secretara lui Botic (eu) așteaptă.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="md:col-span-1 space-y-8">
           <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
              <h3 className="text-xl font-bold text-stone-900 mb-6">Date de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg text-orange-600 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Locatie</p>
                    <p className="text-stone-600 text-sm">Loc insorit; sufragerie<br/>Iasi, Romania</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg text-orange-600 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Email</p>
                    <p className="text-stone-600 text-sm">miau@boticmatescu.razvangherman.com</p>
                  </div>
                </div>
              </div>
           </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg border border-stone-100 p-8">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Message trimis!</h3>
              <p className="text-stone-600">Botic va citi mesajul după ce-și termină somnicul de prânz.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-orange-600 font-medium hover:text-orange-700"
              >
                Trimite inca un message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-700">Nume</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-stone-50 focus:bg-white"
                    placeholder="Numele tau"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-stone-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-700">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-stone-50 focus:bg-white resize-none"
                  placeholder="Spune-i lui Botic cât de drăgălaș e..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={` ${
                  status === 'submitting' 
                    ? 'bg-stone-400 cursor-not-allowed' 
                    : 'bg-orange-600 hover:bg-orange-700 shadow-md hover:shadow-lg'
                }`}
              >
                {status === 'submitting' ? 'Trimitere...' : (
                  <>
                    Trimite mesaj <Send size={20} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
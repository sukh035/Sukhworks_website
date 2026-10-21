import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Props = {
  registerRef: (el: HTMLElement | null) => void;
};

export default function Contact({ registerRef }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('submitting');
    const { error } = await supabase.from('contact_submissions').insert({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={registerRef}
      className="py-24 bg-sage-100"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sage-500 text-sm font-light tracking-[0.25em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-900 mb-4">
            Commission or Inquire
          </h2>
          <p className="text-sage-600 font-light text-lg">
            Interested in a piece from the gallery, or have something custom in
            mind? Send a message.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-sage-50 rounded-2xl shadow-sm p-8 md:p-10 space-y-6"
        >
          <div>
            <label className="block text-sage-700 text-sm font-light mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-sage-50 border border-sage-200 rounded-lg px-4 py-3 text-sage-900 font-light focus:outline-none focus:border-sage-500 focus:ring-1 focus:ring-sage-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sage-700 text-sm font-light mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-sage-50 border border-sage-200 rounded-lg px-4 py-3 text-sage-900 font-light focus:outline-none focus:border-sage-500 focus:ring-1 focus:ring-sage-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sage-700 text-sm font-light mb-2">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full bg-sage-50 border border-sage-200 rounded-lg px-4 py-3 text-sage-900 font-light focus:outline-none focus:border-sage-500 focus:ring-1 focus:ring-sage-500 transition-colors resize-none"
              placeholder="Which piece caught your eye? Or describe what you'd like me to carve."
            />
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-3 text-sage-700 bg-sage-100 rounded-lg px-4 py-3 animate-slide-up">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-light">
                Thank you — your message has been sent. I'll get back to you soon.
              </span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 text-red-700 bg-red-50 rounded-lg px-4 py-3 animate-slide-up">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-light">
                Something went wrong sending your message. Please try again.
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center gap-2 bg-sage-800 text-sage-50 py-3.5 rounded-lg font-light tracking-wide hover:bg-sage-900 transition-colors duration-300 disabled:opacity-50"
          >
            {status === 'submitting' ? (
              <>
                <div className="w-5 h-5 border-2 border-sage-300 border-t-sage-50 rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

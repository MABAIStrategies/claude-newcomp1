'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Button, Card } from '@/components/ui';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission (replace with actual Webform3 integration in Phase 4)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cinzel text-5xl md:text-7xl font-bold gold-gradient-text text-shadow-gold mb-6"
          >
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-off-white/80"
          >
            Ready to transform your business with AI? Start the conversation today.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="glass" className="gold-border p-6">
                <h3 className="font-cinzel text-xl font-bold mb-4 text-champagne-gold">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-off-white/60 mb-1">Email</div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-off-white hover:text-champagne-gold transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card variant="glass" className="gold-border p-6">
                <h3 className="font-cinzel text-xl font-bold mb-4 text-champagne-gold">
                  Schedule a Consultation
                </h3>
                <p className="text-off-white/80 mb-4">
                  Book a 30-minute strategy session to discuss your specific needs.
                </p>
                <Button variant="secondary" className="w-full">
                  View Calendar →
                </Button>
                <p className="text-sm text-off-white/50 mt-3">
                  Google Calendar integration coming in Phase 4
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card variant="glass" className="gold-border p-6">
                <h3 className="font-cinzel text-xl font-bold mb-4 text-champagne-gold">
                  Response Time
                </h3>
                <p className="text-off-white/80">
                  We typically respond within <span className="text-champagne-gold font-semibold">24 hours</span> on business days.
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="gold" className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-champagne-gold/20 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-champagne-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-cinzel text-3xl font-bold mb-4 text-champagne-gold">
                      Message Sent!
                    </h3>
                    <p className="text-off-white/80 text-lg mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="John Doe"
                      />
                      <Input
                        label="Email *"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                      <Input
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-off-white/80 mb-2"
                        >
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-midnight-navy/50 border border-champagne-gold/30 text-off-white focus:outline-none focus:border-champagne-gold focus:ring-2 focus:ring-champagne-gold/20 transition-all"
                        >
                          <option value="">Select a service...</option>
                          <option value="custom-agents">Custom Agents</option>
                          <option value="custom-automations">Custom Automations</option>
                          <option value="custom-web-apps">Custom Web Apps</option>
                          <option value="keynote-coaching">Keynote Coaching</option>
                          <option value="not-sure">Not Sure / General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-off-white/80 mb-2"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-midnight-navy/50 border border-champagne-gold/30 text-off-white focus:outline-none focus:border-champagne-gold focus:ring-2 focus:ring-champagne-gold/20 transition-all"
                        >
                          <option value="">Select range...</option>
                          <option value="10k-25k">$10K - $25K</option>
                          <option value="25k-50k">$25K - $50K</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k+">$100K+</option>
                          <option value="not-sure">Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-off-white/80 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us about your project or challenge..."
                        className={`w-full px-4 py-3 rounded-lg bg-midnight-navy/50 border text-off-white placeholder-off-white/40 focus:outline-none focus:border-champagne-gold focus:ring-2 focus:ring-champagne-gold/20 transition-all ${
                          errors.message
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-champagne-gold/30'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-sm text-off-white/50 text-center">
                      By submitting this form, you agree to receive communications from MAB
                      AI Strategies.
                    </p>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

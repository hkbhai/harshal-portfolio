import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@ui/Button';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { contactInfo } from '@/data/contact';

const initialFormState = { name: '', email: '', subject: '', message: '', website: '' };

function validateForm(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Full name is required';
  if (!data.email.trim()) errors.email = 'Email address is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email';
  if (!data.subject.trim()) errors.subject = 'Subject is required';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

function InputField({ id, label, type = 'text', name, value, onChange, placeholder, disabled, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] font-medium text-foreground-secondary">
        {label}
      </label>
      {children ?? (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            'input-base',
            error ? 'border-error focus:border-error focus:ring-error/20' : '',
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-[12px] text-error">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const reducedMotion = useReducedMotion();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website.trim()) return; // honeypot

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData(initialFormState);
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const t = setTimeout(() => setStatus('idle'), 5000);
      return () => clearTimeout(t);
    }
  }, [status]);

  const isLoading = status === 'loading';

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="card-glass p-6 md:p-8"
    >
      <h3 className="mb-6 text-xl font-bold tracking-tight text-foreground">Send a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name */}
        <InputField
          id="name" label="Full Name" name="name"
          value={formData.name} onChange={handleChange}
          placeholder={contactInfo.form.namePlaceholder}
          disabled={isLoading} error={errors.name}
        />

        {/* Email */}
        <InputField
          id="email" label="Email Address" type="email" name="email"
          value={formData.email} onChange={handleChange}
          placeholder={contactInfo.form.emailPlaceholder}
          disabled={isLoading} error={errors.email}
        />

        {/* Subject */}
        <InputField
          id="subject" label="Subject" name="subject"
          value={formData.subject} onChange={handleChange}
          placeholder={contactInfo.form.subjectPlaceholder}
          disabled={isLoading} error={errors.subject}
        />

        {/* Message */}
        <InputField id="message" label="Message" name="message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={contactInfo.form.messagePlaceholder}
            rows={5}
            disabled={isLoading}
            className={cn(
              'input-base resize-none',
              errors.message ? 'border-error focus:border-error focus:ring-error/20' : '',
            )}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
        </InputField>

        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text" id="website" name="website"
            value={formData.website} onChange={handleChange}
            tabIndex={-1} autoComplete="off"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          isLoading={isLoading}
          leftIcon={isLoading ? undefined : Send}
          aria-label="Send message"
        >
          {isLoading ? 'Sending…' : contactInfo.form.submitText}
        </Button>

        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.div
              key="success"
              initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? {} : { opacity: 0, y: -8 }}
              className="flex items-start gap-3 rounded-xl border border-success/25 bg-success/[0.08] p-4 text-success"
              role="alert"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-[14px] font-medium">{contactInfo.form.successMessage}</p>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              key="error"
              initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? {} : { opacity: 0, y: -8 }}
              className="flex items-start gap-3 rounded-xl border border-error/25 bg-error/[0.08] p-4 text-error"
              role="alert"
            >
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-[14px] font-medium">{contactInfo.form.errorMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}

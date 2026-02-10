import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useActor } from './useActor';
import { toast } from 'sonner';

interface FormData {
  name: string;
  phone: string;
  email: string;
  businessType: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export function useLeadForm() {
  const { actor } = useActor();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    businessType: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setErrorMessage('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!actor) {
      setErrorMessage('Unable to connect. Please try again.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Generate a unique ID for this lead
      const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Map our form fields to backend interface
      // Backend expects: id, name, email, company, message
      // We have: name, phone, email, businessType
      // Mapping: businessType → company, phone → included in message
      const message = `Phone: ${formData.phone}${formData.businessType ? ` | Business: ${formData.businessType}` : ''}`;
      
      await actor.submitLead(
        leadId,
        formData.name,
        formData.email || 'not-provided@example.com',
        formData.businessType || 'Not specified',
        message
      );

      setIsSuccess(true);
      toast.success('Thank you! We will contact you soon.');
    } catch (error) {
      console.error('Lead submission error:', error);
      setErrorMessage('Something went wrong. Please try WhatsApp or call us directly.');
      toast.error('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessType: '',
    });
    setErrors({});
    setIsSuccess(false);
    setErrorMessage('');
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    errorMessage,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

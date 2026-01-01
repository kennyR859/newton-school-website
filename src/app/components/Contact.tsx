import React, { useState } from 'react';
import { Section } from './common/Section';
import { Typography } from './common/Typography';
import { Input, Textarea } from './common/Input';
import { Button } from './common/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card } from './common/Card';
import { toast } from 'sonner';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your message has been sent successfully!');
    }, 1500);
  };

  return (
    <>
      <Section background="white" spacing="lg" className="border-b border-[#E8E6E3]">
         <div className="text-center">
          <Typography variant="overline" color="copper" className="mb-4 block">Contact Us</Typography>
          <Typography variant="h1" className="mb-6">Get in Touch</Typography>
          <Typography variant="body" color="muted" className="max-w-2xl mx-auto">
             상담 예약이나 궁금한 점이 있으시면 언제든 문의해주세요.
          </Typography>
        </div>
      </Section>

      <Section background="warm">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
           {/* Info */}
           <div className="lg:w-1/3 space-y-8">
              <Card variant="default" className="space-y-8 h-full">
                 <div>
                    <Typography variant="h5" className="mb-4">Contact Info</Typography>
                    <div className="space-y-4">
                       <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-copper mt-1" />
                          <div>
                             <Typography variant="body" className="font-bold">Address</Typography>
                             <Typography variant="body" color="muted">2175 Lemoine Ave #304<br/>Fort Lee, NJ 07024</Typography>
                          </div>
                       </div>
                       <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-copper mt-1" />
                          <div>
                             <Typography variant="body" className="font-bold">Phone</Typography>
                             <Typography variant="body" color="muted">(201) 252-7252</Typography>
                          </div>
                       </div>
                       <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-copper mt-1" />
                          <div>
                             <Typography variant="body" className="font-bold">Email</Typography>
                             <Typography variant="body" color="muted">Kenny@newtonschool.net</Typography>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="border-t border-[#E8E6E3] pt-8">
                    <Typography variant="h5" className="mb-4">Opening Hours</Typography>
                    <div className="space-y-2">
                       <div className="flex justify-between">
                          <Typography variant="body" color="muted">Mon - Fri</Typography>
                          <Typography variant="body">3:00 PM - 9:00 PM</Typography>
                       </div>
                       <div className="flex justify-between">
                          <Typography variant="body" color="muted">Saturday</Typography>
                          <Typography variant="body">10:00 AM - 6:00 PM</Typography>
                       </div>
                       <div className="flex justify-between">
                          <Typography variant="body" color="muted">Sunday</Typography>
                          <Typography variant="body" color="error">Closed</Typography>
                       </div>
                    </div>
                 </div>
              </Card>
           </div>

           {/* Form */}
           <div className="lg:w-2/3">
              <Card variant="flat">
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <Input label="Student Name" placeholder="Enter student name" required />
                       <Input label="Parent Name" placeholder="Enter parent name" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <Input label="Email" type="email" placeholder="Enter your email" required />
                       <Input label="Phone" type="tel" placeholder="(201) 000-0000" required />
                    </div>
                    <Input label="Grade / Subject" placeholder="e.g. 10th Grade / Math" />
                    <Textarea label="Message" rows={5} placeholder="How can we help you?" />
                    <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
                       {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                 </form>
              </Card>
           </div>
        </div>
      </Section>

      {/* Map */}
      <div className="h-[400px] w-full bg-gray-200">
         <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.554378735231!2d-73.9682556845919!3d40.85698397931634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6d203590001%3A0x6c6360636063606!2s2175%20Lemoine%20Ave%20%23304%2C%20Fort%20Lee%2C%20NJ%2007024!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus"
           width="100%"
           height="100%"
           style={{ border: 0 }}
           allowFullScreen={false}
           loading="lazy"
         ></iframe>
      </div>
    </>
  );
};

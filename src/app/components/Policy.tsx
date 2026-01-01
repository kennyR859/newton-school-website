import React from 'react';
import { Section } from './common/Section';
import { Typography } from './common/Typography';

export const Policy = () => {
  return (
    <>
      <Section className="bg-charcoal text-white py-20">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Typography variant="h1">
            Privacy Policy & Terms
          </Typography>
          <Typography variant="body" className="text-stone text-lg">
            Transparent and fair policies for our students and parents.
          </Typography>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <Typography variant="h3" color="charcoal">
              Privacy Policy
            </Typography>
            <Typography variant="body" className="text-charcoal/80">
              At Newton School, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
            </Typography>
            <div className="space-y-2 mt-4">
              <Typography variant="body" className="text-charcoal/80">
                <strong>1. Information Collection:</strong> We collect information necessary for enrollment and educational purposes, including student names, parent contact details, and academic records.
              </Typography>
              <Typography variant="body" className="text-charcoal/80">
                <strong>2. Use of Information:</strong> Information is used to provide educational services, communicate with parents, and ensure student safety.
              </Typography>
               <Typography variant="body" className="text-charcoal/80">
                <strong>3. Data Protection:</strong> We implement appropriate security measures to protect your personal data from unauthorized access or disclosure.
              </Typography>
            </div>
          </div>

          <div className="w-full h-px bg-stone/30" />

          <div className="space-y-4">
             <Typography variant="h3" color="charcoal">
              Terms of Service
            </Typography>
            <Typography variant="body" className="text-charcoal/80">
              By enrolling in Newton School, you agree to the following terms and conditions.
            </Typography>
            <div className="space-y-2 mt-4">
              <Typography variant="body" className="text-charcoal/80">
                <strong>1. Enrollment:</strong> Enrollment is subject to availability and completion of the registration process.
              </Typography>
              <Typography variant="body" className="text-charcoal/80">
                <strong>2. Tuition:</strong> Tuition fees are due by the specified dates. Late fees may apply.
              </Typography>
              <Typography variant="body" className="text-charcoal/80">
                <strong>3. Conduct:</strong> Students are expected to adhere to the school's code of conduct. Newton School reserves the right to dismiss students for behavioral issues.
              </Typography>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

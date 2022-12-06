import React from 'react';
import { MailIcon } from '@/components/icons';
import { ContactContainer, EllipseImage } from './Contact.styles';
import { ContactForm } from './ContactForm';

export const Contact = () => (
  <ContactContainer>
    <div className="relative">
      <div className="absolute top-1/2 left-28 -z-10 w-40 h-6 bg-[#46BD62]" />
      <EllipseImage />
    </div>
    <div className="flex gap-x-6">
      <MailIcon />
      <p className="uppercase text-lg tracking-widest">
        get in <br />
        <span className="font-bold">touch</span>
      </p>
    </div>
    <ContactForm />
  </ContactContainer>
);

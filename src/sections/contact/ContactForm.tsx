import React from 'react';
import { Button } from '@/components/button';
import { ContactInput, ContactTextarea } from './Contact.styles';

export const ContactForm = () => (
  <form className="grid gap-y-8 mt-10">
    <div className="w-full">
      <label htmlFor="input_email">Your name</label>
      <ContactInput
        type="text"
        id="floating_email"
        placeholder="type your name here..."
      />
    </div>

    <div className="flex justify-between gap-x-5">
      <div className="w-full">
        <label htmlFor="input_email">Email*</label>
        <ContactInput
          type="email"
          id="input_email"
          placeholder="example@example.com"
        />
      </div>

      <div className="w-full">
        <label htmlFor="input_telephone">Telephone*</label>
        <ContactInput
          type="text"
          id="input_telephone"
          placeholder="(  ) ____-____"
        />
      </div>
    </div>

    <div>
      <label htmlFor="input_telephone">Message*</label>
      <ContactTextarea
        id="textarea_message"
        placeholder="Type what you want to say to us"
        rows={6}
      />
    </div>

    <div className="h-14">
      <Button type="button">
        <p className="font-bold text-lg tracking-wider">SEND NOW</p>
      </Button>
    </div>
  </form>
);

import { useState } from 'react';
import { Image } from '@/components/Image';
import { SignIn } from './signin';
import { SignUp } from './signup';

type SignModalProps = {
  hide: () => void;
};

export const SignModal = ({ hide }: SignModalProps) => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleChange = () => setShowSignIn((prev) => !prev);

  return (
    <div className="flex items-start gap-x-10">
      <Image src="/sign-woman.svg" />
      <div>
        {showSignIn ? <SignIn hide={hide} /> : <SignUp hide={hide} />}
        <button
          type="button"
          onClick={handleChange}
          className="text-sm text-green-600 mt-4 w-[342px] text-center"
        >
          {showSignIn
            ? "Don't have an account? Sign up for free"
            : 'Already have an account? Sign in'}
        </button>
      </div>

      <button
        type="button"
        className="absolute right-6 top-6 font-bold text-xl"
        onClick={hide}
      >
        close
      </button>
    </div>
  );
};

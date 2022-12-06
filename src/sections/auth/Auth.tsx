import { useState } from 'react';
import { Image } from '@/components/Image';
import { SignIn } from './signin';
import { SignUp } from './signup';

type AuthModalProps = {
  hide: () => void;
};

export const AuthModal = ({ hide }: AuthModalProps) => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleChange = () => setShowSignIn((prev) => !prev);

  return (
    <div className="flex items-start gap-x-10">
      <Image src="/sign-woman.svg" className="hidden lg:block" />

      <div className="grid justify-center">
        {showSignIn ? <SignIn hide={hide} /> : <SignUp hide={hide} />}
        <button
          type="button"
          onClick={handleChange}
          className="text-xs text-green-600 mt-4 w-full text-center md:text-sm lg:w-[342px]"
        >
          {showSignIn ? (
            <p>Don&apos;t have an account? Sign up for free</p>
          ) : (
            <p>Already have an account? Sign in</p>
          )}
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

import { SubTitle, Title } from '../Auth.styles';
import { SignInForm } from './SignInForm';

type SignInProps = {
  hide: () => void;
};

export const SignIn = ({ hide }: SignInProps) => (
  <>
    <div className="text-center lg:text-left">
      <Title>Sign in</Title>
      <SubTitle>to access your list</SubTitle>
    </div>
    <SignInForm hide={hide} />
  </>
);

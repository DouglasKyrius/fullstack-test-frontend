import { SubTitle, Title } from '../Sign.styles';
import { SignInForm } from './SignInForm';

type SignInProps = {
  hide: () => void;
};

export const SignIn = ({ hide }: SignInProps) => (
  <>
    <Title>Sign in</Title>
    <SubTitle>to access your list</SubTitle>
    <SignInForm hide={hide} />
  </>
);

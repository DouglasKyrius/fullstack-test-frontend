import { SubTitle, Title } from '../Auth.styles';
import { SignUpForm } from './SignUpForm';

type SignUpProps = {
  hide: () => void;
};

export const SignUp = ({ hide }: SignUpProps) => (
  <>
    <Title>Sign up</Title>
    <SubTitle>to access your list</SubTitle>
    <SignUpForm hide={hide} />
  </>
);

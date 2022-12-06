import { SubTitle, Title } from '../Auth.styles';
import { SignUpForm } from './SignUpForm';

type SignUpProps = {
  hide: () => void;
};

export const SignUp = ({ hide }: SignUpProps) => (
  <>
    <div className="text-center lg:text-left">
      <Title>Sign up</Title>
      <SubTitle>to create your list</SubTitle>
    </div>
    <SignUpForm hide={hide} />
  </>
);

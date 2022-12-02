import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useAuth } from '@/hooks';
import { Button } from '@/components/button';
import { PasswordInput, UsernameInput } from '@/components/form/FormComponents';
import { isUsernameValid } from '@/utils/is-username-valid';
import { LOGIN_USER } from '@/lib/graphql/mutations/login-user.graphql';
import { FetchError } from '../Auth.styles';

interface LoginFormInterface {
  username: string;
  password: string;
}

type SignInFormProps = {
  hide: () => void;
};

export const SignInForm = ({ hide }: SignInFormProps) => {
  const { login } = useAuth();
  const [fetchError, setFetchError] = useState('');
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>();

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { loginUser: userData } }) {
      login(userData);
      hide();
    },
    onError({ graphQLErrors, networkError, clientErrors }) {
      if (networkError || clientErrors.length) {
        setFetchError('Internal server error, please try again later.');
        return;
      }

      if (graphQLErrors[0].extensions.code === '404')
        setError('username', {
          type: 'user-not-found',
          message: graphQLErrors[0].message,
        });
      if (graphQLErrors[0].extensions.code === 'BAD_USER_INPUT')
        setError('password', {
          type: 'user/password-invalid',
          message: graphQLErrors[0].message,
        });
    },
  });

  const onSubmit: SubmitHandler<LoginFormInterface> = async ({
    username,
    password,
  }) => {
    setFetchError('');
    if (!isUsernameValid(username)) {
      setError('username', {
        type: 'username-invalid',
        message:
          'Usernames can only have: Lowercase Letters (a-z), Numbers (0-9), Dots (.) and Underscores (_)',
      });
      return;
    }

    await loginUser({
      variables: {
        loginUserInput: {
          username,
          password,
        },
      },
    });
  };

  return (
    <>
      {fetchError ? <FetchError>{fetchError}</FetchError> : null}
      <form className="mt-20 w-[342px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <UsernameInput
            usernameErrors={errors.username}
            registerForm={register}
          />
        </div>
        <div className="mb-14">
          <PasswordInput
            passwordErrors={errors.password}
            registerForm={register}
          />
        </div>

        <div className="w-[300px] h-16 m-auto">
          <Button type="submit" isLoading={loading} borderless>
            <span className="text-2xl">Sign in</span>
          </Button>
        </div>
      </form>
    </>
  );
};

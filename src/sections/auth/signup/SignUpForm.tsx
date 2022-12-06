import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useAuth } from '@/hooks';
import { Button } from '@/components/button';
import { PasswordInput, UsernameInput } from '@/components/form/FormComponents';
import { isUsernameValid } from '@/utils/is-username-valid';
import { CREATE_USER } from '@/lib/graphql/mutations/create-user.graphql';
import { FetchError } from '../Auth.styles';

interface RegisterFormInterface {
  username: string;
  password: string;
}

type SignUpFormProps = {
  hide: () => void;
};

export const SignUpForm = ({ hide }: SignUpFormProps) => {
  const { register } = useAuth();
  const [fetchError, setFetchError] = useState('');
  const {
    register: registerForm,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInterface>();

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    update(_, { data: { createUser: userData } }) {
      register(userData);
      hide();
    },
    onError({ graphQLErrors, networkError, clientErrors }) {
      if (networkError || clientErrors.length) {
        setFetchError('Internal server error, please try again later.');
        return;
      }
      if (graphQLErrors[0].extensions.code === 'BAD_USER_INPUT')
        setError('username', {
          type: 'user-in-use',
          message: graphQLErrors[0].message,
        });
    },
  });

  const onSubmit: SubmitHandler<RegisterFormInterface> = async ({
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

    await createUser({
      variables: {
        createUserInput: {
          username,
          password,
        },
      },
    });
  };

  return (
    <div className="grid justify-center lg:block">
      <div className="relative mb-6 text-center">
        {fetchError ? <FetchError>{fetchError}</FetchError> : null}
      </div>
      <form
        className="mt-20 w-64 md:w-[342px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-8">
          <UsernameInput
            usernameErrors={errors.username}
            registerForm={registerForm}
          />
        </div>
        <div className="mb-14">
          <PasswordInput
            passwordErrors={errors.password}
            registerForm={registerForm}
          />
        </div>

        <div className="w-56 h-14 m-auto md:w-[300px] md:h-16">
          <Button type="submit" isLoading={loading} borderless>
            <span className="text-2xl">Sign up</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

import { memo, useMemo, useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Input, Label } from './Form.styles';

export const PasswordInput = memo(
  ({ registerForm, passwordErrors }: PasswordInputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative">
        <Label htmlFor="input_password">Password:</Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          id="input_password"
          hasError={!!passwordErrors}
          {...registerForm('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'The password must be 6 characters long or more',
            },
          })}
        />
        {useMemo(
          () => (
            <button
              type="button"
              className="absolute right-1 top-11 p-2"
              onClick={() => setShowPassword((prevState) => !prevState)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          ),
          [showPassword]
        )}
        <div className="absolute">
          {passwordErrors ? (
            <p className="text-xs text-red-600">{passwordErrors.message}</p>
          ) : null}
        </div>
      </div>
    );
  }
);

export const UsernameInput = memo(
  ({ usernameErrors, registerForm }: UsernameInputProps) => (
    <>
      <Label htmlFor="floating_username">User:</Label>
      <Input
        type="text"
        id="floating_username"
        className="peer"
        placeholder=" "
        hasError={!!usernameErrors}
        {...registerForm('username', {
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
          maxLength: {
            value: 20,
            message: 'Username must be a maximum of 20 characters',
          },
        })}
      />
      <div className="absolute w-[340px]">
        {usernameErrors ? (
          <p className="text-xs text-red-600">{usernameErrors.message}</p>
        ) : null}
      </div>
    </>
  )
);

type RegisterFormProp = {
  registerForm: UseFormRegister<{
    username: string;
    password: string;
  }>;
};

interface PasswordInputProps extends RegisterFormProp {
  passwordErrors: FieldError | undefined;
}

interface UsernameInputProps extends RegisterFormProp {
  usernameErrors: FieldError | undefined;
}

/* {
  useMemo(
    () => (
      <button
        type="button"
        className="absolute right-0 top-1 p-2"
        onClick={() => setShowPassword((prevState) => !prevState)}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    ),
    [showPassword]
  )
} */

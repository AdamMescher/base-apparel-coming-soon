import * as React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import IconButton from '../IconButton';
import { ReactComponent as Arrow } from '../../assets/icon-arrow.svg';
import { ReactComponent as Error } from '../../assets/icon-error.svg';

interface Inputs {
  email: string;
}

const Wrapper = styled.form<{ error: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 28px;
  & > svg {
    height: 24px;
    width: 24px;
    position: absolute;
    top: 16px;
    right: 58px;
  }
  & > button {
    position: absolute;
    right: -28px;
    top: 0px;
    ${(props) =>
      props?.error ? 'padding-top: 20px; padding-bottom: 20px;' : null}
  }
`;
const Input = styled.input<{ error: boolean }>`
  transition: all 200ms ease-in-out;
  outline: 2px solid transparent;
  outline-offset: 4px;
  border-radius: 9999px;
  border: ${(props) =>
    props?.error
      ? '2px solid var(--soft-red)'
      : '1px solid var(--desaturated-red)'};
  padding: 16px 32px;
  color: var(--dark-grayish-red);
  font-size: var(--fs-body);
  ::placeholder {
    color: var(--desaturated-red);
  }
  &:focus {
    outline-color: var(--desaturated-red);
  }
`;
const ErrorMessage = styled.span`
  margin-top: 8px;
  padding-left: 28px;
  color: var(--soft-red);
`;

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Wrapper
      aria-label={'subscribe'}
      error={errors.email ? true : false}
      onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={errors.email ? true : false}
        placeholder={'Email Address'}
        aria-invalid={errors.email ? 'true' : 'false'}
        {...register('email', {
          required: {
            value: true,
            message: 'Email is required',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Please provide a valid email',
          },
          minLength: {
            value: 5,
            message: 'Email must have a minimum length of 5 characters',
          },
          maxLength: {
            value: 100,
            message: 'Email has a maximum length of 100 characters',
          },
        })}
      />
      {errors?.email ? <Error /> : null}
      {errors?.email ? (
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
      ) : null}
      <IconButton type='submit' icon={Arrow} label='submit' />
    </Wrapper>
  );
};

export default Subscribe;

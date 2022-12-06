import tw from 'twin.macro';
import { useAuth, useModal } from '@/hooks';
import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { AuthModal } from './auth';

const ButtonWrapper = tw.div`
  w-32
  h-10
`;

export const Header = () => {
  const { user, logout } = useAuth();

  const [modalOptions, toggle] = useModal();

  return (
    <div className="flex justify-between items-center py-14">
      <img src="/logo.svg" alt="logo coopers" className="hidden md:block" />
      <img src="/mark.svg" alt="logo coopers" className="block md:hidden" />
      {user ? (
        <ButtonWrapper onClick={logout}>
          <Button type="button" isBlack borderless>
            {user.username}
          </Button>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper onClick={toggle}>
          <Button type="button" isBlack borderless>
            sign in
          </Button>
        </ButtonWrapper>
      )}
      <Modal {...modalOptions}>
        <AuthModal hide={toggle} />
      </Modal>
    </div>
  );
};

import tw from 'twin.macro';
import { RxExit } from 'react-icons/rx';
import { useAuth, useModal } from '@/hooks';
import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { AuthModal } from './auth';

const ButtonWrapper = tw.div`
  w-36
  h-10
`;

export const Header = () => {
  const { user, logout } = useAuth();

  const [modalOptions, toggle] = useModal();

  return (
    <div className="flex justify-end items-center py-14">
      {user ? (
        <ButtonWrapper onClick={logout}>
          <Button type="button" isBlack borderless>
            <span className="flex items-center gap-x-2">
              {user.username}
              <RxExit />
            </span>
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

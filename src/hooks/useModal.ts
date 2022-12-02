import { useState, useEffect } from 'react';

interface UseModalReturnType {
  isModalVisible: boolean;
  hide: () => void;
}

const useModal = (): [UseModalReturnType, () => void] => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggle = () => {
    setIsModalVisible((prev) => !prev);
  };

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = 'hidden';
    }
    if (!isModalVisible) {
      document.body.style.removeProperty('overflow');
    }
  }, [isModalVisible]);

  return [
    {
      isModalVisible,
      hide: toggle,
    },
    toggle,
  ];
};

export default useModal;

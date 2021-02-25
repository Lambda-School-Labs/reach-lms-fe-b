import { useState, useEffect, useRef } from 'react';

export const useResetFormOnCloseModal = ({ resetFields, visible }) => {
  const prevVisibleRef = useRef();

  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);

  const prevVisible = prevVisibleRef.current;

  useEffect(() => {
    if (!visible && prevVisible) {
      resetFields();
    }
  }, [visible, prevVisible, resetFields]);
};

export const useSubModal = resetFields => {
  const [visible, setVisible] = useState(false);
  useResetFormOnCloseModal({ resetFields, visible });

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return { visible, showModal, hideModal };
};

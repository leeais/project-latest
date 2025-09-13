import useModalStore from '@/store/modal.store';

export function useModal() {
  const modalStack = useModalStore((s) => s.modalStack);
  const activeModal = useModalStore((s) => s.activeModal);

  const openModal = useModalStore((s) => s.openModal);
  const replaceModal = useModalStore((s) => s.replaceModal);
  const closeModal = useModalStore((s) => s.closeModal);
  const closeModalByName = useModalStore((s) => s.closeModalByName);
  const getModalData = useModalStore((s) => s.getModalData);
  const getModalDataByName = useModalStore((s) => s.getModalDataByName);
  const clearModalStack = useModalStore((s) => s.clearModalStack);

  const activeModalData = modalStack.length > 0 ? modalStack[modalStack.length - 1].data : null;

  return {
    activeModal,
    activeModalData,
    modalStack,
    openModal,
    replaceModal,
    closeModal,
    closeModalByName,
    clearModalStack,
    getModalData,
    getModalDataByName,
  };
}

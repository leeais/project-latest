import { create } from 'zustand';

type ModalInfo = {
  name: string;
  data: Record<string, any>;
};

type ModalState = {
  modalStack: ModalInfo[];
  activeModal: string | null;
};

type ModalActions = {
  openModal: (name: string, data?: Record<string, any>) => void;
  replaceModal: (name: string, data?: Record<string, any>) => void;
  closeModal: () => void;
  closeModalByName: (name: string) => void;
  getModalData: () => Record<string, any> | null;
  getModalDataByName: (name: string) => Record<string, any> | null;
  clearModalStack: () => void;
};

const initialState: ModalState = {
  modalStack: [],
  activeModal: null,
};

const useModalStore = create<ModalState & ModalActions>((set, get) => ({
  ...initialState,

  openModal: (name, data = {}) =>
    set((state) => ({
      modalStack: [...state.modalStack, { name, data }],
      activeModal: name,
    })),

  replaceModal: (name, data = {}) =>
    set((state) => {
      const newStack = [...state.modalStack];
      if (newStack.length > 0) {
        newStack[newStack.length - 1] = { name, data };
      } else {
        newStack.push({ name, data });
      }
      return { modalStack: newStack, activeModal: name };
    }),

  closeModal: () =>
    set((state) => {
      const newStack = state.modalStack.slice(0, -1);
      return {
        modalStack: newStack,
        activeModal: newStack.length > 0 ? newStack[newStack.length - 1].name : null,
      };
    }),

  closeModalByName: (name) =>
    set((state) => {
      const newStack = state.modalStack.filter((modal) => modal.name !== name);
      return {
        modalStack: newStack,
        activeModal: newStack.length > 0 ? newStack[newStack.length - 1].name : null,
      };
    }),

  getModalData: () =>
    get().modalStack.find((modal) => modal.name === get().activeModal)?.data ?? null,

  getModalDataByName: (name) => get().modalStack.find((modal) => modal.name === name)?.data ?? null,

  clearModalStack: () => set({ modalStack: [], activeModal: null }),
}));

export default useModalStore;

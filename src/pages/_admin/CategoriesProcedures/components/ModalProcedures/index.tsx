import Modal from '@/components/_common/Modal';

type ModalProceduresProps = { name: string };

export default function ModalProcedures({ name }: ModalProceduresProps) {
  return <Modal name={name}>ModalProcedures</Modal>;
}

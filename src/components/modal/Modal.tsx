import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
}
export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-black/50" onClick={onClose} />
      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <h1 className="text-2xl text-center mb-2">{title}</h1>
        {children}
      </div>
    </>
  );
}

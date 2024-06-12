import { useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function CustomModal({ title, body, open, handleClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray p-6 rounded-md shadow-md w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">{title}</h2>
          <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        <div>
          <p>{body}</p>
        </div>
        <div  className="mt-4 text-right bg-primary">

          <button onClick={handleClose} className=" bg-primary hover:bg-primary text-white px-4 py-2 rounded ">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

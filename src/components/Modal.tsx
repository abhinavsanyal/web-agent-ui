const Modal: React.FC<{ content: string, onClose: () => void }> = ({ content, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg max-w-lg w-full">
          <h2 className="text-lg font-bold">Summary</h2>
          <p>{content}</p>
          <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  
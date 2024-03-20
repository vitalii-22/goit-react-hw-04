import ReactModal from 'react-modal';

const ImageModal = ({ showModal, handleRequestCloseFunc }) => {
  return (
    <ReactModal isOpen={showModal} onRequestClose={handleRequestCloseFunc}>
      <img src="" alt="" />
    </ReactModal>
  );
};

export default ImageModal;

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const ImageModal = ({ imgModal, showModal, handleRequestCloseFunc }) => {
  return (
    <ReactModal isOpen={showModal} onRequestClose={handleRequestCloseFunc}>
      <img src={imgModal} />
    </ReactModal>
  );
};

export default ImageModal;

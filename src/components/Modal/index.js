import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function Modal({ children, isOpen, setIsOpen }) {
  const [modalStatus, setModalStatus] = useState(isOpen)

  useEffect(() => {
    setModalStatus(isOpen)
  }, [isOpen])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          border: 0,
          padding: 0,
          width: 400,
          maxWidth: 'calc(100% - 32px)',
          maxHeight: 'calc(100% - 32px)',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 6
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }
      }}
    >
      {children}
    </ReactModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func
}

export default Modal

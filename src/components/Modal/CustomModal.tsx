import { Modal } from 'antd';

export default function CustomModal({ zIndex, title, open, onOk, onCancel, children }) {
    return (
        <Modal
            zIndex={zIndex}
            title={title}
            visible={open}
            onOk={onOk}
            onCancel={onCancel}

        >
            {children}
        </Modal>

    );
}

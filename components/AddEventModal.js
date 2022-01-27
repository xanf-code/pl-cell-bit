import Modal from 'react-modal';
import { useState } from 'react';

export default function AddEventModal({ isOpen, onClose, onEventAdded }) {
    const [title, setTitle] = useState('');
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })

        onClose();
    }

    return (
        <div className=''>
            <Modal isOpen={isOpen} onRequestClose={onClose}>
                <form onSubmit={onSubmit}>
                    <input placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                    <div>
                        <label>Start Date</label>
                        <input type="datetime-local" onChange={e => setStart(e.target.value)} />
                    </div>
                    <div>
                        <label>End Date</label>
                        <input type="datetime-local" onChange={e => setEnd(e.target.value)} />
                    </div>
                    <button onClick={(e) => onSubmit(e)}>Add Event</button>
                </form>
            </Modal>
        </div>
    );
}

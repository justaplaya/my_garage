import { Popup } from 'Components/Popup';
import { Input } from 'Components/Input';
import { ChangeEvent, useState } from 'react';

export const ReportIssue = () => {
  const [show, setShow] = useState(false);

  const openReportModal = () => setShow(true);
  const closeReportModal = () => setShow(false);
  const [title, setTitle] = useState('');
  const handleChange = {
    title: (e: ChangeEvent<InputOrTextArea>) => setTitle(e.target.value),
  };

  return (
    <>
      <h1 onClick={openReportModal}>Report</h1>
      <Popup title={'Report your issue'} show={show} closeAction={closeReportModal}>
        <Input value={title} onChange={handleChange.title} />
      </Popup>
    </>
  );
};

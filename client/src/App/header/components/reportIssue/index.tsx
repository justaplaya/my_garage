import { Popup } from 'Components/Popup';
import { useState } from 'react';
import { Label, Form } from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'Components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from 'Components/FormField';
import { FormFieldProps } from 'Components/FormField/types';
import { Inputs } from './types';
import { reportIssueSchema } from './config';
import { toast } from 'react-toastify';

export const ReportIssue = () => {
  const [show, setShow] = useState(false);

  const openReportModal = () => setShow(true);
  const closeReportModal = () => {
    setShow(false);
    reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({ resolver: zodResolver(reportIssueSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    closeReportModal();
    toast.success('Your report was sent successfully');
  };

  const formFieldProps: Record<keyof Inputs, FormFieldProps<Inputs>> = {
    issueName: {
      type: 'text',
      placeholder: 'Issue name',
      name: 'issueName',
      register,
      error: errors.issueName,
    },
    issueDescription: {
      placeholder: 'Issue description',
      name: 'issueDescription',
      register,
      error: errors.issueDescription,
      componentType: 'textarea',
    },
  };
  return (
    <>
      <h1 onClick={openReportModal}>Report</h1>
      <Popup title={'Report your issue'} show={show} closeAction={closeReportModal} noClose>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label $required htmlFor={'issueName'}>
            Issue name
          </Label>
          <FormField {...formFieldProps.issueName} />
          <Label htmlFor={'issueDescription'}> Issue description </Label>
          <FormField {...formFieldProps.issueDescription} />
          <Button type={'submit'}>Submit</Button>
        </Form>
      </Popup>
    </>
  );
};

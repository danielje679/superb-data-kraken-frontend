import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';

import { FormInput } from '@components/index';

function Password() {
  const { formatMessage } = useIntl();

  const [oldPassword, setOldPassword] = useState('');
  const [oldMaskedPassword, setOldMaskedPassword] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [newMaskedPassword, setNewMaskedPassword] = useState('');

  const [repeatPassword, setRepeatPassword] = useState('');
  const [repeatMaskedPassword, setRepeatMaskedPassword] = useState('');

  const [hasChanges, setHasChanges] = useState(false);

  const handleOldPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredPassword = event.target.value;
    setOldPassword(enteredPassword);
    setOldMaskedPassword('*'.repeat(enteredPassword.length));
  };

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredPassword = event.target.value;
    setNewPassword(enteredPassword);
    setNewMaskedPassword('*'.repeat(enteredPassword.length));
  };

  const handleRepeatPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredPassword = event.target.value;
    setRepeatPassword(enteredPassword);
    setRepeatMaskedPassword('*'.repeat(enteredPassword.length));
  };

  const handleSave = () => {
    console.log('Data saved');
    setHasChanges(false);
  };

  const handleCancel = () => {
    setHasChanges(false);
  };

  return (
    <Container
      fluid
      className='mb-8 pt-5'
      style={{ maxWidth: '1000px', marginLeft: '0' }}
    >
      <FormInput
        id='oldPassword'
        ariaLabel='oldPassword'
        labelText={formatMessage({
          id: 'UserPage.Password.old-password-title',
        })}
        labelToolTipText='labelToolTipText'
        labelClassName='h4'
        groupClassName='ms-3 mb-4 pe-sm-5'
        placeholder={formatMessage({
          id: 'UserPage.Password.old-password-placeholder',
        })}
        fontSize='sm'
        value={oldMaskedPassword}
        onChange={(e) => {
          handleOldPasswordChange(e);
        }}
      />
      <FormInput
        id='newPassword'
        ariaLabel='newPassword'
        labelText={formatMessage({
          id: 'UserPage.Password.new-password-title',
        })}
        labelToolTipText='labelToolTipText'
        labelClassName='h4'
        groupClassName='ms-3 mb-4 pe-sm-5'
        placeholder={formatMessage({
          id: 'UserPage.Password.new-password-placeholder',
        })}
        fontSize='sm'
        value={newMaskedPassword}
        onChange={(e) => {
          handleNewPasswordChange(e);
        }}
      />
      <FormInput
        id='repeatPassword'
        ariaLabel='repeatPassword'
        labelText={formatMessage({
          id: 'UserPage.Password.repeat-password-title',
        })}
        labelToolTipText='labelToolTipText'
        labelClassName='h4'
        groupClassName='ms-3 mb-4 pe-sm-5'
        placeholder={formatMessage({
          id: 'UserPage.Password.repeat-password-placeholder',
        })}
        fontSize='sm'
        value={repeatMaskedPassword}
        onChange={(e) => {
          handleRepeatPasswordChange(e);
        }}
      />

      <Container
        className='position-absolute'
        style={{ bottom: 0, maxWidth: '1000px' }}
      >
        <Row className='mt-auto mb-6 mx-0 w-100 d-flex justify-content-center'>
          <Col
            xs={{ span: 4, offset: 4 }}
            xl={{ span: 2, offset: 5 }}
            className='m-0 p-0 d-flex justify-content-between'
          >
            <Button
              variant='outline-primary'
              onClick={handleCancel}
              disabled={!hasChanges}
              className='me-4'
            >
              {formatMessage({
                id: 'UserPage.cancel-button',
              })}
            </Button>
            <Button
              variant='primary'
              type='submit'
              onClick={handleSave}
              disabled={!hasChanges}
            >
              {formatMessage({
                id: 'UserPage.save-button',
              })}
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Password;

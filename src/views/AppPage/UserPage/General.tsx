import { Button, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useIntl } from 'react-intl';

import { FormRadioButtons } from '@components/index';
import { FormInput } from '@components/index';
import ImagePicker from './ImagePicker';

interface LayoutProps {
  onLanguageChange: (language: string) => void;
}

function General({ onLanguageChange }: LayoutProps) {
  const { formatMessage } = useIntl();

  const [username, setUsername] = useState('danielj');
  const [originalUsername, setOriginalUsername] = useState('danielj');

  const [email, setEmail] = useState('daniel.jeckel@efs-techhub.com');
  const [originalEmail, setOriginalEmail] = useState(
    'daniel.jeckel@efs-techhub.com'
  );

  const [languageActive, setLanguageActive] = useState<boolean>(true);

  const [hasChanges, setHasChanges] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setHasChanges(event.target.value !== originalUsername);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setHasChanges(event.target.value !== originalEmail);
  };

  const handleLanguageSelect = (language: string): void => {
    onLanguageChange(language);
    setLanguageActive(!languageActive);
  };

  const handleSave = () => {
    console.log('Data saved');
    setOriginalUsername(username);
    setOriginalEmail(email);
    setHasChanges(false);
  };

  const handleCancel = () => {
    setUsername(originalUsername);
    setEmail(originalEmail);
    setHasChanges(false);
  };

  return (
    <Container
      fluid
      className='mb-8 pt-5'
      style={{ maxWidth: '1000px', marginLeft: '0' }}
    >
      <h2 className='ms-3 mb-4 pe-lg-0 pe-sm-5 pe-3 text-primary'>
        {formatMessage({
          id: 'UserPage.General.profile',
        })}
      </h2>
      <Row>
        <Col md={8}>
          <FormInput
            id='username'
            ariaLabel='name'
            labelText={formatMessage({
              id: 'UserPage.General.username',
            })}
            labelToolTipText='labelToolTipText'
            labelClassName='h4'
            groupClassName='ms-3 mb-4 pe-sm-5'
            placeholder={formatMessage({
              id: 'UserPage.General.username',
            })}
            fontSize='sm'
            value={username}
            onChange={(e) => {
              handleUsernameChange(e);
            }}
          />
          <FormInput
            id='email'
            ariaLabel='name'
            labelText={formatMessage({
              id: 'UserPage.General.email',
            })}
            labelToolTipText='labelToolTipText'
            labelClassName='h4'
            groupClassName='ms-3 mb-4 pe-sm-5'
            placeholder={formatMessage({
              id: 'UserPage.General.email',
            })}
            fontSize='sm'
            value={email}
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
        </Col>
        <Col>
          <ImagePicker />
        </Col>
      </Row>
      <h2 className='ms-3 mb-4 pe-lg-0 pe-sm-5 pe-3 text-primary'>
        {formatMessage({
          id: 'UserPage.General.language',
        })}
      </h2>
      <FormRadioButtons
        groupClassName='ms-3 mb-4 mt-3'
        id='language'
        labelClassName='font-weight-medium d-flex me-2'
        labelText={formatMessage({
          id: 'UserPage.General.language',
        })}
        checkedValue={!languageActive ? 'en' : 'de'}
        inline
        onChange={(e) => handleLanguageSelect(e.target.value)}
        labelsAndValues={[
          {
            name: formatMessage({
              id: 'UserPage.General.english',
            }),
            value: 'en',
          },
          {
            name: formatMessage({
              id: 'UserPage.General.german',
            }),
            value: 'de',
          },
        ]}
      />
      <Container
        className='position-absolute'
        style={{ bottom: 0, maxWidth: '1000px' }}
      >
        <Row className='align-items-end mt-auto mb-6 mx-0 w-100 d-flex justify-content-center'>
          <Col
            xs={{ span: 4, offset: 4 }}
            xl={{ span: 2, offset: 5 }}
            className='m-0 p-0 d-flex justify-content-between align-items-end'
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

export default General;

import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useIntl } from 'react-intl';

import { Tabs } from '@components/index';
import { Tab } from '@customTypes/index';
import General from './General';
import Password from './Password';

interface LayoutProps {
  onLanguageChange: (language: string) => void;
}

function UserPage({ onLanguageChange }: LayoutProps) {
  const { formatMessage } = useIntl();

  const [userTabs, setUserTabs] = useState<Tab[]>();

  useEffect(() => {
    const theTabs = [
      {
        name: 'UserPage.General',
        path: 'general',
        level: 'primary',
        content: <General onLanguageChange={onLanguageChange} />,
        id: 'general',
      },
      {
        name: 'UserPage.Password',
        path: 'password',
        level: 'primary',
        content: <Password />,
        id: 'password',
      },
    ];
    setUserTabs([...theTabs]);
  }, []);

  return (
    <Container fluid className='mb-8 ps-5 ps-lg-8 pt-5'>
      <h1 className='ms-3 mb-4 pe-lg-0 pe-sm-5 pe-3 text-primary'>
        {formatMessage({
          id: 'UserPage.title',
        })}
      </h1>
      {userTabs && (
        <Tabs
          tabs={userTabs}
          className='h2'
          activeStyle='border-bottom border-primary border-1 ms-3 me-4'
          inactiveStyle='none ms-3 me-4'
          disabledStyle='text-dark'
        />
      )}
    </Container>
  );
}

// Export the UserPage component
export default UserPage;

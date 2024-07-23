import type { MetaFunction } from '@remix-run/node';
import { useCallback, useMemo, useState } from 'react';
import { Tab } from '@/components/Tab/Tab';
import '@/assets/scss/login.scss';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix SPA' },
    { name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
  ];
};

const TAB_ITEMS = ['Login', 'Register'] as const;
type TabItems = (typeof TAB_ITEMS)[number];

export default function Index() {
  const [state, setState] = useState<TabItems>('Register');

  const tabContent = useMemo(() => {}, [state]);

  const onClickTab = useCallback((item: string) => {
    if (item === 'Login') {
      setState('Login');
    } else {
      setState('Register');
    }
  }, []);

  return (
    <>
      <section>
        <h2>{state}</h2>
        <div className="_index__container">
          <Tab
            tabItems={TAB_ITEMS}
            currentKey={state}
            onClickTab={onClickTab}
          ></Tab>
        </div>
      </section>
    </>
  );
}

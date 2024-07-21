import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';
import { useCallback, useMemo, useState } from 'react';

const meta = {
  title: 'Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    tabItems: ['1.develop', '2.test', '3.production'],
    currentKey: '1.develop',
    onClickTab: () => {},
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabWithHooks = () => {
  const [state, setState] = useState('1.develop');

  const content = useMemo(() => {
    return <>{state}</>;
  }, [state]);

  const onClickTab = useCallback(
    (item: string) => {
      if (item === '1.develop') {
        setState('1.develop');
      } else if (item === '2.test') {
        setState('2.test');
      } else {
        setState('3.production');
      }
    },
    [state]
  );
  return (
    <Tab
      tabItems={['1.develop', '2.test', '3.production']}
      currentKey={state}
      onClickTab={onClickTab}
    >
      {content}
    </Tab>
  );
};

export const Default: Story = {
  render: () => <TabWithHooks />,
};

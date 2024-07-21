import { ReactNode } from 'react';
import { classNames } from '@/utils/componentUtils';
import './styles.scss';

export type TabProps = {
  tabItems: Readonly<string[]> | string[];
  currentKey: string;
  onClickTab: (item: string) => void;
  className?: string;
  children?: ReactNode;
};

export const Tab = ({
  tabItems,
  currentKey,
  onClickTab,
  className,
  children,
}: TabProps) => {
  return (
    <>
      <div className={className}>
        <ul className="Tab__header">
          {tabItems.map((item: string, index: number) => {
            return (
              <li key={index}>
                <button
                  className={classNames(
                    'Tab__header__button',
                    currentKey === item ? 'Tab__header__button--active' : ''
                  )}
                  onClick={() => {
                    onClickTab(item);
                  }}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
        {children}
      </div>
    </>
  );
};

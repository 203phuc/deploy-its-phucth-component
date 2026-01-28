import { useEffect, useRef, useState } from 'react';

import { ColumnType } from './type';

export interface ToolBarProps {
  productCount: number;

  isMobile?: boolean;

  setColumns: React.Dispatch<React.SetStateAction<ColumnType>>;

  setFilter?: React.Dispatch<React.SetStateAction<boolean>>;

  filter?: boolean;

  maxColumns?: 4 | 5;

  itemType?: 'products' | 'articles';
}

/* =======================

  Types

======================= */

export interface ToolBarLogicProps {
  isMobile?: boolean;

  setColumns: React.Dispatch<React.SetStateAction<ColumnType>>;

  filter?: boolean;

  maxColumns?: 4 | 5;
}

export type ColumnIcon =
  | 'ListIcon'
  | 'FiveColumnsIcon'
  | 'FourColumnsIcon'
  | 'ThreeColumnsIcon'
  | 'TwoColumnsIcon';

/* =======================

  Maps

======================= */

const columnMap: Record<ColumnIcon, ColumnType> = {
  ListIcon: 'list',

  FiveColumnsIcon: '5column',

  FourColumnsIcon: '4column',

  ThreeColumnsIcon: '3column',

  TwoColumnsIcon: '2column',
};

const columnMapMobile: Record<ColumnIcon, ColumnType> = {
  ListIcon: 'listMobile',

  TwoColumnsIcon: '2columnMobile',

  FourColumnsIcon: '2columnMobile',

  ThreeColumnsIcon: '2columnMobile',

  FiveColumnsIcon: '2columnMobile',
};

const columnFilterMap: Record<ColumnIcon, ColumnType> = {
  ListIcon: 'listColumnFilter',

  FourColumnsIcon: '4columnFilter',

  ThreeColumnsIcon: '3columnFilter',

  TwoColumnsIcon: '2columnFilter',

  FiveColumnsIcon: '4columnFilter',
};

const normalColumnMap: Record<ColumnType, ColumnType> = {
  '4columnFilter': '4column',

  '3columnFilter': '3column',

  '2columnFilter': '2column',

  listColumnFilter: 'list',

  '2columnMobile': '2column',

  listMobile: 'list',

  '5column': '5column',

  '4column': '4column',

  '3column': '3column',

  '2column': '2column',

  list: 'list',
};

/* =======================

  Hook

======================= */

export const useToolBar = ({ isMobile, filter, setColumns, maxColumns = 5 }: ToolBarLogicProps) => {
  const [selected, setSelected] = useState<ColumnIcon>('FiveColumnsIcon');

  const [openSort, setOpenSort] = useState(false);

  const filterColumnMap = useRef<Record<ColumnType, ColumnType>>({
    '5column': '4columnFilter',

    '4column': '4columnFilter',

    '3column': '3columnFilter',

    '2column': '2columnFilter',

    list: isMobile ? 'listMobile' : 'listColumnFilter',

    listMobile: filter ? 'listColumnFilter' : 'list',

    '2columnMobile': '2columnMobile',

    '4columnFilter': '4columnFilter',

    '3columnFilter': '3columnFilter',

    '2columnFilter': '2columnFilter',

    listColumnFilter: 'listColumnFilter',
  }).current;

  const handleSelect = (icon: ColumnIcon) => {
    if (filter && icon === 'FiveColumnsIcon') return;

    setSelected(icon);

    if (isMobile) {
      setColumns(columnMapMobile[icon]);

      return;
    }

    if (filter) {
      setColumns(columnFilterMap[icon]);

      return;
    }

    setColumns(columnMap[icon]);
  };

  useEffect(() => {
    if (isMobile) {
      setColumns('2columnMobile');

      setSelected('TwoColumnsIcon');

      return;
    }

    if (filter) {
      setColumns((prev) => {
        const newColumn = filterColumnMap[prev] || prev;

        setSelected(() => {
          // Map the new column to the correct icon

          switch (newColumn) {
            case '4columnFilter':
              return 'FourColumnsIcon';

            case '3columnFilter':
              return 'ThreeColumnsIcon';

            case '2columnFilter':
              return 'TwoColumnsIcon';

            case 'listColumnFilter':
              return 'ListIcon';

            default:
              return 'FiveColumnsIcon'; // fallback
          }
        });

        return newColumn;
      });
    } else {
      setColumns((prev) => normalColumnMap[prev]);
    }
  }, [filter, setColumns, isMobile, filterColumnMap]);

  const getIcons = (): ColumnIcon[] => {
    if (filter) {
      return ['FourColumnsIcon', 'ThreeColumnsIcon', 'TwoColumnsIcon', 'ListIcon'];
    }

    if (maxColumns === 4) {
      return ['FourColumnsIcon', 'ThreeColumnsIcon', 'TwoColumnsIcon', 'ListIcon'];
    }

    return ['FiveColumnsIcon', 'FourColumnsIcon', 'ThreeColumnsIcon', 'TwoColumnsIcon', 'ListIcon'];
  };

  const icons = getIcons();

  const iconsMobile = ['TwoColumnsIcon', 'ListIcon'] as ColumnIcon[];

  return {
    selected,

    openSort,

    icons,

    iconsMobile,

    setOpenSort,

    handleSelect,
  };
};

type MenuOption = {
  type: string;
  label: string;
  selected?: boolean;
};
type RenderCellFunction = (row: object, rowIndex?: number) => React.ReactNode;

type ColumnOptions = {
  field?: string;
  label?: string;
  width?: string;
  minWidth?: string;
  renderCell?: RenderCellFunction;
  actions?: boolean;
  date?: boolean;
  mainOptions?: MenuOption[];
  secondaryOptions?: MenuOption[];
  onSelect?: CallableFunction;
  isSortable?: boolean;
  verticalPosition?: string;
  loadingWidth?: string;
  loadingSkeleton?: React.ReactNode;
};

interface UserInputState {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export type { RenderCellFunction, ColumnOptions, UserInputState };

/* eslint-disable react/jsx-props-no-spreading */
import styles from './styles.module.css';

import { getCleanUpClasses } from '../../helpers/helpers';

type BoxVariant = 'outlined' | 'elevated' | 'filled';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: BoxVariant;
}

function StackedBox({ variant, className, ...restProps }: BoxProps) {
  const variantClassName = variant;

  const cssClasses = getCleanUpClasses([styles[variantClassName], className]);

  return <div className={cssClasses} {...restProps} />;
}

export default StackedBox;

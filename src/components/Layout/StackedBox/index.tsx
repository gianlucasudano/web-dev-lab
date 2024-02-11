/* eslint-disable react/jsx-props-no-spreading */
import styles from './styles.module.css';

type BoxVariant = 'outlined' | 'elevated' | 'filled';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: BoxVariant;
}

export function StackedBox({ variant, ...restProps }: BoxProps) {
  const variantClassName = `${variant}Card`;

  const cssClasses = [styles[variantClassName]]
    .filter((className) => className !== '' && className !== undefined)
    .toString()
    .replace(/,/g, ' ')
    .trim();

  return <div className={cssClasses} {...restProps} />;
}

export default StackedBox;

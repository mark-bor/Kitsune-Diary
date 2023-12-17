import clsx from 'clsx'
import styles from './styles.module.scss'
import { CheckboxProps } from './types'

export default function Checkbox({
  label,
  number,
  className,
  style,
  softOutline,
  ...otherProps
}: CheckboxProps) {
  const numLabel =
    number === 0 ? '(0)' : 
    !number ? undefined : 
    number >= 1000 ? `(${number - (number % 1000)}+)` : `(${number})`

  return (
    <label style={style} className={clsx(styles.checkLayout, className)}>
      <input
        {...otherProps}
        type="checkbox"
        className={clsx(styles.check, softOutline && styles.softOutline)}
      />
      <span className={styles.label}>{label}</span>
      <span className={styles.numLabel}>{numLabel}</span>
    </label>
  )
}

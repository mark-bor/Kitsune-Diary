import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import styles from './styles.module.scss'

type DropdownProps = {
  children: any
  items: string[]
  click: any
}

export default function Dropdown(props: DropdownProps) {
  return (
    <Menu as={'div'} className={styles.dropdown}>
      <Menu.Button className={styles.button}>
        {props.children}
      </Menu.Button>

      <Menu.Items className={styles.items}>
        {props.items.map((item, i) => (
          <button 
            key={i} 
            className={styles.item}
            onClick={() => props.click(item)}
          >{item}</button>
        ))}
      </Menu.Items>
    </Menu>
  )
}
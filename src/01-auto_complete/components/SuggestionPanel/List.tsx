import styles from './List.module.css'

interface ListProps {
  // 목록 표시할 요소 배열
  items: string[]

  // 목록 요소 클릭 이벤트
  onItemClick?: (item: string) => void
}

export const List = ({ items, onItemClick }: ListProps) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item} onClick={() => onItemClick?.(item)}>
          {item}
        </li>
      ))}
    </ul>
  )
}

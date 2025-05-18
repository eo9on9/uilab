export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
  let timer: ReturnType<typeof window.setTimeout> | undefined

  return (...args: Parameters<T>) => {
    let result
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      result = fn(...args)
    }, delay)

    return result as ReturnType<T>
  }
}

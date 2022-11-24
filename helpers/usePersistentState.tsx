import { useState, useCallback } from 'react'

/** Get a prefixed storage key. */
const getStorageKey = (key: string) => `contribute-design:persist:${key}`

/** Saves a value to the persistent storage. */
function persist<T>(key: string, value: T) {
  window?.localStorage?.setItem(getStorageKey(key), JSON.stringify(value))
}

/** Loads a value from the persistent storage. */
export function loadPersistent<T>(key: string): T | null {
  const value =
    typeof window !== `undefined`
      ? window.localStorage?.getItem(getStorageKey(key))
      : null
  try {
    return value ? JSON.parse(value) : value
  } catch {
    return null
  }
}

type updateStateFuction<T> = (previous: T) => T

/**
 * Use state that is persisted across sessions.
 *
 * State is persisted to local storage using the key
 * passed in as part of the hook.
 *
 * WARNING: If multiple calls use the same key they may not
 * receive syncronized views of the variable. If you need that
 * a context may be more appropriate (the context could, of course,
 * use this hook).
 * @param key
 * @param initialValue
 */
export function usePersistentState<T>(
  key: string,
  initialValue: T
): [T, (newState: T | updateStateFuction<T>) => void] {
  const [state, setState] = useState<T>(() => {
    const value = loadPersistent<T>(key)
    return value !== null ? value : initialValue
  })

  const setPersistentState = useCallback(
    (next: T | updateStateFuction<T>) => {
      setState((previous) => {
        const nextValue = next instanceof Function ? next(previous) : next
        persist(key, nextValue)
        return nextValue
      })
    },
    [setState, key]
  )

  return [state, setPersistentState]
}

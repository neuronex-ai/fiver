import { useSyncExternalStore } from 'react'

export type DeviceMode = 'mobile' | 'desktop'

const mobileQuery = '(max-width: 767px)'

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => undefined
  const media = window.matchMedia(mobileQuery)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}

function getSnapshot(): DeviceMode {
  if (typeof window === 'undefined') return 'desktop'
  return window.matchMedia(mobileQuery).matches ? 'mobile' : 'desktop'
}

function getServerSnapshot(): DeviceMode {
  return 'desktop'
}

export function useDeviceMode() {
  return useSyncExternalStore<DeviceMode>(subscribe, getSnapshot, getServerSnapshot)
}

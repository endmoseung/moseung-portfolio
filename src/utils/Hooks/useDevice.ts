'use client'

import { throttle } from 'lodash'
import { MOBILE_MAX, TABLET_MAX } from '../Constant/device'
import { DeviceType } from './../../types/device'
import { useEffect, useState } from 'react'
const calculateDevice = (screenWidth: number): DeviceType => {
  if (screenWidth <= MOBILE_MAX) return 'mobile'
  if (screenWidth <= TABLET_MAX) return 'tablet'
  return 'pc'
}
const useDevice = (deviceType: DeviceType) => {
  const [screenWidth, setScreenWidth] = useState(TABLET_MAX + 1)
  useEffect(() => {
    if (typeof global.window === 'undefined') return
    setScreenWidth(global.window.innerWidth)

    const handleResize = throttle(() => {
      setScreenWidth(global.window.innerWidth)
    }, 300)

    global.window.addEventListener('resize', handleResize)

    return () => {
      global.window.removeEventListener('resize', handleResize)
    }
  }, [global.window])
  const device = (device: DeviceType) => calculateDevice(screenWidth) === device
  return device(deviceType)
}
export default useDevice

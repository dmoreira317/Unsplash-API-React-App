import { useState } from 'react'

export default function useDebounce() {
  const [typingTimeout, settypingTimeout] = useState("")
  
  function Debounce(func,wait = 1000){
    clearTimeout(typingTimeout)
    const timeout = setTimeout(() => func(), wait);
    settypingTimeout(timeout)
  }
 
  return Debounce
}

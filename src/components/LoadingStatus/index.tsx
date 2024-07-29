import { useEffect, useRef } from "react"
import { MessageStyled, MessageWrapper } from "./index.style"
import { navbarHeight } from "../Navbar"
const LoadingStatus = ({ status, }: { status: string | null }) => {
  const messageComponent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messageComponent.current) {
      const { style } = messageComponent.current
      switch (status) {
        case 'success':
          setTimeout(() => {
            style.opacity = '0'
          }, 5000)
          break
        case 'error':
          style.opacity = '1'
          break
        case 'loading':
          style.opacity = '1'
          break
      }
    }
  }, [status])

  if (!status) return null
  const color = {
    success: 'green',
    error: 'red',
    loading: 'blue'
  }

  return (
    <MessageWrapper height={navbarHeight}>
      <MessageStyled ref={messageComponent} color={color[status as keyof typeof color]}>
        Status: {status}
      </MessageStyled>
    </MessageWrapper>
  )
}

export default LoadingStatus
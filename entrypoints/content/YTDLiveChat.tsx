import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Draggable } from './features/Draggable'
import { YTDLiveChatIframe } from './features/YTDLiveChatIframe'
import { YTDLiveChatSetting } from './features/YTDLiveChatSetting'
import { useYtdLiveChat } from './hooks/globalState/useYtdLiveChat'
import { useIsShow } from './hooks/watchYouTubeUI/useIsShow'

export const YTDLiveChat = () => {
  const isShow = useIsShow()
  const [ytdLiveChat] = useYtdLiveChat()
  const nodeRef = useRef(null)
  return (
    <>
      <YTDLiveChatSetting />
      <CSSTransition
        nodeRef={nodeRef}
        in={isShow && ytdLiveChat}
        timeout={500}
        classNames={{
          appear: 'opacity-0',
          appearActive: 'transition-opacity opacity-100 duration-200',
          enter: 'opacity-0',
          enterActive: 'transition-opacity opacity-100 duration-200',
          exitActive: 'transition-opacity opacity-0 duration-200',
        }}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <Draggable>
            <YTDLiveChatIframe />
          </Draggable>
        </div>
      </CSSTransition>
    </>
  )
}
// ChatPage.jsx 或 ChatPage.tsx

import React from 'react'

const ChatPage = () => {
  return (
    <div className="mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src="https://www.agenthost.ai/chat/virtual-rick?embed=true&hide_sidebar=true"
        width="100%"
        height="100%"
        style={{ 
          border: 'lightgrey 1px solid', 
          height: 'calc(100vh)',
          width: 'calc(88vw)',
          borderRadius: '20px' 
        }} 
        title="Virtual Chat"
      ></iframe>
    </div>
  )
}

export default ChatPage

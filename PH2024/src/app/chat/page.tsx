"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import loadingGIF from '@/images/loading/loading.gif';

const ChatPage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {loading && (
        <div className="loader" style={{ textAlign: 'center' }}>
        <p style={{ marginTop:"3.25rem", marginBottom: '6.25rem' }}><strong>Loading..</strong>.</p>
        <Image className="mt-12" src={loadingGIF} alt="Loading..." style={{ margin: '0 auto' }} width={32} height={32}/>
      </div>
      )}
      <iframe
        src="https://www.agenthost.ai/chat/virtual-rick?embed=true&hide_sidebar=true"
        style={{ 
          border: 'lightgrey 1px solid', 
          height: 'calc(100vh - 40px)',
          width: 'calc(88vw)',
          borderRadius: '20px',
          display: loading ? 'none' : 'block',
        }}
        onLoad={() => setLoading(false)}
        title="Virtual Chat"
      ></iframe>
    </div>
  );
};

export default ChatPage;

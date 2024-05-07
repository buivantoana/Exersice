import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const ReactPlayerTest = () => {
  
    const [currentTime, setCurrentTime] = useState(0);
    const handleVideoEnd = () => {
        console.log('Đã xem hết video!');
      };
      useEffect(() => {
        const handleBeforeUnload = () => {
          localStorage.setItem('videoCurrentTime', JSON.stringify(currentTime));
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, [currentTime]);
      
      const playerRef:any = useRef(null);

 
    return (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Pyv0tMm5i_w&t=17689s"
        onProgress={(progress:any) => {
          setCurrentTime(progress.playedSeconds);
        }}
        ref={playerRef}
        onEnded={handleVideoEnd}
        controls
        
        
      />
    );
};

export default ReactPlayerTest;

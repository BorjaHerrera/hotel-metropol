import { useEffect, useRef, useState } from 'react';
import { createAnimatable, utils } from 'animejs';
import './CustomCursor.css';
import { isClickable } from '../../utils/isClickable';

const CustomCursor = () => {
  const [cursorOpacity, setCursorOpacity] = useState(1);
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = createAnimatable(cursorRef.current, {
      x: 0,
      y: 0,
      backgroundColor: [164, 255, 79],
      ease: 'outExpo'
    });

    const handleMouseMove = (e) => {
      const x = e.clientX - cursorRef.current.offsetWidth / 2;
      const y = e.clientY - cursorRef.current.offsetHeight / 2;

      const width = window.innerWidth;
      const hw = width / 2;
      let rgb = [164, 255, 79];
      rgb[0] = utils.mapRange(x, -hw, hw, 0, 164);
      rgb[2] = utils.mapRange(x, -hw, hw, 79, 255);

      cursor.x(x, 500, 'out(2)');
      cursor.y(y, 500, 'out(3)');
      cursor.backgroundColor(rgb, 250);

      const elBelow = document.elementFromPoint(e.clientX, e.clientY);

      if (elBelow && isClickable(elBelow)) {
        setCursorOpacity(0.5);
      } else {
        setCursorOpacity(1);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        ref={cursorRef}
        className='custom-cursor'
        style={{ opacity: cursorOpacity }}
      />
    </div>
  );
};

export default CustomCursor;

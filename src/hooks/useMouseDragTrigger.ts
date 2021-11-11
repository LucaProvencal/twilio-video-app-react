import { useRef, useState } from 'react';

const useMouseDragTrigger = (onMouseUp?: VoidFunction, onMouseHold?: VoidFunction, timeout = 500) => {
  const isMouseDownRef = useRef(false);
  const [isMouseHeld, setIsMouseHeld] = useState(false);

  const handleMouseDown = () => {
    isMouseDownRef.current = true;
    setTimeout(() => {
      if (isMouseDownRef.current) {
        setIsMouseHeld(true);
        if (onMouseHold) onMouseHold();
      }
    }, timeout);
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    if (isMouseHeld) setIsMouseHeld(false);
    if (onMouseUp) onMouseUp();
  };

  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('mousedown', handleMouseDown);

  return isMouseHeld;
};

export default useMouseDragTrigger;

// this works, but responds to mouseup/down on the entire DOM.
// Rethinking the UX though, maybe best is just to trigger on rightclick or shift click
// I guess the trigger is less important than the overall UI

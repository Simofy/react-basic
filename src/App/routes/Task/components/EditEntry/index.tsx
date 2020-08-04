import React, { useContext, useCallback, useEffect, useState } from 'react';
import { LanContext } from '../../../../LanContext';

export default function EditEntry({ state }: { state: string }) {
  const {handlerList, registerListener, removeListener} = useContext(LanContext);

  const [value, setValue] = useState("");
  const handleHeaderResponse = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  useEffect(() => {
    registerListener('a', handleHeaderResponse)
    return () => {
      removeListener("a");
    }
  }, []);

  const handleClick = useCallback(() => {
    const random = Math.random() * 100;
    const handler = handlerList.find(([handlerName]) => handlerName === "headerUpdate");
    if(handler) {
      const [, handlerCall] = handler;
      handlerCall(random);
    }
  }, []);
  if (state == 'text') {
    return (
      <div
        style={{
          width: '200px',
          height: '200px',
          background: 'red',
        }}
      ></div>
    );
  }
  if (state == 'random') {
    return (
      <div
        onClick={handleClick}
        style={{
          width: '200px',
          height: '200px',
          background: 'blue',
        }}
      >{value}</div>
    );
  }
  return null;
}

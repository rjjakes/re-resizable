import * as React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  top: {
    width: '100%',
    height: '10px',
    top: '-5px',
    left: '0px',
    cursor: 'row-resize',
  },
  right: {
    width: '10px',
    height: '100%',
    top: '0px',
    right: '-5px',
    cursor: 'col-resize',
  },
  bottom: {
    width: '100%',
    height: '10px',
    bottom: '-5px',
    left: '0px',
    cursor: 'row-resize',
  },
  left: {
    width: '10px',
    height: '100%',
    top: '0px',
    left: '-5px',
    cursor: 'col-resize',
  },
  topRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    top: '-10px',
    cursor: 'ne-resize',
  },
  bottomRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    bottom: '-10px',
    cursor: 'se-resize',
  },
  bottomLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    bottom: '-10px',
    cursor: 'sw-resize',
  },
  topLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    top: '-10px',
    cursor: 'nw-resize',
  },
};

export type Direction = 'top' | 'right' | 'bottom' | 'left' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft';

export type OnStartCallback = (
  e: React.MouseEvent<HTMLDivElement>,
  dir: Direction,
) => void;

export interface Props {
  direction: Direction;
  className?: string;
  replaceStyles?: React.CSSProperties;
  onResizeStart: OnStartCallback;
  children: React.ReactNode;
}

export function Resizer(props: Props) {
  return (
    <div
      className={props.className || ''}
      style={{
        position: 'absolute',
        userSelect: 'none',
        ...styles[props.direction],
        ...(props.replaceStyles || {}),
      }}
      onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
        props.onResizeStart(e, props.direction);
      }}
    >
      {props.children}
    </div>
  );
}

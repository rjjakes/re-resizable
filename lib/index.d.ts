import * as React from 'react';
import { Direction } from './resizer';
export declare type ResizeDirection = Direction;
export interface Enable {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    topRight?: boolean;
    bottomRight?: boolean;
    bottomLeft?: boolean;
    topLeft?: boolean;
}
export interface HandleStyles {
    top?: React.CSSProperties;
    right?: React.CSSProperties;
    bottom?: React.CSSProperties;
    left?: React.CSSProperties;
    topRight?: React.CSSProperties;
    bottomRight?: React.CSSProperties;
    bottomLeft?: React.CSSProperties;
    topLeft?: React.CSSProperties;
}
export interface HandleClassName {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    topRight?: string;
    bottomRight?: string;
    bottomLeft?: string;
    topLeft?: string;
}
export interface Size {
    width: string | number;
    height: string | number;
}
interface NumberSize {
    width: number;
    height: number;
}
export interface HandleComponent {
    top?: React.ReactElement<any>;
    right?: React.ReactElement<any>;
    bottom?: React.ReactElement<any>;
    left?: React.ReactElement<any>;
    topRight?: React.ReactElement<any>;
    bottomRight?: React.ReactElement<any>;
    bottomLeft?: React.ReactElement<any>;
    topLeft?: React.ReactElement<any>;
}
export declare type ResizeCallback = (event: MouseEvent, direction: Direction, elementRef: HTMLDivElement, delta: NumberSize) => void;
export declare type ResizeStartCallback = (e: React.MouseEvent<HTMLDivElement>, dir: Direction, elementRef: HTMLDivElement) => void;
export interface ResizableProps {
    style?: React.CSSProperties;
    className?: string;
    grid?: [number, number];
    snap?: {
        x?: number[];
        y?: number[];
    };
    snapGap?: number;
    bounds?: 'parent' | 'window' | HTMLElement;
    size?: Size;
    minWidth?: string | number;
    minHeight?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    lockAspectRatio?: boolean | number;
    lockAspectRatioExtraWidth?: number;
    lockAspectRatioExtraHeight?: number;
    enable?: Enable;
    handleStyles?: HandleStyles;
    handleClasses?: HandleClassName;
    handleWrapperStyle?: React.CSSProperties;
    handleWrapperClass?: string;
    handleComponent?: HandleComponent;
    children?: React.ReactNode;
    onResizeStart?: ResizeStartCallback;
    onResize?: ResizeCallback;
    onResizeStop?: ResizeCallback;
    defaultSize?: Size;
    scale?: number;
    resizeRatio?: number;
}
interface State {
    isResizing: boolean;
    resizeCursor: string;
    direction: Direction;
    original: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    width: number | string;
    height: number | string;
}
export declare class Resizable extends React.Component<ResizableProps, State> {
    readonly parentNode: HTMLElement | null;
    readonly propsSize: Size;
    readonly base: HTMLElement | undefined;
    readonly size: NumberSize;
    readonly sizeStyle: {
        width: string;
        height: string;
    };
    static defaultProps: {
        onResizeStart: () => void;
        onResize: () => void;
        onResizeStop: () => void;
        enable: {
            top: boolean;
            right: boolean;
            bottom: boolean;
            left: boolean;
            topRight: boolean;
            bottomRight: boolean;
            bottomLeft: boolean;
            topLeft: boolean;
        };
        style: {};
        grid: number[];
        lockAspectRatio: boolean;
        lockAspectRatioExtraWidth: number;
        lockAspectRatioExtraHeight: number;
        scale: number;
        resizeRatio: number;
        snapGap: number;
    };
    ratio: number;
    resizable: HTMLDivElement | null;
    extendsProps: {
        [key: string]: React.HTMLProps<'div'>;
    };
    parentLeft: number;
    parentTop: number;
    resizableLeft: number;
    resizableTop: number;
    targetLeft: number;
    targetTop: number;
    constructor(props: ResizableProps);
    updateExtendsProps(props: ResizableProps): void;
    getParentSize(): {
        width: number;
        height: number;
    };
    componentDidMount(): void;
    componentWillReceiveProps(next: ResizableProps): void;
    componentWillUnmount(): void;
    createSizeForCssProperty(newSize: number | string, kind: 'width' | 'height'): number | string;
    calculateNewMaxFromBoundary(maxWidth?: number, maxHeight?: number): {
        maxWidth: number | undefined;
        maxHeight: number | undefined;
    };
    calculateNewSizeFromDirection(clientX: number, clientY: number): {
        newWidth: number;
        newHeight: number;
    };
    calculateNewSizeFromAspectRatio(newWidth: number, newHeight: number, max: {
        width?: number;
        height?: number;
    }, min: {
        width?: number;
        height?: number;
    }): {
        newWidth: number;
        newHeight: number;
    };
    setBoundingClientRect(): void;
    onResizeStart(event: React.MouseEvent<HTMLDivElement>, direction: Direction): void;
    onMouseMove(event: MouseEvent): void;
    onMouseUp(event: MouseEvent): void;
    updateSize(size: Size): void;
    renderResizer(): JSX.Element | null;
    render(): JSX.Element;
}
export {};

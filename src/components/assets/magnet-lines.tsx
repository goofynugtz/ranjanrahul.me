import React, { useRef, useEffect, CSSProperties } from 'react';
import styles from '../../styles/magnet-lines.module.css';

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: CSSProperties;
}

const MagnetLines: React.FC<MagnetLinesProps> = ({
  rows = 9,
  columns = 9,
  containerSize = '80vmin',
  lineColor,
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLSpanElement>('span'));

    // Rotation around each span's own center leaves its center point fixed,
    // so centers only need recomputing on layout changes, not every pointer move.
    let centers: { el: HTMLSpanElement; x: number; y: number }[] = [];
    const measure = () => {
      centers = items.map(el => {
        const rect = el.getBoundingClientRect();
        return { el, x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
      });
    };
    measure();

    const applyRotation = (pointer: { x: number; y: number }) => {
      centers.forEach(({ el, x: centerX, y: centerY }) => {
        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        el.style.setProperty('--rotate', `${r}deg`);
      });
    };

    let rafId: number | null = null;
    let lastPointer = { x: 0, y: 0 };

    const handlePointerMove = (e: PointerEvent) => {
      lastPointer = { x: e.x, y: e.y };
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          applyRotation(lastPointer);
          rafId = null;
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', measure);

    if (centers.length) {
      const middleIndex = Math.floor(centers.length / 2);
      applyRotation(centers[middleIndex]);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', measure);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={
        {
          '--rotate': `${baseAngle}deg`,
          '--magnet-line-color': lineColor,
          width: lineWidth,
          height: lineHeight
        } as CSSProperties
      }
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`${styles['magnetLines-container']} ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        '--columns': columns,
        '--rows': rows,
        ...style
      } as CSSProperties}
    >
      {spans}
    </div>
  );
};

export default MagnetLines;

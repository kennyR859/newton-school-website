'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface FloatingItem {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  rotation: number;
  icon: string;
  delay: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
}

interface FloatingShapesProps {
  count?: number;
  className?: string;
}

// 교육 관련 아이콘들
const ICONS = ['📚', '✏️', '🎓', '💡', '⭐', '🔬', '📐', '🧮', '✨', '🎯', '🏆', '📝'];

const FLEE_DISTANCE = 180;  // 더 넓은 범위
const FLEE_FORCE = 0.8;     // 더 강하게 밀어내기
const FRICTION = 0.92;      // 더 부드럽게
const RETURN_FORCE = 0.015; // 더 빠르게 복귀

export function FloatingShapes({ count = 16, className = '' }: FloatingShapesProps) {
  const [items, setItems] = useState<FloatingItem[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // 초기화
  useEffect(() => {
    const initialItems: FloatingItem[] = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      initialItems.push({
        id: i,
        x, y,
        baseX: x,
        baseY: y,
        size: Math.random() * 16 + 20,
        rotation: Math.random() * 20 - 10,
        icon: ICONS[Math.floor(Math.random() * ICONS.length)],
        delay: Math.random() * 2,
        opacity: Math.random() * 0.3 + 0.4,
        velocityX: 0,
        velocityY: 0,
      });
    }
    setItems(initialItems);
  }, [count]);

  // 전역 마우스 이벤트 (document level)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // 컨테이너 영역 내에 있을 때만
      if (e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom) {
        mouseRef.current = {
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        };
      } else {
        mouseRef.current = { x: -1000, y: -1000 };
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 물리 기반 애니메이션
  useEffect(() => {
    const animate = () => {
      setItems(prev => prev.map(item => {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        const dx = item.x - mx;
        const dy = item.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let vx = item.velocityX;
        let vy = item.velocityY;

        // 커서 근처면 밀어내기
        if (dist < FLEE_DISTANCE && dist > 0) {
          const force = (FLEE_DISTANCE - dist) / FLEE_DISTANCE * FLEE_FORCE;
          vx += (dx / dist) * force;
          vy += (dy / dist) * force;
        }

        // 원위치로 돌아가려는 힘
        vx += (item.baseX - item.x) * RETURN_FORCE;
        vy += (item.baseY - item.y) * RETURN_FORCE;

        // 마찰
        vx *= FRICTION;
        vy *= FRICTION;

        // 위치 업데이트
        let newX = item.x + vx;
        let newY = item.y + vy;

        // 경계
        newX = Math.max(-5, Math.min(105, newX));
        newY = Math.max(-5, Math.min(105, newY));

        return { ...item, x: newX, y: newY, velocityX: vx, velocityY: vy };
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {items.map(item => (
        <motion.div
          key={item.id}
          className="absolute select-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: item.opacity, scale: 1 }}
          transition={{ duration: 0.8, delay: item.delay * 0.2 }}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: item.size,
            transform: `translate(-50%, -50%)`,
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
          }}
        >
          <motion.span
            className="block"
            animate={{
              y: [0, -6, 0, 6, 0],
              rotate: [item.rotation, item.rotation + 8, item.rotation, item.rotation - 8, item.rotation],
            }}
            transition={{ duration: 5 + item.delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            {item.icon}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

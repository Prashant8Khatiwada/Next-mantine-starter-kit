import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInProps {
    children: ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down';
    delay?: number;
    duration?: number;
    className?: string;
}

const directionOffsets = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: -50 },
    down: { x: 0, y: 50 },
};

export function SlideIn({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    className
}: SlideInProps) {
    const offset = directionOffsets[direction];

    return (
        <motion.div
            initial={{ opacity: 0, ...offset }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

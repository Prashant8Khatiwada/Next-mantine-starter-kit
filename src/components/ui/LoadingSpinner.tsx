import React from 'react';
import { Loader } from '@mantine/core';

interface LoadingSpinnerProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    message?: string;
    className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = 'lg',
    message,
    className = '',
}) => {
    return (
        <div className={`text-center py-12 ${className}`}>
            <Loader size={size} className="mx-auto" />
            {message && (
                <p className="mt-5 text-xl font-medium text-gray-500">{message}</p>
            )}
        </div>
    );
};

export default LoadingSpinner;

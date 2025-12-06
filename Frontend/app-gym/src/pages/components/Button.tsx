'use client'

import React from 'react';

const buttonVariants = {
    default: 'bg-indigo-500 text-white',
    primary: 'bg-indigo-500 text-white',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'default';
}

export default function Button({ className = '', children, variant = 'primary', ...props }: ButtonProps) {
    return (
        <button
            className={
                `
                    px-4 py-2 rounded 
                    ${buttonVariants[variant]}
                    ${className}
                `
            }
            {...props}
        >
            {children}
        </button>
    )
}
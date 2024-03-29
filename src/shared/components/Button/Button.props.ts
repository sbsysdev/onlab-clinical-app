// react
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
// types
import { Slot, StyleStrategy } from '@/shared/types';

export interface ButtonProps
    extends Omit<
        DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
        'children' | 'ref'
    > {
    styleStrategy?: StyleStrategy;
    children?: Slot;
    hasError?: boolean;
}

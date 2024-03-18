export type TScreenLabel = 'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS';

export type TScreen = {
    label: TScreenLabel;
    queries: {
        minWidth: number;
        maxWidth: number;
        minHeight: number;
        maxHeight: number;
    };
};

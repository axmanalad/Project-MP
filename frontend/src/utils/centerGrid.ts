export const centerGrid = (count: number) => {
    if (count === 1) return 'grid-cols-1 max-w-sm mx-auto';
    if (count === 2) return 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto';
    if (count === 3) return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto';
    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
};
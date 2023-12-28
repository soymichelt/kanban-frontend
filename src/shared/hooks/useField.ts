import { useState } from 'react';

export const useField = (defaultValue?: string) => {
    const [value, setValue] = useState<string | undefined>(defaultValue);

    const onChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValue(e.currentTarget.value);
    };
    const reset = () => setValue(defaultValue);
    const isEmpty = () => !value;

    return {
        value,
        onChange,
        reset,
        isEmpty,
    };
};

import { useState } from 'react';

export const useField = (defaultValue?: string) => {
    const [value, setValue] = useState<string | undefined>(defaultValue);

    const onChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.currentTarget.value);
    };
    const reset = () => setValue(defaultValue);

    return {
        value,
        onChange,
        reset,
    };
};

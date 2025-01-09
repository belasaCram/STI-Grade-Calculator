import { forwardRef, useState } from 'react';
import { NumericFormat } from 'react-number-format';

const CustomInput = forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
    <input
        {...props}
        ref={ref}
        className="w-full text-center border-none outline-none"
    />
));

interface NumberFormatInputProps {
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    min?: number;
    max?: number;
}

const NumberFormatInput: React.FC<NumberFormatInputProps> = ({
    value: controlledValue,
    onValueChange,
    placeholder = "0.00",
    min = 5,
    max = 100,
}) => {
    const [localValue, setLocalValue] = useState<string>(controlledValue || "");

    const handleValueChange = (values: {
        value: string;
        floatValue: number | undefined;
    }) => {
        const { value } = values;
        const isValid =
            value === "" ||
            (parseFloat(value) >= min && parseFloat(value) <= max) ||
            value.length <= 5;

        if (isValid) {
            if (onValueChange) {
                onValueChange(value); 
            } else {
                setLocalValue(value); 
            }
        } else {
            if (onValueChange) {
                onValueChange(""); 
            } else {
                setLocalValue(""); 
            }
        }
    };

    return (
        <NumericFormat
            value={controlledValue ?? localValue}
            decimalScale={2}
            fixedDecimalScale={true}
            allowNegative={false}
            customInput={CustomInput}
            placeholder={placeholder}
            onValueChange={handleValueChange}
        />
    );
};


export default NumberFormatInput;
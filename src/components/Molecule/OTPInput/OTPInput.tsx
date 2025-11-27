import { Section } from '@components/Atom/Section';
import type { ChangeEvent, ClipboardEvent, KeyboardEvent } from 'react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { nextButtonStyles, otpInputStyles } from './style';
import type { OTPInputProps } from './type';

export const OTPInput = ({
  length = 6,
  onChange,
  className = '',
  variant = 'desktop',
}: OTPInputProps): React.ReactElement => {
  const [otp, setOtp] = useState<string[]>(() =>
    Array.from({ length: Math.max(1, Math.min(10, length)) }, () => ''),
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const safeLength = Math.max(1, Math.min(10, length));
    inputRefs.current = inputRefs.current.slice(0, safeLength);
    const firstInput = inputRefs.current[0];
    if (firstInput?.focus) {
      requestAnimationFrame(() => firstInput.focus());
    }
  }, [length]);

  const updateOtpValue = useCallback(
    (index: number, value: string) => {
      if (index < 0 || index >= length) return otp;
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      onChange(newOtp.join(''));
      return newOtp;
    },
    [length, otp, onChange],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const { value } = e.target;
      if (!/^\d?$/.test(value)) return; // allow empty or single digit

      // Update the OTP value using the updateOtpValue function
      updateOtpValue(index, value);

      // Auto-focus to next input if a digit was entered and not at the last input
      if (value && index < length - 1) {
        const nextInput = inputRefs.current[index + 1];
        requestAnimationFrame(() => {
          nextInput?.focus();
          nextInput?.select();
        });
      }
    },
    [length, updateOtpValue],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      const { key } = e;
      switch (key) {
        case 'Backspace':
          if (!otp[index] && index > 0) {
            e.preventDefault();
            inputRefs.current[index - 1]?.focus();
          }
          break;
        case 'ArrowLeft': {
          const input = e.currentTarget;
          if (input.selectionStart === 0 && index > 0) {
            e.preventDefault();
            inputRefs.current[index - 1]?.focus();
          }
          break;
        }
        case 'ArrowRight': {
          const input = e.currentTarget;
          if (input.selectionStart === input.value.length && index < length - 1) {
            e.preventDefault();
            inputRefs.current[index + 1]?.focus();
          }
          break;
        }

        case 'ArrowUp':
        case 'ArrowDown':
          e.preventDefault();
          break;
        default:
          // For number keys, move to next input after typing
          if (/^\d$/.test(key) && index < length - 1) {
            // Use setTimeout to ensure the value is updated before moving focus
            setTimeout(() => {
              inputRefs.current[index + 1]?.focus();
            }, 0);
          }
      }
    },
    [length, otp],
  );

  const handlePaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasteData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, length);
      if (!pasteData) return;
      pasteData.split('').forEach((digit, i) => updateOtpValue(i, digit));
      const nextFocusIndex = Math.min(pasteData.length, length - 1);
      requestAnimationFrame(() => inputRefs.current[nextFocusIndex]?.focus());
    },
    [length, updateOtpValue],
  );

  const handleNextClick = useCallback(
    (index: number) => {
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [length],
  );

  const renderInputs = useMemo(
    () =>
      Array.from({ length }, (_, index) => (
        <div key={index} className="relative">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={otp[index]}
            aria-label={`Digit ${index + 1} of ${length}`}
            className={otpInputStyles({ variant })}
            data-testid={`otp-input-${index}`}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
          />
          {index < length - 1 && (
            <button
              type="button"
              className={nextButtonStyles}
              onClick={() => handleNextClick(index)}
              aria-label="Next input"
            >
              Next
            </button>
          )}
        </div>
      )),
    [length, otp, handleChange, handleKeyDown, handlePaste, handleNextClick, variant],
  );

  return (
    <Section className={className}>
      <fieldset className="m-0 flex w-full justify-center gap-2 border-none p-0">{renderInputs}</fieldset>
    </Section>
  );
};

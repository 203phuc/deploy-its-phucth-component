import type { ChangeEvent, ClipboardEvent, KeyboardEvent } from 'react';

export type OTPVariant = 'mobile' | 'desktop';

export interface OTPInputProps {
  /** Number of OTP digits (default: 6) */
  readonly length?: number;
  /** Callback triggered when OTP value changes */
  readonly onChange: (otp: string) => void;
  /** Additional CSS class names */
  readonly className?: string;
  /** Variant of the OTP input - controls the size */
  readonly variant?: OTPVariant;
}

/**
 * Parameters for handling OTP input change events
 * @property {ChangeEvent<HTMLInputElement>} e - The change event from the input
 * @property {number} index - The index of the current input field
 * @property {string[]} otp - Array containing current OTP values
 * @property {(value: string[]) => void} setOtp - Function to update OTP values
 * @property {(otp: string) => void} onChange - Callback when OTP changes
 */
export interface OTPInputHandleChangeParams {
  e: ChangeEvent<HTMLInputElement>;
  index: number;
  otp: string[];
  setOtp: (value: string[]) => void;
  onChange: (otp: string) => void;
}

/**
 * Parameters for handling keyboard events in OTP input
 * @property {KeyboardEvent<HTMLInputElement>} e - The keyboard event
 * @property {number} index - The index of the current input field
 * @property {string[]} otp - Array containing current OTP values
 * @property {number} length - Total number of OTP digits
 * @property {React.RefObject<HTMLInputElement>[]} inputRefs - Array of refs to input elements
 */
export interface OTPInputHandleKeyDownParams {
  e: KeyboardEvent<HTMLInputElement>;
  index: number;
  otp: string[];
  length: number;
  inputRefs: React.RefObject<HTMLInputElement>[];
}

/**
 * Parameters for handling paste events in OTP input
 * @property {ClipboardEvent<HTMLInputElement>} e - The clipboard event
 * @property {number} length - Total number of OTP digits
 * @property {(index: number, value: string) => void} updateOtpValue - Function to update OTP value at specific index
 * @property {React.RefObject<HTMLInputElement>[]} inputRefs - Array of refs to input elements
 */
export interface OTPInputHandlePasteParams {
  e: ClipboardEvent<HTMLInputElement>;
  length: number;
  updateOtpValue: (index: number, value: string) => void;
  inputRefs: React.RefObject<HTMLInputElement>[];
}

/**
 * Parameters for rendering OTP input fields
 * @property {number} length - Total number of OTP digits
 * @property {string[]} otp - Array containing current OTP values
 * @property {(e: ChangeEvent<HTMLInputElement>, index: number) => void} handleChange - Handler for input change events
 * @property {(e: KeyboardEvent<HTMLInputElement>, index: number) => void} handleKeyDown - Handler for keyboard events
 * @property {(e: ClipboardEvent<HTMLInputElement>) => void} handlePaste - Handler for paste events
 * @property {React.RefObject<HTMLInputElement>[]} inputRefs - Array of refs to input elements
 */
export interface OTPInputRenderInputsParams {
  length: number;
  otp: string[];
  handleChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>, index: number) => void;
  handlePaste: (e: ClipboardEvent<HTMLInputElement>) => void;
  inputRefs: React.RefObject<HTMLInputElement>[];
}

import { useEffect, useState } from 'react';
import { labelCva, labelSpanCva, timeBlockCva, titleCva } from './style';
import { TimerProps } from './type';

// Define time constants (self-documenting)
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = ({ endDate, start, label, mobile, labelSpan, textColor, ...props }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!endDate || !start) return;

    const [day, month, year] = endDate.split('/').map(Number);
    const end = new Date(year, month - 1, day).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = end - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / DAY),
          hours: Math.floor((distance % DAY) / HOUR),
          minutes: Math.floor((distance % HOUR) / MINUTE),
          seconds: Math.floor((distance % MINUTE) / SECOND),
        });
      }
    }, SECOND);

    return () => clearInterval(interval);
  }, [endDate, start]);

  return (
    <div className="flex h-fit w-fit flex-col gap-[12px]" {...props}>
      <div className={labelCva({ mobile, textColor })}>
        {label}
        <span className={labelSpanCva({ mobile })}>{labelSpan}</span>
      </div>
      <div className="flex gap-[16px] text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center ${mobile ?? 'gap-[2px]'}`}
          >
            <span className={timeBlockCva({ mobile })}>{String(item.value).padStart(2, '0')}</span>
            <span className={titleCva({ mobile })}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timer;

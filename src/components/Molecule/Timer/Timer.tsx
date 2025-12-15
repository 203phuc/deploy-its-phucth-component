import { useEffect, useState } from 'react';
import { cn } from 'src/util/tailwindClass';
import { labelCva, labelSpanCva, timeBlockCva, titleCva } from './style';
import { TimerProps } from './type';

// Define time constants (self-documenting)
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = ({
  endDate,
  start,
  label,
  size,
  round = 'pill',
  labelSpan,
  textColor = 'black',
  ...props
}: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const units = ['d', 'h', 'm', 's'];

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
    <div className="flex h-fit w-fit flex-col gap-3" {...props}>
      <div
        className={labelCva({
          mobile: size?.toLowerCase().includes('mobile'),
          textColor: textColor!,
        })}
        style={size ? { width: '343px' } : { width: '360px' }}
      >
        {label}
        <span className={labelSpanCva({ mobile: size?.toLowerCase().includes('mobile') })}>{labelSpan}</span>
      </div>
      {
        <div className={cn('flex text-center', size === 'desktop' || size == 'mobile' ? '' : 'gap-4')}>
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index, arr) => (
            <div
              key={item.label}
              className={
                size?.toLowerCase().includes('mobile')
                  ? 'flex flex-col items-center justify-center gap-0.5'
                  : 'flex flex-col items-center justify-center'
              }
            >
              {size === 'desktop' || size === 'mobile' ? (
                <span className={timeBlockCva({ size, round })}>
                  {index > 0 && '\u00A0'}
                  {String(item.value).padStart(2, '0')}
                  {units[index]}
                  {index < arr.length - 1 && <>{'\u00A0'}:</>}
                </span>
              ) : (
                <>
                  <span className={timeBlockCva({ size, round })}>{String(item.value).padStart(2, '0')}</span>
                  <span className={titleCva({ mobile: size?.toLowerCase().includes('mobile') })}>
                    {item.label}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Timer;

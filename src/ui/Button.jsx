import { cn } from '../utils/cn';

export default function Button({ btnType = 'default', className, children }) {
  return (
    <button
      className={cn(
        'whitespace-nowrap items-center font-sans text-xl rounded-4xl font-bold px-14 py-4 transition-all duration-200',
        btnType === 'primary'
          ? 'bg-[rgba(101,228,163,1)] text-[rgba(10,38,64,1)] hover:bg-[rgba(80,200,140,1)]'
          : btnType === 'outline'
          ? 'bg-transparent text-[rgba(255,255,255,1)] border-2'
          : 'bg-[rgba(10,38,64,1)] text-[rgba(255,255,255,1)] hover:bg-[rgba(10,38,64,1)]/90',
        className
      )}
    >
      {children}
    </button>
  );
}
// src/components/decor/Keyboard3D.tsx
type Props = {
  size?: number;
  rotate?: number;
  className?: string;
};

export function Keyboard3D({ size = 300, rotate = 0, className = "" }: Props) {
  return (
    <div
      style={{
        width: size,
        height: size * 0.6,
        transform: `rotate(${rotate}deg)`,
      }}
      className={`inline-block ${className}`}
    >
      <svg
        viewBox="0 0 320 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        <defs>
          {/* Gradient for keyboard body */}
          <linearGradient id="keyboardGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8F4FC" />
            <stop offset="100%" stopColor="#B8D4E8" />
          </linearGradient>
          
          {/* Gradient for keys */}
          <linearGradient id="keyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0F4F8" />
            <stop offset="100%" stopColor="#D0D8E0" />
          </linearGradient>
          
          {/* Yellow key gradient */}
          <linearGradient id="yellowKey" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE66D" />
            <stop offset="100%" stopColor="#FFD93D" />
          </linearGradient>
          
          {/* Pink key gradient */}
          <linearGradient id="pinkKey" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFB3C6" />
            <stop offset="100%" stopColor="#FF8BA0" />
          </linearGradient>
          
          {/* Cyan key gradient */}
          <linearGradient id="cyanKey" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A0E8FF" />
            <stop offset="100%" stopColor="#7DD3E8" />
          </linearGradient>
        </defs>
        
        {/* Keyboard shadow/depth */}
        <rect
          x="18"
          y="38"
          width="285"
          height="148"
          rx="10"
          fill="#7A9BB8"
          opacity="0.4"
        />
        
        {/* Main keyboard body */}
        <rect
          x="15"
          y="30"
          width="285"
          height="145"
          rx="10"
          fill="url(#keyboardGradient)"
          stroke="#9BBAD4"
          strokeWidth="1"
        />
        
        {/* Top edge shine */}
        <rect
          x="15"
          y="30"
          width="285"
          height="20"
          rx="10"
          fill="white"
          opacity="0.3"
        />
        
        {/* Inner keyboard area */}
        <rect
          x="25"
          y="45"
          width="265"
          height="120"
          rx="6"
          fill="#A0B8D0"
        />
        
        {/* Keys area background */}
        <rect
          x="30"
          y="50"
          width="255"
          height="110"
          rx="4"
          fill="#8FA8C0"
        />
        
        {/* Row 1 - Top row with special keys */}
        {/* Yellow ESC key */}
        <rect x="40" y="58" width="14" height="13" rx="2" fill="url(#yellowKey)" />
        <rect x="40" y="58" width="14" height="2" rx="1" fill="white" opacity="0.5" />
        
        {/* Function keys */}
        {Array.from({ length: 13 }).map((_, i) => (
          <g key={`row1-${i}`}>
            <rect
              x={62 + i * 16}
              y="58"
              width="14"
              height="13"
              rx="2"
              fill="url(#keyGradient)"
            />
            <rect
              x={62 + i * 16}
              y="58"
              width="14"
              height="2"
              rx="1"
              fill="white"
              opacity="0.4"
            />
          </g>
        ))}
        
        {/* Pink delete key */}
        <rect x="265" y="58" width="14" height="13" rx="2" fill="url(#pinkKey)" />
        <rect x="265" y="58" width="14" height="2" rx="1" fill="white" opacity="0.5" />
        
        {/* Row 2 - Number row */}
        {Array.from({ length: 14 }).map((_, i) => (
          <g key={`row2-${i}`}>
            <rect
              x={40 + i * 16}
              y="76"
              width="14"
              height="13"
              rx="2"
              fill="url(#keyGradient)"
            />
            <rect
              x={40 + i * 16}
              y="76"
              width="14"
              height="2"
              rx="1"
              fill="white"
              opacity="0.4"
            />
          </g>
        ))}
        
        {/* Cyan backspace */}
        <rect x="265" y="76" width="14" height="13" rx="2" fill="url(#cyanKey)" />
        <rect x="265" y="76" width="14" height="2" rx="1" fill="white" opacity="0.5" />
        
        {/* Row 3 - QWERTY row */}
        {/* Tab key */}
        <rect x="40" y="94" width="20" height="13" rx="2" fill="url(#keyGradient)" />
        <rect x="40" y="94" width="20" height="2" rx="1" fill="white" opacity="0.4" />
        
        {Array.from({ length: 11 }).map((_, i) => (
          <g key={`row3-${i}`}>
            <rect
              x={66 + i * 16}
              y="94"
              width="14"
              height="13"
              rx="2"
              fill="url(#keyGradient)"
            />
            <rect
              x={66 + i * 16}
              y="94"
              width="14"
              height="2"
              rx="1"
              fill="white"
              opacity="0.4"
            />
          </g>
        ))}
        
        {/* Yellow Enter key */}
        <rect x="242" y="94" width="37" height="13" rx="2" fill="url(#yellowKey)" />
        <rect x="242" y="94" width="37" height="2" rx="1" fill="white" opacity="0.5" />
        
        {/* Row 4 - ASDF row */}
        {/* Caps Lock */}
        <rect x="40" y="112" width="24" height="13" rx="2" fill="url(#keyGradient)" />
        <rect x="40" y="112" width="24" height="2" rx="1" fill="white" opacity="0.4" />
        
        {Array.from({ length: 10 }).map((_, i) => (
          <g key={`row4-${i}`}>
            <rect
              x={70 + i * 16}
              y="112"
              width="14"
              height="13"
              rx="2"
              fill="url(#keyGradient)"
            />
            <rect
              x={70 + i * 16}
              y="112"
              width="14"
              height="2"
              rx="1"
              fill="white"
              opacity="0.4"
            />
          </g>
        ))}
        
        {/* Pink Shift key */}
        <rect x="230" y="112" width="49" height="13" rx="2" fill="url(#pinkKey)" />
        <rect x="230" y="112" width="49" height="2" rx="1" fill="white" opacity="0.5" />
        
        {/* Row 5 - Bottom row with spacebar */}
        {/* Ctrl */}
        <rect x="40" y="130" width="20" height="13" rx="2" fill="url(#keyGradient)" />
        <rect x="40" y="130" width="20" height="2" rx="1" fill="white" opacity="0.4" />
        
        {/* Win */}
        <rect x="66" y="130" width="18" height="13" rx="2" fill="url(#keyGradient)" />
        <rect x="66" y="130" width="18" height="2" rx="1" fill="white" opacity="0.4" />
        
        {/* Alt */}
        <rect x="90" y="130" width="18" height="13" rx="2" fill="url(#keyGradient)" />
        <rect x="90" y="130" width="18" height="2" rx="1" fill="white" opacity="0.4" />
        
        {/* Spacebar - Large */}
        <rect x="114" y="130" width="90" height="13" rx="2" fill="#F8FCFF" />
        <rect x="114" y="130" width="90" height="2" rx="1" fill="white" opacity="0.6" />
        <rect x="114" y="140" width="90" height="2" rx="1" fill="#B0C0D0" opacity="0.4" />
        
        {/* Alt Gr */}
        <rect x="210" y="130" width="18" height="13" rx="2" fill="url(#keyGradient)" />
        <rect x="210" y="130" width="18" height="2" rx="1" fill="white" opacity="0.4" />
        
        {/* Fn */}
        <rect x="234" y="130" width="18" height="13" rx="2" fill="url(#keyGradient)" />
        <rect x="234" y="130" width="18" height="2" rx="1" fill="white" opacity="0.4" />
        
        {/* Cyan Arrow keys */}
        <rect x="258" y="130" width="14" height="13" rx="2" fill="url(#cyanKey)" />
        <rect x="258" y="130" width="14" height="2" rx="1" fill="white" opacity="0.5" />
        
        {/* Bottom shadow/depth */}
        <ellipse
          cx="160"
          cy="175"
          rx="130"
          ry="8"
          fill="#5A7B98"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

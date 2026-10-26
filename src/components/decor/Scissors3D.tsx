// src/components/decor/Scissors3D.tsx
type Props = {
  size?: number;
  rotate?: number;
  className?: string;
};

export function Scissors3D({ size = 120, rotate = 0, className = "" }: Props) {
  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Shadow */}
        <ellipse
          cx="62"
          cy="110"
          rx="35"
          ry="6"
          fill="#000"
          opacity="0.15"
        />
        
        {/* Right blade - dark gray */}
        <path
          d="M 60 45 L 95 15 L 98 18 L 63 48 Z"
          fill="#7A8B99"
        />
        
        {/* Right blade - light gray top */}
        <path
          d="M 60 45 L 95 15 L 96 16 L 61 46 Z"
          fill="#A8B8C8"
        />
        
        {/* Right blade edge shine */}
        <path
          d="M 62 46 L 96 17"
          stroke="#D4E0E8"
          strokeWidth="1.5"
          opacity="0.7"
        />
        
        {/* Left blade - dark gray */}
        <path
          d="M 60 45 L 25 15 L 22 18 L 57 48 Z"
          fill="#7A8B99"
        />
        
        {/* Left blade - light gray top */}
        <path
          d="M 60 45 L 25 15 L 24 16 L 59 46 Z"
          fill="#A8B8C8"
        />
        
        {/* Left blade edge shine */}
        <path
          d="M 58 46 L 24 17"
          stroke="#D4E0E8"
          strokeWidth="1.5"
          opacity="0.7"
        />
        
        {/* Center screw/rivet - dark */}
        <circle cx="60" cy="45" r="6" fill="#5A6B79" />
        
        {/* Center screw/rivet - medium */}
        <circle cx="60" cy="45" r="5" fill="#6A7B89" />
        
        {/* Center screw shine */}
        <circle cx="58" cy="43" r="2" fill="#9AABB9" opacity="0.8" />
        
        {/* Pink/Red rivet center */}
        <circle cx="60" cy="45" r="2.5" fill="#E85D75" />
        <circle cx="59" cy="44" r="1" fill="#FF8BA0" />
        
        {/* Right handle - blue shadow */}
        <circle cx="95" cy="85" r="22" fill="#4A7B9D" opacity="0.3" />
        
        {/* Right handle - main blue */}
        <circle cx="93" cy="83" r="20" fill="#5A9BCF" />
        
        {/* Right handle - light blue */}
        <circle cx="93" cy="83" r="18" fill="#7BB8E8" />
        
        {/* Right handle inner hole shadow */}
        <ellipse cx="94" cy="84" rx="9" ry="10" fill="#3A6B8D" />
        
        {/* Right handle inner hole */}
        <ellipse cx="93" cy="83" rx="8" ry="9" fill="#E8F4FC" opacity="0.3" />
        
        {/* Right handle shine */}
        <ellipse
          cx="90"
          cy="78"
          rx="8"
          ry="6"
          fill="white"
          opacity="0.5"
        />
        
        {/* Right handle arm - connecting to center */}
        <path
          d="M 82 72 Q 70 58, 60 45"
          stroke="#5A9BCF"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 82 72 Q 70 58, 60 45"
          stroke="#7BB8E8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Left handle - blue shadow */}
        <circle cx="27" cy="85" r="22" fill="#4A7B9D" opacity="0.3" />
        
        {/* Left handle - main blue */}
        <circle cx="25" cy="83" r="20" fill="#5A9BCF" />
        
        {/* Left handle - light blue */}
        <circle cx="25" cy="83" r="18" fill="#7BB8E8" />
        
        {/* Left handle inner hole shadow */}
        <ellipse cx="26" cy="84" rx="9" ry="10" fill="#3A6B8D" />
        
        {/* Left handle inner hole */}
        <ellipse cx="25" cy="83" rx="8" ry="9" fill="#E8F4FC" opacity="0.3" />
        
        {/* Left handle shine */}
        <ellipse
          cx="22"
          cy="78"
          rx="8"
          ry="6"
          fill="white"
          opacity="0.5"
        />
        
        {/* Left handle arm - connecting to center */}
        <path
          d="M 38 72 Q 50 58, 60 45"
          stroke="#5A9BCF"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 38 72 Q 50 58, 60 45"
          stroke="#7BB8E8"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

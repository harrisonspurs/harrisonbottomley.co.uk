import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit">("loading");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startTime = useRef(Date.now());

  // Matrix rain effect on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 14);
    const drops: number[] = new Array(columns).fill(1);
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(99, 102, 241, 0.15)";
      ctx.font = "12px JetBrains Mono, monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 14, drops[i] * 14);
        if (drops[i] * 14 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  // Progress & timing
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime.current;
      const p = Math.min((elapsed / 2500) * 100, 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setPhase("exit");
        setTimeout(onComplete, 600);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        key="loading"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        style={{ display: phase === "exit" ? undefined : undefined }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? "#6366f1" : "#ec4899",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* 3D Cube with HB */}
        <motion.div
          initial={{ scale: 0, rotateY: 0 }}
          animate={{ scale: 1, rotateY: 360 }}
          exit={{ scale: 3, opacity: 0 }}
          transition={{
            scale: { duration: 0.5 },
            rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.5 },
          }}
          className="relative z-10 mb-12"
          style={{ perspective: "800px" }}
        >
          <div
            className="w-32 h-32 relative"
            style={{
              transformStyle: "preserve-3d",
              animation: "spinCube 4s linear infinite",
            }}
          >
            {/* Cube faces */}
            {[
              { transform: "translateZ(64px)", border: "border-[#6366f1]" },
              { transform: "rotateY(180deg) translateZ(64px)", border: "border-[#ec4899]" },
              { transform: "rotateY(90deg) translateZ(64px)", border: "border-[#a855f7]" },
              { transform: "rotateY(-90deg) translateZ(64px)", border: "border-[#6366f1]" },
              { transform: "rotateX(90deg) translateZ(64px)", border: "border-[#ec4899]" },
              { transform: "rotateX(-90deg) translateZ(64px)", border: "border-[#a855f7]" },
            ].map((face, i) => (
              <div
                key={i}
                className={`absolute inset-0 border-2 ${face.border} bg-transparent flex items-center justify-center`}
                style={{
                  transform: face.transform,
                  backfaceVisibility: "visible",
                  opacity: 0.6,
                }}
              >
                {i < 2 && (
                  <span
                    className="text-3xl font-bold text-white font-mono"
                    style={{
                      textShadow: "0 0 20px rgba(99, 102, 241, 0.8), 0 0 40px rgba(236, 72, 153, 0.4)",
                    }}
                  >
                    HB
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* HB text overlay with glitch */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 mb-8"
        >
          <h1
            className="text-5xl md:text-6xl font-bold font-mono text-white tracking-wider"
            style={{
              textShadow: "0 0 30px rgba(99, 102, 241, 0.6), 0 0 60px rgba(236, 72, 153, 0.3)",
              animation: "glitch 3s infinite",
            }}
          >
            HB
          </h1>
        </motion.div>

        {/* Progress bar */}
        <div className="relative z-10 w-48">
          <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
                width: `${progress}%`,
              }}
            />
          </div>
          <p className="text-white/40 text-xs font-mono mt-3 text-center tracking-widest">
            {progress < 100 ? "LOADING..." : "READY"}
          </p>
        </div>

        <style>{`
          @keyframes spinCube {
            from { transform: rotateX(15deg) rotateY(0deg); }
            to { transform: rotateX(15deg) rotateY(360deg); }
          }
          @keyframes glitch {
            0%, 90%, 100% { transform: translate(0); }
            92% { transform: translate(-2px, 1px); filter: hue-rotate(90deg); }
            94% { transform: translate(2px, -1px); filter: hue-rotate(-90deg); }
            96% { transform: translate(-1px, -1px); }
            98% { transform: translate(1px, 1px); filter: hue-rotate(45deg); }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;

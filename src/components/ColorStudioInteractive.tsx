import React, { useState, useRef, useEffect } from 'react';
import { COLOR_PALETTES } from '../data/studioData';
import { Palette, Copy, Check, RotateCcw, Sparkles, Sun, Moon, Brush } from 'lucide-react';

export const ColorStudioInteractive: React.FC = () => {
  const [selectedPaletteIndex, setSelectedPaletteIndex] = useState(0);
  const [activeColorHex, setActiveColorHex] = useState(COLOR_PALETTES[0].colors[1].hex); // Default Hot Pink
  const [wallMode, setWallMode] = useState<'light' | 'dark'>('light');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [brushSize, setBrushSize] = useState<number>(24);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isPaintingRef = useRef<boolean>(false);

  const activePalette = COLOR_PALETTES[selectedPaletteIndex];

  // Initialize Canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill with canvas background matching wallMode
    ctx.fillStyle = wallMode === 'light' ? '#FAF8F5' : '#230308';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw some subtle canvas texture lines
    ctx.strokeStyle = wallMode === 'light' ? 'rgba(74, 14, 23, 0.05)' : 'rgba(208, 225, 253, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 24) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
  };

  useEffect(() => {
    clearCanvas();
  }, [wallMode]);

  // Handle Palette switch
  const handleSelectPalette = (idx: number) => {
    setSelectedPaletteIndex(idx);
    setActiveColorHex(COLOR_PALETTES[idx].colors[1].hex);
  };

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  // Drawing handlers (Palette Knife impasto simulation)
  const drawImpastoStroke = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.translate(x, y);

    // Simulate textured petal dab with rotation
    const angle = Math.random() * Math.PI;
    ctx.rotate(angle);

    // Primary impasto petal
    ctx.fillStyle = activeColorHex;
    ctx.beginPath();
    ctx.ellipse(0, 0, brushSize, brushSize * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Subtle edge highlight (poppy sheen)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, brushSize * 0.5, 0, Math.PI * 0.8);
    ctx.stroke();

    ctx.restore();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isPaintingRef.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (e.currentTarget.width / rect.width);
    const y = (e.clientY - rect.top) * (e.currentTarget.height / rect.height);
    drawImpastoStroke(x, y);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isPaintingRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (e.currentTarget.width / rect.width);
    const y = (e.clientY - rect.top) * (e.currentTarget.height / rect.height);
    drawImpastoStroke(x, y);
  };

  const handlePointerUp = () => {
    isPaintingRef.current = false;
  };

  return (
    <section id="color-lab" className="py-24 bg-[#F2ECE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3366] uppercase">
            <span className="w-5 h-[2px] bg-[#FF3366]" />
            <span>INTERACTIVE STUDIO EXPERIENCE</span>
            <span className="w-5 h-[2px] bg-[#FF3366]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#38040E] font-display tracking-tight text-balance">
            The Poppy Color Lab & Virtual Canvas
          </h2>
          <p className="text-sm sm:text-base text-[#4A0E17]/75">
            Test harmonic pairings from our studio recipes, examine pigment formulas, or paint your own gestural petal marks on archival linen.
          </p>
        </div>

        {/* Main Studio Console */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-[#4A0E17]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Palette Presets & Swatch Inspector */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#38040E] block mb-3">
                  1. Select Studio Color Palette
                </span>
                <div className="flex flex-col gap-2.5">
                  {COLOR_PALETTES.map((pal, idx) => {
                    const isSelected = selectedPaletteIndex === idx;
                    return (
                      <button
                        key={pal.id}
                        type="button"
                        onClick={() => handleSelectPalette(idx)}
                        className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between gap-4 ${
                          isSelected
                            ? 'bg-[#38040E] text-white border-[#38040E] shadow-sm'
                            : 'bg-[#FAF8F5] text-[#38040E] border-[#4A0E17]/10 hover:border-[#FF3366]'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="font-display font-bold text-sm truncate">
                            {pal.name}
                          </div>
                          <div className={`text-[11px] truncate mt-0.5 ${isSelected ? 'text-[#D0E1FD]' : 'text-[#4A0E17]/65'}`}>
                            {pal.description}
                          </div>
                        </div>

                        {/* Swatches preview */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          {pal.colors.map((c, i) => (
                            <span
                              key={i}
                              className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                              style={{ backgroundColor: c.hex }}
                            />
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pigment Swatch Inspector */}
              <div className="pt-4 border-t border-[#4A0E17]/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38040E] block mb-3">
                  2. Choose Active Brush Pigment
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {activePalette.colors.map((col, idx) => {
                    const isActive = activeColorHex.toLowerCase() === col.hex.toLowerCase();
                    const isCopied = copiedHex === col.hex;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveColorHex(col.hex)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                          isActive
                            ? 'ring-2 ring-[#FF3366] bg-[#FAF8F5] border-[#FF3366]'
                            : 'bg-white border-[#4A0E17]/10 hover:border-[#4A0E17]/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="w-6 h-6 rounded-md border border-black/10 shadow-xs shrink-0"
                            style={{ backgroundColor: col.hex }}
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyHex(col.hex);
                            }}
                            title="Copy HEX"
                            className="p-1 text-[#4A0E17]/40 hover:text-[#FF3366] rounded transition-colors"
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                        <div className="mt-2">
                          <div className="text-xs font-bold text-[#38040E] truncate">
                            {col.name}
                          </div>
                          <div className="text-[10px] font-mono text-[#4A0E17]/60">
                            {isCopied ? 'Copied!' : col.hex}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tools row */}
              <div className="pt-4 border-t border-[#4A0E17]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#38040E] flex items-center gap-1.5">
                    <Brush className="w-3.5 h-3.5 text-[#FF3366]" />
                    <span>Petal Impasto Size ({brushSize}px)</span>
                  </span>
                  <input
                    type="range"
                    min="14"
                    max="48"
                    value={brushSize}
                    onChange={(e) => setBrushSize(Number(e.target.value))}
                    className="w-32 accent-[#FF3366]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#38040E]">
                    Gallery Lighting Simulation:
                  </span>
                  <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-lg border border-[#4A0E17]/10">
                    <button
                      type="button"
                      onClick={() => setWallMode('light')}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md flex items-center gap-1 transition-all ${
                        wallMode === 'light' ? 'bg-white shadow-xs text-[#38040E]' : 'text-[#4A0E17]/60'
                      }`}
                    >
                      <Sun className="w-3 h-3 text-amber-500" />
                      <span>Sunlit</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setWallMode('dark')}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md flex items-center gap-1 transition-all ${
                        wallMode === 'dark' ? 'bg-[#38040E] text-white' : 'text-[#4A0E17]/60'
                      }`}
                    >
                      <Moon className="w-3 h-3 text-[#D0E1FD]" />
                      <span>Nocturne</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Virtual Canvas Pad */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38040E]">
                  Virtual Linen Canvas (Click & Drag to Paint)
                </span>
                <button
                  type="button"
                  onClick={clearCanvas}
                  className="px-3 py-1.5 text-xs font-semibold text-[#4A0E17] hover:text-[#FF3366] hover:bg-[#FAF8F5] rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear Canvas</span>
                </button>
              </div>

              {/* Canvas viewport */}
              <div
                className={`relative w-full rounded-2xl overflow-hidden border-2 shadow-inner transition-colors duration-300 ${
                  wallMode === 'light'
                    ? 'border-[#4A0E17]/20 bg-[#FAF8F5]'
                    : 'border-[#FF3366]/30 bg-[#230308]'
                }`}
              >
                <canvas
                  ref={canvasRef}
                  width={640}
                  height={420}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                  className="w-full h-auto cursor-crosshair touch-none select-none block"
                />

                {/* Subtle watermark / guideline */}
                <div className="absolute bottom-3 right-3 pointer-events-none text-[11px] font-mono opacity-50 px-2 py-1 rounded bg-black/10 backdrop-blur-xs text-[#4A0E17]">
                  Active: {activeColorHex}
                </div>
              </div>

              {/* Canvas helper message */}
              <p className="text-xs text-[#4A0E17]/70 italic text-center pt-1">
                Tip: Click to dab petals, drag to sculpt impasto trails. Each mark responds with dynamic angle and paint thickness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client"

export default function RadioPlayer() {
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg shadow-xl backdrop-blur-md z-50">
      <p className="text-xs mb-1 opacity-80">Live Podcast</p>
      <audio controls className="h-8 w-48">
        <source src="https://stream.zeno.fm/2kbugam6t18uv" type="audio/mpeg" />
      </audio>
    </div>
  )
}

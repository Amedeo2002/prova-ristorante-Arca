"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Qualcosa è andato storto!</h2>
        <button onClick={reset} className="bg-[#594a47] text-white px-4 py-2 rounded hover:bg-[#594a47]/90">
          Riprova
        </button>
      </div>
    </div>
  )
}


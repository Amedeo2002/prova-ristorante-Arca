import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pagina non trovata</h2>
        <p className="text-gray-600 mb-4">La pagina che stai cercando non esiste.</p>
        <Link href="/it" className="bg-[#594a47] text-white px-4 py-2 rounded hover:bg-[#594a47]/90 inline-block">
          Torna alla home
        </Link>
      </div>
    </div>
  )
}


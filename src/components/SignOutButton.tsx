'use client'  // Marca el componente como de lado del cliente

import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'  // Utiliza el cliente en el lado del cliente

export default function SignOutButton() {
  const router = useRouter()
  const supabase = createClient()

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      router.push('/')  // Redirige al login después de cerrar sesión
    } else {
      console.error('Error al cerrar sesión:', error)
    }
  }

  return (
    <button
      onClick={signOut}
      className="px-4 py-2 bg-green-700 text-white hover:bg-green-800 rounded-lg transition duration-300"
    >
      Sign Out
    </button>
  )
}

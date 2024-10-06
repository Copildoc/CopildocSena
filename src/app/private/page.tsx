import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import SignOutButton from '@/components/SignOutButton'  // Importa el componente cliente

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <p className="text-xl font-semibold mb-4">Hello {data.user.email}</p>
      <SignOutButton /> {/* Botón que maneja la interacción en el cliente */}
    </div>
  )
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-secondary">
      {/* Header */}
      <header className="bg-secondary text-white py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
          <h1 className="text-2xl font-bold">DocuManager</h1>
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <a href="#features" className="hover:underline">
                  Características
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
            {/* Login Button */}
            <a
              href="/login"
              className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-primary to-secondary text-white">
        <h1 className="text-5xl font-extrabold max-w-2xl mb-6">
          Gestión Documental Simplificada y Segura
        </h1>
        <p className="text-xl max-w-xl mb-8">
          Organiza, clasifica y accede a tus documentos en cualquier momento y
          desde cualquier dispositivo.
        </p>
        <a
          href="#features"
          className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-200"
        >
          Conoce más
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/secure.svg"
              alt="Seguridad"
              width={80}
              height={80}
            />
            <h3 className="text-xl font-semibold mt-4">Seguridad</h3>
            <p className="mt-2 text-sm">
              Tus documentos están protegidos con encriptación avanzada y
              autenticación multifactorial.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/easy-access.svg"
              alt="Acceso Fácil"
              width={80}
              height={80}
            />
            <h3 className="text-xl font-semibold mt-4">Acceso Fácil</h3>
            <p className="mt-2 text-sm">
              Accede rápidamente a todos tus archivos desde cualquier
              dispositivo, en cualquier momento.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/organize.svg"
              alt="Organización Eficiente"
              width={80}
              height={80}
            />
            <h3 className="text-xl font-semibold mt-4">
              Organización Eficiente
            </h3>
            <p className="mt-2 text-sm">
              Clasifica y organiza tus documentos para encontrarlos en segundos.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Acerca de DocuManager</h2>
          <p className="text-xl">
            DocuManager facilita la gestión documental para empresas y usuarios,
            ofreciendo una plataforma sencilla, segura y eficiente.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contacto</h2>
          <p className="text-xl mb-8">
            ¿Interesado en nuestros servicios? ¡Contáctanos para una
            demostración o para resolver cualquier duda!
          </p>
          <a
            href="mailto:info@documanager.com"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700"
          >
            Envíanos un correo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 DocuManager. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

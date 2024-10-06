import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form className="w-full max-w-md p-6 bg-green-50 border border-green-200 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="email" className="block text-black font-medium mb-2">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-black font-medium mb-2"
          >
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between">
          <button
            formAction={login}
            className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300"
          >
            Log in
          </button>
          <button
            formAction={signup}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

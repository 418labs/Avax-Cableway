import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Sleet: Relayer as a Service</h1>
          <p className="text-xl text-gray-600 mb-8">
            Deploy your personalized Avalanche Warp Messaging (AWM) relayer with just one click!
          </p>
          <Link href="/deploy" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Deploy Your Relayer
          </Link>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Future Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Sponsored Public Relayer Network",
              "SDK-Integrated Relayer for Developers",
              "Mobile Relayer App for Decentralized Participation"
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Coming Soon</h3>
                <p className="text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

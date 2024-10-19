import DeployForm from '../../components/DeployForm'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Deploy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Deploy Your Relayer</h1>
        <DeployForm />
      </main>
      <Footer />
    </div>
  )
}

import CriminalLaw from "@/components/CriminalLaw";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Page() {
    return (
        <main className="font-(family-name:--font-alexandria)">
            <h1 className="sr-only">Direito Penal - Teixeira Duarte Advogados</h1>
            <Header />
            <CriminalLaw />
            <Footer />
        </main>
    )
}
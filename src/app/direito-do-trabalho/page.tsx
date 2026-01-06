import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LaborLaw from "@/components/LaborLaw";

export default function Page() {
    return (
        <main className="font-(family-name:--font-alexandria)">
            <h1 className="sr-only">Direito do Trabalho - Teixeira Duarte Advogados</h1>
            <Header />
            <LaborLaw />
            <Footer />
        </main>
    )
}
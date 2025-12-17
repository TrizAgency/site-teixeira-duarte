import Footer from "@/components/Footer";
import FullTeam from "@/components/FullTeam";
import Header from "@/components/Header";

export default function Page() {
    return (
        <main className="font-(family-name:--font-alexandria)">
            <h1 className="sr-only">Equipe - Teixeira Duarte Advogados</h1>
            <Header />
            <FullTeam />
            <Footer />
        </main>
    )
}
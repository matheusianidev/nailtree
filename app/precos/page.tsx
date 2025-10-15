import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrecosPage() {
  const precos = [
    { servico: "Alongamento em acrílico c/ gel", valor: "R$ 180" },
    { servico: "Esmaltação em gel", valor: "R$ 70" },
    { servico: "Blindagem em acrílico", valor: "R$ 120" },
    { servico: "Remoção de alogamento", valor: "R$ 50" },
  ];

  const manutencao = [
    { job: "Manutenção 15 dias", valor: "R$ 110" },
    { job: "Manutenção 20 dias", valor: "R$ 120" },
    { job: "Manutenção 30 dias", valor: "R$ 140" },
    { job: "Manutenção blindagem", valor: "R$ 100" },
    { job: "Reposição de unha quebrada", valor: "R$ 10" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#cdaf9b] to-white p-4 ">
      <Card className="max-w-sm w-full text-center shadow-lg rounded-2xl p-2 bg-white/20 backdrop-blur-[2px]
border boder-white/10
before:content-[' '] 
before:absolute
before:insert-0
before:border
before:border-whitw/50">
        
        <img
          src="/src/logo_emanuelenails.png"
          alt="Nail Designer"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto  object-contain"
        />
        
        <h1 className="text-xl font-bold mb-4 text-[#b08a77]">Tabela de Preços</h1>
        <CardContent>
          <ul className="space-y-3">
            {/* --- Serviços --- */}
            <p className="font-bold text-[#b08a77] mb-2">Serviços</p>
            {precos.map((p) => (
              <li
                key={p.servico}
                className="flex justify-between border-b pb-1 font-semibold text-black"
              >
                <span>{p.servico}</span>
                <span>{p.valor}</span>
              </li>
            ))}

            {/* --- Manutenções --- */}
            <p className="font-bold text-[#b08a77] mt-4 mb-2">Manutenções</p>
            {manutencao.map((p) => (
              <li
                key={p.job}
                className="flex justify-between font-semibold border-b pb-1 text-black"
              >
                <span>{p.job}</span>
                <span>{p.valor}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <Link href="/">
          <Button variant="outline" className="mt-6 bg-[#cdaf9b]">Voltar</Button>
        </Link>
      </Card>
    </main>
  );
}

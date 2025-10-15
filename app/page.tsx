// app/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, List } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#cdaf9b] to-white p-4">
      <Card className="max-w-sm w-full text-center shadow-lg rounded-2xl p-6 bg-white/20 backdrop-blur-[2px]
border boder-white/10
before:content-[' '] 
before:absolute
before:insert-0
before:border
before:border-whitw/50">
        <img
          src="/src/logo_emanuelenails.png"
          alt="Nail Designer"
          className="w-32 h-32 md:w-32 md:h-32 rounded-full mx-auto  object-contain"
        />
        <h1 className="text-2xl font-bold mb-1 text-[#b08a77]">
          Emanuele Mello Nails
        </h1>
        <p className="text-black mb-1">Design e cuidado das suas unhas 💅</p>

        <div className="flex flex-col space-y-3">
          <Link href="/precos">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <List className="w-4 h-4" /> Ver tabela de preços
            </Button>
          </Link>

          <a
            href="https://wa.me/5545999325631?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20💅"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600">
              <MessageCircle className="w-4 h-4" /> Agendar no WhatsApp
            </Button>
          </a>
        </div>
      </Card>
    </main>
  );
}

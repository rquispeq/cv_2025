import { Text } from "@/components/atoms/Text"
import { SocialLink } from "@/components/molecules/SocialLink"
import { Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8 px-4 bg-muted/50">
      <div className="container max-w-4xl mx-auto text-center">
        <Text variant="muted" className="mb-4">
          ¿Interesado en trabajar juntos? ¡Contáctame!
        </Text>
        <div className="flex justify-center space-x-4">
          <SocialLink href="mailto:ronymquispe@gmail.com" icon={Mail} label="Enviar Email" variant="green" />
          <SocialLink href="https://www.linkedin.com/in/rony-martin-quispe-quispe/" icon={Linkedin} label="LinkedIn" variant="blue" />
        </div>
        <Text variant="muted" className="mt-6">
          © 2025 Rony Martín Quispe Q. Todos los derechos reservados.
        </Text>
      </div>
    </footer>
  )
}

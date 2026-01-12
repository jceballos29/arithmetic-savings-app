import { cn } from "@/lib/utils" // Opcional: si usas shadcn/clsx para clases

interface DateProps {
  date: Date | string
  className?: string
}

export function FormattedDate({ date, className }: DateProps) {
  // Aseguramos que sea un objeto Date
  const d = new Date(date)

  // 1. Obtenemos el mes en texto (ej: "noviembre")
  const monthName = d.toLocaleDateString('es-CO', { month: 'long' })
  
  // 2. Capitalizamos la primera letra (ej: "Noviembre")
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1)
  
  // 3. Obtenemos día y año
  const day = d.getDate()
  const year = d.getFullYear()

  // 4. Construimos el string exacto
  const dateString = `${capitalizedMonth} ${day}, ${year}`

  return (
    <time 
      dateTime={d.toISOString()} 
      className={cn("text-sm text-gray-600", className)}
    >
      {dateString}
    </time>
  )
}
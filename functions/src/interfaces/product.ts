type Unit = "pct" | "kg" | "g" | "cx"
type ProductStatus = "fechado" | "aberto" | "acabou"

export interface IProduct {
  name: string
  quatity: number
  unit: Unit
  expirationDate: Date
  imageSrc: string
  status: ProductStatus
  category: string
}

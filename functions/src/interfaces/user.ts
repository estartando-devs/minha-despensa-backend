import { IAdress } from "./adress";
import { IProduct } from "./product";

type Genre = "male" | "female" | "mulher trans" | "homem trans" | "nao binario" | "indefinido"

export interface IUser {
  name: string
  dateBirth: Date
  pantry: IProduct[]
  genre?: Genre
  email?: string
  imgSrc?: string
  adress?: IAdress
}

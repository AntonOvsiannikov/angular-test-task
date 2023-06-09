export interface IProduct {
  id?:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:IRate
}
interface IRate {
  rate:number,
  count:number
}
export interface IInputField {
  type:string,
  placeholder:string,
  formControlName:string
}
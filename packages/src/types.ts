export interface imgLink {
  img: string
  link: string
  alt: string
  imgTransform?: imgTransform
}

export interface imgTransform {
  imgRotate: string
  imgTranslateZ: string
  imgTranslateX: string
  imgTranslateY: string
  imgScale: number
}

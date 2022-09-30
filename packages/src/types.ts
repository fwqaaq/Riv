import type { PropType } from 'vue'

interface imgLink {
  img: string
  link: string
  alt: string
  animateHover:
    | 'slower'
    | 'slower1'
    | 'slower2'
    | 'slower-down'
    | 'faster'
    | 'faster1'
    | 'faster2'
    | 'vertical'
    | 'last'
    | ''
}

export const RivProps = {
  imgs: Object as PropType<imgLink[]>,
}

type EmblaCarouselType = any

export const addDotBtnsAndClickHandlers = (
   emblaApi: EmblaCarouselType,
   dotsNode: HTMLElement,
   onButtonClick?: (emblaApi: EmblaCarouselType) => void
): (() => void) => {
   let dotNodes: HTMLElement[] = []

   const addDotBtnsWithClickHandlers = (): void => {

      if (dotsNode) {
         dotsNode.innerHTML = emblaApi
            .scrollSnapList()
            .map(() => '<button class="embla__dot" type="button"></button>')
            .join('')

         const scrollTo = (index: number): void => {
            emblaApi.scrollTo(index)
            if (onButtonClick) onButtonClick(emblaApi)
         }

         dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'))
         dotNodes.forEach((dotNode, index) => {
            dotNode.addEventListener('click', () => scrollTo(index), false)
         })
      }
   }

   const toggleDotBtnsActive = (): void => {
      const previous = emblaApi.previousScrollSnap()
      const selected = emblaApi.selectedScrollSnap()
      dotNodes[previous]?.classList.remove('embla__dot--selected')
      dotNodes[selected]?.classList.add('embla__dot--selected')
   }

   emblaApi
      .on('init', addDotBtnsWithClickHandlers)
      .on('reInit', addDotBtnsWithClickHandlers)
      .on('init', toggleDotBtnsActive)
      .on('reInit', toggleDotBtnsActive)
      .on('select', toggleDotBtnsActive)

   return (): void => {
      dotsNode.innerHTML = ''
   }
}

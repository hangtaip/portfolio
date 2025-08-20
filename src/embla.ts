declare const EmblaCarousel: any
declare const EmblaCarouselAutoplay: any

import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons.js'
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton.js'

const OPTIONS = { dragFree: true, loop: true }

const emblaNode = <HTMLElement>document.querySelector('.embla')
const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')
const prevBtnNode = <HTMLElement>emblaNode.querySelector('.embla__button--prev')
const nextBtnNode = <HTMLElement>emblaNode.querySelector('.embla__button--next')
const dotsNode = <HTMLElement>emblaNode.querySelector('.embla__dots')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [EmblaCarouselAutoplay()])

const onNavButtonClick = (emblaApi: any): void => {
   const autoplay = emblaApi?.plugins()?.autoplay
   if (!autoplay) return

   const resetOrStop =
      autoplay.options.stopOnInteraction === false
         ? autoplay.reset
         : autoplay.stop

   resetOrStop()
}

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
   emblaApi,
   prevBtnNode,
   nextBtnNode,
   onNavButtonClick
)
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
   emblaApi,
   dotsNode,
   onNavButtonClick
)

emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
emblaApi.on('destroy', removeDotBtnsAndClickHandlers)

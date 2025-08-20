import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons.js';
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton.js';
const OPTIONS = { dragFree: true, loop: true };
const emblaNode = document.querySelector('.embla');
const viewportNode = emblaNode.querySelector('.embla__viewport');
const prevBtnNode = emblaNode.querySelector('.embla__button--prev');
const nextBtnNode = emblaNode.querySelector('.embla__button--next');
const dotsNode = emblaNode.querySelector('.embla__dots');
const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [EmblaCarouselAutoplay()]);
const onNavButtonClick = (emblaApi) => {
    var _a;
    const autoplay = (_a = emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.plugins()) === null || _a === void 0 ? void 0 : _a.autoplay;
    if (!autoplay)
        return;
    const resetOrStop = autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;
    resetOrStop();
};
const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevBtnNode, nextBtnNode, onNavButtonClick);
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(emblaApi, dotsNode, onNavButtonClick);
emblaApi.on('destroy', removePrevNextBtnsClickHandlers);
emblaApi.on('destroy', removeDotBtnsAndClickHandlers);
//# sourceMappingURL=embla.js.map
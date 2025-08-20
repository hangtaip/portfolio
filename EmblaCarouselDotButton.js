export const addDotBtnsAndClickHandlers = (emblaApi, dotsNode, onButtonClick) => {
    let dotNodes = [];
    const addDotBtnsWithClickHandlers = () => {
        if (dotsNode) {
            dotsNode.innerHTML = emblaApi
                .scrollSnapList()
                .map(() => '<button class="embla__dot" type="button"></button>')
                .join('');
            const scrollTo = (index) => {
                emblaApi.scrollTo(index);
                if (onButtonClick)
                    onButtonClick(emblaApi);
            };
            dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'));
            dotNodes.forEach((dotNode, index) => {
                dotNode.addEventListener('click', () => scrollTo(index), false);
            });
        }
    };
    const toggleDotBtnsActive = () => {
        var _a, _b;
        const previous = emblaApi.previousScrollSnap();
        const selected = emblaApi.selectedScrollSnap();
        (_a = dotNodes[previous]) === null || _a === void 0 ? void 0 : _a.classList.remove('embla__dot--selected');
        (_b = dotNodes[selected]) === null || _b === void 0 ? void 0 : _b.classList.add('embla__dot--selected');
    };
    emblaApi
        .on('init', addDotBtnsWithClickHandlers)
        .on('reInit', addDotBtnsWithClickHandlers)
        .on('init', toggleDotBtnsActive)
        .on('reInit', toggleDotBtnsActive)
        .on('select', toggleDotBtnsActive);
    return () => {
        dotsNode.innerHTML = '';
    };
};
//# sourceMappingURL=EmblaCarouselDotButton.js.map
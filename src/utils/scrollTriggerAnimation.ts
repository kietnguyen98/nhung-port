/*
when to trigger enter-animation?: 
    -element appeared in the range of user view (page's window view)
when to trigger leave-animation?:
    -element leave the page's window view, there are 2 cases:
        +user scroll up: 
            -> element leave when it's bounding top's top offset < screen bounding bottom's top offset
        +user scroll down: 
            -> element leave when it's bounding bottom's top offset < screen bounding top's top offset
*/
export type TScrollTriggerAnimationProps = {
    element: HTMLElement;
    defaultAnimationClass: string;
    enterAnimationClass: string;
};

export const scrollTriggerAnimation = ({
    element,
    defaultAnimationClass,
    enterAnimationClass,
}: TScrollTriggerAnimationProps) => {
    const scrollWrapperElement = document.getElementById(
        'scroll-wrapper'
    ) as HTMLElement;
    element.classList.add(defaultAnimationClass);
    var lastScrollTop = scrollWrapperElement.scrollTop;
    var isEntered: boolean = false;

    scrollWrapperElement.addEventListener('scroll', () => {
        let scrollDirection =
            lastScrollTop - scrollWrapperElement.scrollTop > 0
                ? -1
                : lastScrollTop - scrollWrapperElement.scrollTop < 0
                  ? 1
                  : 0;
        lastScrollTop = scrollWrapperElement.scrollTop;
        // scroll direction = -1 -> scroll up, = 1 -> scroll down, = 0 -> not scroll

        let scrollWrapperElementBoundingBottom =
            scrollWrapperElement.getBoundingClientRect().bottom +
            scrollWrapperElement.scrollTop;
        let scrollWrapperElementBoundingTop =
            scrollWrapperElement.getBoundingClientRect().top +
            scrollWrapperElement.scrollTop;
        let elementBoundingBottom =
            element.getBoundingClientRect().bottom +
            scrollWrapperElement.scrollTop;
        let elementBoundingTop =
            element.getBoundingClientRect().top +
            scrollWrapperElement.scrollTop;

        console.log(scrollDirection === 1 && 'scroll down');
        console.log(scrollDirection === -1 && 'scroll up');
        console.log({
            scrollWrapperElementBoundingBottom,
            scrollWrapperElementBoundingTop,
            elementBoundingBottom,
            elementBoundingTop,
        });
        // check if element entered view port
        if (
            scrollWrapperElementBoundingTop < elementBoundingBottom ||
            scrollWrapperElementBoundingBottom > elementBoundingTop
        ) {
            // check if element entered from top
            if (
                scrollWrapperElementBoundingTop < elementBoundingBottom &&
                scrollWrapperElementBoundingTop > elementBoundingTop
            ) {
                // if user scroll down
                if (scrollDirection === 1) {
                    if (isEntered) isEntered = false;
                }

                // if user scroll up
                if (scrollDirection === -1) {
                    if (!isEntered) isEntered = true;
                }
            }

            // check if element entered from bottom
            if (
                scrollWrapperElementBoundingBottom > elementBoundingTop &&
                scrollWrapperElementBoundingBottom < elementBoundingBottom
            ) {
                // if user scroll down
                if (scrollDirection === 1) {
                    if (!isEntered) isEntered = true;
                }

                // if user scroll up
                if (scrollDirection === -1) {
                    if (isEntered) isEntered = false;
                }
            }
        } else {
            isEntered = false;
        }

        if (isEntered) {
            element.classList.add(enterAnimationClass);
        } else {
            element.classList.remove(enterAnimationClass);
        }
    });
};
<img alt="" src="https://yogaraptor.dev/logo.avif" height="100" />

# Yogaraptor's Testing Bites

A series of exercises in component testing, using [React](https://react.dev) and [vitest](https://vitest.dev), with some examples showcasing browser-based testing using vitest's experimental [browser mode](https://vitest.dev/guide/browser).

## Browser-based visibility assertions

One of the advantages of browser-based testing is that, unlike JSDOM, layout is supported. This allows us to make assertions about elements' position, visibility, and interactivity that would otherwise require complex and brittle mocks.

### Occlusion (covering up of an element)

`DinoCard.spec.tsx` performs a very simple test on the `<DinoCard>` component - can the user click on the button?

Try removing the z-index property on line 21 of `DinoCard.module.css`. This causes the subtle highlight effect on the card element to occlude (cover up) most of the button, causing the test to fail.

Why is this cool? Because in a traditional JSDOM-based test, even though removing the z-index would completely break the card, the test would still pass, because JSDOM doesn't know about layout and uses its own internal mechanism to click on elements, rather than actual browser events.

### Carousel example

The two components exported from `components/Carousel.tsx` implement the same basic component - a scrollable container that snaps to the boundaries of its children to create a very simple carousel. One uses some fairly involved JavaScript to manage the snapping, while the other uses a fantastic recent addition to the CSS spec, [CSS scroll snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap).

The test file for these components runs the exact same test against both. Because we're rendering in the browser, our test can focus on user interactions and visibility of elements, and is not coupled at all to the implementation of either component. The test doesn't know or care _how_ the carousel snaps to each item, it just asserts that the snapping occurs.

This is a somewhat contrived example of course, but does demonstrate that browser-based testing paves the way for simpler, more robust tests that can survive extreme refactors, while still failing when the behaviour the user cares about breaks.

(I would have liked to use some sort of swipe gesture to scroll each carousel, but Playwright has paused development on touch events, and vitest doesn't expose them at all).

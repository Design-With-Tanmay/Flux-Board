import { component$, useVisibleTask$ } from '@builder.io/qwik';
import heroBg from '~/assets/hero-bg.svg?raw';
import lights from '~/assets/lights.svg?raw';

export const Hero = component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const { gsap } = await import('gsap');

    const group = document.querySelector<SVGGElement>('#randomDots');
    if (!group) return;

    const dots = Array.from(group.querySelectorAll<SVGCircleElement>('circle'));

    const BASE_COLOR = '#18181b'; // initial color
    const HIGHLIGHT_COLOR = '#3f3f46'; // red
    const BATCH_SIZE = 120; // 12–30 sweet spot
    const HIGHLIGHT_DURATION = 0.8; // seconds

    // Ensure all dots start with base color
    dots.forEach((dot) => dot.setAttribute('fill', BASE_COLOR));

    function highlightRandomDots() {
      const batch = gsap.utils.shuffle(dots).slice(0, BATCH_SIZE);

      // Turn selected dots red
      batch.forEach((dot) => {
        gsap.to(dot, {
          fill: HIGHLIGHT_COLOR,
          duration: 0.2,
          overwrite: 'auto',
        });
      });

      // Revert them back after 1s
      gsap.delayedCall(HIGHLIGHT_DURATION, () => {
        batch.forEach((dot) => {
          gsap.to(dot, {
            fill: BASE_COLOR,
            duration: 0.2,
            overwrite: 'auto',
          });
        });

        // Start next cycle AFTER revert
        gsap.delayedCall(0.1, highlightRandomDots);
      });
    }

    highlightRandomDots();
  });

  return (
    <section class="relative">
      <div class="flex justify-center overflow-hidden">
        <div dangerouslySetInnerHTML={heroBg}></div>
      </div>
      <div class="max-w-xl text-center px-4 absolute top-56 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 class="text-4xl text-center font-normal">
          One workspace to track every project, task and team
        </h1>
        <p class="text-xs text-center text-zinc-500 tracking-wider font-light my-8">
          Create projects, build custom boards, assign tasks, track progress and
          ship faster - all in one place
        </p>
        <a
          href="#"
          class="bg-indigo px-4 py-2 rounded-full text-xs font-semibold"
        >
          Create Your Workspace
        </a>
      </div>
    </section>
  );
});

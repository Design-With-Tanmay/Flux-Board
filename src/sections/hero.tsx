import { component$, useVisibleTask$ } from '@builder.io/qwik';
import heroBg from '~/assets/hero-bg.svg?raw';
import heroDashboard from '~/assets/hero-dashboard.svg';
import heroMobile from '~/assets/hero-mobile.svg';

export const Hero = component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const { gsap } = await import('gsap');

    const arrow = document.querySelector<SVGGElement>('#move');
    if (!arrow) return;

    gsap.fromTo(
      arrow,
      { y: 740 },
      {
        y: -240,
        duration: 6,
        ease: 'none',
        repeat: -1,
      }
    );
  });

  return (
    <section class="relative mx-auto">
      <div class="flex justify-center overflow-hidden mx-auto">
        <div dangerouslySetInnerHTML={heroBg}></div>
      </div>
      <div class="text-center w-full sm:max-w-lg  px-4 absolute top-56 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
      <div class="mx-auto -mt-20 mb-10 overflow-hidden px-4 lg:px-0">
        <picture>
          <source srcset={heroMobile} media="(max-width: 639px)" />
          <img
            src={heroDashboard}
            alt="dashboard"
            height={576}
            width={1024}
            class="mx-auto"
          />
        </picture>
      </div>
    </section>
  );
});

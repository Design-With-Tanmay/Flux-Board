import { component$, useSignal, $ } from '@builder.io/qwik';
import logo from '~/assets/logo.svg';
import menuIcon from '~/assets/menu.svg';

export const Navbar = component$(() => {
  const isOpen = useSignal(false);

  const toggleMenu = $(() => {
    isOpen.value = !isOpen.value;
  });

  return (
    <div class="fixed w-full top-4 left-0 flex justify-center z-20">
      <nav class="px-4 flex justify-between items-center lg:w-5xl w-full rounded-full lg:p-0 relative">
        <div class="flex justify-center items-center gap-1">
          <img src={logo} height={24} width={24} alt="logo" />
          <p class="text-zinc-200 font-semibold text-sm">Flux Board</p>
        </div>

        {/* desktop links */}
        <div class="hidden lg:flex justify-center gap-6 bg-zinc-500/10 px-4 py-1 border border-zinc-800 rounded-full backdrop-blur-2xl">
          <a href="#" class="text-zinc-300 text-xs tracking-wider">
            <span class="text-zinc-500">01 / </span>Features
          </a>
          <a href="#" class="text-zinc-300 text-xs tracking-wider">
            <span class="text-zinc-500">02 / </span>Why Flux
          </a>
          <a href="#" class="text-zinc-300 text-xs tracking-wider">
            <span class="text-zinc-500">03 / </span>Pricing
          </a>
          <a href="#" class="text-zinc-300 text-xs tracking-wider">
            <span class="text-zinc-500">04 / </span>Testimonial
          </a>
        </div>
        <a
          href="#"
          class="px-3 py-1 bg-indigo text-xs font-semibold rounded-full transition-all hidden lg:block"
        >
          Login
        </a>

        {/* mobile menu button */}
        <img
          src={menuIcon}
          height={16}
          width={16}
          alt="menu"
          class="lg:hidden cursor-pointer"
          onClick$={toggleMenu}
        />

        {/* mobile menu */}
        {isOpen.value && (
          <div class="lg:hidden z-10 backdrop-blur-2xl  bg-zinc-500/10 border border-zinc-800 rounded-2xl absolute top-8 left-4 right-4 flex flex-col justify-center items-center p-2 gap-4">
            <a href="#" class="text-zinc-300 text-xs tracking-wider">
              <span class="text-zinc-500">01 / </span>Features
            </a>
            <a href="#" class="text-zinc-300 text-xs tracking-wider">
              <span class="text-zinc-500">02 / </span>Why Flux
            </a>
            <a href="#" class="text-zinc-300 text-xs tracking-wider">
              <span class="text-zinc-500">03 / </span>Pricing
            </a>
            <a href="#" class="text-zinc-300 text-xs tracking-wider">
              <span class="text-zinc-500">04 / </span>Testimonial
            </a>
          </div>
        )}
      </nav>
    </div>
  );
});

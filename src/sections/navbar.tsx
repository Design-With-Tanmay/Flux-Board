import { component$, useSignal, $ } from '@builder.io/qwik';
import logo from '~/assets/logo.svg';
import menuIcon from '~/assets/menu.svg';

export const Navbar = component$(() => {
  const isOpen = useSignal(false);

  const toggleMenu = $(() => {
    isOpen.value = !isOpen.value;
  });

  return (
    <nav class="fixed top-0 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-4 mt-5">
      <div class="flex items-center justify-between rounded-full border border-zinc-900 bg-zinc-700/10 backdrop-blur-lg px-4 py-2">
        {/* Logo */}
        <div class="flex items-center gap-2">
          <img src={logo} alt="logo" width={24} height={24} />
          <p class="text-sm font-semibold tracking-wide text-zinc-100">
            Flux Board
          </p>
        </div>

        {/* Desktop Menu */}
        <div class="hidden lg:flex items-center gap-10">
          {[
            ['01', 'Features'],
            ['02', 'Why Flux'],
            ['03', 'Pricing'],
            ['04', 'Testimonials'],
          ].map(([num, label]) => (
            <a
              key={num}
              href="#"
              class="inline-flex items-center gap-1 text-xs tracking-widest font-light text-zinc-400 hover:text-indigo-500"
            >
              <span class="text-zinc-600">{num}</span>
              <span class="text-zinc-600">/</span>
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div class="flex items-center gap-3">
          <a
            href="#"
            class="hidden lg:inline-flex rounded-full bg-indigo px-3 py-1 text-xs font-semibold text-white"
          >
            Login
          </a>

          {/* Mobile menu button */}
          <button
            onClick$={toggleMenu}
            class="lg:hidden rounded-full border border-zinc-900 bg-zinc-700/10 p-2 backdrop-blur-lg"
            aria-label="Toggle menu"
          >
            <img src={menuIcon} alt="menu" width={14} height={14} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen.value && (
        <div class="mt-3 rounded-2xl border border-zinc-900 bg-zinc-700/10 backdrop-blur-lg px-6 py-4 lg:hidden">
          <div class="flex flex-col gap-4 text-center">
            {[
              ['01', 'Features'],
              ['02', 'Why Flux'],
              ['03', 'Pricing'],
              ['04', 'Testimonials'],
            ].map(([num, label]) => (
              <a
                key={num}
                href="#"
                onClick$={() => (isOpen.value = false)}
                class="inline-flex justify-center items-center gap-1 text-xs tracking-widest font-light text-zinc-300 hover:text-indigo-500"
              >
                <span class="text-zinc-500">{num}</span>
                <span class="text-zinc-500">/</span>
                <span>{label}</span>
              </a>
            ))}

            <a
              href="#"
              class="mt-2 rounded-full bg-indigo px-4 py-2 text-xs font-semibold text-white"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
});

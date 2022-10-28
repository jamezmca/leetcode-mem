import { component$, useStylesScoped$ } from '@builder.io/qwik';
// import styles from './header.css?inline';

export default component$((props) => {
  // useStylesScoped$(styles);

  return (
    <header class="p-8 bg-white z-40 text-4xl sticky top-0 uppercase text-center sm:text-left flex flex-col sm:flex-row justify-between items-center">
      <a href="/" class="flex items-center justify-center flex-col">
        <h1 class="text-6xl scale-110">GRIND 75</h1>
        <h2 class="text-sm px-1 relative before:w-2 before:h-[2px] before:absolute before:bg-[#253550] before:right-full before:top-1/2 before:-translate-y-1/2 after:w-2 after:h-[2px] after:absolute after:bg-[#253550] after:left-full after:top-1/2 after:-translate-y-1/2 before:rounded after:rounded">Spaced Memorization Learning</h2>
      </a>
      <a href="https://www.youtube.com/smoljames" target="_blank" class="hidden sm:inline">
        <i class="fa-brands fa-youtube"></i>
      </a>
    </header>
  );
});

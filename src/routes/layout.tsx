import { component$, Slot, useStore } from '@builder.io/qwik';
import Modal from '~/components/Modal';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class="flex flex-1 flex-col relative">
        <Header />
        <section class="flex-1 flex flex-col mx-auto w-full max-w-[140ch]">
          <Slot />
        </section>
      </main>
      <footer>
        <p class="text-center p-4">All solutions are provided in Python <i class="fa-brands fa-python px-1"></i></p>
      </footer>
    </>
  );
});

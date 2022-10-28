import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { questions } from '../assets/data';


export default component$((props) => {
  const bgColors = {
    easy: 'green-200',
    medium: 'slate-200',
    hard: 'slate-200'
  }

  return (
    <div class="flex flex-col text-center flex-1 text-md sm:text-xl px-4">
      <h2 class=" text-xl sm:text-3xl">Memorize solutions to the <a href="https://www.techinterviewhandbook.org/grind75" target="_blank" class="bg-slate-900 text-white px-1">GRIND-75</a> problem set.</h2>
      <p class="text-sm sm:text-base">Solutions include walk-through notes, links to tutorials, as well as time complexity for each solution!</p>

      <div class="flex-1 flex flex-col mt-4 justify-center items-center">
        <div class="grid cols-span-1 gap-6 sm:gap-8 p-4 w-full max-w-[100ch]">
          {['easy', 'medium'].map((title) => (
            <a href={"/questions/" + title} class={"relative after:absolute after:left-0 after:top-0 after:w-2/3 after:h-2/3 after:border-l-2 after:border-solid after:border-[#253550] after:border-t-2 before:absolute before:right-0 before:bottom-0 before:w-2/3 before:h-2/3 before:border-r-2 before:border-solid before:border-[#253550] before:border-b-2 after:duration-300 before:duration-300 hover:after:h-full hover:after:w-full hover:before:h-full hover:before:w-full text-4xl p-4 px-8 sm:p-8 capitalize duration-300 "}>{title} [{Object.keys(questions[title]).length}]</a>
          ))}
          <div class={"relative after:absolute cursor-not-allowed after:left-0 after:top-0 after:w-2/3 after:h-2/3 after:border-l-2 after:border-solid after:border-[#253550] after:border-t-2 before:absolute before:right-0 before:bottom-0 before:w-2/3 before:h-2/3 before:border-r-2 before:border-solid before:border-[#253550] before:border-b-2 text-4xl p-4 px-8 sm:p-8 capitalize duration-300 "}>
            <h2>
              Hard - Coming soon!
            </h2>
            <div class="top-0 absolute -translate-y-1/2 bg-white p-1 sm:p-2 z-30 left-1/2 -translate-x-1/2">
              <i class="fa-solid fa-lock text-[1.5rem] sm:text-[2.5rem]"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Leedcode Memorization - Grind 75',
};

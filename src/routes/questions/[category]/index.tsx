import { component$, useStore } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import Modal from '~/components/Modal';
import { questions } from '../../../assets/data';

export default component$(() => {
    const location = useLocation();
    const type = location.params.category
    const questionSet = questions[type]
    
    const state = useStore({
        shown: false,
        levels: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        },
        tracker: {

        },
        currQuestion: 1
    });

    const activeQuestion = questionSet[state.currQuestion]

    const colorScheme = {
        'easy': 'green-400',
        'medium': 'amber-400',
        'hard': 'red-400'
    }

    function setNewQuestion() {
        
    }

    function handleUpgrade() {
        const num = state.currQuestion
        if (!(num in state.tracker)) {
            state.tracker[num] = 1
            state.levels[1].push(num)
            console.log('STATE', state)
        } else {
            state.levels[state.tracker[num]] = state.levels[state.tracker[num]].slice(1)
            state.tracker[num] += 1
            state.levels[state.tracker[num]].push(num)
        }
    }

    function handleDowngrade() {

    }

    function closeModal() {
        const portalModal = document.getElementById('portal')
        portalModal.innerHTML = ''
    }

    function onDisplayImgHandler() {
        const portalModal = document.getElementById('portal')
        const element = `
        <div class="fixed flex flex-col justify-center items-center top-0 z-50 left-0 w-screen h-screen">
            <div class="inset-0 bg-white sm:bg-[#253550] sm:opacity-60 absolute"></div>
            <i id="close-icon" class="fa-solid fa-xmark text-3xl  text-[#253550] z-20 sm:text-white absolute right-4 top-4 cursor-pointer duration-300 hover:rotate-45"></i>
            <div class="max-w-[100ch] mx-auto w-full z-10">
                <img src='${activeQuestion.question_img}' alt='img_url'/>
            </div>
        </div>
        `
        portalModal.innerHTML = element
        const closeButton = document.getElementById('close-icon')
        closeButton.addEventListener('click', closeModal)
    }

    return (
        <div class=" flex flex-col flex-1 w-full max-w-[100ch] mx-auto">
            <div class="flex-1 flex flex-col gap-4">
                <div class="flex text-2xl sm:text-3xl justify-between items-center px-4">
                    <a href={activeQuestion.link} target="_blank" class="capitalize relative duration-300 hover:text-blue-800">{state.currQuestion}. {activeQuestion.link.split('/')[4].replace('-', ' ')}</a>
                    <div class="flex items-center capitalize gap-2">
                        <h2 class="text-center ">Difficulty: </h2>
                        <h2 class={`text-${colorScheme[type]}`}>{location.params.category}</h2>
                    </div>
                </div>
                <img class="" src={!state.shown ? activeQuestion.question_img : activeQuestion.answer_link} alt={activeQuestion.link} />
                {state.shown && (
                    <div class="px-4 flex flex-col gap-2 flex-1">
                        <div class="flex justify-between items-center text-2xl">
                            <h3 class="w-fit text-center ">Time Complexity</h3>
                            <i onClick$={onDisplayImgHandler} class="fa-solid  duration-300 hover:opacity-70 cursor-pointer fa-eye pr-2"></i>
                        </div>
                        <p>{activeQuestion.time_complexity}</p>
                        <h3 class="text-2xl">Explanation</h3>
                        <p class="font-light">{activeQuestion.explanation}</p>
                    </div>
                )}
            </div>
            <div class="px-4 grid grid-cols-2 gap-4">
                {!state.shown && <button onClick$={() => state.shown = true} class="border-2 col-span-2 border solid border-[#253550] mx-auto w-full max-w-[50ch] duration-300 hover:bg-[#253550] hover:text-white cursor-pointer p-2 text-2xl">Reveal</button>}
                {state.shown && <button onClick$={handleDowngrade} class="border-2 border solid border-[#253550] mx-auto w-full max-w-[50ch] duration-300 hover:opacity-50 cursor-pointer p-2 text-2xl">Rip</button>}
                {state.shown && <button onClick$={handleUpgrade} class="border-2 border solid border-[#232550] mx-auto w-full max-w-[50ch] duration-300 text-white bg-[#232550] hover:bg-indigo-800 cursor-pointer p-2 text-2xl">Nice</button>}
            </div>
        </div>
    );
});

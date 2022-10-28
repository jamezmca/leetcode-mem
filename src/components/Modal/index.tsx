import { component$, useStore } from '@builder.io/qwik';

export default component$((props) => {
    const { onClose } = props

    const img_url = localStorage.getItem('grind-75')

    return (
        <div class="fixed flex top-0 z-50 left-0 w-screen h-screen">
            <div class="inset-0 bg-[#253550] opacity-40 absolute"></div>
            <img src={img_url} alt={img_url}/>
        </div>
    );
});

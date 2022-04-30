const accordion = () => {
    const accordion = document.getElementById('accordion');

    accordion.addEventListener('click', (e) => {
        e.preventDefault();
        const btn = e.target.closest('.accordion__button');

        if (btn) {
            btn.classList.toggle('accordion-open');
            const content = btn.parentElement.parentElement;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
               content.style.maxHeight = content.scrollHeight + 'px';
            }
        }
    });
}

export default accordion;
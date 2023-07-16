const inputs = document.querySelectorAll('.otp-card-inputs input');
const btn = document.querySelector('.otp-card button');

inputs.forEach(input =>{
    let lastInput = 0
    input.onkeyup = (e) =>{
        const currentEl = e.target
        const nextEl = input.nextElementSibling
        const prevEl = input.previousElementSibling

        if(prevEl && e.keyCode === 8){
            if(lastInput === 1){
                prevEl.value = ''
                prevEl.focus()
            }
            btn.setAttribute('disable', true)
            lastInput = 1    
        }else{
            const reg = /^[0-9]+$/
            if(!reg.test(currentEl.value)){
                currentEl.value = currentEl.value.replace(/\D/g, '')
            }else if(currentEl.value){
                if(nextEl){
                    nextEl.focus()
                }else{
                    btn.removeAttribute('disable')
                    lastInput = 0
                }
            }
        }

    }
})
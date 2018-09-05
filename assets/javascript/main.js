// Play Click Handler
$('.main-nav').on('click', 'li', event => {
    viewChange(event);
})


let viewChange = (event) => {
    let className = `.${event.target.classList[0]}`;
    let $dataAttr = $(className).attr('data-button');
    console.log($dataAttr)
    switch ($dataAttr) {
        case 'play':
            console.log('1')
            $('.start-area').addClass('hidden');
            $('.options-area').removeClass('hidden');
            break;
        case 'instructions-go-back':
            console.log('2')
            $('.instructions-area').addClass('hidden');
            $('.main-nav').removeClass('hidden');
            break;
        case 'idk':
            console.log('3')
            break;
        case 'about':
            console.log('4')
            break;
        case 'instructions':
            console.log('5')
            $('.nav-links').addClass('hidden');
            $('.instructions-area').removeClass('hidden');
            break;
        default:
            return;
    }
}


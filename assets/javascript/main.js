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
            break;
        case 'Instructions':
            console.log('2')
            break;
        case 'about':
            console.log('3')
            break;
        default:
            return;
    }
}


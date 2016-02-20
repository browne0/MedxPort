var State = {
    CHECKED: 'checked',
    UNCHECKED: 'unchecked',
    NONE: 'none'
};

states = [];

$.each(State, function(k, state) {
    states.push(state);
});

function getState(el$) {
    return el$.data('state') || State.UNCHECKED;
}
function setState(el$, state) {
    var oldState = getState(el$);
    el$.data('state', state)
        .removeClass(oldState)
        .addClass(state);
}

function onDrop(event, ui) {
    var droppable$ = $(this),
        newState = getState(ui.draggable);
    setState(droppable$, newState);
}

function onClick() {
    var checkbox$ = $(this),
        state = getState(checkbox$);
    stateIndex = states.indexOf(state) + 1;
    if(stateIndex > states.length - 1) {
        stateIndex = 0;
    }
    currentState = states[stateIndex];
    setState(checkbox$, currentState);
}

function onDragStart() {
    $(this).off('click', onClick);
}

function onDragStop() {
    $(this).on('click', onClick);
}

$('.checkbox')
.on('click', onClick)
.draggable({
    revert: true,
    revertDuration: 200,
    delay: 100,
    start: onDragStart,
    stop: onDragStop
})
.droppable({
    accept: '.checkbox',
    drop: onDrop,
    over: onDrop
});

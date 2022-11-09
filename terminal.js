function OpenTerminal(){
    document.getElementById("terminal_body").innerHTML = ""
    k=`<div class="terminal_wrapper">
    <section id="terminal">
        <nav class="terminal_nav">
            <div class="terminal_nav__btns">
                <button class="terminal_nav__btn t-exit">&#10005;</button>
                <button class="terminal_nav__btn">&#9723;</button>
                <button class="terminal_nav__btn">&#9472;</button>
            </div>
            <p class="terminal_nav__title">Terminal (You can drag me)</p>
        </nav>
        <section id="terminal_body">
            <div class="terminal__text">Type anything hit Enter / Type clear to clear screen</div>
            <div class="terminal_main">
                <div class="terminal_input_left">
                    <span class="user_msg">sandy@root:</span><span class="user_loc">~</span><span class="user_doll">$</span>
                </div>
                <input class="terminal_input" type="text">
            </div>
        </section>
    </section>
</div>`
    document.getElementById("terminal_body").innerHTML = k
    createEvent();
}
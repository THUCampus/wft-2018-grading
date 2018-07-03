class ProgressBar {
    constructor(config) {
        // TODO:
        this._config = config
    }
    set_progress(progress) {
        // TODO:
        document.querySelector(this._config.container).innerText = progress + ' %'
    }
}

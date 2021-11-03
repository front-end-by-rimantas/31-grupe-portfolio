class Services {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        // ar validus selector - ne tuscias string
        // ar validus data - ne tuscias array
        // ar pagal duota selector galima rasti norima elementa - DOM elementas egzistuoja
        if (
            !this.isValidSelector() ||
            !this.isValidData() ||
            !this.canFindTargetElement()
        ) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            return false;
        }
        return true;
    }

    isValidData() {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            return false;
        }
        return true;
    }

    canFindTargetElement() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    render() {
        let HTML = '';

        for (const service of this.data) {
            HTML += `<div class="service col-12 col-md-6 col-lg-4">
                        <i class="fa fa-${service.icon}"></i>
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
    }
}

export { Services };

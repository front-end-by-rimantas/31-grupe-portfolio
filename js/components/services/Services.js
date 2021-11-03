class Services {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
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

        return this.render();
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

    isValidService(service) {
        if (
            typeof service !== 'object' ||
            service === null ||
            Array.isArray(service) ||
            Object.keys(service).length !== 3 ||
            typeof service.icon !== 'string' ||
            service.icon === '' ||
            typeof service.title !== 'string' ||
            service.title === '' ||
            typeof service.description !== 'string' ||
            service.description === ''
        ) {
            return false;
        }
        return true;
    }

    render() {
        let HTML = '';

        for (const service of this.data) {
            if (this.isValidService(service)) {
                HTML += `<div class="service col-12 col-md-6 col-lg-4">
                            <i class="fa fa-${service.icon}"></i>
                            <h3>${service.title}</h3>
                            <p>${service.description}</p>
                        </div>`;
            }
        }

        if (HTML === '') {
            return false;
        }

        this.DOM.innerHTML = HTML;
        return true;
    }
}

export { Services };

class Services {
    constructor(data) {
        this.data = data;

        this.render();
    }

    render() {
        const templateHTML = document.querySelector('#service_template')
            .innerHTML;
        let HTML = '';

        for (const service of this.data) {
            let serviceHTML = templateHTML;
            for (const key in service) {
                serviceHTML = serviceHTML.replace(`{{${key}}}`, service[key]);
            }
            HTML += serviceHTML;
        }

        const DOM = document.querySelector('#services_content');
        DOM.innerHTML = HTML;
    }
}

export { Services };

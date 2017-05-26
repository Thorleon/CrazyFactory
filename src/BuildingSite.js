BuildingSite  {

    INITIALIZATION(factory) {
        this.factory = factory;
        this.workers;
        this.resources;
    }

    callSupply(type) {
        this.factory.generate(type);
    }

    appendSupply(supplies) {
        if(Array.isArray(supplies)) {
            this.logChange();
        } else {
            this.logChange();
        }
        console.log(this.resources, this.workers, supplies);
        this.updateUi();
    }

    logChange(supply) {
        const content = `<li>${supply} added</li>`;
        document.getElementById('status').insertAdjacentHTML('beforeend', content);
    }

    updateUi() {
        document.getElementById('current-resources').innerHTML = '';
        document.getElementById('current-workers').innerHTML = '';
    }
}

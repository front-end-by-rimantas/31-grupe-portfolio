import { Services } from "./Services";

test('Be parametru turi failinti', () => {
    const servObj = new Services();
    expect(servObj.init()).toBeFalsy();
})

test('Tik su selector turi failinti', () => {
    const servObj = new Services('asd');
    expect(servObj.init()).toBeFalsy();
})

test('Su netinkamu selector turi failinti', () => {
    const servObj = new Services('asd', [1, 2, 3]);
    expect(servObj.init()).toBeFalsy();
})

test('Pagal selector neranda reikiamo elemento, todel failina', () => {
    document.body.innerHTML = '<div class="row"></div>';
    const servObj = new Services('#services_content', [1, 2, 3]);
    expect(servObj.init()).toBeFalsy();
})

test('Duomenyse turi buti objektai, todel failina', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [1, 2, 3]);
    expect(servObj.init()).toBeFalsy();
})

test('Duomenyse turi buti tikri objektai, todel failina', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [null, [4, 5], undefined]);
    expect(servObj.init()).toBeFalsy();
})

test('Duomenyse objektai turi buti bent su vienu key, todel failina', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [{}]);
    expect(servObj.init()).toBeFalsy();
})

test('Icon turi buti tekstas, todel failina', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [{ icon: 15 }]);
    expect(servObj.init()).toBeFalsy();
})

test('Icon turi buti ne tuscias tekstas, todel failina', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [{ icon: '' }]);
    expect(servObj.init()).toBeFalsy();
})

test('Title turi buti tekstas, todel failina', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [{ icon: 'globe', title: 15 }]);
    expect(servObj.init()).toBeFalsy();
})

test('Title turi buti tekstas, todel failina', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [{ icon: 'globe', title: '' }]);
    expect(servObj.init()).toBeFalsy();
})

test('Descripption turi buti tekstas, todel failina', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [{
        icon: 'globe',
        title: 'Service',
        description: 15
    }]);
    expect(servObj.init()).toBeFalsy();
})

test('Descripption turi buti tekstas, todel failina', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [{
        icon: 'globe',
        title: 'Service',
        description: ''
    }]);
    expect(servObj.init()).toBeFalsy();
})

test('Objekte yra per daug key, todel failina', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [{
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
    }]);
    expect(servObj.init()).toBeFalsy();
})

test('Objekte yra per daug key is kuriu yra visi privalomi, todel failina', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [{
        icon: 'globe',
        title: 'Service',
        description: 'Lorem ipsum',
        d: 'd'
    }]);
    expect(servObj.init()).toBeFalsy();
})

test('Duodamas tinkamas service objektas, todel pavyksta', () => {
    document.body.innerHTML = '<div id="services_content" class="row"></div>';
    const servObj = new Services('#services_content', [{
        icon: 'globe',
        title: 'Service',
        description: 'Lorem ipsum'
    }]);
    expect(servObj.init()).toBeTruthy();
})

test('Dami dami', () => {
    expect(2 * 2).toBe(4);
})
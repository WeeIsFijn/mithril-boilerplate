import  m  from 'mithril';

let loaded = 'loaded';

export class Hello {
    constructor() {
        this.count = 0;
    }

    increment = () => { console.log('incrementing'); this.count = this.count + 1;}
    
    view() {
        return (
            <span>
                <h1>Component {this.count}</h1>
                <button onclick={ this.increment }>count up</button>
            </span>
        );
    }
}

m.mount(document.body, Hello );
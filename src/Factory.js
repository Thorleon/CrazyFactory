Factory {

    randomArray() {
        const pieceArray = ['wood', 'iron', 'coal', 'metal', 'shit'];
        return pieceArray
            .sort(() => .5 - Math.random())
            .slice(0, Math.floor(Math.random() * pieceArray.length));
    }

    randomObject() {
        const pieceObject = {
            worker: {
                name: 'Szeregowy aaaa',
                drunk: true
            },
            inpector: {
                name: 'Inspector bbb',
                drunk: true
            },
            doctor: {
                name: 'Doktor cccc',
                drunk: false
            }
        };
        Object.freeze(pieceObject);
        const keys = Object.keys(pieceObject)
            .sort(() => .5 - Math.random())
            .slice(0, Math.floor(Math.random() * Object.keys(pieceObject).length));
        const objectToSend = {};
        for (let key of keys) {
            objectToSend[key] = pieceObject[key];
        }
        return objectToSend;
    }

    fetchBoss() {

    }

    producePiece(type) {
        switch (type) {
            case 'resources':
                return this.randomArray();
            case 'workers':
                return this.randomObject();
            case 'boss':
                return this.fetchBoss();
        }
    }

    generateSync(type) {
        return this.producePiece(type);
    }

    generateAsync(type) {
        setTimeout(() => {
            this.producePiece(type);
        }, 3000);
    }

    generate(type) {
        const synchronous = Math.random() < .5;
        if (synchronous) {
            this.generateSync(type);
        } else {
            this.generateAsync(type);
        }
    }
}
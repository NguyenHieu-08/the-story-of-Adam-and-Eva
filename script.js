class Apple {
    constructor(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    isEmpty() {
        if(this.weight < 1) {
            return true;
        } else return false;
    }

    decrease() {
        if(!this.isEmpty()) {
            this.weight--;
        } else {
            alert("Táo đã hết")
        }
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        if(this.gender === 1) {
            return true
        } else return false
    }
    
    setGender() {
        if(this.isMale()) {
            return 'Male'
        } else {
            return 'Female'
        }
    }

    checkApple(apple) {
        return apple.isEmpty();
    }

    eat(apple) {
        if(apple.getWeight() > 1) {
            apple.decrease();
        } else {
            alert('Bạn đã ăn hết');
        }
    }

    say(str) {
        // document.write(str);
        return str;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}

let Adam = new Human('Adam',1,70);
let Eva = new Human('Eva',0,50);
let apple = new Apple(10);

document.write(`Cân nặng của Adam là ${Adam.getWeight()} <br>`);
document.write(`Giới tính của Adam là ${Adam.setGender()} <br>`);
document.write(`Kiểm tra số lượng táo là ${Eva.checkApple(apple)}, ${apple.getWeight()}`);
document.write(`<br>Eva nói chuyện là "${Eva.say('Hi!!! Goodmorning')}"`);
const a = {
  sayHello: function(){ console.log('hello', this.name) }
}

const b = Object.create(a)

b.name = 'Theo';

b.sayHello()
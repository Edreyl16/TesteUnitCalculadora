const calculo = require('./calculadora')

test('Soma dois Numeros', ()=>{

    expect(calculo.soma(10,20)).toBe(30)
})

test('Subtração dois Numeros', ()=>{

    expect(calculo.subtração(20,10)).toBe(10)
})

test('Multiplicação dois Numeros', ()=>{

    expect(calculo.multiplicação(10,20)).toBe(200)
})

test('Divisão dois Numeros', ()=>{

    expect(calculo.divisão(20,10)).toBe(2)
})

test('Resto dois Numeros', ()=>{

    expect(calculo.resto(20,10)).toBe(0)
})

test('Potenciação dois Numeros', ()=>{

    expect(calculo.potenciação(8,4)).toBe(4095) // Propositalmente errado 
})

test('Potenciação dois Numeros', ()=>{

    expect(calculo.potenciação(8,4)).toBe(4096) 
})





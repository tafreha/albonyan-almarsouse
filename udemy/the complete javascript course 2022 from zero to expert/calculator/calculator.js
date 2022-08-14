class calculator {
    constructor(previous_operatorTextElement, current_operatorTextElement) {
        this.previous_operatorTextElement = previous_operatorTextElement
        this.current_operatorTextElement = current_operatorTextElement
        this.clear()
    }
    clear() {
        this.current_operator = '';
        this.previous_operator = ' ';
        this.data_operation = undefined;

    }
    delete() {
        this.current_operator = this.current_operator.toString().slice(0, -1)
    }
    appendNumber(number) {
        // this.current_operator = number
        if (number == '.' && this.current_operator.includes('.')) return
        this.current_operator = this.current_operator.toString() + number.toString()
        console.log(number)
    }
    chooseOperation(operation) {
        if (this.current_operator === '') return
        if (this.previous_operator !== '') {
            this.compute()
        }
        this.operation = operation
        this.previous_operator = this.current_operator
        this.current_operator = ''
        console.log(operation)
    }

    compute() {
        let computation
        const prev = parseFloat(this.previous_operator)
        const current = parseFloat(this.current_operator)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case ' *':
                computation = prev * current
                break;
            case '/':
                computation = prev / current
                break;
            default:
                return
        }
        this.current_operator = computation
        this.operation = undefined
        this.previous_operator = ''
    }
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigit = parseFloat(stringNumber.split('.')[0])
        const decimalDigit = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigit)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigit.toLocaleString('en', {
                maximumFractionDigits: 0
            })
            if (decimalDigit != null) {
                return `${integerDisplay}.${integerDigit}`
            } else {
                return integerDisplay
            }
        }
    }
    updateDisplay() {
        if (this.current_operatorTextElement instanceof Element)
            this.current_operatorTextElement.innerText = this.current_operator
        if (this.operation != null) {
            this.previous_operatorTextElement.innerText = `${this.previous_operator}${this.operation}`
        } else {
            this.previous_operatorTextElement.innerText = ''
        }
    }
}

const data_operation = document.querySelectorAll('[ data-operation]')
const data_number = document.querySelectorAll('[data-number]')
const data_equal = document.querySelector('[data-equal]')
const data_delete = document.querySelector('[data-delete]')
const clear_all = document.querySelector('[ clear-all]')
const previous_operatorTextElement = document.querySelector('[previous-operator]')
const current_operatorTextElement = document.querySelector('[current-operator]')
const calc = new calculator(previous_operatorTextElement, current_operatorTextElement)
data_number.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText)
        calc.updateDisplay()

    })
})

data_operation.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOperation(button.innerText)
        calc.updateDisplay()

    })
})
data_equal.addEventListener('click', button => {

    calc.compute()
    calc.updateDisplay()

})
clear_all.addEventListener('click', button => {

    calc.clear()
    calc.updateDisplay()

})
data_delete.addEventListener('click', button => {

    calc.delete()
    calc.updateDisplay()
})
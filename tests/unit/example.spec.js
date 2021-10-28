import {mount} from '@vue/test-utils'
import Calculator from "../../src/components/Calculator";

describe('Calculator input tests', () => {
    it('Test operand1 input value', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        expect(wrapper.vm.operand1).toBe(1)
    })
    it('Test operand2 input value', async () => {
        const wrapper = mount(Calculator)

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('1')

        expect(wrapper.vm.operand2).toBe(1)
    })
})

describe('Calculator operations tests', () => {
    it('Test sum operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('30')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('20')

        const OperationButton = wrapper.find('button[name=plus]')
        OperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(50)
    })
    it('Test minus operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('50')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('20')

        const OperationButton = wrapper.find('button[name=minus]')
        OperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(30)
    })
    it('Test multiply operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('5')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('7')

        const OperationButton = wrapper.find('button[name=multiply]')
        OperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(35)
    })
    it('Test devide operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('100')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('20')

        const OperationButton = wrapper.find('button[name=devide]')
        OperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(5)
    })
    it('Test devide operation by 0', async () => {
        const wrapper = mount(Calculator)
        const error = "На ноль делить нельзя";
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('100')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('0')

        const OperationButton = wrapper.find('button[name=devide]')
        OperationButton.trigger('click')

        expect(wrapper.vm.result).toEqual(error)
    })
    it('Test degree operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('5')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('2')

        const OperationButton = wrapper.find('button[name=degree]')
        OperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(25)
    })
    it('Test floorDevide operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('55')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('5')

        const OperationButton = wrapper.find('button[name=floorDevide]')
        OperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(11)
    })
    it('Test floorDevide operation by 0', async () => {
        const wrapper = mount(Calculator)
        const error = "На ноль делить нельзя";
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('100')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('0')

        const OperationButton = wrapper.find('button[name=floorDevide]')
        OperationButton.trigger('click')

        expect(wrapper.vm.result).toEqual(error)
    })
})

describe('Calculator delete tests', () => {
    it('Test operand1 delete value', async () => {
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('528')

        const OperationButton = wrapper.find('button[name=delete]')
        OperationButton.trigger('click')

        expect(wrapper.vm.operand1).toBe(52)
    })

    it('Test operand1 delete value', async () => {
        const wrapper = mount(Calculator)
        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('356')

        wrapper.vm.operand="operand2";
        const OperationButton = wrapper.find('button[name=delete]')
        OperationButton.trigger('click')

        expect(wrapper.vm.operand2).toBe(35)
    })
})

describe('Calculator delete tests', () => {
    it('Test operand1 delete value', async () => {
        const wrapper = mount(Calculator)
        const OperationButton = wrapper.find('button[name="5"]')
        OperationButton.trigger('click')

        expect(wrapper.vm.operand1).toEqual("5")
    })

    it('Test operand1 delete value', async () => {
        const wrapper = mount(Calculator)
        wrapper.vm.operand="operand2";
        const OperationButton1 = wrapper.find('button[name="3"]')
        OperationButton1.trigger('click')

        const OperationButton2 = wrapper.find('button[name="5"]')
        OperationButton2.trigger('click')

        expect(wrapper.vm.operand2).toEqual("35")
    })
})
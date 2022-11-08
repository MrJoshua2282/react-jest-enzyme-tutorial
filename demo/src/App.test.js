import App from './App';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = () => shallow(<App />);
const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`) 

test('rendering without crashing and a non-empty component', () => {
  const wrapper = setup();

  expect(wrapper.exists()).toBe(true)

  console.log(wrapper.debug())
});

test('renders without an error', () => {
const wrapper = setup();
const appComponent = findByTestAttribute(wrapper, 'component-app');

expect(appComponent.length).toBe(1)

})

test('renders increment button', () => {
  const wrapper = setup();
const button = findByTestAttribute(wrapper, 'increment-button')

expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttribute(wrapper, 'counter-display')
  
  expect(counterDisplay.length).toBe(1)
})

test('counter display starts at 0', () => {
const wrapper = setup();
const count = findByTestAttribute(wrapper, 'count').text();

expect(count).toBe('0')
})

test('clicking button increments counter display', () => {
const wrapper = setup();
const button = findByTestAttribute(wrapper, 'increment-button')

button.simulate('click');

const count = findByTestAttribute(wrapper, 'count').text();
expect(count).toBe('1')
})

test('renders decrement button', () => {
  const wrapper = setup();
  const decrementButton = wrapper.find('[data-test="decrement-button"]');

  expect(decrementButton.length).toBe(1)
})

test('clicking decrement button subtracts one from the counter value', () => {
  const wrapper = setup();
  const decrementButton = wrapper.find('[data-test="decrement-button"]');
  const button = findByTestAttribute(wrapper, 'increment-button')

  button.simulate('click');
  decrementButton.simulate('click');

  const count = findByTestAttribute(wrapper, 'count').text();
  expect(count).toBe('0')
})

test('count cannot go below zero', () => {
  const wrapper = setup();
  const decrementButton = wrapper.find('[data-test="decrement-button"]');

  decrementButton.simulate('click');

  const count = findByTestAttribute(wrapper, 'count').text();
  expect(count).toBe('0')
})
test('if counter is decremented at zero a warning message is displayed', () => {
  const wrapper = setup();
  const decrementButton = wrapper.find('[data-test="decrement-button"]');

  decrementButton.simulate('click');

  const warningMessage = wrapper.find('[data-test="warning-message"]');
  expect(warningMessage.length).toBe(1)
})

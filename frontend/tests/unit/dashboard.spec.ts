import { shallowMount } from '@vue/test-utils';
import Dashboard from '@/views/Dashboard.vue';

describe('Dashboard.vue', () => {
  test('renders dashboard component', () => {
    const wrapper = shallowMount(Dashboard);
    expect(wrapper.element).toMatchSnapshot();
  });
});

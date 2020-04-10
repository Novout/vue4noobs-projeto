import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/pages/Home.vue';

Vue.use(Vuetify); // Dessa forma, o nosso localVue irá conter o Vuetify

describe('Home', () => {
  const localVue = createLocalVue();

  const wrapper = shallowMount(Home, {
    localVue,
  });

  it('home existe', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('header.vue está no componente', () => {
    expect(wrapper.find('.header-stub').exists());
  });

  it('Vue4Noobs está sendo exibido', () => {
    const noobs = wrapper.find('p').text();
    expect(noobs).toBe('Vue4Noobs');
  });
});

import {describe, it, expect} from "vitest";

import {mount} from '@vue/test-utils';
import Header from "@/components/Header.vue";

describe('Header', () => {
    it('renders properly', () => {
        const wrapper = mount(Header);

        expect(wrapper.exists());
    });

    it('to contain "Dashboard"', () => {
        const wrapper = mount(Header);

        expect(wrapper.text()).toContain('Dashboard');
    });
});
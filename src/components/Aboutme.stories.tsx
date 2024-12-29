import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Aboutme from '@/components/Aboutme'; // Adjust the import path to match your project structure
import { within, userEvent } from '@storybook/testing-library';

export default {
    title: 'Components/Aboutme',
    component: Aboutme,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta<typeof Aboutme>;

const Template: StoryFn<typeof Aboutme> = () => <Aboutme />;

export const Default = Template.bind({});
Default.args = {};

Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Simulate clicking the image to trigger the popover
    const image = canvas.getByAltText('つっきーのアイコン画像');
    userEvent.click(image);

    // Ensure the popover is displayed
    const popoverText = await canvas.findByText(/エンジニアになってから/);
    expect(popoverText).toBeInTheDocument();
};

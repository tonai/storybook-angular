import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withThemes } from 'storybook-addon-themes/angular';

import { Button } from '@storybook/angular/demo';

export default {
  title: 'Button',
  component: Button,
  decorators: [withThemes],
  parameters: {
    themes: {
      list: [
        { name: 'twitter', color: '#00aced', default: true, class: 'theme-twt' },
        { name: 'facebook', color: '#3b5998', class: 'theme-fb' },
      ]
    }
  },
};

export const Text = () => ({
  component: Button,
  props: {
    text: 'Hello Button',
  },
});

export const Emoji = () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
});

export const WithSomeEmojiAndAction = () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
    onClick: action('This was clicked OMG'),
  },
});

export const ButtonWithLinkToAnotherStory = () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
});

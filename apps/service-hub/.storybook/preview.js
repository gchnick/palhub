export const parameters = {
  options: {
    storySort: {
      order: [
        'Design system',
        ['Molecules', 'Organinms', 'Templates', 'Pages'],
      ],
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#fffbfe' },
      { name: 'dark', value: '#1c1b1f' },
    ],
  },
  theme: {
    selector: 'body',
    dataAttr: 'data-theme',
    nameLightTheme: 'light',
    nameDarkTheme: 'dark',
  },
};

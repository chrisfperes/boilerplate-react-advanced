import Main from '.';

export default {
  title: 'Main',
  component: Main,
};

export const Basic = (args: any) => <Main {...args} />;

Basic.args = {
  title: 'Blabl',
  description: 'Blabibla',
};

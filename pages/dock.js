import { Wrapper, Everything } from '../containers';
import { Head } from '../components';
import { Documentation } from '../containers';

export default () => (
  <span>
    <Head />
    <Wrapper headerBgActive={true}>
      <Documentation />
    </Wrapper>
  </span>
)

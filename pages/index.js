import { Wrapper, Everything, Analytic } from '../containers';
import { Head } from '../components';

export default () => (
  <span>
    <Head />
    <Wrapper headerBgActive={false}>
      <Everything />
      <Analytic />
    </Wrapper>
  </span>
)

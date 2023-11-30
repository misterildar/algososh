import { Circle } from './circle';
import { render } from '@testing-library/react';
import { ElementStates } from '../../../types/element-states';

describe('Тестирование компонента Circle', () => {
  it('без буквы', () => {
    const circleWithOutText = render(<Circle />);
    expect(circleWithOutText).toMatchSnapshot();
  })

  it('с буквами', () => {
    const circleLetter = render(<Circle letter='test' />);
    expect(circleLetter).toMatchSnapshot();
  })

  it('с head', () => {
    const circleHead = render(<Circle head='head' />);
    expect(circleHead).toMatchSnapshot();
  })

  it('с react-элементом в head', () => {
    const circleElementHead = render(<Circle head={<Circle />} />);
    expect(circleElementHead).toMatchSnapshot();
  })

  it('с tail', () => {
    const circleTail = render(<Circle tail='tail' />);
    expect(circleTail).toMatchSnapshot();
  })

  it('с react-элементом в tail', () => {
    const circleElementTail = render(<Circle tail={<Circle />} u />);
    expect(circleElementTail).toMatchSnapshot();
  })

  it('с index', () => {
    const circleIndex = render(<Circle index={0} />);
    expect(circleIndex).toMatchSnapshot();
  })

  it('с пропом isSmall ===  true', () => {
    const circleSmall = render(<Circle isSmall />);
    expect(circleSmall).toMatchSnapshot();
  })

  it('в состоянии default', () => {
    const circleDefault = render(<Circle state={ElementStates.Default} />);
    expect(circleDefault).toMatchSnapshot();
  })

  it('в состоянии changing', () => {
    const circleChanging = render(<Circle state={ElementStates.Changing} />);
    expect(circleChanging).toMatchSnapshot();
  })

  it('в состоянии modified', () => {
    const circleModified = render(<Circle state={ElementStates.Modified} />);
    expect(circleModified).toMatchSnapshot();
  })
})
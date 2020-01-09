import {useField} from '@kne/react-form';
import useUIDecorator from './useUIDecorator';
import useBlurDecorator from './useBlurDecorator';
import useChangeDecorator from './useChangeDecorator';

export default ({realtime, debounce = 300, ...props}) => {
    const fieldProps = useField(props),
        changeProps = useChangeDecorator(Object.assign({debounce}, fieldProps)),
        blurProps = useBlurDecorator(fieldProps);
    return useUIDecorator(realtime ? changeProps : blurProps);
};

export const useOnChange = (props) => {
    const fieldProps = useField(props),
        changeProps = useChangeDecorator(fieldProps);
    return useUIDecorator(changeProps);
};

export const useOnBlur = (props) => {
    const fieldProps = useField(props),
        blurProps = useBlurDecorator(fieldProps);
    return useUIDecorator(blurProps);
};
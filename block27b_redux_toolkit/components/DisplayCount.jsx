import DisplayHeader from './DisplayHeader';
import DisplayNumber from './DisplayNumber';

const DisplayCount = () => {
    return (
        <>
            <DisplayHeader value="Current Count" />
            <DisplayNumber />
        </>
    );
}

export default DisplayCount;
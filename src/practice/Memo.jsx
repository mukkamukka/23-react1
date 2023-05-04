import { useEffect, useMemo, useState, useRef } from "react"

const UseEffectTest= () => {
    const [count, setCount] = useState(0);
    const countUp = () => setCount(count + 1);

    useEffect(() => {
        console.log("useEffect!!", count);
    }) 
    //배열을 안주면 렌더링될때마다 실행
    //빈배열을 주면 처음 렌더링될때만 실행
    //state를 주게 되면 state값이 변할때마다 실행

    return(
        <div>
            <p>{count}번 클릭</p>
            <button onClick={countUp}>Click!</button>
        </div>
    );
};

const UseMemoTest= () => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = useMemo(() => {
        return{
            country: isKorea ? '한국' : '일본'
        }
    }, [isKorea])

    useEffect(() => {
        console.log('useEfeect호출')
        //무거운작업
    },[location])

    return(
        <header className="Test-Header">
            <h2>하루에 몇 끼 먹어요?</h2>
            <input type="number" value={number} onChange={(e) => setNumber
            (e.target.value)}/>
            <hr/>
            <h2>어느 나라에 있어요?</h2>
            <p>나라: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>Update</button>
        </header>
    )
};

function UseRefInputTest() {
    const [text, setText] = useState('');
    const nameInput = useRef();

    const onChange = e => {
        setText(e.target.value)
        console.log("값변화")
    };

    const onReset = () => {
        setText('');
        nameInput.current.focus();
        console.log("초기화");
    };

    return(
        <div>
            <input
                name="name"
                onChange={onChange}
                value={text}
                ref={nameInput}
            />
            <button onClick={onReset}초기화></button>
            <div>
                <b>내용: </b>
                {text}
            </div>
        </div>
    )
}

export default UseRefInputTest;
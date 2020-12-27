import React,{memo} from 'react';

const HabitAddForm = memo(props => {
    // 변수 const 선언해주고 부를땐 바로 변수에 접근가능하기 때문에 this 때고 불러주면돼~
    const formRef  = React.createRef();

    const inputRef = React.createRef();
   
    const onSubmit = event =>{
      
        event.preventDefault(); 
        const name = inputRef.current.value;
        
        name && props.onAdd(name);
        
        formRef.current.reset();
    };



    return (
        // form에선 -> 폼이 완료되서 사용자가 버튼 누르면 submit이벤트 발생해 -> onSubmit이라는 함수 호출할것
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit"/>
            <button className="add-button">Add</button>
        </form>
    );
            
    });

export default HabitAddForm;
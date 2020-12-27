import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    // 멤버 변수 적어서 함수호출해주면 ref라는 오브젝트 생기고 간단히 원하는 요소에 ref에다가 전달해주면돼! ref={this.inputref} 클래스안에 있는 것이니 무조건 this써줘야!
    inputRef = React.createRef(); // ref = 세리퀄렉터와 같은 친구
    //브라우저에서 할때 돔요소에 접근해서 그 요소의 값이나 클릭이벤트 등록했던것처럼
    //리액트는 바로 돔요소에 접근하지 않고 필요할때 react에서 제공하는 creatRef 이용하여멤버변수 정의한 다음에
    // 원하는 리액트 컴포넌트의 ref={멤버변수}로 연결해주면 된다!

    //onSubmit 이라는 멤버변수가 있는데 항상 이벤트를 받아
    onSubmit = event => {
        //기본적으로 submit발생되면 페이지가 reloaading되거나 새로고침된다고 예상하기때문에
        event.preventDefault(); // 브라우저의 기본 기능 취소해줘! -> 더이상 새로고침 되지않아
        // 사용자가 input에 입력한 이름으로 새로운 습관 만들어야해 = 입력된 데이터 알아와야
        //console.log(this.inputRef.current.value);

        //이제 habit의 이름을 inputRef로 받아오고
        const name = this.inputRef.current.value;
        // 이름이 있다면 && (텅텅비어져있지 않다면)
        // props에 전달된 onAdd라는 함수에 이름을 전달해줄것! -> 없으니 ADD 함수 생성해줘야해(부모 클래스에서 전달받아오기)
        name && this.props.onAdd(name);
        // Habits에 선언했기때문에 넘겨받아오면돼~
        this.inputRef.current.value = '';
        // formRef = React.createRef();
        // this.formRef.current.reset();
        // form 태그 안에 ref={this.formRef}
    }
    render() {
        return (
            // form에선 -> 폼이 완료되서 사용자가 버튼 누르면 submit이벤트 발생해 -> onSubmit이라는 함수 호출할것
            <form action="" className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
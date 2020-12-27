import React, { Component } from 'react';
import '../app.css';
class Habit extends Component {
    componentDidMount(){ // 컴포넌트 ui상에 등록&사용자에게 보여지게 되었을때
        console.log(`habit : ${this.props.habit.name} mounted`);

    }

    componentWillUnmount(){ //지우기전에 호출
        console.log(`habit : ${this.props.habit.name} will unmounted`);
    }


    // 아무런 상태 없고 prop로 전달된 아이만  보여주고 있어
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
        //habit을 전달한다
    }

    handleDecrement = () =>{
        this.props.onDecrement(this.props.habit);
       
    }
    /* <button className ="habit-button habit-delete" onClick={() => this.props.onDelete(this.props.habit)}> */
    // /* // 불필요하게 => arrow function 생성되는것 막기위해 클래스 안에 멤버 변수 설정해놓고 사용하는게 더 좋아! */
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }

// 부모에서 데이터 props로 전달, 데이터 업데이트 :prop으로 전달된 콜백함수 이용, 실제 데이터 가진 부모 컨포넌트에서 처리되도록
    render() {
        console.log(this.props.habit); //외부로 부터 받아오는 데이터는 props라는 클래스에 저장되어있어! 이를 통해 접근하면돼
        // 이거 대신 아래꺼 편하게@ const habitName = this.props.habit.name;
        const {name, count} = this.props.habit; //자동으로 데이터가 들어가게돼!!! 대신 동일한 변수이름 사용해야한다! ㅎㅎ
        // const {name} = this.props.habit; 
        // const {count} = this.props;  // pure
        return (
            
            <li className="habit">
               <span className="habit-name">{name}</span>
               <span className="habit-count">{count}</span> 
               {/* //클래스 안에 데이터 표현 this */}
               <button className ="habit-button habit-increase" onClick={this.handleIncrement}>
                   <i className="fas fa-plus-square" ></i>
               </button>
               
               <button className ="habit-button habit-decrease" onClick={this.handleDecrement}>
                   <i className="fas fa-minus-square"></i>
               </button>
               <button className ="habit-button habit-delete" onClick={this.handleDelete}>

                   <i className="fas fa-trash"></i>
               </button>

           </li>
        );
    }
}

export default Habit;
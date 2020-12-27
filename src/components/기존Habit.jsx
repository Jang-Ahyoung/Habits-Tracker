import React, { Component } from 'react';
import '../app.css';
class Habit_ extends Component {
    state = { // state라는 멤버 변수가있어!
        count: 0,
    }

    handleIncrement = () => { // 이 멤버 변수의 =>는 한함수를 가리키고 있어 (event)받기도해!
        //state오브젝트 안의 count증가한뒤 state업데이트한다
        //그냥 부분적으로 오브젝트안의 데이터 변경하면 업데이트됐는지 리액트는 몰라->전체적인 오브젝트! state를 새로 만들어서
        this.setState({ count: this.state.count + 1 });// 전체적인 리액트는 몰라도 => 전체적인 
        //전체적인 state를 업데이트 해줘야해!
    }

    // 미리 내용을 적어놓으면 재사용이 떨어져! 재사용 높이기 위해서는 데이터 받아서 해당하는 데이터 보여줄수있도록 -> 사용자가 지정해서 쓸수있도록 하는것이 가능해주도록 하는것 =props이용
    handleDecrement = () => {
        const count = this.state.count - 1

        this.setState(
            { count: count < 0 ? 0 : count }
        )

    }
    render() {
        console.log(this.props.habit); //외부로 부터 받아오는 데이터는 props라는 클래스에 저장되어있어! 이를 통해 접근하면돼
        // 이거 대신 아래꺼 편하게@ const habitName = this.props.habit.name;
        const { name, count } = this.props.habit; //자동으로 데이터가 들어가게돼!!! 대신 동일한 변수이름 사용해야한다! ㅎㅎ
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                {/* //클래스 안에 데이터 표현 this */}
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square" ></i>
                </button>

                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit_;
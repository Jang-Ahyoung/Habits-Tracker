import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';
import '../app.css'

class Habits extends Component {

    handleIncrement = habit => {
        this.props.onIncrement(habit);
    };

    handleDecrement = habit => {
        this.props.onDecrement(habit);
    };

    // 어떤 걸 지울건지 알아야되 habit -> 지우고자하는 habit인자로 전달돼면
    handleDelete = habit => {
        this.props.onDelete(habit);
    }

    // 해빗의 이름이 오면 
    handleAdd = name => {
        // 동일하게 이름을 전달해줄거야!
        // 최종적으로 app에 모든 함수가 정의되 있으니 이 Habits에도 onAdd 전달해주어야해!
        this.props.onAdd(name);
    }
    render() {
        // 이 컨포넌트는 아무런 데이터도 없는 멍청한
        // 대신 prop에 전달된 습관들의 배열을 돌며 Habit라는 컨포넌트로 변경해 보여주는
        return (
            <div className="habits-container">
                <div className="habits-border"></div>
                <div className="habits-border2"></div>
                <HabitAddForm onAdd={this.handleAdd} />
                <ul className="habits-content">
                    {
                        this.props.habits.map(habit => (
                            <Habit
                                key={habit.id}
                                habit={habit}
                                // count = {habit.count} // 안에있는 데이터 수정하면 결국 동일한 오브젝트로 판단하기때문에 setState이용해 전체적인 오브젝트 업데이트 해준것 처럼
                                // 전달할때 변화하는 것 따로 오브젝트로 떼서 전달해주면 된다! 
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete} />
                        ))
                    }
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </div>
        );
    }
}

export default Habits;
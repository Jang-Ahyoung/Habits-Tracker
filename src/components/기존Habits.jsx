import React, { Component } from 'react';
import Habit from './Habit';

class Habits extends Component {
    state = { // state 안에는 배열을 가지고 있는데
        habits: [ // 배열 안에 3가지 habit이라는 오브젝트가있어
            // 컴플래인
            //리스트에는 고유한 번호가 있어야돼! -> id값 배정해서 react가 변경되어진 자식 요소 더 잘 알아보게
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Reading', count: 0 },
            { id: 3, name: 'Reading', count: 0 }
        ]
    };
    // 이제 인자는 habit으로 전달해주어야해!
    // 전달받아진 habit에 있는 count를 업데이트 할거야
    handleIncrement = habit => {
        console.log(habit);
        const habits = [...this.state.habits]; // habit의 오브젝트 복사하는것 -> state에 있는 habit이라는 배열 하나씩 복사해 새로운 배열을 만들고
        const index = habits.indexOf(habit); // 새로만든 배열의 habit을 찾아서
        habits[index].count++; // 새로만든 배열에 있는 count 증가시켜준다음 -> state 직접적으로 수정해주는 것은 정말 안좋아!!!
        //리액트는 바보라서 복사해온 새로만든 배열을 업데이트 해줘야해
        this.setState({ habits: habits }); //{habits:habits} 동일한 이름은 {habits} 하나로 줄여줄수있어
        // 부분적으로 업데이트 해주면 몰라서 새로 전체를 업데이트 해줘야해!
        // this.state.habits[index].count++;
    };

    handleDecrement = habit => {
        console.log(habit);
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1; // 먼저 계산해본 다음
        habits[index].count = count < 0 ? 0 : count;
        // 실제 카운터에 데이터 업데이트할때는 카운트 값이 0보다 작을떄 0 아니면 새로 계산한 count값 할당해줘!
        this.setState({ habits: habits });
    };

    // 어떤 걸 지울건지 알아야되 habit -> 지우고자하는 habit인자로 전달돼면
    handleDelete = habit => {
        // 항상 새로운 데이터 만든 다음에 그 데이터를 전체적으로 업데이트 해줘야해!
        // habit 돌면서 동일한 habit에 있는 id가 아닌 아이들만
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        // 기존 state에 있는 모든 habits 빙글빙글 돌면서 전달받은 habit에 해당하는 id만 쏙 빼어 복사하여 할당
        this.setState({ habits: habits });

    }
    render() {
        return (
            <>
                <ul>
                    {/* render에서 3개의 배열 나타날 수 있게 해줄거야, 일단 자바 스크립트 코드 쓸거기때문에 {}써줘야해! */}
                    {/* this.state.habits를 map이용해 빙글빙글돌건대, 각각의 habit을 받으면 알맞는 jsx로 변환해주면돼
                보라색 habit이라는 prop이름에 각각의 데이터 habit값을 전달해
                Habit에서의 접근법 -> this.props.이용하면 전달된 데이터가 자동으로 props로 전달돼!
                id는 기본 prop key안에 habit의 id 지정해주면 돼 `
                즉 ul안에 각habit을 Habit 컴포넌트 이용해서 만들어준 것
                이럴게 전달된 후 원래 Habit에서 쓰던 state값은 전달되지않아!!
                데이터가 Habits에 있기때문에 업데이트 하고 변경하는 로직도 여기있어야해!!
                이렇게 콜백함수도 전달이 가능하다 !!! */}
                    {
                        this.state.habits.map(habit => (
                            <Habit
                                key={habit.id}
                                habit={habit}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete} />
                        ))
                    }

                </ul>

            </>
        );
    }
}

export default Habits;
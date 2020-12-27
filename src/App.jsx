import './app.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Habits from './components/Habits';
import React, { PureComponent } from 'react';
import Navbar from './components/navbar';

class App extends PureComponent {

  state ={
        habits:[
            { id : 1, name : 'Reading', count : 0 },
            { id : 2, name : 'Running', count : 0 },
            { id : 3, name : 'Coding', count : 0 }
        ]
    };
    handleIncrement = habit => { 
        console.log(habit);
        const habits = this.state.habits.map(item=>{
          if(item.id === habit.id){
            return {...habit, count:habit.count+1}; // ... 하면 기존의 키와 밸류 들이 하나 씩 복사해와서 붙여넣기만하면 같은 배열이고, 뒤에 count값만 바꿔줘!!
            // id가 똑같다면 새로운 habit 오브젝트 만드는데 카운트만 1증가
          }
          return item; // 아이디가 같지 않다면 기존의 받은 아이템을 리턴

        })
        this.setState({habits:habits});
    };

    handleDecrement = habit =>{
      const habits = this.state.habits.map(item=>{
        if(item.id === habit.id){
          const count = habit.count-1;
          return {...habit, count:count<0? 0: count};
          // id가 똑같다면 새로운 habit 오브젝트 만드는데 카운트만 1증가
        }
        return item;

      })
      this.setState({habits:habits});
    };

  
    handleDelete = habit =>{
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits:habits}); 
    }
    //이름을 받아서 이름에 맏는 새로운 habit추가해주면 된다!
    handleAdd = name =>{
      // 새로운 것이 추가되면 항상 복사해와야해
      // 새로운 배열만들고 새로 생성된 것엔 고유한 아이디를 추가! name 동일한 이름일땐 생략이 가능하다
      const habits = [...this.state.habits,{id:Date.now(),name:name, count:0}];
      // 이렇게 만든다음 this.setState를 이용해 전체적으로 업데이트 해주면된다
      this.setState({habits});
    }

    handleReset = () =>{
      const habits = this.state.habits.map(habit=>{
        if (habit.count!==0){
          return {...habit,count:0};
        }
        return habit; //0이라면 habit 리턴해준다
      })
        this.setState({habits});

    }
  render() {
    return (
       <>
       {/* this.state.habits에 있는 배열중에 현재진행중인 배열중 카운터가 0이상인 친구들 필터해 그것의 길이를 전달해 줄것!  
       item.counts 아니야! 변수하나도 신경써줘야해!!! */}
        <Navbar totalCount={this.state.habits.filter(item=>item.count>0).length}/>
        
        {/* // Habits에 전달해줘야해 */}
        <Habits habits = {this.state.habits}
        onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement} 
                    onDelete ={this.handleDelete}
                    onAdd ={this.handleAdd}
                    onReset={this.handleReset}/>
       </>
    );
  }
}

export default App;

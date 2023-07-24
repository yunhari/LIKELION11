import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '이윤하',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '김철수',
        phone: '010-0000-0001'
      }
    ]
  }

  handleCreate = (data) => { //콜백함수
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data})
    }) // concat은 메서드, 배열을 복사하고 새로운 요소 추가하는 것
    console.log(data);
  }

  handleRemove = (id) => { //삭제기능
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !==id) // filter써서 그 해당내용만 빼고!
    })
  }

  handleUpdate = (id,data) => { //수정 기능
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? {...info, ...data} // 새 객체 만들어 기존 값 덮어씀
          : info // 기존 유지
      )
    })
  }
  render() {
      const { information } = this.state;
      return(
      <div>
        <PhoneForm
          onCreate={this.handleCreate} // handlecreate호출위한 props
        /> 
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
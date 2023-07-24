import { render } from "@testing-library/react";
import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0 // info가 indefined일때 방지, 기본값 설정
          // 크래시 예방
    },
  }

  state = { // editing,name,phone등의 상태를 나타내는! 객체
    //수정 눌렀을 때 editing값 true설정, true라면 텍스트 값을 input형태로 사용자가 입력 가능토록
    editing: false, //그래서 일반경우엔 false로 지정!
    name: '', //아무거나 들어갈수 있으니 빈문자열
    phone: '',
  }

  handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove에 id넣어서호출
    const { info, onRemove } = this.props;
    onRemove(info.id); // 삭제버튼 누르면 onRemove에 id넣어 호출
  }

  handleToggleEdit =() => { // editing값 반전(토글)시키는 함수. false<=>true 
    const { editing } = this.state; // 구조분해 할당을 사용해 state에서 editing분리 후 변수생성, 그 값은 this.state.editing
    this.setState({ editing: !editing}); // state상태를 업데이트하는 함수 호출. !로 editing값 반전시키기
  }

  handleChange = (e) => { // input에서 이벤트 발생시 호출되는 함수
    const { name, value } = e.target;
    this.setState({
      [name] : value
    });
  }

  componentDidUpdate(prevProps, prevState) { 
    //수정로직 업데이트 후, 생명주기메서드 (리랜더링 후 화면갱신하니)
   //prevProps (이전프롭스들과) prvState(이전상태)를 기준삼아 변경한단 뜻

    const { info, onUpdate } = this.props;
    //this.props객체로부터 info, onupdate라는 두개의 변수 생성(값담음!)

    if (!prevState.editing && this.state.editing) {
      // editing 값이 이전엔 false , 현재엔 true로 바뀔 때 즉 수정모드일 때
      //info의 값을 state에 넣어준다
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }

    if (prevState.editing && !this.state.editing) {
      //editing값이 이전엔 true -> 현재엔 false로 바뀔 때 즉 일반모드일 때
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  render() {
    const style = {
      border: '1px solid grey',
      padding: '10px', 
      margin: '10px'
    };

    const {editing} = this.state;

    if (editing) { //수정모드
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="전화번호"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>적용</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      );
    }

    // 일반모드
    const { name, phone } = this.props.info;

    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default PhoneInfo; //이름과 전화번호값이 담김 객체 Info

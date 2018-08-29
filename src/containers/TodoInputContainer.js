import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// 액션 생성 함수들을 한꺼번에 불러옵니다.
import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component {
    render() {
        return (
            <TodoInput />
        );
    }
}

/*  이번에는 mapStateToProps와 mapDispatchProps 함수에 대한 레퍼런스를
    따로 만들지 않고, 그 내부에 바로 정의해 주었습니다.
*/

export default connect(
    (state) => ({
        value: state.input.get('value')
    }),
    (dispatch) => ({
        /*  bindActionCreators를 사용하면 자동으로 다음 작업들을 합니다.
            {
                actionCreator: (...params) => dispatch(actionCreator(...params))
            }
            일일이 dispatch할 필요가 없습니다.
            InputActions에는 다음 작업이 되어 있는 것.
            InputActions: {
                setInput: (value) => dispatch(inputActions.setInput(value))
            }
            나중에 이를 호출할 때는 this.props.InputActions.setInput을 호출
        */
       InputActions: bindActionCreators(inputActions, dispatch),
       todosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoInputContainer);
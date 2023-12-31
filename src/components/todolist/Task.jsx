import styled from 'styled-components';
import { RiDeleteBin6Line, RiCheckboxCircleLine } from 'react-icons/ri';

const Tasks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7f7;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;

  @media (max-width: 536px) {
    flex-direction: column;
  }
`;
const Content = styled.div`
  padding: 10px 0;
  margin-bottom: 10px;

  @media (max-width: 536px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.p`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 536px) {
    border-bottom: 1px solid #cecece;
  }
`;

const Category = styled.span`
  font-size: 16px;
  background-color: #2384e6f5;
  color: #fff;
  padding: 5px;
  margin-left: 10px;
  border-radius: 4px;

  @media (max-width: 536px) {
    margin-left: 0px;
  }
`;

const ContentButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Task = ({ task, deleteTask, completeTask }) => {
  return (
    <Tasks style={{ textDecoration: task.isComplete ? 'line-through' : '' }}>
      <Content>
        <Text>{task.text}</Text>
        <Category>{task.category}</Category>
      </Content>

      <ContentButtons>
        <RiCheckboxCircleLine
          size={28}
          style={{ color: '#5cb85c', cursor: 'pointer', marginRight: '8px' }}
          onClick={() => completeTask(task.id)}
          Completar
        />
        <RiDeleteBin6Line
          size={28}
          style={{ color: '#e54', cursor: 'pointer' }}
          onClick={() => deleteTask(task.id)}
          X
        />
      </ContentButtons>
    </Tasks>
  );
};

export default Task;

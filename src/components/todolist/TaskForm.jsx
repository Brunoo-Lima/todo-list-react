import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  Container,
  Content,
  SubContent,
  Title,
  Text,
} from './styles/TaskFormStyle';
import Input from '../form/Input';
import Select from '../form/Select';
import { UserContext } from '../../UserContext';

const TaskForm = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const { addTask } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) {
      toast.warning('Preencha todos os campos');
    } else {
      addTask(text, category);
      setText('');
      setCategory('');
      toast.success('Tarefa criada com sucesso');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>Adicionar tarefa</Title>
        <Content>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite a tarefa"
          />
          <SubContent>
            <Select
              options={[
                { value: '', label: 'Selecione a categoria' },
                { value: 'Study', label: 'Estudo' },
                { value: 'Personal', label: 'Pessoal' },
                { value: 'Work', label: 'Trabalho' },
              ]}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <Button type="submit">
              <Text>Adicionar</Text>
            </Button>
          </SubContent>
        </Content>
      </form>
    </Container>
  );
};

export default TaskForm;

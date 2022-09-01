import BorderPane from './components/layout/BorderPane';
import Center from './components/layout/Center';
import DrawingBoard from './components/drawing_board/DrawingBoard';
import Title from './components/Title';

const App = () => {

  const title = 'Pixel Art';

  return (
    <Center>
      <BorderPane top={<Title title={title} />} center={<DrawingBoard/>} />
    </Center>
  );
}

export default App;

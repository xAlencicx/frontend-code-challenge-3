import BorderPane from './components/layout/BorderPane';
import Center from './components/layout/Center';
import Page from './components/layout/Page';
import DrawingBoard from './components/drawing_board/DrawingBoard';
import Title from './components/Title';

const App = () => {

  const title = 'Pixel Art';

  return (
    <Page>
      <Center>
        <BorderPane top={<Title title={title} />} center={<DrawingBoard/>} />
      </Center>
    </Page>
  );
}

export default App;

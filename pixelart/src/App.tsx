import BorderPane from './components/layout/BorderPane';
import Center from './components/layout/Center';
import Page from './components/layout/Page';
import DrawingBoard from './components/drawing_board/DrawingBoard';
import { useState } from 'react';
import GRID_SIZE from './enums/GRID_SIZE';
import Toolbar from './components/toolbar/Toolbar';
import DIRECTION from './enums/DIRECTION';
import FILL_TOOL from './enums/FILL_TOOL';
import Column from './components/layout/Column';
import FillToolSetting from './models/FillToolSetting';
import Row from './components/layout/Row';
import useToolbar from './hooks/UseToolbar';
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

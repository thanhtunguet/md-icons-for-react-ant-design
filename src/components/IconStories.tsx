import { IconDefinition } from '@ant-design/icons-svg/lib/types';
import Modal from 'antd/lib/modal';
import Typography from 'antd/lib/typography';
import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Col, Container, Row } from 'reactstrap';
import { v4 } from 'uuid';
import { pascalCase } from '../helpers/pascal-case';
import { buildIconSample } from '../helpers/sample';
import * as icons from '../public';
import IconStory from './IconStory';

const { Title } = Typography;

const codeMirrorOptions = {
  lineNumber: true,
  theme: 'material-darker',
  mode: 'javascript',
  readOnly: true,
};

const numOfIcons = Object.keys(icons).length;
const publicIcons = Object.entries(icons);
let iconRows = [];

for (let i: number = 1; i <= numOfIcons; i += 12) {
  const start: number = i;
  const end: number = Math.min(i + 12, numOfIcons);
  iconRows = [
    ...iconRows,
    publicIcons.slice(start, end),
  ];
}

function IconStories() {
  const [icon, setIcon] = React.useState<IconDefinition>(null);

  const handleSelectIcon = React.useCallback(
    (icon: IconDefinition) => {
      setIcon(icon);
    },
    [setIcon],
  );

  const handleCancel = React.useCallback(
    () => {
      setIcon(null);
    },
    [setIcon],
  );

  const modal = React.useMemo(
    () => {
      const pascalCaseName: string = icon ? pascalCase(icon.name) : null;
      return (
        <Modal visible={!!icon}
          title={icon && `Icon usage: ${icon.name}`}
          width={900}
          onCancel={handleCancel}
          onOk={handleCancel}>
          {icon && (
            <CodeMirror value={buildIconSample(pascalCaseName, icon)}
              onBeforeChange={null}
              options={codeMirrorOptions}
            />
          )}
        </Modal>
      );
    },
    [icon, handleCancel],
  );

  const icons = React.useMemo(
    () => {
      return iconRows.map((iconRow) => (
        <IconStory icons={iconRow} key={v4()} onClick={handleSelectIcon} />
      ));
    },
    [handleSelectIcon],
  );

  return (
    <Container fluid>
      <Row>
        <Col>
          <Title>Material Design Icons for React Ant Design</Title>
        </Col>
      </Row>
      {icons}
      {modal}
    </Container>
  );
}

export default IconStories;

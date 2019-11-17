import Icon from '@ant-design/icons-react/lib/components/Icon';
import {IconDefinition} from '@ant-design/icons-svg/lib/types';
import {storiesOf} from '@storybook/react';
import Modal from 'antd/lib/modal';
import Tooltip from 'antd/lib/tooltip';
import * as React from 'react';
import {useState} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {v4} from 'uuid';
import * as icons from './public';

interface IconStoryProps {
  icons: Array<[string, IconDefinition]>;
  onClick?: (icon: IconDefinition) => void;
}

function IconStory(props: IconStoryProps) {

  const handleClick = React.useCallback(
    (icon: IconDefinition) => {
      return () => {
        if (props.onClick) {
          props.onClick(icon);
        }
      };
    },
    [props],
  );

  return (
    <Row>
      <Col className="d-flex justify-content-between icons">
        {props.icons.map(([name, icon]) => {
          if (name.startsWith('Mat')) {
            return (
              <div className="icon" key={name}>
                <Tooltip title={name}>
                  <Icon type={icon} onClick={handleClick(icon)}/>
                </Tooltip>
              </div>
            );
          }
          return null;
        })}
      </Col>
    </Row>
  );
}

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

export function IconStories() {
  const [icon, setIcon] = useState<IconDefinition>(null);

  const handleSelectIcon = React.useCallback(
    (icon: IconDefinition) => {
      setIcon(icon);
    },
    [],
  );

  const handleCancel = React.useCallback(
    () => {
      setIcon(null);
    },
    [],
  );

  return (
    <Container fluid>
      {iconRows.map((iconRow) => (
        <IconStory icons={iconRow} key={v4()} onClick={handleSelectIcon}/>
      ))}
      <Modal visible={!!icon}
             title={icon && icon.name}
             width={900}
             onCancel={handleCancel}
      >
        {icon && (
          <>
            <div>
              <code>
                {`import ${icon.name} from 'md-icons-for-react-ant-design/icons/${icon.name}';`}
              </code>
            </div>
            <div>
              <code>
                {`<Icon type={${icon.name}/>`}
              </code>
            </div>
          </>
        )}
      </Modal>
    </Container>
  );
}

storiesOf('Material Icons', module)
  .add('icons', IconStories);

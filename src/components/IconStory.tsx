import Icon from '@ant-design/icons-react/lib';
import {IconDefinition} from '@ant-design/icons-svg/lib/types';
import Tooltip from 'antd/lib/tooltip';
import React from 'react';
import {Col, Row} from 'reactstrap';

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

export default IconStory;

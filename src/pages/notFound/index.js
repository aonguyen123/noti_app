import React from "react";
import {Result, Button} from "antd";
import {router} from "dva";

const {useHistory} = router;

export default () => {
  const history = useHistory();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => history.goBack()}>
          Back Home
        </Button>
      }
    />
  );
};

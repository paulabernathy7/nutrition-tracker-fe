import React, { useState, useEffect } from "react";
import { ListStyle } from "../styles";
import {
  getUserInfo,
} from "../../../store/actions/updateUserSettings";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroupItem,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const Email = props => {
  const [modal, setModal] = useState(false);

  const [email, setEmail] = useState("");

  useEffect(()=> {
    setEmail(props.data.email);
  }, [props.data.email])

  const toggle = () => setModal(!modal);
  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Email</div>
        <div>{props.data.email}</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Email</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              props.updateUser({email});
            }}
          >
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     userInfo: state.getUserInfo
//   };
// };

export default Email;

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Row, Col } from 'reactstrap';

import './AddShiftModal.scss';

const AddShiftModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Tạo ca mới</ModalHeader>
      <ModalBody className="modal-body">
        <Container>
          <Row>
            <Col>
              <div className="input-group">
                <label htmlFor="start-time-input">Giờ bắt đầu:</label>
                <input type="time" id="start-time-input" />
              </div>
            </Col>
            <Col>
              <div className="input-group">
                <label htmlFor="end-time-input">Giờ kết thúc:</label>
                <input type="time" id="end-time-input" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="input-group">
                <label htmlFor="status-input">Trạng thái:</label>
                <select id="status-input">
                  <option value="available">Chưa diễn ra</option>
                  <option value="unavailable">Đã diễn ra</option>
                  <option value="unavailable">Kết thúc</option>
                </select>
              </div>
            </Col>
            <Col>
              <div className="input-group">
                <label htmlFor="date-input">Ngày:</label>
                <input type="date" id="date-input" />
              </div>
            </Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={toggle}>
          Xác nhận
        </Button>
        <Button color="secondary" onClick={toggle}>
          Hủy bỏ
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddShiftModal;

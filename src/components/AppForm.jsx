import 'bootstrap-daterangepicker/daterangepicker.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import date from '../utils/date';
export default function AppForm() {
  return (
    <Form className="form-inline" onSubmit={(e) => e.preventDefault()}>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <label
            className="col-form-label col-form-label-sm"
            htmlFor="date-range"
          >
            From - To
          </label>
          <DateRangePicker
            initialSettings={{
              startDate: date.today(),
              endDate: date.tomorrow(),
            }}
          >
            <input
              type="text"
              className="form-control  form-control-sm"
              id="date-range"
            />
          </DateRangePicker>
        </Col>
        <Col sm={12} md={6} lg={3} xl={2}>
          <div className="form-group">
            <label
              className="col-form-label col-form-label-sm"
              htmlFor="registration-no"
            >
              Registration No.
            </label>

            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Add Registration No."
              id="registration-no"
            />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3} xl={2}>
          <div className="form-group">
            <label
              className="col-form-label col-form-label-sm"
              htmlFor="reference-no"
            >
              Reference No.
            </label>

            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Add Reference No."
              id="reference-no"
            />
          </div>
        </Col>
        <Col sm={12} md={6} lg={3} xl={2}>
          <div className="form-group">
            <label
              htmlFor="states-select"
              className="col-form-label col-form-label-sm"
            >
              States
            </label>
            <select className="form-select form-select-sm" id="states-select">
              <option defaultValue="">Default</option>
              <option>Transit</option>
              <option>Parked</option>
            </select>
          </div>
        </Col>
        <Col sm={12} md={2} lg={2} xl={1}>
          <label
            className="col-form-label col-form-label-sm"
            htmlFor="button-submit"
          ></label>
          <div className="form-group"></div>

          <button type="submit" className="btn btn-primary" id="button-submit">
            <i className="fas fa-search px-3"></i>
          </button>
        </Col>
        <Col></Col>
      </Row>
    </Form>
  );
}

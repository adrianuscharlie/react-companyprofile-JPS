import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import { Kontak } from "../Data";

export default function Contact() {
  return (
    <>
      <section
        className="kontak mt-0 mt-md-5"
        id="kontak"
        style={{ backgroundColor: "" }}
      >
        <Container className="py-5">
          <Row className="text-center d-flex align-items-center justify-content-center mb-5">
            <Col
              md={4}
              sm={12}
              xs={12}
              className="d-flex justify-content-center"
            >
              <h5 className="h5 py-2 mb-5">HUBUNGI KAMI</h5>
            </Col>
            <p className="lead">
              Untuk informasi lebih lanjut, kemitraan, pertanyaan seputar produk
            </p>
          </Row>
          <Row className="text-center d-flex  align-items-center justify-content-center mb-5">
            {Kontak.map((kontak) => (
              <Col
                lg={3}
                md={6}
                sm={12}
                xs={12}
                className="d-flex justify-content-center align-items-center mb-5"
              >
                <Card style={{ width: "18rem" }}>
                  <i className={kontak.icon + " py-5 kontak-card"}></i>
                  <Card.Body>
                    <Card.Title>{kontak.nama}</Card.Title>
                    <Card.Text>{kontak.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section
        className="maps-hero mt-0 mt-md-5"
        id="maps"
        style={{ backgroundColor: "" }}
      >
        <Container className="py-5">
          <Row className="text-center d-flex align-items-center justify-content-center mb-3">
            <Col
              md={4}
              sm={12}
              xs={12}
              className="d-flex justify-content-center"
            >
              <h5 className="h5 py-2 mb-5">KANTOR KAMI</h5>
            </Col>
          </Row>
          <Row className="d-flex align-items-center justify-content-center mb-5">
            <Col
              xs={12}
              sm={12}
              md={5}
              lg={5}
              className="d-flex justify-content-center align-items-center mb-5  mx-4 py-4"
            >
              <Container>
                <Row>
                  <div
                    id="map-container-google-1"
                    className="iframe-container"
                    style={{ height: "auto" }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.0778922916002!2d110.42096995113604!3d-7.763686407549327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5988b9be74e7%3A0x5a2fb955cfb0e454!2sJl.%20Ring%20Road%20Utara%2C%20Jenengan%2C%20Maguwoharjo%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055281!5e0!3m2!1sen!2sid!4v1675951080317!5m2!1sen!2sid"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Row>
                <Row className="text-center maps p-2" >
                  <h4 className="h4"  style={{color:"black"}}>Kantor Pusat</h4>
                </Row>
              </Container>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={5}
              lg={5}
              className="d-flex justify-content-center align-items-center mb-5  mx-4 py-4"
            >
              <Container>
                <Row>
                  <div
                    id="map-container-google-1"
                    className="iframe-container"
                    style={{ height: "auto" }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253037.94476824644!2d110.43592875362346!3d-7.713389909116743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a446d4faee281%3A0x7cbe092e0c26a5e4!2sJanuputra!5e0!3m2!1sen!2sid!4v1675951324722!5m2!1sen!2sid"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Row>
                <Row className="text-center maps p-2" style={{color:"black"}}>
                  <h4 className="h4">Kantor Operasional</h4>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

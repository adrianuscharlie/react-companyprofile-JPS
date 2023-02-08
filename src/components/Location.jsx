import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import PopUp from "./PopUp";
import Modal from "react-bootstrap/esm/Modal";
import Hero2 from "../assets/Hero Section/2.png";
import Hero1 from "../assets/Hero Section/1.png";
import Carousel from "react-bootstrap/esm/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import Container from "react-bootstrap/esm/Container";
export default function Location(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [isOpen, setIsOpen] = useState(false);

  function togglePopUp() {
    setIsOpen(!isOpen);
  }
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  return (
    <Col md={5} sm={12} xs={12} className="custom-card  mb-5 mx-3 w-30 py-2">
      <Row className="d-flex justify-content-start align-items-center">
        <Col xs={6} className="w-25">
          <img src={props.url} className="img-responsive" width={100} />
        </Col>
        <Col xs={6} className="w-50 ms-5">
          <div className="card-body text-start">
            <div className="card-title">
              <h4 className="h4">{props.nama}</h4>
            </div>
            <div className="card-text">
              <p className="lead">{props.desc}</p>
              <button
                href=""
                onClick={togglePopUp}
                className="button-selengkapnya"
              >
                Selengkapnya
              </button>
              <Modal show={isOpen} onHide={handleClose} className="text-center">
                <Modal.Header closeButton className="custom-modal">
                  <Container className="p-2 d-flex justify-content-center align-items-center">
                    <Row>
                    <Modal.Title style={{color:"rgb(12, 46, 122)",fontWeight:"500"}}>{props.nama}</Modal.Title>
                    <p className="p">{props.desc}</p>
                    </Row>
                  </Container>
                </Modal.Header>
                <Modal.Body className="p-5">
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    <CarouselItem className="hero-item">
                      <img className="img-thumbnail" src={Hero1}/>
                    </CarouselItem>
                    <CarouselItem className="hero-item">
                      <img className="img-thumbnail" src={Hero2} />
                    </CarouselItem>
                  </Carousel>
                </Modal.Body>
                <Modal.Footer>
                  <p className="lead p-2">Terdiri dari 20 kandang dengan kapasitas sebanyak 200 ribu ekor ayam</p>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
}

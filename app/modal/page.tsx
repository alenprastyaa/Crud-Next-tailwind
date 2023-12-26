"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="bg-green-600 font-semibold text-white py-1 px-2 m-5 rounded-lg"
      >
        Launch Modal Button
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-xl font-semibold">
            Tambah Data Produk
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control size="sm" type="text" placeholder="Input Produk" />
          <Form.Control
            className="mt-3"
            size="sm"
            type="text"
            placeholder="Input Price"
          />
        </Modal.Body>
        <div className="flex items-center ml-auto mr-3 mb-2">
          <button
            className="mr-3 bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
          <button
            onClick={handleClose}
            className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Close
          </button>
        </div>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;

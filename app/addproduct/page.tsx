"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { SyntheticEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setIsMutating(true);
    await fetch("http://localhost:3004/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        price: price,
      }),
    });
    setIsMutating(false);
    setTitle("");
    setPrice("");
    router.push("/products");
    router.refresh();
    setShow(false);
  }
  return (
    <>
      <button
        onClick={handleShow}
        className="bg-green-600 font-semibold text-white py-1 px-2 rounded-lg"
      >
        Add product
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
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Input Produk"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              size="sm"
              type="text"
              placeholder="Input Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Modal.Body>
          <div className="flex items-center mr-3 mb-2">
            <button
              className="mr-3 ml-4 bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
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
        </form>
      </Modal>
    </>
  );
}

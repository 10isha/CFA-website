// Sidebar.js
import Icon from '@mui/material/Icon';
import React, { useState } from "react";
// import MaterialIcon, { colorPalette } from "material-icons-react";
import {
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Sidebar = ({ setSelectedKeys }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeModal, setActiveModal] = React.useState(0);
  const modal = [
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"5xl"}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Schedule</ModalHeader>
            <Divider className="my-full" />
            <ModalBody>
              <div>
                <div className="flex flex-col w-full gap-2">
                  <div className="flex flex-row gap-2">
                    <b>05.07.2023</b>
                    <p>Quiz 5 and Assignment 5 Deadline</p>
                  </div>
                  <Divider className="my-full" />
                  <div className="flex flex-row gap-2">
                    <b>05.07.2023</b>
                    <p>Quiz 5 and Assignment 5 Deadline</p>
                  </div>
                  <Divider className="my-full" />
                  <div className="flex flex-row gap-2">
                    <b>05.07.2023</b>
                    <p>Quiz 5 and Assignment 5 Deadline</p>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>,
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"full"}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-semibold">
            Leaderboard week 1 | Winter Analytics
            </ModalHeader>
            <ModalBody>
              {/* <div className="flex flex-col w-full gap-2">
                <p>Leaderboard for Quiz and Assignment 1</p>
                <div className="flex flex-row gap-4"><p>1</p><p>Jahnavi kumar</p></div>
                <Divider className="my-full" />
                <div className="flex flex-row gap-4"><p>2</p><p>Jahnavi kumar</p></div>
                <Divider className="my-full" />
                <div className="flex flex-row gap-4"><p>3</p><p>Jahnavi kumar</p></div>
                <Divider className="my-full" />
                <div className="flex flex-row gap-4"><p>4</p><p>Jahnavi kumar</p></div>
                <Divider className="my-full" />
              </div> */}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>,
  ];
  return (
    <div className={`h-screen bg-gray-200 text-black p-4 w-64`}>
      <ul>
        <li
          className="py-2 border-b border-gray-300 flex flex-row items-center"
          onClick={() => {
            setActiveModal(0);
            onOpen();
          }}
        >
          <Icon sx={{ fontSize: 30 }}>menu_book</Icon>
          {/* <MaterialIcon icon="calendar_month" /> */}
          <p>Schedule</p>
          {activeModal === 0 && modal[activeModal]}
        </li>
        <li
          className="py-2 border-b border-gray-300 flex flex-row items-center"
          onClick={() => {
            setActiveModal(1);
            onOpen();
          }}
        >
          {/* <MaterialIcon icon="military_tech" /> */}
          <Icon sx={{ fontSize: 30 }}>leaderboard</Icon>
          <p>Leaderboard</p>
          {activeModal === 1 && modal[activeModal]}
        </li>
        <hr className="border-t border-black w-full" />
        <li
          className="py-2 border-b border-gray-300"
          onClick={() => {
            setSelectedKeys(new Set(["1"]));
          }}
        >
          {/* <MaterialIcon icon="menu_book" /> */}
          <div className='flex flex-row gap-2'>
          <Icon sx={{ fontSize: 30 }}>menu_book</Icon>
          Week 1</div>
        </li>
        <li
          className="py-2 border-b border-gray-300"
          onClick={() => {
            setSelectedKeys(new Set(["2"]));
          }}
        >
          {/* <MaterialIcon icon="menu_book" /> */}
          <div className='flex flex-row gap-2'>
          <Icon sx={{ fontSize: 30 }}>menu_book</Icon>
          Week 2</div>
        </li>
        <li
          className="py-2 border-b border-gray-300"
          onClick={() => {
            setSelectedKeys(new Set(["3"]));
          }}
        >
          {/* <MaterialIcon icon="menu_book" /> */}
            <div className='flex flex-row gap-2'>
          <Icon sx={{ fontSize: 30 }}>menu_book</Icon>
          Week 3</div>
        </li>
        <li
          className="py-2 border-b border-gray-300"
          onClick={() => {
            setSelectedKeys(new Set(["4"]));
          }}
        >
          {/* <MaterialIcon icon="menu_book" /> */}<div className='flex flex-row gap-2'>
          <Icon sx={{ fontSize: 30 }}>menu_book</Icon>
          Week 4</div>
        </li>
        <li
          className="py-2 border-b border-gray-300"
          onClick={() => {
            setSelectedKeys(new Set(["5"]));
          }}
        >
          {/* <MaterialIcon icon="menu_book" /> */}<div className='flex flex-row gap-2'>
          <Icon sx={{ fontSize: 30 }}>menu_book</Icon>
          Week 5</div>
        </li>
        <li
          className="py-2 border-b border-gray-300"
          onClick={() => {
            setSelectedKeys(new Set(["6"]));
          }}
        >
          {/* <MaterialIcon icon="menu_book" /> */}<div className='flex flex-row gap-2'>
          <Icon sx={{ fontSize: 30 }}>menu_book</Icon>
          Week 6</div>
        </li>
        <li
          className="py-2 border-b border-gray-300"
          onClick={() => {
            setSelectedKeys(new Set(["7"]));
          }}
        >
          {/* <MaterialIcon icon="menu_book" /> */}<div className='flex flex-row gap-2'>
          <Icon sx={{ fontSize: 30 }}>menu_book</Icon>
          Week 7</div>
        </li>
        <li
          className="py-2 border-b border-gray-300"
          onClick={() => {
            setSelectedKeys(new Set(["8"]));
          }}
        >
          {/* <MaterialIcon icon="menu_book" /> */}<div className='flex flex-row gap-2'>
          <Icon sx={{ fontSize: 30 }}>menu_book</Icon>
          Week 8</div>
        </li>
        <li
          className="py-2 border-b border-gray-300"
          onClick={() => {
            setSelectedKeys(new Set(["9"]));
          }}
        >
          {/* <MaterialIcon icon="menu_book" /> */}<div className='flex flex-row gap-2'>
          <Icon sx={{ fontSize: 30 }}>edit</Icon>
          Assessment</div>
        </li>
        <li
          className="py-2 border-b border-gray-300"
          onClick={() => {
            setSelectedKeys(new Set(["10"]));
          }}
        >
          {/* <MaterialIcon icon="menu_book" /> */}<div className='flex flex-row gap-2'>
          <Icon sx={{ fontSize: 30 }}>notestack</Icon>
          Additional Materials</div>
        </li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;

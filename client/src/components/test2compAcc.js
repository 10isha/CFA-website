import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from "@nextui-org/react";

export default function AccordionComponent({selectedKeysSideBar}) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set());
  React.useEffect(() => {
    setSelectedKeys(selectedKeysSideBar);
  }, [selectedKeysSideBar]);
  // console.log(selectedKeysSideBar);
  return (
    <div className="w-full max-w-full">
      <Accordion
        variant="splitted"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <AccordionItem key="1" aria-label="Week 1" title="Week 1 ">
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
            >
              <TableHeader 
              >
                <TableColumn className="text-black ">Week 1</TableColumn>
                <TableColumn className="text-black">Learnings</TableColumn>
                <TableColumn className="text-black">Quest 1</TableColumn>
                <TableColumn className="text-black">Quest 2</TableColumn>
                <TableColumn className="text-black">Quest 3</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Day 4</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Day 5</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Week 2" title="Week 2">
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
            >
              <TableHeader>
                <TableColumn className="text-black">Week 1</TableColumn>
                <TableColumn className="text-black">Learnings</TableColumn>
                <TableColumn className="text-black">Quest 1</TableColumn>
                <TableColumn className="text-black">Quest 2</TableColumn>
                <TableColumn className="text-black">Quest 3</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Day 4</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Day 5</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Week 3" title="Week 3">
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
            >
              <TableHeader>
                <TableColumn className="text-black">Week 1</TableColumn>
                <TableColumn className="text-black">Learnings</TableColumn>
                <TableColumn className="text-black">Quest 1</TableColumn>
                <TableColumn className="text-black">Quest 2</TableColumn>
                <TableColumn className="text-black">Quest 3</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Day 4</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Day 5</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem key="4" aria-label="Week 4" title="Week 4">
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
              // classNames={classNames}
            >
              <TableHeader>
                <TableColumn className="text-black">Week 1</TableColumn>
                <TableColumn className="text-black">Learnings</TableColumn>
                <TableColumn className="text-black">Quest 1</TableColumn>
                <TableColumn className="text-black">Quest 2</TableColumn>
                <TableColumn className="text-black">Quest 3</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Day 4</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Day 5</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem key="5" aria-label="Week 5" title="Week 5">
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
              // classNames={classNames}
            >
              <TableHeader>
                <TableColumn className="text-black">Week 1</TableColumn>
                <TableColumn className="text-black">Learnings</TableColumn>
                <TableColumn className="text-black">Quest 1</TableColumn>
                <TableColumn className="text-black">Quest 2</TableColumn>
                <TableColumn className="text-black">Quest 3</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Day 4</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Day 5</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem key="6" aria-label="Week 6" title="Week 6">
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
              // classNames={classNames}
            >
              <TableHeader>
                <TableColumn className="text-black">Week 1</TableColumn>
                <TableColumn className="text-black">Learnings</TableColumn>
                <TableColumn className="text-black">Quest 1</TableColumn>
                <TableColumn className="text-black">Quest 2</TableColumn>
                <TableColumn className="text-black">Quest 3</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Day 4</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Day 5</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem key="7" aria-label="Week 7" title="Week 7">
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
              // classNames={classNames}
            >
              <TableHeader>
                <TableColumn className="text-black">Week 1</TableColumn>
                <TableColumn className="text-black">Learnings</TableColumn>
                <TableColumn className="text-black">Quest 1</TableColumn>
                <TableColumn className="text-black">Quest 2</TableColumn>
                <TableColumn className="text-black">Quest 3</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Day 4</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Day 5</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem key="8" aria-label="Week 8" title="Week 8">
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
              // classNames={classNames}
            >
              <TableHeader>
                <TableColumn className="text-black">Week 1</TableColumn>
                <TableColumn className="text-black">Learnings</TableColumn>
                <TableColumn className="text-black">Quest 1</TableColumn>
                <TableColumn className="text-black">Quest 2</TableColumn>
                <TableColumn className="text-black">Quest 3</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Day 4</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Day 5</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem key="9" aria-label="Assessment" title="Assessment">
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
              // classNames={classNames}
            >
              <TableHeader>
                <TableColumn className="text-black">Links</TableColumn>
                <TableColumn className="text-black">Deadline</TableColumn>
                <TableColumn className="text-black">Instructions</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Day 4</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem
          key="10"
          aria-label="Additional Materials"
          title="Additional material"
        >
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
              // classNames={classNames}
            >
              <TableHeader>
                <TableColumn className="text-black">
                  Extra Materials
                </TableColumn>
                <TableColumn className="text-black">Links</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-12 text-sm  text-center mt-4 flex flex-col justify-center bg-gray-300 rounded-xl align-middle">copyright @ Consultancy,Finance and Analytics ,IIT Indore</div>
      <div className="w-full h-12 text-md text-center mt-4 border-rounded-2"></div>

    </div>
  );
}

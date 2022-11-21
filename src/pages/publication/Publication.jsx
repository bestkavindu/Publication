import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AnimatedPage from "./../../components/AnimatedPage";
import PublicationCart from "../../components/publication/cart";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Publication = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/add-student`).then(({ data }) => {
      console.log(data);
      setBooks(data);
    });
  }, []);

  const files = [
    {
      id: 1,
      title: "IMG_4985.HEIC",
      size: "3.9 MB",
      source:
        "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
    {
      id: 2,
      title: "IMG_4985.HEIC",
      size: "3.9 MB",
      source:
        "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 lg:pr-6 py-6 sm:py-12 lg:py-28">
      <AnimatedPage>
        <Card className="w-80 shadow-xl rounded-2xl">
          <CardHeader color="blue" className="relative h-56 rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
              alt="img-blur-shadow"
              className="h-full w-full rounded-2xl p-2"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              Cozy 5 Stars Apartment
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">$899/night</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Barcelona, Spain
            </Typography>
          </CardFooter>
        </Card>{" "}
      </AnimatedPage>
    </div>
  );
};

export default Publication;
